import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Chip, Grid, IconButton, styled } from '@mui/material';
import Project from '../../models/project';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendClickEvent } from '../../analytics/analytics';

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {

    const handleClick = (url: string, btnName: string) => {
        window.open(url, 'blank')?.focus();
        sendClickEvent('Projects', `Clicked ${btnName} of project ${url}`);
    };

    const styles = {
        card: {
            display: 'flex',
            flexDirection: 'column',
            color: 'rgb(198, 200, 197)',
            background: 'transparent',
            borderRadius: '10px',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                background: 'rgba(207, 207, 207, 0.1)',
                color: 'rgb(255, 255, 255)',
                cursor: 'pointer'
            },
            mb: 2
        },
        chip: {
            color: 'rgb(6, 47, 2)',
            fontWeight: 'bold',
            backgroundColor: '#03ff42',
            mr: 1,
            mt: 1
        },
        button: {
            color: 'darkgray',
            '&: hover': {
                color: 'rgb(255, 255, 255)',
                cursor: 'pointer'
            }
        }
    }

    const StyledCardActionArea = styled(CardActionArea)(() => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
        cursor: 'pointer'
    }
    `);

    return (
        <Card
            sx={styles.card}
        >
            <StyledCardActionArea
                onClick={() => handleClick(project.url, 'Card')}
            >
                <CardHeader
                    title={project.title}
                />
                <Grid container direction={'row'}>
                    <Grid item xs={12} sm={4} sx={{ px: 2 }}>
                        <CardMedia
                            component="img"
                            height="150"
                            image={project.image}
                            alt={project.title}
                            sx={{ borderRadius: '8px', display: 'flex', width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <CardContent>
                            <Box>
                                <Typography variant="body2">
                                    {project.shortDescription}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, justifyContent: 'flex-start', p: 1 }}>
                                {project.techStack.map(tech =>
                                    <Chip key={tech} label={tech} sx={styles.chip} />
                                )}
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>
            </StyledCardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                    onClick={() => handleClick(project.repoUrl, 'GitHub button')}
                    sx={styles.button}
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="xl"
                    />
                </IconButton>
            </CardActions>
        </Card >
    );
}
