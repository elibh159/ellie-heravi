import { data } from './content/data';
import { ThisWrapper, Title, FooterLink, FotterIcon  } from './styles';

const Footer = () => (
    <ThisWrapper>
        <div>
            <Title>{data.title}</Title>
            {data.menu.map(({ icon, id, link }) => (
                <FooterLink href={link} key={id}><FotterIcon icon={icon}></FotterIcon></FooterLink>
            ))}
        </div>
    </ThisWrapper>)
export default Footer;