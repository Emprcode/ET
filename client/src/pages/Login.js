import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomForm } from "../components/customFields/CustomForm";
import { fetchUser } from "../components/helper/axiosHelper";
import { MainLayout } from "../components/layout/MainLayout";

const Login = () => {
  const navigate = useNavigate("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
      placeholder: "email@email.com",
      forwardref: emailRef,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
      placeholder: "******",
      forwardref: passwordRef,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const { status, message, result } = await fetchUser(obj);
    toast[status](message);

    if (status === "success" && result?._id) {
      sessionStorage.setItem("user", JSON.stringify(result))
      navigate("/dashboard")
    }
  };

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
            <Form onSubmit={handleOnSubmit}>
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
