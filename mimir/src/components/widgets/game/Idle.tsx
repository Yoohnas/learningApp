import styled from "styled-components/macro";
import {DefaultButton} from "../../controls/Button";

export const Idle = () => {

    const startNewGame = async () => {
    }

    return (
        <div>
            <DefaultButton onClick={startNewGame}>Start New Game</DefaultButton>
            <Text>Idle</Text>
        </div>
    )
}

const Text = styled.div`
  padding: 50px;
  font-size: 22px;
`