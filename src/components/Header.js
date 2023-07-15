import { useState, useRef } from 'react';
import Image from 'next/image';
import logo from "../../public/icons/huge.png";
import Link from './Link';
import useOnOutsideClick from './useOnOutsideClick';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const Header = () => {
  const wrapperRef = useRef();
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open)
  }

  const onOutsideClick = () => {
    setOpen(false)
  };

  useOnOutsideClick(wrapperRef, onOutsideClick, false);

  return (
    <header className="header">
      <div className='logo'>
        <Image className='logo-img' src={logo} alt="logo" layout="intrinsic" />
      </div>
      <div className="title-container">
        <h1>
          Sorting Visualizer
        </h1>
      </div>
      <div className='ignore burger' onClick={openMenu}>
        <span className='patty ignore'></span>
        <span className='patty ignore'></span>
        <span className='patty ignore'></span>
        {open &&
          <div className="menu" ref={wrapperRef}>
            <Link href="/bubble">
              <div className='menu-btn'>
                <BubbleChartIcon sx={{ color: 'blue' }} />
                <span className='menu-text'>Bubble Sort</span>
              </div>
            </Link>
            <Link href="/insertion">
              <div className='menu-btn'>
                <CalculateIcon sx={{ color: 'blue' }} />
                <span className='menu-text'>Insertion Sort</span>
              </div>
            </Link>
            <Link href="/selection">
              <div className='menu-btn'>
                <EqualizerIcon sx={{ color: 'blue' }} />
                <span className='menu-text'>Selection Sort</span>
              </div>
            </Link>
            <Link href="/quick">
              <div className='menu-btn'>
                <ScienceIcon sx={{ color: 'blue' }} />
                <span className='menu-text'>Quick Sort</span>
              </div>
            </Link>
            <div className='menu-copyright'>
                    <p className="copyright"> &copy;{new Date().getFullYear()}&nbsp;Brandon Taft</p>
                    <a className="" href="/sitemap.xml">
                        <span > Sitemap </span>
                    </a>
                </div>
          </div>
        }
      </div>
      <div className="svg-container">
        <svg className="wave" preserveAspectRatio="xMinYMin meet" x="0px" y="0px" viewBox="0 0 1920 81.717" enableackground="new 0 0 1920 81.717">
          <path
            d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z">
          </path>
        </svg>
      </div>
    </header>
  )
};

export default Header;