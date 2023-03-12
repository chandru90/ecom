
import { Badge, Button, Container, Navbar } from "react-bootstrap"
import { Fragment } from "react"

const Sample1 =() =>{

    return <Fragment>

<Navbar bg="dark"expand="md"variant="dark">
    <Container>
        <Navbar.Brand> Generics</Navbar.Brand>
        <Navbar.Brand> Home</Navbar.Brand>
        <Navbar.Brand href="/"> Aboutus</Navbar.Brand>
        <Button> cart</Button>
       </Container> 
</Navbar>
</Fragment>
}
export default Sample1