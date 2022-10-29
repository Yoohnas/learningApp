import styled from "styled-components/macro";

export const Home = () => {
    return (
        <Container>
            <SubText>No game running.</SubText>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`

const SubText = styled.div`
  font-size: 22px;
`
