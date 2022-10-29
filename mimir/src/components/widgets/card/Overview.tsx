import {useNavigate} from 'react-router-dom'
import {useContext, useEffect, useState} from "react";
import {Input} from 'components/controls/Input'
import {DefaultButton} from "../../controls/Button";
import styled from "styled-components/macro";
import {ROUTE_CARDS} from "../../../Constants";
import {Context as CardContext} from "../../../store/card/Context";
import {addCard, fetchCards, removeCard} from "../../../backend/backend";
import {Type} from "../../../models/card/Action";
import {Card} from "../../../models/card/Card";

export const Overview = () => {
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')
    const {cards, dispatch} = useContext(CardContext)
    const navigate = useNavigate()

    useEffect(() => {
        const onMount = async () => {
            const cards = await fetchCards()
            dispatch({type: Type.GET, cards: cards})
        }
        // noinspection JSIgnoredPromiseFromCall
        onMount()
    }, [dispatch])

    const add = async (front: string, back: string) => {
        console.log("adding")
        const newCard = await addCard(front, back)

        dispatch({type: Type.ADD, card: newCard})
        setFront("")
        setBack("")
    }

    const remove = async (card: Card) => {
        await removeCard(card)
        dispatch({ type: Type.REMOVE, card: card })
    }

    return (
        <div>
            <Row>
                <Input value={front} onChange={setFront} placeholder="Front"/>
                <Input value={back} onChange={setBack} placeholder="Back"/>
                <DefaultButton onClick={() => add(front, back)}>Add Card</DefaultButton>
            </Row>

            {cards?.map(card => (
                <Row key={card.id}>
                    <Text>{card.front}</Text>
                    <Text>{card.back}</Text>
                    <DefaultButton onClick={() => {navigate(`${ROUTE_CARDS}/${card.id}`)}}>
                        Edit Card
                    </DefaultButton>
                    <DefaultButton onClick={() => remove(card)}>
                        Remove Card
                    </DefaultButton>
                </Row>
            ))}
        </div>
    )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
  justify-content: space-between;
`

const Text = styled.div`
  display: flex;
  margin: 12px;
  width: 300px;
  font-size: 20px;
`
