import {useState} from 'react';
import { Container, TextWrapper, Title, ItemList, ItemListImage, ListBox, ItemListTitle, LinkButton, ButtonBox } from '../styles/contentSectionStyles';
import { data } from '../content/data';

const ContentSection = () => {
    const [activeType, setActive]= useState("all");

    return (
        <Container>
            <Title>{data.subHeader}</Title>
            <TextWrapper>{data.header}</TextWrapper>
           <ButtonBox>
                {data.category.map(({ id, name }) => (
                    <LinkButton key={id} onClick={()=>setActive(name)} active={name === activeType}>{name}</LinkButton>
                ))}
            </ButtonBox>
              <ListBox>
                {data.listOfWork.filter(m=>  activeType ==="all" || m.type === activeType ).map(({ name,image ,  link, id, type }) =>
                (<ItemList key={id}>
                    <ItemListImage src={image}   />
                    <ItemListTitle>{name}:</ItemListTitle>
                    {type} {link}
                </ItemList>
                ))}
            </ListBox>
             
        </Container >)
};
export default ContentSection;