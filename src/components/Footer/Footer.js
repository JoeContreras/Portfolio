import React from "react";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { SiIndeed } from "@react-icons/all-files/si/SiIndeed";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Joe Contreras</LinkTitle>
          <LinkItem href="tel:618-800-7471">618-800-7471</LinkItem>
          <LinkItem href="mailto:joe.contreras809@gmail.com">
            joe.contreras809@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Saul Gutierrez</LinkTitle>
          <LinkItem href="tel:618-758-7480">618-758-7480</LinkItem>
          <LinkItem href="mailto:joe.contreras809@gmail.com">
            saulGutierrez123@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Paola Zamora</LinkTitle>
          <LinkItem href="tel:618-807-7807">618-807-7807</LinkItem>
          <LinkItem href="mailto:joe.contreras809@gmail.com">
            zamora.paola9@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Jose Gutierrez</LinkTitle>
          <LinkItem href="tel:618-178-7090">618-178-7090</LinkItem>
          <LinkItem href="mailto:joe.contreras809@gmail.com">
            jose.luis123@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating One Project at a Time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/JoeContreras">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/joe-contreras-0085a4222/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://my.indeed.com/p/joec-xqb2kd6">
            {/*<AiFillInstagram size="3rem" />*/}
            <SiIndeed size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
