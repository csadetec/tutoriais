import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";



class Menu extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <MDBNavbar color="blue-gradient"  expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">TodoApp</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/todos">Tarefas</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem >
                            <MDBNavLink to="/about">Sobre</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            
        );
    }
}

export default Menu;