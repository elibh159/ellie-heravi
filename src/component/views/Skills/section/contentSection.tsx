import { Container, Header } from '../styles/contentSectionStyles';
import { data } from '../content/data';

const ContentSection = () => {
  const renderSkills = () => data.skills.map((value: { title: string, percent: number }) => (
    <div>
      <p>{value.title}</p>
      <span>{value.percent} %</span>
    </div>
  ));

  return (<Container>
    <Header>{data.header}</Header>
    <Header>{data.subHeader}</Header>
    {renderSkills()}
  </Container>)
};
export default ContentSection;