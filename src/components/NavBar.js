import { useState, useRef } from 'react';
import useOnOutsideClick from './useOnOutsideClick';
import Link from './Link';
import LightSwitch from './LightSwitch';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar({ path }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef();
    const onOutsideClick = () => {
        setOpen(false)
    };
    const openMenu = () => {
        setOpen(!open)
    };
    useOnOutsideClick(wrapperRef, onOutsideClick, false);

    return (
        <div className='nav'>
            <div className='nav-switch'>
                <LightSwitch />
            </div>
            <h1 className='nav-title'>
                {path === '/' ? "Sorting Method Visualizer" : path.slice(1).toUpperCase() + " SORT"}
            </h1>
            <div className='nav-burger'>
                <div className='nav-bun ignore' onClick={openMenu}>
                    <span className='nav-patty ignore'></span>
                    <span className='nav-patty ignore'></span>
                    <span className='nav-patty ignore'></span>
                    {open &&
                        <div className="menu" ref={wrapperRef}>
                            <Link href="/">
                                <div className={path === "/" ? "active-link" : "menu-btn"}>
                                    <HomeIcon sx={{ color: 'blue' }} />
                                    <span className='menu-text'>Home</span>
                                </div>
                            </Link>
                            <Link href="/bubble">
                                <div className={path === "/bubble" ? "active-link" : "menu-btn"}>
                                    <BubbleChartIcon sx={{ color: 'blue' }} />
                                    <span className='menu-text'>Bubble Sort</span>
                                </div>
                            </Link>
                            <Link href="/insertion">
                                <div className={path === "/insertion" ? "active-link" : "menu-btn"}>
                                    <CalculateIcon sx={{ color: 'blue' }} />
                                    <span className='menu-text'>Insertion Sort</span>
                                </div>
                            </Link>
                            <Link href="/selection">
                                <div className={path === "/selection" ? "active-link" : "menu-btn"}>
                                    <EqualizerIcon sx={{ color: 'blue' }} />
                                    <span className='menu-text'>Selection Sort</span>
                                </div>
                            </Link>
                            <Link href="/quick">
                                <div className={path === "/quick" ? "active-link" : "menu-btn"}>
                                    <ScienceIcon sx={{ color: 'blue' }} />
                                    <span className='menu-text'>Quick Sort</span>
                                </div>
                            </Link>
                            <div className='nav menu-copyright'>
                                <p className="copyright"> &copy;{new Date().getFullYear()}&nbsp;Brandon Taft</p>
                                <a className="" href="/sitemap.xml">
                                    <span > Sitemap </span>
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="full-nav">
                <div className="nav-link-container">
                    <Link href="/">
                        <span className={path === "/" ? "active-link" : ""}>Home</span>
                    </Link>
                    <Link href="/bubble" >
                        <span className={path === "/bubble" ? "active-link" : ""}>Bubble</span>
                    </Link>
                    <Link href="/insertion">
                        <span className={path === "/insertion" ? "active-link" : ""}>Insertion</span>
                    </Link>
                    <Link href="/selection">
                        <span className={path === "/selection" ? "active-link" : ""}>Selection</span>
                    </Link>
                    <Link href="/quick">
                        <span className={path === "/quick" ? "active-link" : ""}>Quick</span>
                    </Link>
                </div>
            </div>


        </div>

    );
}
