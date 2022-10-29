import { Card } from "./Card"

export enum Type {
    FETCH = "fetch",
    ADD = "add",
    UPDATE = "update",
    REMOVE = "remove",
}

type fetch = {
    type: Type.FETCH
    cards: Card[]
}

type add = {
    type: Type.ADD
    card: Card
}

type update = {
    type: Type.UPDATE;
    card: Card;
}

type remove = {
    type: Type.REMOVE
    card: Card
}

export type Action = fetch | add | update | remove
