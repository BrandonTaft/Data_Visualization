import Link from './Link';
import Image from 'next/image';
import github from "../../public/icons/github.png";
import gmail from "../../public/icons/gmail-logo.png";
import huge from "../../public/icons/huge.png";
import linked from "../../public/icons/linked.png";
import avatar from "../../public/images/ava.png";

function Footer({ path }) {
    return (
        <>
            <div className="footer-svg-container">
                <svg className="footer-wave wave" preserveAspectRatio="xMinYMin meet" x="0px" y="0px" viewBox="0 0 1920 81.717" enableackground="new 0 0 1920 81.717">
                    <path
                        d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z">
                    </path>
                </svg>
            </div>
            <div className="footer" >
                <div className='avatar'>
                    <Image className="ava" alt="Brandon Taft" src={avatar} height={80} width={53} />
                </div>
                <div className='my-description'>
                    <h4 className="hi">Brandon Taft</h4>
                    <div className='socials'>
                        <a href="https://github.com/BrandonTaft" target="_blank" rel="noreferrer">
                            <Image src={github} alt="github" width={40} height={40} />
                        </a>
                        <a href="https://www.brandontaft.net/" target="_blank" rel="noreferrer">
                            <Image src={huge} alt="logo" width={40} height={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank" rel="noreferrer">
                            <Image src={linked} alt="linkedIn-logo" width={40} height={40} />
                        </a>
                        <a href="mailto:btaftcan@gmail.com" >
                            <Image src={gmail} alt="gmail-logo" width={50} height={40} />
                        </a>
                    </div>
                </div>
                <div className='btm-footer'>
                <div className='divider'></div>
                <div className="footer-links">
                    <Link href="/">
                        <span className={path === "/" ? "active-footer-link" : ""}>Home</span>
                    </Link>
                    <Link href="/bubble">
                        <span className={path === "/bubble" ? "active-footer-link" : ""}>Bubble</span>
                    </Link>
                    <Link href="quick">
                        <span className={path === "/quick" ? "active-footer-link" : ""}>Quick</span>
                    </Link>
                    <Link href="/insertion">
                        <span className={path === "/insertion" ? "active-footer-link" : ""}>Insertion</span>
                    </Link>
                    <Link href="/selection">
                        <span className={path === "/selection" ? "active-footer-link" : ""}>Selection</span>
                    </Link>
                </div>
                <div className='divider'></div>
                <div className='copyright-container'>
                    <p className="copyright"> &copy;{new Date().getFullYear()}&nbsp;Brandon Taft</p>
                    <a className="sitemap-link" href="/sitemap.xml">
                        <span > Sitemap </span>
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer