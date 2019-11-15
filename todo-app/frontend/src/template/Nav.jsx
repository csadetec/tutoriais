import React from "react";

import {MDBNav, MDBNavLink} from 'mdbreact'


export default () => (
    <MDBNav color="blue-gradient" className="py-3 mb-4">
        <MDBNavLink className="white-text font-weight-bold" active to="/todos">TodoApp</MDBNavLink>
        <MDBNavLink className="white-text" to="/todos">Tarefas</MDBNavLink>
        <MDBNavLink className="white-text" to="/about">Sobre</MDBNavLink>
    </MDBNav>   
)