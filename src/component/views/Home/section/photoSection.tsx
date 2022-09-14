import { Container, WrapperMedia, Media } from '../styles/photoSectionStyles';
import { data } from '../content/data';

const PhotoSection = () => {
    const { media } = data;
    return (<Container>
        <WrapperMedia>
            <Media src={media.src} alt={media.alt}/>
        </WrapperMedia>
    </Container>)
};
export default PhotoSection;