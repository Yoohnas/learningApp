import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {useContext, useEffect, useState} from "react";
import {Input} from 'components/controls/Input'
import {ROUTE_BACKEND_CARDS, ROUTE_CARDS} from "../../../Constants";
import {DefaultButton} from "../../controls/Button";
import styled from "styled-components/macro";
import {CardContext} from "../../../store/context";
import {updateCard} from "../../../backend/backend";
import {Type} from "../../../models/cards/Action";

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
        <EditCards>
            <EditSection>
                <CardTitle>Front</CardTitle>
                <Input value={front} onChange={setFront} placeholder="Front"/>
            </EditSection>
            <EditSection>
                <CardTitle>Back</CardTitle>
                <Input value={back} onChange={setBack} placeholder="Back"/>
            </EditSection>
            <DefaultButton onClick={() => update()}>Update</DefaultButton>
        </EditCards>
    )
}

const EditCards = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
`

const CardTitle = styled.div`
  margin-left: 15px;
  font-weight: 500;
  font-size: 25px;
`
const EditSection = styled.div`
  display: flex;
  flex-direction: column;
`
