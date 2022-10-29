import {Action, Type} from 'models/cards/Action'
import {State} from 'models/cards/State'

export function cardReducer(state: State, action: Action): State {
    switch (action.type) {
        case Type.FETCH:
            return {
                ...state,
                cards: action.cards
            }

        case Type.ADD:
            return {
                ...state,
                cards: [...state.cards, action.card]
            }

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
