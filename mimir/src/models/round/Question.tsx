import {v4 as uuid} from 'uuid'

export interface Question {
    id: string;
    front: string;
    back: string;
    answer: string;
    accepted: boolean;
}

// export const createQuestion = (cardId: string, answer: string): Question => ({
//     id: uuid(),
//     cardId: cardId,
//     answer: answer,
// })
