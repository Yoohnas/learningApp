import {State} from "../../models/round/State";
import {Action, Type} from "../../models/round/Action";

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case Type.UPDATE:
            return {
                ...state,
                questions: action.questions
            }

        case Type.CLEAR:
            return {
                ...state,
                questions: initialState.questions,
                progress: initialState.progress
            }

        case Type.GET_QUESTIONS:
            return {
                ...state,
                questions: action.questions
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
    questions: [{
        id: "",
        cardId: "",
        answer: ""
    }],
    progress: 0
}
