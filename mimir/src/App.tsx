import React from 'react';
import {Home} from "./components/widgets/Home";
import {Game} from "./components/widgets/game/Game";
import {Routes, Route} from 'react-router-dom'
import {NotFound} from "./components/pages/NotFound";
import {Cards} from "./components/widgets/cards/Cards";
import {Layout} from "./components/pages/Layout";
import {CardEditor} from "./components/widgets/cards/CardEditor";
import {Overview} from "./components/widgets/cards/Overview";
import {ROUTE_CARDS, ROUTE_GAME, ROUTE_HOME} from "./Constants";

export const App = () => {
    return (
        <Routes>
            <Route path={ROUTE_HOME} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={ROUTE_CARDS} element={<Cards/>}>
                    <Route index element={<Overview/>}/>
                    <Route path={":id"} element={<CardEditor/>}/>
                </Route>
                <Route path={ROUTE_GAME} element={<Game/>}/>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}