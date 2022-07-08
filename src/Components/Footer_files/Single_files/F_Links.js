import { LinkContainerFooter, StyledLinkFooter } from "./Single_files/StyledF_Links";


export const FooterLinks = () => {
    return(
    <LinkContainerFooter>
    <StyledLinkFooter to="/">01 - Home</StyledLinkFooter>
    <StyledLinkFooter to="#">Contact</StyledLinkFooter>
    <StyledLinkFooter to="#">Github</StyledLinkFooter>
    </LinkContainerFooter>
    );
}