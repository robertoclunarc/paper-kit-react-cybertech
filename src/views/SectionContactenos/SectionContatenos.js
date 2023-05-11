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
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionContatenos() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Contactenos</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <label>Nombres</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-badge" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nombre" type="text" />
                  </InputGroup>
                  <label>Telefono</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-layout-11" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Telefono" type="text" />
                  </InputGroup>
                  <label>Descripcion</label>
                  
                  <div class="form-horizontal">
                      <div class="form-group">
                          <div class="col-md-14">
                              <textarea class="form-control" rows="3" placeholder="What's up?" required></textarea>
                          </div>
                      </div>
                  </div>
                  
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Enviar
                  </Button>
                </Form>
                
              </Card>
              <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  href="/register-page"
                  size="lg"
                  target="_blank"
                >
                  Limpiar Formulario
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionContatenos;
