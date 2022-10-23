import {Question} from "../../../models/Question";

interface Props {
    setAnswer: (question: Question, answer: string) => void
}

export const Game = ({setAnswer}: Props) => {
    return (
        <div>
            Game
        </div>
    )
}
