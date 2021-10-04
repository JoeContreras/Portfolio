import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button4 from "../../styles/GlobalComponents/Button4";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My name is <br />
        Jose Luis Gutierrez
      </SectionTitle>
      <SectionText>
        Motivated junior web developer looking for a role as full-stack web
        developer
      </SectionText>
      <a href="/assets/resume.pdf" download target="_blank">
        <Button4>Learn More</Button4>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
