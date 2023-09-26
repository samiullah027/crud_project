import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import { GeoAltFill, TelephoneFill, Envelope } from "react-bootstrap-icons";
import { MainText, SubText, ParaText } from "./styles";

const SectionFive = () => {
  return (
    <Container fluid className="bg-light mt-5">
      <Row>
        <Col lg="3" className="pt-4">
          <MainText>Contact Us</MainText>
          <SubText>Address</SubText>
          <ParaText>Swing by for a cup of coffee, or whatever.</ParaText>
          <ParaText>
            {" "}
            <GeoAltFill /> Chicago, US
          </ParaText>
          <ParaText>
            {" "}
            <TelephoneFill /> +00 1515151515
          </ParaText>
          <ParaText>
            <Envelope /> test@test.com
          </ParaText>
        </Col>
        <Col lg="2"></Col>
        <Col lg="7" className="pt-4">
          <Card
            className="p-5 "
            style={{ backgroundColor: "white", border: "none" }}
          >
            <p>Name</p>
            <InputGroup className="mb-3">
              <Form.Control
                style={{ border: "unset" }}
                // placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <hr style={{ marginTop: "-18px" }} />
            <p>Email</p>
            <InputGroup className="mb-3">
              <Form.Control
                style={{ border: "unset" }}
                // placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>{" "}
            <hr style={{ marginTop: "-18px" }} />
            <p>Message</p>
            <InputGroup
              className="mb-3 border-unset"
              style={{ border: "none" }}
            >
              <Form.Control
                style={{ border: "unset" }}
                // placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <hr style={{ marginTop: "-18px" }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
              <input
              style={{    width: "24px",
                height: "24px"
               }}
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label " for="flexCheckDefault"
              style={{    marginLeft: "10px",marginTop:"4px"}}
              >
                I Like it!
              </label>
              </div>
             

              <Button
                variant="dark"
                style={{ width: "100px", alignSelf: "flex-end" }}
              >
                Send
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionFive;
