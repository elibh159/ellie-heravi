
import { P } from "../../../utilities/baseUI";
import { Container, TextWrapper, Title, ItemList, ListBox, ItemListTitle, LinkButton ,ButtonBox} from '../styles/contentSectionStyles';
import { data } from '../content/data';

const ContentSection = () => {

    return (
        <Container>
            <Title>{data.subHeader}</Title>
            <TextWrapper>{data.header}</TextWrapper>
            <P>{data.mainContent}</P>
            <ListBox>
                {data.listOfInfo.map(({ name, value, id, type }) =>
                (<ItemList key={id}>
                    <ItemListTitle>{name}:</ItemListTitle>
                    {value}
                </ItemList>
                ))}
            </ListBox>
            <ButtonBox>
                {data.btns.map(({ src, name }) => (
                    <LinkButton to={src}>{name}</LinkButton>
                ))}
            </ButtonBox>
        </Container>)
};
export default ContentSection;