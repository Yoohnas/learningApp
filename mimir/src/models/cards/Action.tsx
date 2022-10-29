import { Card } from "./Card"

export enum Type {
    FETCH = "fetch",
    ADD = "add",
    REMOVE = "remove",
}

export type fetch = {
    type: Type.FETCH
    cards: Card[]
}

export type add = {
    type: Type.ADD
    card: Card
}

export type remove = {
    type: Type.REMOVE
    card: Card
}

export type Action = fetch | add | remove
