// noinspection DuplicatedCode

import {State} from 'models/round/State'
import {Action} from 'models/round/Action'
import {reducer, initialState as initialStateRound} from './Reducer'
import {createContext, ReactNode, useReducer} from "react";

export interface AppState extends State {
    dispatch: (action: Action) => void
}

const initialState: AppState = {
    ...initialStateRound,
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