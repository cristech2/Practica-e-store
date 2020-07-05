import React, { Component } from 'react';
import Productos from '../Productos';
import { Container } from 'react-bootstrap';
class Cuadernos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: props.categoria,
        }

    }
    render() {

        return (
            <>
                <Container fluid className="d-flex flex-wrap justify-content-between m-0">
                    <Productos name={this.state.categoria} />
                </Container>
            </>
        );
    }
}

export default Cuadernos;
