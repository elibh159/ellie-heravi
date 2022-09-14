import ContentSection from './section/contentSection';
import PhotoSection from './section/photoSection';
import { Container, ThisWrapper } from './styles';

const Home = () => (
    <Container>
        <ThisWrapper>
            <PhotoSection />
            <ContentSection />
        </ThisWrapper>
    </Container>);
export default Home;