import React, {useState} from 'react';
import {Start} from "../widgets/game/Start";
import {Card} from "../../models/Card";
import {Question} from "../../models/Question";
import {Game} from "../widgets/game/Game";
import {End} from "../widgets/game/End";
import {Routes, Route} from 'react-router-dom'
import {NotFound} from "./NotFound";
import {CardsOverview} from "../widgets/cards/CardsOverview";
import {Layout} from "./Layout";
import {CardEditor} from "../widgets/cards/CardEditor";

export const ROUTE_HOME = '/'
export const ROUTE_CARDS = '/cards'
export const ROUTE_GAME = '/game'

export const App = () => {
    const [cards, setCards] = useState<Card[]>(DefaultCards)
    const [questions, setQuestions] = useState<Question[]>([])

    const addCard = (card: Card) => {
        const newCards = [...cards, card]
        setCards(newCards)
    }

    const removeCard = (id: string) => {
        const newCards = cards.filter(card => card.id !== id)
        setCards(newCards)
    }

    const editCard = (id: string, front: string, back: string) => {
        const newCards = cards.map(card => {
            if (card.id === id) {
                return {...cards, front: front, back: back}
            }
            return card
        })
    }

    const addQuestion = (question: Question) => {
        const newQuestions = [...questions, question]
        setQuestions(newQuestions)
    }

    const setAnswer = (id: string, answer: string) => {
        const newQuestions = questions.map(question => {
            if (question.id === id) {
                return {...question, answer: answer}
            }
            return question
        })
        setQuestions(newQuestions)
    }

    return (
        <Routes>
            <Route path={ROUTE_HOME} element={<Layout/>}>
                <Route index element={<Start/>}/>
                <Route path={ROUTE_CARDS} element={<CardsOverview/>}>
                    <Route path=":id" element={<CardEditor/>}/>
                </Route>
                <Route path={ROUTE_GAME} element={<Game setAnswer={setAnswer}/>}/>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}

const add = () => {
    console.log("Console");
}

const DefaultCards: Card[] = [
    {
        id: '1',
        front: 'Kuratz',
        back: "Hoi",
    },
    {
        id: '2',
        front: 'Marco',
        back: "Jonas",
    }
]