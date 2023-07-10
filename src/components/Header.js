import { useState, useRef } from 'react';
import Image from 'next/image';
import logo from "../../public/icons/huge.png";
import useOnOutsideClick from './useOnOutsideClick';

const Header = () => {
  const wrapperRef = useRef();
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(true)
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
    <div className='burger' onClick={openMenu}>
      <span className='patty'></span>
      <span className='patty'></span>
      <span className='patty'></span>
    
    {open &&
    <div className="about-me-div" ref={wrapperRef}>
      <a href="https://github.com/BrandonTaft" target="_blank" rel="noreferrer" className='about-me-btn github'>
        <Image src="/icons/github.png" alt="github" layout="intrinsic" width={30} height={30} />
        <div className="about-me-text"> github</div>
      </a>
      
      <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank" rel="noreferrer" className='about-me-btn linked'>
        <Image src="/icons/linked.png" alt="linkedIn-logo" layout="intrinsic" width={30} height={30} />
        <div className="about-me-text">Linked In</div>
      </a>
      <a href="https://www.brandontaft.net/" target="_blank" rel="noreferrer" className='about-me-btn folio'>
        <Image src="/icons/huge.png" alt="logo" layout="intrinsic" width={30} height={30} />
        <div className="about-me-text">Portfolio</div>
      </a>
      <a href="mailto:btaftcan@gmail.com" className='about-me-btn gmail' >
        <Image src="/icons/gmail-logo.png" alt="gmail-logo" layout="intrinsic" width={32} height={23} />
        <div className="about-me-text">Email</div>
      </a>
      <div>
        <div className='about-me-copyright-container'>
          <p className="copyright"> &copy;{new Date().getFullYear()} </p>
          <p className="copyright"> Brandon Taft </p>
        </div>
        <a href="/sitemap.xml" className="about-me-sitemap">
          <div className="about-me-sitemap"> sitemap </div>
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
)};

export default Header;