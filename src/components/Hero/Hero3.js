import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button3 from "../../styles/GlobalComponents/Button3";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, my name is <br />
        Paola Zamora
      </SectionTitle>
      <SectionText>
        Experienced web developer who is comfortable in working with new
        technologies to deliver exceptional products
      </SectionText>
      <a href="/assets/resume.pdf" download target="_blank">
        <Button3>Learn More</Button3>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
