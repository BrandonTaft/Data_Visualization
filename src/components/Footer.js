import Link from './Link';
import Image from 'next/image';

function Footer() {

    return (
        <>
            <div className="footer" >
                <Image className='ava' alt="Brandon Taft" src="/images/ava.png" height={80} width={60} />
                <div className='my-description'>
                    <div className="hi">Hi! I&apos;m Brandon,</div>
                    <div>
                        <span className='rwd-line'>I am a Web Developer focused on further developing my knowledge of CS concepts.</span>
                        <span className='rwd-line'>&nbsp;I aim to grow as an engineer by trying to help others understand basic programming.</span></div>
                </div>
                <div className='middle-container'>
                    <div className='socials'>
                        <a href="https://github.com/BrandonTaft" target="_blank" rel="noreferrer">
                            <Image src="/icons/github.png" alt="github" layout="intrinsic" width={30} height={30} />
                        </a>
                        <a href="https://www.brandontaft.net/" target="_blank" rel="noreferrer">
                            <Image src="/icons/my-logo.png" alt="my-logo" layout="intrinsic" width={30} height={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank" rel="noreferrer">
                            <Image src="/icons/linked.png" alt="linkedIn-logo" layout="intrinsic" width={30} height={30} />
                        </a>
                        <a href="mailto:btaftcan@gmail.com" >
                            <Image src="/icons/gmail-logo.png" alt="gmail-logo" layout="intrinsic" width={30} height={30} />
                        </a>
                    </div>
                    <div className='copyright-container'>
                        <p className="copyright"> &copy;{new Date().getFullYear()} </p>
                        <p> Brandon Taft </p>

                        <a className="sitemap-link" href="/sitemap.xml">
                            <span > Sitemap </span>
                        </a>
                    </div>
                </div>

                <div className="footer-link-container" id="footer-link-container">
                    <span className="navigate-footer">Navigate</span>
                    <div className="footer-link-inner">
                        <div className="footer-links">
                            <Link href="/">
                                <span>Home</span>
                            </Link>

                            <Link href="/bubble">
                                <span>Bubble Sort</span>
                            </Link>

                            <Link href="quick">
                                <span>Quick Sort</span>
                            </Link>
                        </div>
                        <div className="footer-links">
                            <Link href="/insertion">
                                <span>Insertion Sort</span>
                            </Link>
                            <Link href="/selection">
                                <span>Selection Sort</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer