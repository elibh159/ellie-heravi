import { LogoWrapper, LogoBox } from '../styles/logoSectionStyles';
import { data } from '../content/data';

const LogoSection = () => (<LogoWrapper><LogoBox logoImage={data.logo.src} /></LogoWrapper>)
export default LogoSection;