import {useContext} from "react";
import {Context as RoundContext} from "../../../store/round/Context";
import {useNavigate} from "react-router-dom";
import {ROUTE_MAIN} from "../../../Constants";
import {DefaultButton} from "../../controls/Button";
import {newRound} from "../../../backend/round/backend";
import {Type} from "../../../models/round/Action";
import styled, {css} from "styled-components/macro";

export const Result = () => {
    const {round, dispatch} = useContext(RoundContext)
    const navigate = useNavigate()

    const startNewRound = async () => {
        const round = await newRound();
        dispatch({type: Type.UPDATE, round: round})
        dispatch({type: Type.SET_PROGRESS, progress: 1})
        navigate(ROUTE_MAIN)
    }

    const getNumberCorrectAnswers = () => {
        return round?.solved.filter((question) => question.accepted).length;
    }

    const getResultSymbol = (result: boolean) => {
        return result ? "✔" : "✘";
    }

    return (
        <Container>
            <DefaultButton onClick={startNewRound}>Start New Game</DefaultButton>
            <ResultText>
                Solved {getNumberCorrectAnswers()} out of {round.cardCount} correctly.
            </ResultText>
            <HighlightRow>
                <TableHeader>Front</TableHeader>
                <TableHeader>Back</TableHeader>
                <TableHeader>Your Answer</TableHeader>
                <TableHeader>Accepted</TableHeader>
            </HighlightRow>
            {round?.solved.map((question) => (
                <DefaultRow key={question.id}>
                    <QuestionResult>{question.front}</QuestionResult>
                    <QuestionResult>{question.back}</QuestionResult>
                    <QuestionResult>{question.answer}</QuestionResult>
                    <QuestionResult>{getResultSymbol(question.accepted)}</QuestionResult>
                </DefaultRow>
            ))}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const RowBase = css`
  display: flex;
  flex-direction: row;
  width: 1000px;
`

const HighlightRow = styled.div`
  ${RowBase};
  background: #edfdff;
`

const DefaultRow = styled.div`
  ${RowBase};
`

const ResultText = styled.div`
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 20px;
`

const TableHeader = styled.div`
  flex: 1;
  margin: 10px;
  font-size: 25px;
  font-weight: 500;
`

const QuestionResult = styled.div`
  flex: 1;
  margin: 10px;
  font-size: 20px;
`

