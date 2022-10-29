import styled from "styled-components/macro";
import {Outlet} from 'react-router-dom'

export const Cards = () => {
    return (
        <Container>
            <Title>Game Cards</Title>
            <Outlet/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

const Title = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 26px auto;
  font-size: 35px;
`