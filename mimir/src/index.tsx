import ReactDOM from 'react-dom/client'
import {App} from "./App";
import {BrowserRouter as Router} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import {Provider as RoundProvider} from "./store/round/Context";
import {Provider as CardProvider} from "./store/card/Context";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    font-family: sans-serif;
  }
`

root.render(
    <RoundProvider>
        <CardProvider>
            <Router>
                <GlobalStyle/>
                <App/>
            </Router>
        </CardProvider>
    </RoundProvider>
)
