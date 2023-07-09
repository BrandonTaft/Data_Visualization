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
        Sorting
      </h1>
      <h1>
        Visualizer
      </h1>
    </div>
    <div className='burger' onClick={openMenu}>
      <span></span>
      <span></span>
      <span></span>
    
    {open &&
    <div className="header-menu about-me-div" ref={wrapperRef}>
      <a href="https://github.com/BrandonTaft" target="_blank" rel="noreferrer">
        <Image src="/icons/github.png" alt="github" layout="intrinsic" width={20} height={20} />
        <div className="contacts"> Github</div>
      </a>
      <a href="https://www.brandontaft.net/" target="_blank" rel="noreferrer">
        <Image src="/icons/huge.png" alt="logo" layout="intrinsic" width={20} height={20} />
        <div className="contacts">Portfolio</div>
      </a>
      <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank" rel="noreferrer">
        <Image src="/icons/linked.png" alt="linkedIn-logo" layout="intrinsic" width={20} height={20} />
        <div className="contacts">Linked In</div>
      </a>
      <a href="mailto:btaftcan@gmail.com" >
        <Image src="/icons/gmail-logo.png" alt="gmail-logo" layout="intrinsic" width={22} height={13} />
        <div className="email contacts">Email Me</div>
      </a>
      <div className='nav-copyright-container'>
        <div className='inner-copyright-container'>
          <p className="copyright"> &copy;{new Date().getFullYear()} </p>
          <p className="copyright"> Brandon Taft </p>
        </div>
        <a className="sitemap-link" href="/sitemap.xml">
          <div className='map-box' > Sitemap </div>
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