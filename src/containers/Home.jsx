import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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
    </Container>
  );
};

export default Home;
