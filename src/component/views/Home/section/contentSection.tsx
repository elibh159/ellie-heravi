import { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import { Container, Header } from '../styles/contentSectionStyles';
import { data } from '../content/data';

const ContentSection = () => {
  const [index, setIndex] = useState(0);
  const { header, subHeader, career, career2, mainContent, btn } = data;
  // const renderCareer = () => career.map((value: { title: string }) => (
  //   <h2 key={value.title}>{value.title}</h2>));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => index + 1);
       if (index > career2.length) setIndex(0);
    },
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, [career2.length, index]);
  return (<Container>
    <Header>{header}</Header>
    <Header>{subHeader}</Header>
    {/* {renderCareer()} */}
 {/* <h1>
      <TextTransition
        text={career2[index % career2.length]}
        springConfig={presets.wobbly}
      />

    </h1> */}
        <h1>  {`${career2[index % career2.length]}`.split("").map((n, i) => (
      <TextTransition
        key={i}
        text={n}
        delay={i * 100}
        inline
        noOverflow={true}
        springConfig={presets.wobbly}
      />
    ))}
    </h1>
    <p>{mainContent}</p>
    <a href={btn.src} download="my-awesome-resume">{btn.name}</a>
  </Container>)
};
export default ContentSection;