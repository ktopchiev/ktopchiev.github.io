import { Container, Link, Typography } from "@mui/material"
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion"
import useAnimationState from "../hooks/useAnimationState";
import useScreenSize from "../hooks/useScreenSize";

function AboutMePage() {

	const isLoaded = useAnimationState();
	const isSmallScreen = useScreenSize();

	return (
		<m.div
			initial={{ y: "100%" }}
			animate={isLoaded ? { y: "0%" } : { y: "100%" }}
			transition={{ duration: 0.75, ease: "easeOut" }}
			exit={{ opacity: 1 }}
		>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					color: 'white',
					padding: 0
				}}
			>
				<AssignmentIndOutlinedIcon fontSize="large" sx={{ marginTop: isSmallScreen ? '200px' : '50px', color: '#6eccfa' }}></AssignmentIndOutlinedIcon>
				<Typography >
					Hi! I’m a software developer with experience in full-stack development, working mainly with C# and .NET on the backend,
					and React with TypeScript on the frontend. I’ve had formal training in both C# and JavaScript,
					but recently I’ve been diving into Domain-Driven Design and Clean Code concepts through self-study to level up my skills.
				</Typography>

				<CenterFocusStrongOutlinedIcon fontSize="large" sx={{ marginTop: '28px', color: '#6eccfa' }}></CenterFocusStrongOutlinedIcon>
				<Typography >
					I’m passionate about building efficient, maintainable code and constantly learning. Right now,
					I’m focusing on improving my frontend expertise with React.
				</Typography>

				<SelfImprovementOutlinedIcon fontSize="large" sx={{ marginTop: '28px', color: '#6eccfa' }}></SelfImprovementOutlinedIcon>
				<Typography >
					In addition to my technical knowledge, I’m a quick learner and self-motivated.
					I enjoy working with teams and love tackling problems through critical thinking.
					I’m constantly looking for ways to grow, both personally and professionally.
				</Typography>

				<SportsEsportsOutlinedIcon fontSize="large" sx={{ marginTop: '28px', color: '#6eccfa' }}></SportsEsportsOutlinedIcon>
				<Typography >
					Aside from coding, I have a few creative outlets. I enjoy listening to music, playing guitar, drawing, and watching movies.
					I also love reading books whenever I get the chance. These hobbies keep me inspired and give me balance outside of tech.
				</Typography >

				<Typography sx={{ marginTop: '28px' }}>
					Feel free to check out my projects and <Link component={NavLink} to={'/connect'}>connect</Link> with me!
				</Typography >

			</Container >
		</m.div>
	)
}

export default AboutMePage