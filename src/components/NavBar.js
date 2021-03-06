import * as React from 'react';
import Link from './Link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Image from 'next/image'
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import LightSwitch from './LightSwitch';

export default function Navbar({ path }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            rs: 355,
            cs: 460,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      });

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="static" className="nav-bar">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <Image src="/icons/huge.png" alt="logo" layout="intrinsic" width={40} height={40} />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: { sm: 0, lg: 3},
                            ml: 4,
                            display: { xs: 'none', md: 'flex' },
                            fontSize: { xs: "24px", lg:"30px" },
                            fontFamily: 'Playfair Display',
                            letterSpacing: ".15em",
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: "default",
                        }}
                    >
                        {path === '/' ? "Sorting Method Visualizer" : path.slice(1).toUpperCase() + " SORT"}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        <IconButton
                            sx={{ padding: 0}}
                            size="large"
                            aria-label="hamburger-menu"
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
                            <div className='about-me-div'>
                                <List sx={{ padding: '10px' }}>
                                    <ListItem disablePadding>
                                        <Link href="/">
                                            <Grid container sx={{ cursor: "pointer", margin: '10px' }}>
                                                <Grid item>
                                                    <HomeIcon />
                                                </Grid>
                                                <Grid item>
                                                    <span className='responsive-link'>Home</span>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Link href="/bubble">
                                            <Grid container sx={{ cursor: "pointer", margin: '10px' }}>
                                                <Grid item>
                                                    <BubbleChartIcon />
                                                </Grid>
                                                <Grid item>
                                                    <span className='responsive-link'>Bubble Sort</span>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Link href="/insertion">
                                            <Grid container sx={{ cursor: "pointer", margin: '10px' }}>
                                                <Grid item>
                                                    <CalculateIcon />
                                                </Grid>
                                                <Grid item>
                                                    <span className='responsive-link'>Insertion</span>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Link href="/selection">
                                            <Grid container sx={{ cursor: "pointer", margin: '10px' }}>
                                                <Grid item>
                                                    <EqualizerIcon />
                                                </Grid>
                                                <Grid item>
                                                    <span className='responsive-link'>Selection</span>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <Link href="/quick">
                                            <Grid container sx={{ cursor: "pointer", margin: '10px' }}>
                                                <Grid item>
                                                    <ScienceIcon />
                                                </Grid>
                                                <Grid item>
                                                    <span className='responsive-link'>Quick Sort</span>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </Menu>
                        <LightSwitch />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 1,
                            display: { xs: 'none', rs: 'flex', cs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Playfair Display',
                            fontSize: { rs: '.9em', cs: '1.5em' },
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {path === '/' ? "Sorting Method Visualizer" : path.slice(1).toUpperCase() + " SORT"}
                    </Typography>
                    <Box sx={{ fontFamily: 'Fira Sans', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <LightSwitch />
                        <Box className="in-nav-container" id="in-nav-container">
                            <Link href="/">
                                <span>Home</span>
                            </Link>
                            <Link href="/bubble">
                                <span>Bubble Sort</span>
                            </Link>
                            <Link href="/insertion">
                                <span>Insertion Sort</span>
                            </Link>
                            <Link href="/selection">
                                <span>Selection Sort</span>
                            </Link>
                            <Link href="/quick">
                                <span>Quick Sort</span>
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="About Me">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, borderRadius: 0 }}>
                                    <p className="about-me-p">Contact Me</p>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '40px' }}
                            
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <div className="about-me-div">
                                <MenuItem className="top-contact">
                                    <a href="https://github.com/BrandonTaft" target="_blank" rel="noreferrer">
                                        <Image src="/icons/github.png" alt="github" layout="intrinsic" width={20} height={20} />                     
                                    <div className="contacts"> Github</div>
                                    </a>
                                </MenuItem>
                                <MenuItem >
                                    <a href="https://www.brandontaft.net/" target="_blank" rel="noreferrer">
                                        <Image src="/icons/huge.png" alt="my-logo" layout="intrinsic" width={20} height={20} />
                                    <div className="contacts">Portfolio</div>
                                    </a>
                                </MenuItem>
                                <MenuItem >
                                    <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank" rel="noreferrer">
                                        <Image src="/icons/linked.png" alt="linkedIn-logo" layout="intrinsic" width={20} height={20} />
                                    <div className="contacts">Linked In</div>
                                    </a>
                                </MenuItem>
                                <MenuItem className="email-contact">
                                    <a href="mailto:btaftcan@gmail.com" >
                                        <Image src="/icons/gmail-logo.png" alt="gmail-logo" layout="intrinsic" width={22} height={13} />
                                    <div className="email contacts">Email Me</div>
                                    </a>
                                </MenuItem>
                                <div className='nav-copyright-container'>
                                    <div className='inner-copyright-container'>
                                        <p className="copyright"> &copy;{new Date().getFullYear()} </p>
                                        <p className="copyright"> Brandon Taft </p>
                                    </div>
                                    <a className="sitemap-link" href="/sitemap.xml">
                                        <span className='map-box' > Sitemap </span>
                                    </a>
                                </div>
                            </div>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    );
}
