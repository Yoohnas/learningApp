// noinspection DuplicatedCode

import {State} from 'models/card/State'
import {Action} from 'models/card/Action'
import {reducer, initialState as initialStateCard} from './Reducer'
import {createContext, ReactNode, useReducer} from "react";

interface AppState extends State {
    dispatch: (action: Action) => void
}

const initialState: AppState = {
    ...initialStateCard,
    dispatch: (action: Action) => {}
}

export const Context = createContext<AppState>(initialState)

interface Props {
    children: ReactNode
}

export const Provider = ({children}: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const store = {
        ...state,
        dispatch,
    }

    return (<Context.Provider value={store}>{children}</Context.Provider>)
}