import React from 'react';
import {Home} from "./components/pages/Home";
import {Ongoing} from "./components/widgets/game/Ongoing";
import {Routes, Route} from 'react-router-dom'
import {NotFound} from "./components/pages/NotFound";
import {Cards} from "./components/pages/Cards";
import {Layout} from "./components/pages/Layout";
import {CardEditor} from "./components/widgets/card/CardEditor";
import {Overview} from "./components/widgets/card/Overview";
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
                <Route path={ROUTE_GAME} element={<Ongoing/>}/>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    )
}