import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import './footer.css';

class footer extends Component {
    render() {
        return (
            <Card border="dark"  className="w-100">
                <Card.Header>Buscanos en:</Card.Header>
                <Card.Body>
                    <Container className="social__link">
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="text-primary" />
                        <a className="ml-1 card-text text-decoration-none text-dark" href="https://www.facebook.com/Piuma-Impresiones-430327220877919" rel="noopener noreferrer" target="_blank" > Piuma impresiones </a>
                    </Container>
                    <Container className="social__link">
                        <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="text-danger" />
                        <a className="card-text text-decoration-none text-dark ml-1" href="https://www.instagram.com/piuma.impresiones/" rel="noopener noreferrer" target="_blank" > Piuma impresiones </a>
                    </Container>

                </Card.Body>
            </Card>
        );
    }
}

export default footer;
