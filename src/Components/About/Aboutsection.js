import styled from 'styled-components'
import { AboutText } from './Single_files/About_Text';
import { PictureHolder } from './Single_files/MyPicture';
import Alma from "./About_Images/Alma.jpg"

const AboutContent = styled.main`
width: 100%;
height: 70vh;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(12, 1fr);
`


export const MainAbout = () => {
    return(
        <AboutContent>
            <AboutText/>
            <PictureHolder style={{backgroundImage: `url(${Alma})`}} />
        </AboutContent>
    );
}