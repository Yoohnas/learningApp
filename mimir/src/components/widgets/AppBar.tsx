import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {ROUTE_CARDS} from "../../Constants";

export function AppBar() {
    return (
        <Bar>
            <Link to={ROUTE_CARDS}>Manage Cards</Link>
        </Bar>
    )
}

const Bar = styled.div`
  display: flex;
  background: lightblue;
  padding: 10px;
  gap: 10px;
  margin: 20px 0;
`
