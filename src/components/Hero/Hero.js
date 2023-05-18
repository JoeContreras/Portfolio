import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My name is <br />
        Joe Contreras
      </SectionTitle>
      <SectionText>
        Hard-working web developer with a flair for creating elegant solutions
        in the least amount of time.
      </SectionText>
      <a href="/assets/Resume_2.pdf" download target="_blank">
        <Button>Learn More</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
