import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomForm } from "../components/customFields/CustomForm";
import { MainLayout } from "../components/layout/MainLayout";
import {toast} from 'react-toastify'

const Login = () => {
  const [form, setForm] = useState({});

  const handleOnChange = e => {
    const {name, value} = e.target

    setForm({
      ...form, [name]: value
    })
  }

  const handleOnSubmit = async e=> {
    e.preventDefault()
  //   const {status, message} = await postUser(form)

  //   toast[status](message)
  }

  const inputs = [
    {
      label: "Username",
      type: "text",
      name: "name",
      required: true,
      placeholder: "abced",
    },
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
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
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
              <p>Register here to use our system</p>
            </div>
          </Col>
          <Col>
            <Form onSubmit={handleOnSubmit}>
              <h3>Register</h3>
              <hr />
              {inputs.map((item, i) => (
                <CustomForm key={i} {...item} onChange={handleOnChange}/>
              ))}

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
