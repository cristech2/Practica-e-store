import React, { Component } from 'react';
import products from '../../../Productos.json';
import {Card, Button} from 'react-bootstrap';
import './Productos.css'

class Productos extends Component {
    constructor(props) {
        super(props);
         this.state ={
           productos: products.filter(products => products.Categoria === props.name),
        }
        console.log(props.name)
        
    
 }
    render() {


        return (
            <>
            {this.state.productos.map(e =>
                <Card className="productos border-0 p-2 bg-light" key={e.id}>
                        <Card.Img className="mx-auto d-block img-producto" variant="top" src={e.url} />
                        <Card.Body className="p-1 mx-auto text-center">
                            <Card.Title className="mx-auto d-block">{e.title} {e.id}</Card.Title>
                            <Card.Text className="mx-auto d-block">
                                Descripcion {e.title} {e.id}
                        </Card.Text>
                            <Button variant="primary" className="mx-auto d-block">Ver</Button>
                        </Card.Body>
                    </Card>
            )}
            </>

        );
    }


}



export default Productos;
