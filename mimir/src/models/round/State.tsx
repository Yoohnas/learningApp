import {Question} from "./Question";

export interface State {
    questions: Question[]
    progress: number
}