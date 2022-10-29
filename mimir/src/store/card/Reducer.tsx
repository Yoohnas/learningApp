import {Action, Type} from 'models/card/Action'
import {State} from 'models/card/State'

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case Type.GET:
            return {
                ...state,
                cards: action.cards
            }

        case Type.ADD:
            return {
                ...state,
                cards: [...state.cards, action.card]
            }

        case Type.UPDATE:
            const cards = state.cards.map((card) => {
                if (card.id === action.card.id) {
                    return {...card, front: action.card.front, back: action.card.back}
                }
                return card
            })
            return {...state, cards: cards}

        case Type.REMOVE:
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.card.id)
            }
    }
}

export const initialState: State = {
    cards: []
}
