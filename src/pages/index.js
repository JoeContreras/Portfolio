import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Hero2 from "../components/Hero/Hero2";
import Projects2 from "../components/Projects/Projects2";
import Projects3 from "../components/Projects/Projects3";
import Hero3 from "../components/Hero/Hero3";
import Hero4 from "../components/Hero/Hero4";
import Technologies2 from "../components/Technologies/Technologies2";
import Technologies3 from "../components/Technologies/Technologies3";
import Projects4 from "../components/Projects/Projects4";
import Technologies4 from "../components/Technologies/Technologies4";
import TimeLine2 from "../components/TimeLine/TimeLine2";
import TimeLine3 from "../components/TimeLine/TimeLine3";
import TimeLine4 from "../components/TimeLine/TimeLine4";
import Acomplishments2 from "../components/Acomplishments/Acomplishments2";
import Acomplishments3 from "../components/Acomplishments/Acomplishments3";
import Acomplishments4 from "../components/Acomplishments/Acomplishments4";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />

      <Section grid>
        <Hero2 />
        {/*<BgAnimation />*/}
      </Section>
      <Projects2 />
      <Technologies2 />
      <TimeLine2 />
      <Acomplishments2 />

      <Section grid>
        <Hero3 />
        {/*<BgAnimation />*/}
      </Section>
      <Projects3 />
      <Technologies3 />
      <TimeLine3 />
      <Acomplishments3 />

      <Section grid>
        <Hero4 />
        {/*<BgAnimation />*/}
      </Section>
      <Projects4 />
      <Technologies4 />
      <TimeLine4 />
      <Acomplishments4 />
    </Layout>
  );
};

export default Home;
