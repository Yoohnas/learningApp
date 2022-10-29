import {useNavigate} from 'react-router-dom'
import {useContext, useEffect, useState} from "react";
import {Input} from 'components/controls/Input'
import {DefaultButton} from "../../controls/Button";
import styled, {css} from "styled-components/macro";
import {ROUTE_CARDS} from "../../../Constants";
import {Context as CardContext} from "../../../store/card/Context";
import {addCard, fetchCards, removeCard} from "../../../backend/card/backend";
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
            <AddRow>
                <Input value={front} onChange={setFront} placeholder="Front" isAutoFocus={true}/>
                <Input value={back} onChange={setBack} placeholder="Back"/>
                <DefaultButton onClick={() => add(front, back)}>Add Card</DefaultButton>
            </AddRow>

            {cards?.map(card => (
                <CardRow key={card.id}>
                    <Text>{card.front}</Text>
                    <Text>{card.back}</Text>
                    <DefaultButton onClick={() => {navigate(`${ROUTE_CARDS}/${card.id}`)}}>
                        Edit Card
                    </DefaultButton>
                    <DefaultButton onClick={() => remove(card)}>
                        Remove Card
                    </DefaultButton>
                </CardRow>
            ))}
        </div>
    )
}


const RowBase = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const AddRow = styled.div`
  ${RowBase};
  margin-bottom: 50px;
`

const CardRow = styled.div`
  ${RowBase};
`

const Text = styled.div`
  display: flex;
  width: 350px;
  font-size: 20px;
`
