import { Button, Card, Row,Container,Col, } from "react-bootstrap"

const Cards=()=>{

return (
<Container>
        <Row xs={2}>
            
                <Col>
<Card className="shawdow-lg">
<Card.Img variant="top" src="holder.js/100px160" />
<Card.Body>

    
    <Button> add to cart</Button>
</Card.Body>
</Card>
</Col>
<Col>
<Card className="shawdow-lg">
<Card.Body>
    <p>this is simple card 2</p>
    <Button> add to cart</Button>
</Card.Body>
</Card>
</Col>
<Col>
<Card className="shawdow-lg">
<Card.Body>
    <p>this is simple card</p>
    <Button> add to cart</Button>
</Card.Body>
</Card>
</Col>
<Col>
<Card className="shawdow-lg">
<Card.Body>
    <p>this is simple card 2</p>
    <Button> add to cart</Button>
</Card.Body>
</Card>
</Col>


           



        </Row>



         
</Container>)

}
export default Cards
