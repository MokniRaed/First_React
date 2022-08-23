import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function MovieCard (props){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Rate : {props.rate}</ListGroup.Item>
       
        </ListGroup>
       
      </Card>
    )
}

export default MovieCard;