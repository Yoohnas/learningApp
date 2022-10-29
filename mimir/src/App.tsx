import React from 'react';
import {Main} from "./components/pages/Main";
import {Routes, Route} from 'react-router-dom'
import {NotFound} from "./components/pages/NotFound";
import {Cards} from "./components/pages/Cards";
import {Layout} from "./components/pages/Layout";
import {CardEditor} from "./components/widgets/card/CardEditor";
import {Overview} from "./components/widgets/card/Overview";
import {ROUTE_CARDS, ROUTE_MAIN} from "./Constants";

export const App = () => {
    return (
        <Routes>
            <Route path={ROUTE_MAIN} element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={ROUTE_CARDS} element={<Cards/>}>
                    <Route index element={<Overview/>}/>
                    <Route path={":id"} element={<CardEditor/>}/>
                </Route>
            </Route>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    )
}