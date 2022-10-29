import {v4 as uuid} from 'uuid'

export interface Question {
    id: string
    cardId: string
    answer: string
}

export const createQuestion = (cardId: string, answer: string): Question => ({
    id: uuid(),
    cardId: cardId,
    answer: answer,
})
