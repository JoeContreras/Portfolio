import React from "react";

import {
  Section,
  SectionDividerFull3,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: "T.S.U.",
    text: "2018-08 - 2020-08",
    school: "Universidad Tecnologica de Durango",
  },
  {
    number: "Software Engineering",
    text: "2020-08 - Present",
    school: "Universidad Tecnologica de Durango",
  },
  // { number: 1900, text: "Github Followers" },
  // { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText style={{ marginBottom: ".5em" }}>{card.school}</BoxText>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDividerFull3 divider />
  </Section>
);

export default Acomplishments;
