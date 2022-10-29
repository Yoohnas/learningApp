import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useContext, useEffect, useState} from "react";
import {Input} from 'components/controls/Input'
import {ROUTE_CARDS} from "../../../Constants";
import {DefaultButton} from "../../controls/Button";
import styled from "styled-components/macro";
import {Context as CardContext} from "../../../store/card/Context";
import {updateCard} from "../../../backend/backend";
import {Type} from "../../../models/card/Action";

type CardEditorParams = {
    id: string
}

export const CardEditor = () => {
    const {id} = useParams<CardEditorParams>()
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const {cards, dispatch} = useContext(CardContext)
    let navigate = useNavigate()

    useEffect(() => {
        const onMount = async () => {
            const card = cards.find(card => card.id === id)
            if(card){
                setFront(card.front)
                setBack(card.back)
            }
        }
        // noinspection JSIgnoredPromiseFromCall
        onMount()
    }, [cards, id])

    const update = async () => {
        const card = await updateCard(String(id), front, back)
        dispatch({type: Type.UPDATE, card})
            navigate(ROUTE_CARDS)
    }

    return (
        <Container>
            <EditElement>
                <CardSide>Front</CardSide>
                <Input value={front} onChange={setFront} placeholder="Front"/>
            </EditElement>
            <EditElement>
                <CardSide>Back</CardSide>
                <Input value={back} onChange={setBack} placeholder="Back"/>
            </EditElement>
            <DefaultButton onClick={() => update()}>Update</DefaultButton>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: black;
`

const EditElement = styled.div`
  display: flex;
  flex-direction: column;
`

const CardSide = styled.div`
  margin-left: 15px;
  font-weight: 500;
  font-size: 22px;
`
