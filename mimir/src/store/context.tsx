import {State as CardState} from 'models/cards/State'
import {Action as CardAction} from 'models/cards/Action'
import {cardReducer, initialState as initialStateCard} from './cardReducer'
import {createContext, ReactNode, useReducer} from "react";

interface CardAppState extends CardState {
    dispatch: (action: CardAction) => void
}

const cardInitialState: CardAppState = {
    ...initialStateCard,
    dispatch: (action: CardAction) => {}
}

export const CardContext = createContext<CardAppState>(cardInitialState)

interface Props {
    children: ReactNode
}

export const CardProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(cardReducer, cardInitialState)

    const store = {
        ...state,
        dispatch,
    }

    return (<CardContext.Provider value={store}>{children}</CardContext.Provider>)
}