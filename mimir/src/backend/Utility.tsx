import {Round} from "../models/round/Round";

export const handleError = (response: Response) => {
    if (!response.ok) {
        throw new Error(`Error-Status: ${response.status}`)
    }
}

export const isIdle = (progress: number): boolean => {
    return progress === 0
}

export const isOngoing = (progress: number, round: Round): boolean => {
    return progress <= round.cardCount
}

export const isResult = (progress: number, round: Round): boolean => {
    return progress > round.cardCount
}
