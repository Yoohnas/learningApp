import {Card} from "./Card"

export enum Type {
    GET = "get",
    ADD = "add",
    UPDATE = "update",
    REMOVE = "remove",
}

type get = {
    type: Type.GET
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

export type Action = get | add | update | remove
