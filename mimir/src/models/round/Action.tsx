import {Round} from "./Round";

export enum Type {
    UPDATE = "update",
    CLEAR = "clear",
    GET_ROUND = "get_questions",
    GET_PROGRESS = "get_progress",
    SET_PROGRESS = "set_progress",
}

type update = {
    type: Type.UPDATE
    round: Round
}

type clear = {
    type: Type.CLEAR
    round: Round
}

type getRound = {
    type: Type.GET_ROUND
    round: Round
}

type getProgress = {
    type: Type.GET_PROGRESS
    progress: number
}

type setProgress = {
    type: Type.SET_PROGRESS
    progress: number
}

export type Action = update | clear | getRound | getProgress| setProgress
