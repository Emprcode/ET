import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { MainLayout } from "../components/layout/MainLayout";

const DashBoard = () => {
  const {selects, setSelects} = useState()
 
  const handleOnSubmit = async (e) => {
    e.preventDefault();



  };
  console.log(selects)

  return (
    <MainLayout>
    <Container>
      <Row className="p-5">
     
          <Form onSubmit={handleOnSubmit}>
            <h3>Transaction Form</h3>
            <hr />
            <Row>
        <Col>
          <Form.Control placeholder="Transaction name" />
        </Col>
        <Col>
          {/* <Form.Control placeholder="Income/Expenses" /> */}
          <select value={selects} onChange={e => setSelects(e.target.value)}>
            <option></option>
            <option>Income</option>
            <option>Expense</option>
          </select>
       
        </Col>
        <Col>
          <Form.Control placeholder="Amount" />
        </Col>
        <Col>
            <Button variant="primary" type="submit">
              Login
            </Button>
        </Col>
      </Row>
          </Form>
      
      </Row>
    </Container>
  </MainLayout>
);
  
}

export default DashBoard