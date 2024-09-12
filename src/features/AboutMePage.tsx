import { Container, Link, Typography } from "@mui/material"
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { NavLink } from "react-router-dom";

function AboutMePage() {
  return (
    <>
      <Container sx={{ display: 'flex', marginTop: '70px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <AssignmentIndOutlinedIcon fontSize="large" sx={{ marginBottom: '20px', color: '#60e356' }}></AssignmentIndOutlinedIcon>
        <Typography sx={{ marginBottom: '20px' }}>
          Hi! I’m a software developer with experience in full-stack development, working mainly with C# and .NET on the backend,
          and React with TypeScript on the frontend. I’ve had formal training in both C# and JavaScript,
          but recently I’ve been diving into Domain-Driven Design and Clean Code concepts through self-study to level up my skills.
        </Typography>
        <CenterFocusStrongOutlinedIcon fontSize="large" sx={{ marginBottom: '20px', color: '#60e356' }}></CenterFocusStrongOutlinedIcon>
        <Typography sx={{ marginBottom: '20px' }}>
          I’m passionate about building efficient, maintainable code and constantly learning. Right now,
          I’m focusing on mastering Design Patterns and improving my frontend expertise with React.
        </Typography>
        <SelfImprovementOutlinedIcon fontSize="large" sx={{ marginBottom: '20px', color: '#60e356' }}></SelfImprovementOutlinedIcon>
        <Typography sx={{ marginBottom: '20px' }}>
          In addition to my technical knowledge, I’m a quick learner and self-motivated.
          I enjoy working with teams and love tackling problems through critical thinking.
          I’m constantly looking for ways to grow, both personally and professionally.
        </Typography>
        <SportsEsportsOutlinedIcon fontSize="large" sx={{ marginBottom: '20px', color: '#60e356' }}></SportsEsportsOutlinedIcon>
        <Typography sx={{ marginBottom: '20px' }}>
          Aside from coding, I have a few creative outlets. I enjoy listening to music, playing guitar, drawing, and watching movies.
          I also love reading books whenever I get the chance. These hobbies keep me inspired and give me balance outside of tech.
        </Typography >
        <Typography sx={{ marginBottom: '20px' }}>
          Feel free to check out my projects and <Link component={NavLink} to={'/contacts'}>connect</Link> with me!
        </Typography >
      </Container >
    </>
  )
}

export default AboutMePage