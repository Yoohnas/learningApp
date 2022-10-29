import {useContext} from "react";
import {Context as RoundContext} from "../../store/round/Context";
import {Idle} from "../widgets/game/Idle";
import {Ongoing} from "../widgets/game/Ongoing";
import {Result} from "../widgets/game/Result";
import styled from "styled-components/macro";

export const Main = () => {
    const {questions, progress} = useContext(RoundContext)

    const isIdle = (): boolean => {
        return progress === 0
    }

    const isOngoing = (): boolean => {
        return progress < questions.length
    }

    const isResult = (): boolean => {
        return progress === questions.length
    }

    const getPage = () => {
        if (isIdle()) {
            return <Idle/>
        } else if (isOngoing()) {
            return <Ongoing/>
        } else if (isResult()) {
            return <Result/>
        } else {
            return null
        }
    }

    return (
        <Container>
            {getPage()}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`