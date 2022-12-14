import {Idle} from "../widgets/round/Idle";
import {Ongoing} from "../widgets/round/Ongoing";
import {Result} from "../widgets/round/Result";
import styled from "styled-components/macro";
import {isIdle, isOngoing, isResult} from "../../util/Utility";
import {useContext} from "react";
import {Context as RoundContext} from "../../store/round/Context";

export const Main = () => {
    const {round, progress} = useContext(RoundContext)

    const getPage = () => {
        if (isIdle(progress)) {
            return <Idle/>
        } else if (isOngoing(progress, round)) {
            return <Ongoing/>
        } else if (isResult(progress, round)) {
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
  width: 100%;
`