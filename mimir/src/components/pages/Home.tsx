import {useContext} from "react";
import {Context as RoundContext} from "../../store/round/Context";
import {Idle} from "../widgets/game/Idle";
import {Ongoing} from "../widgets/game/Ongoing";
import {Result} from "../widgets/game/Result";

export const Home = () => {
    const {questions, progress} = useContext(RoundContext)

    const isIdle = (): boolean => {
        return progress === 0
    }

    const isOngoing = (): boolean => {
        return progress < questions.length
    }

    const isResult = (): boolean => {
        return progress === questions.length
    }

    const getPage = () => {
        if (isIdle()) {
            return <Idle/>
        } else if (isOngoing()) {
            return <Ongoing/>
        } else if (isResult()) {
            return <Result/>
        } else {
            return null
        }
    }

    return (
        <div>
            {getPage()}
        </div>
    )
}
