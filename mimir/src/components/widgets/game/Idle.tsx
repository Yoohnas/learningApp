import styled from "styled-components/macro";
import {DefaultButton} from "../../controls/Button";
import {Context as RoundContext} from '../../../store/round/Context'
import {newRound} from "../../../backend/round/backend";
import {useContext} from "react";
import {Type} from "../../../models/round/Action";

export const Idle = () => {
    const {progress, dispatch} = useContext(RoundContext);

    const startNewRound = async () => {
        const round = await newRound()
        dispatch({type: Type.UPDATE, round: round})
        dispatch({type: Type.SET_PROGRESS, progress: progress+1})
    }

    return (
        <Container>
            <DefaultButton onClick={startNewRound}>Start New Game</DefaultButton>
            <Text>No Game running.</Text>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

const Text = styled.div`
  padding: 50px;
  font-size: 22px;
`