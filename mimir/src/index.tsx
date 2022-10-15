import ReactDOM from 'react-dom/client'
import {App} from "./components/pages/App";
import {BrowserRouter} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    font-family: sans-serif;
  }
`

root.render(
    <BrowserRouter>
        <GlobalStyle/>
        <App/>
    </BrowserRouter>
)
