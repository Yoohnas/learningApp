import React, {useState} from 'react';
import {Home} from "../widgets/Home";
import {Card} from "../../models/Card";
import {Question} from "../../models/Question";
import {Game} from "../widgets/game/Game";
import {End} from "../widgets/game/End";
import {Routes, Route} from 'react-router-dom'
import {NotFound} from "./NotFound";
import {Cards} from "../widgets/cards/Cards";
import {Layout} from "./Layout";
import {CardEditor} from "../widgets/cards/CardEditor";
import {Overview} from "../widgets/cards/Overview";
import {ROUTE_CARDS, ROUTE_GAME, ROUTE_HOME} from "./Constants";

export const App = () => {
    const [cards, setCards] = useState<Card[]>(DefaultCards)
    const [questions, setQuestions] = useState<Question[]>([])

    const addCard = (card: Card) => {
        const newCards = [...cards, card]
        setCards(newCards)
    }

    const removeCard = (card: Card) => {
        const newCards = cards.filter(currentCard => currentCard.id !== card.id)
        setCards(newCards)
    }

    const editCard = (id: string, front: string, back: string) => {
        const newCards = cards.map(card => {
            if (card.id === id) {
                return {...cards, front: front, back: back}
            }
            return card;
        })
    }

    const addQuestion = (question: Question) => {
        const newQuestions = [...questions, question]
        setQuestions(newQuestions)
    }

    const setAnswer = (question: Question, answer: string) => {
        const newQuestions = questions.map(currentQuestion => {
            if (currentQuestion.id === question.id) {
                return {...currentQuestion, answer: answer}
            }
            return currentQuestion;
        })
        setQuestions(newQuestions)
    }

    return (
        <Routes>
            <Route path={ROUTE_HOME} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={ROUTE_CARDS} element={<Cards/>}>
                    <Route index element={<Overview/>}/>
                    <Route path={":id"} element={<CardEditor/>}/>
                </Route>
                <Route path={ROUTE_GAME} element={<Game setAnswer={setAnswer}/>}/>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
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