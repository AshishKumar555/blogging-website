
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
background-image: url(https://angiemakes.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-29-at-10.58.26-AM.png);
width: 100%;
height: 50vh;
background-position: left 0px top -100px;
background-size: cover;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
           
        </Image>
    )
}

export default Banner;