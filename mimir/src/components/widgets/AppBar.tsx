import styled from 'styled-components/macro'
import {useNavigate} from 'react-router-dom'
import {ROUTE_CARDS, ROUTE_MAIN} from "../../Constants";
import {DarkButton, DefaultButton} from "../controls/Button";
import {useContext} from "react";
import {Context as RoundContext} from "../../store/round/Context";
import {isIdle, isOngoing, isResult} from "../../util/Utility";

export function AppBar() {
    const navigate = useNavigate();
    const {round, progress} = useContext(RoundContext)

    const getButtonName = () => {
        if (isIdle(progress)) {
            return "New Game"
        } else if (isOngoing(progress, round)) {
            return "Solve #" + progress
        } else if (isResult(progress, round)) {
            return "Finished"
        } else {
            return null
        }
    }

    return (
        <Container>
            <Title>Mimir Learning App</Title>
            <DarkButton onClick={() => navigate(ROUTE_MAIN)}>{getButtonName()}</DarkButton>
            <DefaultButton onClick={() => navigate(ROUTE_CARDS)}>Manage Cards</DefaultButton>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: cadetblue;
  height: 80px;
  width: 100%
`

const Title = styled.div`
  font-size: 30px;
  padding-left: 20px;
  color: white;
`
