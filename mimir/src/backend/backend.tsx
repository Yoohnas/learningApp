import {ROUTE_BACKEND_CARDS} from "../Constants";
import {Card, createCard} from "../models/cards/Card";

export const fetchCards = async () => {
    const response = await fetch(ROUTE_BACKEND_CARDS)
    handleError(response);

    return await response.json();
}

export const addCard = async (front: string, back: string): Promise<Card> => {
    const newCard = createCard(front, back);
    const request = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newCard),
    };

    const response = await fetch(ROUTE_BACKEND_CARDS, request);
    handleError(response);

    return await response.json()
}

export const removeCard = async (card: Card) => {
    const request = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card),
    };

    const response = await fetch(ROUTE_BACKEND_CARDS + card.id, request);
    handleError(response)
};

const handleError = (response: Response) => {
    if (!response.ok) {
        throw new Error(`Error-Status: ${response.status}`)
    }
}