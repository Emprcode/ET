import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomForm } from "../components/customFields/CustomForm";
import { MainLayout } from "../components/layout/MainLayout";

const Login = () => {
  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
      placeholder: "email@email.com",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
      placeholder: "******",
    },
  ];
  return (
    <MainLayout>
      <Container>
        <Row className="p-5">
          <Col className="info bg-primary rounded d-flex justify-content-center align-items-center">
            <div className="text-light text-center  ">
              <h3 className="p-3">Welcome to our system</h3>
              <p>Login to use our system and manage your financial situation</p>
            </div>
          </Col>
          <Col>
            <Form>
              <h3>Login</h3>
              <hr />
              {inputs.map((item, i) => (
                <CustomForm key={i} {...item} />
              ))}

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
