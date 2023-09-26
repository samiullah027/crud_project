import React from "react";
import { Facebook, Instagram, Twitter, Google } from "react-bootstrap-icons";
import {
  FooterMain,
  FooterText,
  IconMain,
  IcaonFb,
  IcaonTw,
  IcaonGo,
  IcaonIns,
  TextPara,
} from "./styles";

const Footer = () => {
  return (
    <FooterMain>
      <FooterText>Follow Us</FooterText>
      <IconMain>
        <IcaonFb>
          <Facebook />
        </IcaonFb>
        <IcaonTw>
          <Twitter />
        </IcaonTw>
        <IcaonGo>
          <Google />
        </IcaonGo>
        <IcaonIns>
          <Instagram />
        </IcaonIns>
      </IconMain>
      <TextPara>Powered by <a href="#" style={{color:"white"}}>w3.css</a></TextPara>
    </FooterMain>
  );
};

export default Footer;
