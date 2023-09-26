import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {
  ImgWrapper,
  ImgText,
  ImgSubText,
  TextWrapper,
  SubTextWrapper,
  MainWrapper,
} from "./styles";

const SectionThree = () => {
  return (
    <Container
      fluid
      className="bg-dark d-flex flex-direction-row"
    >
      <MainWrapper className="pt-5 pb-5 mr-4">
        <TextWrapper className="pb-3">OUR WORK</TextWrapper>
        <SubTextWrapper>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SubTextWrapper>
      </MainWrapper>
      <div
        className=" d-flex flex-direction-row justify-content-around pt-5 pb-5"
        style={{ width: "70%" }}
      >
        <div>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src="assets/images/snow.jpg" />
            <Card.Body>
              <Card.Title>Customer 1</Card.Title>
              <Card.Text> Trade</Card.Text>
              <Card.Text>Blablabla </Card.Text>
              <Card.Text>Blablabla </Card.Text>
              <Card.Text>Blablabla </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src="assets/images/snow.jpg" />
            <Card.Body>
              <Card.Title>Customer 1</Card.Title>
              <Card.Text> Trade</Card.Text>
              <Card.Text>Blablabla </Card.Text>
              <Card.Text>Blablabla </Card.Text>
              <Card.Text>Blablabla </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src="assets/images/snow.jpg" />
            <Card.Body>
              <Card.Title>Customer 1</Card.Title>
              <Card.Text> Trade</Card.Text>
              <Card.Text>Blablabla </Card.Text>
              <Card.Text>Blablabla </Card.Text>
              <Card.Text>Blablabla </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default SectionThree;
