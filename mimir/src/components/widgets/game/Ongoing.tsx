import {useContext, useEffect, useState} from "react";
import {Context as RoundContext} from '../../../store/round/Context'
import {ROUTE_BACKEND_ROUND, ROUTE_MAIN} from "../../../Constants";
import {useNavigate} from "react-router-dom";
import {Type} from "../../../models/round/Action";
import styled, {css} from "styled-components/macro";
import {DefaultButton} from "../../controls/Button";
import {Input} from "../../controls/Input";
import {resetRound, submitAnswer} from "../../../backend/round/backend";

export const Ongoing = () => {
    const navigate = useNavigate()
    const [answer, setAnswer] = useState('')
    const [front, setFront] = useState('')
    const [progressText, setProgressText] = useState('0')
    let {round, progress, dispatch} = useContext(RoundContext)

    useEffect(() => {
        const onMount = async () => {
            const response = await fetch(ROUTE_BACKEND_ROUND)
            if (response.ok) {
                round = await response.json()
                setProgressText(getProgressText())
                setFront(round.front.toString())
                dispatch({type: Type.UPDATE, round})
            }
        }
        // noinspection JSIgnoredPromiseFromCall
        onMount()
    }, [])

    const submit = async () => {
        round = await submitAnswer(answer);
        setFront(round.front)
        setProgressText(getProgressText())
        setAnswer('')
        dispatch({type: Type.UPDATE, round})
        dispatch({type: Type.SET_PROGRESS, progress: progress + 1})
    }

    const reset = async () => {
        await resetRound();
        dispatch({type: Type.RESET})
        navigate(ROUTE_MAIN)
    }

    const getProgressText = () => {
        return Math.round(round.solved.length / round.cardCount * 100).toString()
    }

    return (
        <Container>
            <InfoRow>
                <Progress>Progress: {progressText}%</Progress>
                <DefaultButton onClick={() => reset()}>Delete Game</DefaultButton>
            </InfoRow>
            <QuestionContainer>
                <Front>{front}</Front>
                <AnswerRow>
                    <Input value={answer} onChange={setAnswer} placeholder="Answer"/>
                    <DefaultButton onClick={() => submit()}>Submit</DefaultButton>
                </AnswerRow>
            </QuestionContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 100%;
`

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`

const RowBase = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const InfoRow = styled.div`
  ${RowBase};
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%
`

const AnswerRow = styled.div`
  ${RowBase};
  width: 100%;
  align-self: center;
  justify-content: space-between;
`

const Progress = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: cadetblue;
`

const Front = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  width: 100%;
  height: 200px;
  border: 2px solid cadetblue;
  border-radius: 6px;
  background: #edfdff;
  font-size: 60px;
  color: cadetblue;
  box-shadow: 0 0 20px #ccc;
`