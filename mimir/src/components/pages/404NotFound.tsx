import styled from "styled-components/macro";
import {useNavigate} from "react-router-dom";
import {ROUTE_MAIN} from "../../Constants";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>404 - Page not found</Title>
            <Text>
                Wenn Mimir wüsste, dass du auf verlorene Seiten gehst,
                anstatt neue Lernkarten anzulegen und zu lernen wäre er sehr böse mit dir.
                Also schnell <Link onClick={() => navigate(ROUTE_MAIN)}>zurück</Link> mit dir!
            </Text>
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

const Link = styled.span`
  color: cadetblue;
  font-weight: bolder;
  text-underline: cadetblue;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #73bec0;
  }
  &:active {
    color: #73bec0;
  }
`