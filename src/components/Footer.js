import Link from './Link';
import Image from 'next/image';
import github from "../../public/icons/github.png";
import gmail from "../../public/icons/gmail-logo.png";
import huge from "../../public/icons/huge.png";
import linked from "../../public/icons/linked.png";

function Footer({ path }) {
    return (
            <div className="footer" >
            <div className="footer-links">
                    <Link href="/">
                        <span className={path === "/" ? "active-link" : "link"}>Home</span>
                    </Link>
                    <Link href="/bubble">
                        <span className={path === "/bubble" ? "active-link" : "link"}>Bubble</span>
                    </Link>
                    <Link href="quick">
                        <span className={path === "/quick" ? "active-link" : "link"}>Quick</span>
                    </Link>
                    <Link href="/insertion">
                        <span className={path === "/insertion" ? "active-link" : "link"}>Insertion</span>
                    </Link>
                    <Link href="/selection">
                        <span className={path === "/selection" ? "active-link" : "link"}>Selection</span>
                    </Link>
                </div>
                <div className='divider'></div>
                <div className='btm-footer'>
                
                <div className='my-description'>
                    <div className='socials'>
                        <a href="https://github.com/BrandonTaft" target="_blank" rel="noreferrer" className='social-image'>
                            <Image src={github} alt="github" width={30} height={30} />
                        </a>
                        <a href="https://www.brandontaft.net/" target="_blank" rel="noreferrer" className='social-image'>
                            <Image src={huge} alt="logo" width={30} height={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank" rel="noreferrer" className='social-image'>
                            <Image src={linked} alt="linkedIn-logo" width={30} height={30} />
                        </a>
                        <a href="mailto:btaftcan@gmail.com" className='email'>
                            <Image src={gmail} alt="gmail-logo" width={40} height={30} />
                        </a>
                    </div>
                </div>
                <div className='copyright-container'>
                    <p className="copyright"> &copy;{new Date().getFullYear()}&nbsp;Brandon Taft</p>
                    <a href="/sitemap.xml">
                        <span > Sitemap </span>
                    </a>
                </div>
                </div>
            </div>
    )
}

export default Footer