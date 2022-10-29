import styled from 'styled-components/macro'
import {useNavigate} from 'react-router-dom'
import {ROUTE_CARDS} from "../../Constants";
import {DefaultButton} from "../controls/Button";

export function AppBar() {
    const navigate = useNavigate();

    return (
        <Bar>
            <DefaultButton onClick={() => navigate(ROUTE_CARDS)}>Manage Cards</DefaultButton>
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
