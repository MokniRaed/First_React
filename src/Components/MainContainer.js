import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import movies from '../Data/movies'

function MainContainer() {
  return (
    <>
      <Container>
        <Row>
          <Col xs>
            <Row>
            {movies.map(MovieCard)}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainContainer;
