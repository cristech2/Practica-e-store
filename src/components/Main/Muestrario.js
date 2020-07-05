import React, { Component } from 'react'
import { Container, Carousel, Card, Button } from 'react-bootstrap';
import './Muestrario.css';
function Carrusel() {
    return (
        <Container className="d-flex flex-wrap p-0" >
           <Container className="caru p-2" >
            <h5 className="text-center">Agendas</h5>
           <Carousel fade="true" >
                <Carousel.Item >
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/f66b97" />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">Producto 1</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion Producto 1
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/92c952" />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">Producto 2</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion Producto 2
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/66b7d2" />
                        <Card.Body className="p-1 w-100 mx-auto">
                            <Card.Title className=" d-block">Producto 3</Card.Title>
                            <Card.Text className=" d-block">
                                Descripcion Producto 3
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
           </Container>
           <Container className="caru p-2" >
           <h5 className="text-center">Cuadernos</h5>
           <Carousel fade="true" >
                <Carousel.Item >
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/f66b97" />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">Producto 1</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion Producto 1
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/92c952" />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">Producto 2</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion Producto 2
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/66b7d2" />
                        <Card.Body className="p-1 w-100 mx-auto">
                            <Card.Title className=" d-block">Producto 3</Card.Title>
                            <Card.Text className=" d-block">
                                Descripcion Producto 3
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
           </Container>
           <Container className="caru" >
           <Carousel fade="true" >
                <Carousel.Item >
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/f66b97" />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">Producto 1</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion Producto 1
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/92c952" />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">Producto 2</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion Producto 2
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/66b7d2" />
                        <Card.Body className="p-1 w-100 mx-auto">
                            <Card.Title className=" d-block">Producto 3</Card.Title>
                            <Card.Text className=" d-block">
                                Descripcion Producto 3
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
           </Container>
           <Container className="caru" >
           <Carousel fade="true" >
                <Carousel.Item >
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/f66b97" />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">Producto 1</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion Producto 1
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/92c952" />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">Producto 2</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion Producto 2
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="border-0 p-2 bg-light">
                        <Card.Img className="mx-auto d-block" variant="top" src="https://via.placeholder.com/150/66b7d2" />
                        <Card.Body className="p-1 w-100 mx-auto">
                            <Card.Title className=" d-block">Producto 3</Card.Title>
                            <Card.Text className=" d-block">
                                Descripcion Producto 3
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
           </Container>
        </Container>

    );
}



export default class Muestrario extends Component {
    render() {
        return (
            <div>
                <Carrusel />
            </div>
        )
    }
}
