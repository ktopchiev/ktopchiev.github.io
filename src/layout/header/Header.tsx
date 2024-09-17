import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const navItems = [
    { title: 'about me', path: '/about' },
    { title: 'projects', path: '/projects' },
    { title: 'connect', path: '/connect' },

];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} position="fixed">
            <Container sx={{ margin: 0, padding: 0 }}>
                <Toolbar>
                    <Box>
                        <Typography
                            noWrap
                            component={NavLink}
                            to={'/'}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                '&:hover': { color: '#6eccfa' }
                            }}
                            id='header-name'
                        >
                            K.Topchiev
                        </Typography>
                    </Box>

                    {/* Screen size down */}
                    <Box sx={{ flexGrow: 5, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navItems.map(({ title, path }) => (
                                <MenuItem key={path} onClick={handleCloseNavMenu}>
                                    <Typography
                                        sx={{ textDecoration: 'none' }}
                                        component={NavLink}
                                        to={path}
                                        textAlign="center"
                                    >
                                        {title.toUpperCase()}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component={NavLink}
                            to={'/'}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            K.Topchiev
                        </Typography>
                    </Box>

                    {/* Screen size up */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center' }}>
                        {navItems.map(({ title, path }) => (
                            <Button
                                component={NavLink}
                                to={path}
                                key={path}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'lightgray',
                                    display: 'block',
                                    marginLeft: '10px',
                                    '&:hover': {
                                        backgroundColor: '#454545',
                                        color: 'white'
                                    },
                                    '&.active': {
                                        color: 'white',
                                        backgroundColor: 'none'
                                    }
                                }}
                            >
                                {title.toUpperCase()}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Header;
