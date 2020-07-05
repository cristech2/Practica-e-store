import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Ofertas from './Ofertas';
import Categorias from './Categorias';

class Home extends Component {
    render() {
        return (
            <Container className="Body-div p-0">
                <Ofertas />
                <Categorias />
            </Container>
        );
    }
}

export default Home;
