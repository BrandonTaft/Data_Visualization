import * as React from 'react';
import Link from './Link';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Image from 'next/image'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const drawerWidth = 240;

const pages = ['Bubble', 'Quick Sort', 'Insertion'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: `-${drawerWidth}px`,
//         ...(open && {
//             transition: theme.transitions.create('margin', {
//                 easing: theme.transitions.easing.easeOut,
//                 duration: theme.transitions.duration.enteringScreen,
//             }),
//             marginLeft: 0,
//         }),
//     }),
// );

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
// }));

// export default function PersistentDrawerLeft() {
//     const theme = useTheme();
//     // const [open, setOpen] = React.useState(false);


// const handleDrawerOpen = () => {
//     setOpen(true);
// };

// const handleDrawerClose = () => {
//     setOpen(false);
// };

export default function Navbar() {

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

    return (

        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <Image src="/icons/huge.png" alt="logo" layout="intrinsic" width={50} height={50} />
                    </Box>

                    <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml:4,
              display: { xs: 'none', md: 'flex' },
              fontSize: "30px",
              fontFamily: 'fira sans',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             Sort Methods
          </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            
                            <List>

                                <ListItem disablePadding>
                                    <Link href="/">
                                        <Grid container sx={{ cursor: "pointer" }} >
                                            <Grid item>
                                                <HomeIcon />
                                            </Grid>
                                            <Grid item>
                                                <span>Home</span>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </ListItem>

                                <ListItem disablePadding>
                                    <Link href="/bubble">
                                        <Grid container sx={{ cursor: "pointer" }}>
                                            <Grid item>
                                                <ScienceIcon />
                                            </Grid>
                                            <Grid item>
                                                <span>Bubble Sort</span>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="">
                                        <Grid container sx={{ cursor: "pointer" }}>
                                            <Grid item>
                                                <CalculateIcon />
                                            </Grid>
                                            <Grid item>
                                                <span>Quick Sort</span>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="">
                                        <Grid container sx={{ cursor: "pointer" }}>
                                            <Grid item>
                                                <CalculateIcon />
                                            </Grid>
                                            <Grid item>
                                                <span>Selection</span>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="/insertion">
                                        <Grid container sx={{ cursor: "pointer" }}>
                                            <Grid item>
                                                <CalculateIcon />
                                            </Grid>
                                            <Grid item>
                                                <span>Insertion</span>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <Link href="">
                                        <Grid container sx={{ cursor: "pointer" }}>
                                            <Grid item>
                                                <CalculateIcon />
                                            </Grid>
                                            <Grid item>
                                                <span>Merge</span>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </ListItem>
                            </List>
                        </Menu>
                    </Box>
                    
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Sort Method Visualizer
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Box className="in-nav-container">
                            <Box className="home-link">
                                <Link href="/">    
                                            <span>Home</span>
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/bubble">
                                            <span>Bubble Sort</span>
                                </Link>
                            </Box>
                            <Box>
                                <Link href="">
                                            <span>Quick Sort</span>                                 
                                </Link>
                            </Box>
                            <Box>
                                <Link href="">
                                            <span>Selection</span>
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/insertion">
                                            <span>Insertion</span>
                                </Link>
                            </Box>
                            <Box>
                                <Link href="">
                                            <span>Merge</span>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="About Me">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Brandon Taft" src="/images/collar-full.png" variant="square" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '55px' }}
                            id="menu-appbar"
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
                            <MenuItem >
                                <a href="https://github.com/BrandonTaft" target="_blank">
                                    <Image src="/icons/github.svg" alt="github" layout="intrinsic" width={20} height={20} />
                                </a>
                            </MenuItem>
                            <MenuItem >
                                <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank">
                                    <Image src="/icons/github.svg" alt="github" layout="intrinsic" width={20} height={20} />
                                </a>
                            </MenuItem>
                            <MenuItem >
                                <a href="https://www.brandontaft.net/" target="_blank">
                                    <Image src="/icons/github.svg" alt="github" layout="intrinsic" width={20} height={20} />
                                </a>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        // <Box>
        //    <AppBar open={open}>
        //         <Toolbar>
        //             <IconButton
        //                 color="inherit"
        //                 aria-label="open drawer"
        //                 onClick={handleDrawerOpen}
        //                 edge="start"
        //                 sx={{ mr: 2, ...(open && { display: 'none' }) }}
        //             >
        //                 <MenuIcon />
        //             </IconButton>

        //             <h2>Sort Method Visualizer</h2>

        //         </Toolbar>
        //     </AppBar>
        //     <Drawer
        //         sx={{
        //             width: drawerWidth,
        //             flexShrink: 0,
        //             '& .MuiDrawer-paper': {
        //                 width: drawerWidth,
        //                 boxSizing: 'border-box',
        //             },
        //         }}
        //         variant="persistent"
        //         anchor="left"
        //         open={open}
        //     >
        //         <DrawerHeader>
        //             <IconButton onClick={handleDrawerClose}>
        //                 {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        //             </IconButton>
        //         </DrawerHeader>
        //         <Divider />
        // <List>

        //     <ListItem disablePadding>
        //         <Link href="/">
        //         <Grid container sx={{cursor:"pointer"}} >
        //                 <Grid item>
        //                     <HomeIcon />
        //                 </Grid>
        //                 <Grid item>
        //                     <span>Home</span>
        //                 </Grid>
        //             </Grid>
        //         </Link>
        //     </ListItem>

        //     <ListItem disablePadding>
        //         <Link href="/bubble">
        //             <Grid container sx={{cursor:"pointer"}}>
        //                 <Grid item>
        //                     <ScienceIcon />
        //                 </Grid>
        //                 <Grid item>
        //                     <span>Bubble Sort</span>
        //                 </Grid>
        //             </Grid>
        //         </Link>
        //     </ListItem>
        //     <ListItem disablePadding>
        //         <Link href="">
        //         <Grid container sx={{cursor:"pointer"}}>
        //                 <Grid item>
        //                     <CalculateIcon />
        //                 </Grid>
        //                 <Grid item>
        //                     <span>Quick Sort</span>
        //                 </Grid>
        //             </Grid>
        //         </Link>
        //     </ListItem>
        //     <ListItem disablePadding>
        //         <Link href="">
        //         <Grid container sx={{cursor:"pointer"}}>
        //                 <Grid item>
        //                     <CalculateIcon />
        //                 </Grid>
        //                 <Grid item>
        //                     <span>Selection</span>
        //                 </Grid>
        //             </Grid>
        //         </Link>
        //     </ListItem>
        //     <ListItem disablePadding>
        //         <Link href="">
        //         <Grid container sx={{cursor:"pointer"}}>
        //                 <Grid item>
        //                     <CalculateIcon />
        //                 </Grid>
        //                 <Grid item>
        //                     <span>Insertion</span>
        //                 </Grid>
        //             </Grid>
        //         </Link>
        //     </ListItem>
        //     <ListItem disablePadding>
        //         <Link href="">
        //         <Grid container sx={{cursor:"pointer"}}>
        //                 <Grid item>
        //                     <CalculateIcon />
        //                 </Grid>
        //                 <Grid item>
        //                     <span>Merge</span>
        //                 </Grid>
        //             </Grid>
        //         </Link>
        //     </ListItem>
        // </List>
        //         <Divider />
        //     </Drawer>
        //     {/* <Main open={open} style={{ padding: "0px" }}>
        //         <DrawerHeader />

        //     </Main> */}
        // </Box>
    );
}
