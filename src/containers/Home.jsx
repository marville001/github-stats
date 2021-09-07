import React from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";

const Home = () => {
  const colors = ["primary", "success", "secondary", "warning"];
  const info = ["Users", "Repositories", "Commits", "warning"];

  return (
    <Container className="my-3">
      <Row className="justify-content-md-center">
        {[0, 1, 2, 3].map((i) => (
          <Col sm={6} md={4} lg={3} xs={12} className="my-1">
            <Card bg={colors[i]} text="white">
              <Card.Body>
                <h3>344</h3>
                <p>{info[i]}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repository</Form.Label>
              <Form.Control />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search Details
            </Button>
          </Form>
        </Col>
        <Col sm={6} >
            <Card className="p-2 w-100" bg="secondary"><h4>Details heer</h4></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
