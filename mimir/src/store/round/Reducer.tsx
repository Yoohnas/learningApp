import {State} from "../../models/round/State";
import {Action, Type} from "../../models/round/Action";

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case Type.UPDATE:
            return {
                ...state,
                round: action.round
            }

        case Type.RESET:
            return {
                ...state,
                round: initialState.round,
                progress: initialState.progress
            }

        case Type.GET_ROUND:
            return {
                ...state,
                round: action.round
            }

        case Type.GET_PROGRESS:
            return {
                ...state,
                progress: state.progress
            }

        case Type.SET_PROGRESS:
            return {
                ...state,
                progress: action.progress
            }
    }
}

export const initialState: State = {
    round: {
        front:'',
        cardCount: 0,
        solved: [{
            id: "",
            front: "",
            back: "",
            answer: "",
            accepted: false}
        ]},
    progress: 0
}
