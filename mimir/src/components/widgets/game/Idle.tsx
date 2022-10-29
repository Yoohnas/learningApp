import styled from "styled-components/macro";
import {DefaultButton} from "../../controls/Button";

export const Idle = () => {

    const startNewGame = async () => {
    }

    return (
        <div>
            <DefaultButton onClick={startNewGame}>Start New Game</DefaultButton>
            <SubText>Idle</SubText>
        </div>
    )
}

const SubText = styled.div`
  padding: 50px;
  font-size: 22px;
`