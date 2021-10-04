import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button2 from "../../styles/GlobalComponents/Button2";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I am <br />
        Saul Gutierrez Hernandez
      </SectionTitle>
      <SectionText>
        Experienced web developer with a strong background in developing
        award-winning applications for a diverse clientele.
      </SectionText>
      <a href="/assets/resume.pdf" download target="_blank">
        <Button2>Learn More</Button2>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
