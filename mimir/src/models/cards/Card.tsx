import {v4 as uuid} from 'uuid'

export interface Card {
    id: string
    front: string
    back: string
}

export const createCard = (front: string, back: string): Card => ({
    id: uuid(),
    front: front,
    back: back,
})