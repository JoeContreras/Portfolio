import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const downloadFile = () => {
  window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf";
};

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
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
