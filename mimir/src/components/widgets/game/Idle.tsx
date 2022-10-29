import styled from "styled-components/macro";
import {DefaultButton} from "../../controls/Button";

export const Idle = () => {

    const startNewGame = async () => {
    }

    return (
        <Container>
            <DefaultButton onClick={startNewGame}>Start New Game</DefaultButton>
            <SubText>Idle</SubText>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`

const SubText = styled.div`
  padding: 50px;
  font-size: 22px;
`