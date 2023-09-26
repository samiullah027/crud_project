import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { MainWrapper, TextWrapper, SubTextWrapper } from "./styles";

const SectionFour = () => {
  return (
    <Container fluid className="pt-5">
      <TextWrapper>PRICING</TextWrapper>
      <SubTextWrapper>
        Choose a pricing plan that fits your needs.
      </SubTextWrapper>
      <MainWrapper>
        <Card style={{ width: "38rem" }}>
          <Card.Body className="bg-dark p-5">
            <Card.Title
              style={{ color: "white", textAlign: "center", fontSize: "33px" }}
            >
              Basic
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush text-center p-3">
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10GB</b>Storage
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10</b>Emails
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10</b>Domains
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>Endless</b> Support
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "20px" }}>
              <b style={{ paddingRight: "10px", fontSize: "20px" }}>$</b>10
              <p style={{ fontSize: "18px" }}>per Month</p>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className="bg-light p-4 text-center">
            <Button variant="success">Sign Up</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "38rem" }}>
          <Card.Body className="bg-dark p-5">
            <Card.Title
              style={{ color: "white", textAlign: "center", fontSize: "33px" }}
            >
              Basic
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush text-center p-3">
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10GB</b>Storage
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10</b>Emails
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10</b>Domains
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>Endless</b> Support
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "20px" }}>
              <b style={{ paddingRight: "10px", fontSize: "20px" }}>$</b>10
              <p style={{ fontSize: "18px" }}>per Month</p>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className="bg-light p-4 text-center">
            <Button variant="success">Sign Up</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "38rem" }}>
          <Card.Body className="bg-dark p-5">
            <Card.Title
              style={{ color: "white", textAlign: "center", fontSize: "33px" }}
            >
              Basic
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush text-center p-3">
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10GB</b>Storage
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10</b>Emails
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>10</b>Domains
            </ListGroup.Item>
            <ListGroup.Item>
              <b style={{ paddingRight: "10px" }}>Endless</b> Support
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: "20px" }}>
              <b style={{ paddingRight: "10px", fontSize: "20px" }}>$</b>10
              <p style={{ fontSize: "18px" }}>per Month</p>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body className="bg-light p-4 text-center">
            <Button variant="success">Sign Up</Button>
          </Card.Body>
        </Card>
      </MainWrapper>
    </Container>
  );
};

export default SectionFour;
