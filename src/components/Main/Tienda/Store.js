import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ButtonGroup, Button } from '@material-ui/core';
import Ofertas from '../Home/Ofertas';
import Agendas from './Categorias/Agendas';
import Cuadernos from './Categorias/Cuadernos';
import Stickers from './Categorias/Stickers';
import Extras from './Categorias/Extras';



class Store extends Component {
    constructor(props) {
        super(props);
        this.handleAgendaclick = this.handleAgendaclick.bind(this);
        this.handleCuadernosClick = this.handleCuadernosClick.bind(this);
        this.handleStickersClick = this.handleStickersClick.bind(this);
        this.handleExtrasClick = this.handleExtrasClick.bind(this);
        this.state = {
            show: "",
        };
    }

    handleAgendaclick() {
        this.setState({ show: "Agendas" });

    }

    handleCuadernosClick() {
        this.setState({ show: "Cuadernos" });

    }

    handleStickersClick() {
        this.setState({ show: "Stickers" });

    }
    handleExtrasClick() {
        this.setState({ show: "Extras" });

    }

    render() {

        const shopView = () => {
            console.log(this.state.show);
            switch (this.state.show) {
                case "Agendas": return <Agendas categoria="Agendas" />
                case "Cuadernos": return <Cuadernos categoria="Cuadernos" />
                case "Stickers": return <Stickers categoria="Stickers" />
                case "Extras": return <Extras categoria="Extras" />
                default:
                    return <Ofertas />
            }
        }



        return (
            <>
                <Container fluid className="m-0">
                    <Row className="mt-2">
                        <ButtonGroup variant="text" color="secondary" className="mx-auto">
                            <Button onClick={this.handleAgendaclick}>Agendas</Button>
                            <Button onClick={this.handleCuadernosClick}>Cuadernos</Button>
                            <Button onClick={this.handleStickersClick}>Stickers</Button>
                            <Button onClick={this.handleExtrasClick}>Extras</Button>
                        </ButtonGroup>
                    </Row>
                    <Row className="w-100 mx-auto">
                        {shopView()}
                    </Row>

                </Container>


            </>
        );
    }
}

export default Store;
