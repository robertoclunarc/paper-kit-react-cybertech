/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {  Container, Row, Col } from "reactstrap";

// core components

function SectionServicios() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Servicios</h2>
              
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="12">
              <p className="description">
                COPIA DE SEGURIDAD DE DATOS
              </p><br />
              
            </Col>
            <Col lg="6" md="12">
              <p className="description">
              Realización de una copia de seguridad completa de sus datos
              </p><br />
            </Col>
            <Col lg="2" md="12">
              <p className="description">
              Precio
              </p><br />
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="12">
              <p className="description">
              REPARACIÓN DE HARDWARE, INSTALACION DE SISTEMA OPERATIVO
              </p><br />
              
            </Col>
            <Col lg="6" md="12">
              <p className="description">
              Formateo e instalación de su sistema operativo, services pack y actualizaciones disponibles.¿Su ordenador no enciende? ¿No instala Windows? ¿Se bloquea? Nosotros localizamos el problema y se lo solucionamos.
              </p><br />
            </Col>
            <Col lg="2" md="12">
              <p className="description">
              Precio
              </p><br />
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="12">
              <p className="description">
              ELIMINACIÓN DE VIRUS, TROYANOS, SPYWARE, ETC
              </p><br />
              
            </Col>
            <Col lg="6" md="12">
              <p className="description">
              ¿Su ordenador tiene virus? ¿Le aparecen constantemente mensajes extraños en pantalla?. Más información
              </p><br />
            </Col>
            <Col lg="2" md="12">
              <p className="description">
              Precio
              </p><br />
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="12">
              <p className="description">
              CONFIGURACIÓN DE SOFTWARE
              </p><br />
              
            </Col>
            <Col lg="6" md="12">
              <p className="description">
              Configuración de software general como: Correo electrónico, drivers, etc
              </p><br />
            </Col>
            <Col lg="2" md="12">
              <p className="description">
              Precio
              </p><br />
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionServicios;
