import { AppBar, Box, Link, List, ListItem, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header() {

    const navItems = [
        { title: "about", path: '/about' },
        { title: "projects", path: '/projects' },
        { title: "contacts", path: '/contacts' }
    ]

    const navStyles = {
        color: "inherit",
        '&:hover': { color: 'black' },
        textDecoration: 'none'
    }

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Link
                    component={NavLink}
                    to={"/"}
                    key={"/"}
                    sx={navStyles}
                >
                    K.Topchiev
                </Link>

                <Box>
                    <List sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {navItems.map(({ title, path }) =>
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header