import {Idle} from "../widgets/game/Idle";
import {Ongoing} from "../widgets/game/Ongoing";
import {Result} from "../widgets/game/Result";
import styled from "styled-components/macro";
import {isIdle, isOngoing, isResult} from "../../Util/Utility";
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