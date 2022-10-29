import styled from 'styled-components/macro'
import {useNavigate} from 'react-router-dom'
import {ROUTE_CARDS, ROUTE_MAIN} from "../../Constants";
import {BrightButton, DefaultButton} from "../controls/Button";

export function AppBar() {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Mimir Learning App</Title>
            <BrightButton onClick={() => navigate(ROUTE_MAIN)}>New Game</BrightButton>
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
`
