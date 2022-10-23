import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {ROUTE_CARDS} from "../pages/Constants";

export function AppBar() {
    return (
        <Bar>
            <Link to={ROUTE_CARDS}>Manage Cards</Link>
        </Bar>
    )
}

const Bar = styled.div`
  background: lightblue;
  padding: 10px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
`
