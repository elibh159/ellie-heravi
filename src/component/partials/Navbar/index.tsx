import { ThisWrapper, SidebarContainer, MainContainer } from './styles';
import LogoSection from './section/logoSection';
import MenuSection from './section/menuSection';

const Navbar = () => (<ThisWrapper>
    <SidebarContainer>
        <LogoSection />
    </SidebarContainer>
    <MainContainer>
        <MenuSection />
    </MainContainer>
</ThisWrapper>)
export default Navbar;