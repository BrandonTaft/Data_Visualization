import Link from './Link';
import Image from 'next/image';
import { Provider, ClapButton } from "@lyket/react";


function Footer() {

    return (
        <>     
        <div className="dark footer" >
            <Image alt="Brandon Taft" src="/images/ava.png" height={80} width={60} />
            <div className='my-description'>
                <div className="hi">Hi! I&apos;m Brandon,</div>
               <div><span className='rwd-line'>I am a Web Developer that loves building applications using React and Node.js.</span> <span className='rwd-line'>If&nbsp;you liked my work or found it helpful, please feel free to hit the like button.</span></div>
            </div>
            <label className='like-it'>
            <Provider
                apiKey="pt_9631f43a75cbdb23263b1a4942d68b"
                theme={{
                    colors: {
                        background: "ghostwhite",
                        text: "ghostwhite",
                        primary: "white"
                    }
                }}
            >
                <ClapButton
                    namespace="like-me"
                    id="applause"
                />
            </Provider>
            </label>
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

                        <Link href="">
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