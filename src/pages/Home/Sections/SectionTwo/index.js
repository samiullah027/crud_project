import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImgWrapper, ImgText, ImgSubText,TextWrapper,SubTextWrapper } from "./styles";

const SectionTwo = () => {
  return (
    <Container>
      <TextWrapper >OUR TEAM</TextWrapper>
      <SubTextWrapper>Meet the team - our office rats:</SubTextWrapper>
      <Row>
        <Col className="text-center">
          <ImgWrapper src="assets/images/avatar.jpg" />
          <ImgText>Johnny Walker</ImgText>
          <ImgSubText>Web Designer</ImgSubText>
        </Col>
        <Col className="text-center">
          <ImgWrapper src="assets/images/avatar.jpg" />
          <ImgText>Johnny Walker</ImgText>
          <ImgSubText>Web Designer</ImgSubText>
        </Col>
        <Col className="text-center">
          <ImgWrapper src="assets/images/avatar.jpg" />
          <ImgText>Johnny Walker</ImgText>
          <ImgSubText>Web Designer</ImgSubText>
        </Col>

        <Col className="text-center">
          <ImgWrapper src="assets/images/avatar.jpg" />
          <ImgText>Johnny Walker</ImgText>
          <ImgSubText>Web Designer</ImgSubText>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
