import styled from "styled-components/macro";
import {Outlet} from 'react-router-dom'

export const Cards = () => {
    return (
        <div>
            <PageTitle>Game Cards</PageTitle>
            <Outlet/>
        </div>
    )
}

const PageTitle = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 26px auto;
  font-size: 35px;
`;