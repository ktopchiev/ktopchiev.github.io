import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Chip, Grid, IconButton, styled } from '@mui/material';
import Project from '../../models/project';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {

    const handleClick = (url: string) => {
        window.open(url, 'blank')?.focus();
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
                background: 'rgba(97, 97, 97, 0.17)',
                color: 'rgb(255, 255, 255)',
                cursor: 'pointer'
            },
            mx: 4,
            mb: 2
        },
        chip: {
            color: 'rgb(6, 47, 2)',
            fontWeight: 'bold',
            backgroundColor: '#03ff42',
            mr: 1,
            mt: 1
        }
    }

    const StyledCardActionArea = styled(CardActionArea)(() => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }
    `);

    return (
        <Card
            sx={styles.card}
        >
            <StyledCardActionArea
                onClick={() => handleClick(project.url)}
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
                                    <Chip label={tech} sx={styles.chip} />
                                )}
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>
            </StyledCardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                    sx={{
                        color: 'silver',
                        '&:hover': { color: 'white' }
                    }}
                    onClick={() => handleClick(project.repoUrl)}>
                    <GitHubIcon />
                </IconButton>
            </CardActions>
        </Card >
    );
}
