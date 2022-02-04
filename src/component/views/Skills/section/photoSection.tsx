import { Container } from '../styles/photoSectionStyles';
import { data } from '../content/data';

const PhotoSection = () => {
    const { media }= data;
    return(<Container>
    <img src={media.src} alt={media.alt} width='100%' />
</Container>)};
export default PhotoSection;