import styled from "styled-components/macro";

export const NotFound = () => {
    return (
        <Container>
            <Title>404 - Page not found</Title>
            <Text>Wenn Mimir wüsste, dass du auf verlorene Seiten gehst, anstatt neue Lernkarten anzulegen und zu
                lernen wäre er sehr böse mit dir!</Text>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  padding-top: 50px;
  padding-Bottom: 50px;
  font-size: 35px;
`

const Text = styled.div`
  text-align: center;
  width: 60%;
  font-size: 22px;
`
