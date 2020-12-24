import { Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { createElement } from 'react'

function Pizza({pizza, myButton, myButtonProp}) {
    return (
        <Card className="h-70 w-70">
            <Card.Img variant="top" src={pizza.picture} style={{border: "1px solid gray", borderRadius: "4px"}}/>
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>{pizza.description}</Card.Text>
                <Card.Title>Состав</Card.Title>
                <Card.Text>{pizza.sostav}</Card.Text>
                {myButton && <div>{createElement(myButton, myButtonProp)}</div>}
            </Card.Body>
        </Card>
    )
}


export default Pizza;
