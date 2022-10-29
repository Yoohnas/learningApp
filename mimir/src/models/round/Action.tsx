import {Question} from "./Question";

export enum Type {
    GET_QUESTIONS = "get_questions",
    GET_PROGRESS = "get_progress",
    SET_PROGRESS = "set_progress",
    UPDATE = "update",
    CLEAR = "clear",
}

type update = {
    type: Type.UPDATE
    questions: Question[]
}

type clear = {
    type: Type.CLEAR
}

type getQuestions = {
    type: Type.GET_QUESTIONS
    questions: Question[]
}

type getProgress = {
    type: Type.GET_PROGRESS
    progress: number
}

type setProgress = {
    type: Type.SET_PROGRESS
    progress: number
}

export type Action = update | clear | getQuestions | getProgress| setProgress
