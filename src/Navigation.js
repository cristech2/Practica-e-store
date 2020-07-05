import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Main/Home/Home';
import Store from './components/Main/Tienda/Store';
import Contact from './components/Main/Contact';
import About from './components/Main/About';
import { Navbar, Nav } from 'react-bootstrap'

class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Piuma Impresiones</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link eventKey="1" as={Link} to="/">
                                    Home
                                 </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2" as={Link} to="/tienda">
                                    Tienda
                                 </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" as={Link} to="/nosotras">
                                    Nosotras
                                 </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="4" as={Link} to="/contactanos">
                                    Contactanos
                                 </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/tienda">
                        <Store />
                    </Route>
                    <Route path="/contactanos">
                        <Contact />
                    </Route>
                    <Route path="/nosotras">
                        <About />
                    </Route>
                </Switch>
            </>
        );
    }
}

export default Navigation;
