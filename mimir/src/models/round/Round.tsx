import {Question} from "./Question";

export interface Round {
    front: string
    cardCount: number
    solved: [Question]
}