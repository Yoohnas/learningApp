import {ROUTE_BACKEND_ROUND} from "../../Constants";
import {Round} from "../../models/round/Round";
import {handleError} from "../Utility";

export enum Type {
    NEW = "new",
    RESET = "reset",
    SUBMIT = "submit"
}

export const newRound = async (): Promise<Round> => {
    await resetRound();
    const response = await fetch(ROUTE_BACKEND_ROUND, getRequest(Type.NEW, ""));
    handleError(response)

    return await response.json();
}

export const submitAnswer = async (answer: string): Promise<Round> => {
    const response = await fetch(ROUTE_BACKEND_ROUND, getRequest(Type.SUBMIT, answer));
    handleError(response)

    return await response.json();
};

export const resetRound = async () => {
    await fetch(ROUTE_BACKEND_ROUND, getRequest(Type.RESET, ""));
}

const getRequest = (type: Type, answer: string): RequestInit => {
    switch (type) {
        case Type.NEW:
            return {
                method: "POST",
                headers: {"Content-Type": "application/json"},
            }

        case Type.RESET:
            return {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            }
        case Type.SUBMIT:
            return {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    answer: answer,
                })
            }
    }
}