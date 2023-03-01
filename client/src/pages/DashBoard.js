import React, { useRef } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap';
import { CustomForm } from '../components/customFields/CustomForm';
import { MainLayout } from "../components/layout/MainLayout";

const DashBoard = () => {
  const transRef = useRef("");
  const typeRef = useRef("");
  const amountRef = useRef("");
  const inputs = [
    {
      label: "Transaction",
      type: "transaction",
      name: "transaction",
      required: true,
      placeholder: "transaction name",
      forwardref: transRef,
    },
    {
      label: "Type",
      type: "type",
      name: "type",
      required: true,
      placeholder: "Income/Expenses",
      forwardref: typeRef,
    },
    {
      label: "Amount",
      type: "amount",
      name: "amount",
      required: true,
      placeholder: "1234",
      forwardref: amountRef,
    },
  ];
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      transaction: transRef.current.value,
      type: typeRef.current.value,
      amount: amountRef.current.value,
    };


  };

  return (
    <MainLayout>
    <Container>
      <Row className="p-5">
     
          <Form onSubmit={handleOnSubmit}>
            <h3>Transaction Form</h3>
            <hr />
            {inputs.map((item, i) => (
              <CustomForm key={i} {...item} />
            ))}

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
      
      </Row>
    </Container>
  </MainLayout>
);
  
}

export default DashBoard