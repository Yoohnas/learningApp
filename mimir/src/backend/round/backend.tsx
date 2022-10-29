import {ROUTE_BACKEND_ROUND} from "../../Constants";
import {Round} from "../../models/round/Round";
import {handleError} from "../Utility";

export enum Type {
    NEW = "new",
    RESET = "reset"
}

export const newRound = async (): Promise<Round> => {
    await fetch(ROUTE_BACKEND_ROUND, getRequest(Type.RESET));
    const response = await fetch(ROUTE_BACKEND_ROUND, getRequest(Type.NEW));
    handleError(response)

    return await response.json();
};

const getRequest = (type: Type): RequestInit => {
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
    }
}