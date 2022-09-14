import { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import { Container, Header, TextWrapper ,LinkButton} from '../styles/contentSectionStyles';
import { data } from '../content/data';
import { P } from "../../../utilities/baseUI";

const ContentSection = () => {
  const [index, setIndex] = useState(0);
  const { header, subHeader, career, career2, mainContent, btn } = data;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => index + 1);
      if (index > career2.length) setIndex(0);
    },
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, [career2.length, index]);
  return (
    <Container>
      <Header>{header}</Header>
      <Header>{subHeader}</Header>
      <TextWrapper>  {`${career2[index % career2.length]}`.split("").map((n, i) => (
        <TextTransition
          key={i}
          text={n}
          delay={i * 100}
          inline
          noOverflow={true}
          springConfig={presets.wobbly}
        />
      ))}
      </TextWrapper>
      <P>{mainContent}</P>
      <LinkButton href={btn.src} download="my-awesome-resume">{btn.name}</LinkButton>
    </Container>)
};
export default ContentSection;