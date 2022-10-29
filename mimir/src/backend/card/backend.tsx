import {ROUTE_BACKEND_CARDS} from "../../Constants";
import {Card, createCard} from "../../models/card/Card";
import {handleError} from "../Utility";

export enum Type {
    POST = "post",
    REMOVE = "remove",
    PUT = "put",
}

export const fetchCards = async () => {
    const response = await fetch(ROUTE_BACKEND_CARDS)
    handleError(response)

    return await response.json()
}

export const addCard = async (front: string, back: string): Promise<Card> => {
    const card = createCard(front, back)
    const response = await fetch(ROUTE_BACKEND_CARDS, getRequest(Type.POST, card))
    handleError(response)

    return await response.json()
}

export const removeCard = async (card: Card) => {
    const response = await fetch(ROUTE_BACKEND_CARDS + card.id, getRequest(Type.REMOVE, card))
    handleError(response)
}

export const updateCard = async (id: string, front: string, back: string): Promise<Card> => {
    const card: Card = {
        id: id,
        front: front,
        back: back,
    }

    const response = await fetch(ROUTE_BACKEND_CARDS + card.id, getRequest(Type.PUT, card))
    handleError(response);

    return await response.json();
}

const getRequest = (type: Type, card: Card): RequestInit => {
    switch (type) {
        case Type.POST:
            return {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(card),
            }
        case Type.REMOVE:
            return {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(card),
            }
        case Type.PUT:
            return {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(card),
            }
    }
}