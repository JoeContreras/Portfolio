import Link from "next/link";
import React from "react";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { DiCssdeck } from "@react-icons/all-files/di/DiCssdeck";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { SiIndeed } from "@react-icons/all-files/si/SiIndeed";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
      >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/JoeContreras" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/joe-contreras-0085a4222/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://my.indeed.com/p/joec-xqb2kd6" target="_blank">
        {/*<AiFillInstagram size="3rem" />*/}
        <SiIndeed size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
