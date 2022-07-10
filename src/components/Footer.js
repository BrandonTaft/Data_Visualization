import React, { useState, useEffect } from 'react';
import Link from './Link';
import Image from 'next/image';


function Footer() {

    return (
        <div className="dark footer" >
                <Image className='profile-pic' src="/images/hoodie1.png" alt="logo" width="80px" height="80px" />
                <div className='my-description'>
                    <h4>Hi! I'm Brandon,</h4>
                    <div>I am a Web Developer with a passion for building applications using React and Node.js.</div>
                </div>
            <div className='middle-container'>
                <div className='socials'>
                    <a href="https://github.com/BrandonTaft" target="_blank">
                        <Image src="/icons/github.png" alt="github" layout="intrinsic" width={30} height={30} />
                    </a>
                    <a href="https://www.brandontaft.net/" target="_blank">
                        <Image src="/icons/my-logo.png" alt="my-logo" layout="intrinsic" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank">
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

            <div className="footer-link-container">
                <h3>Navigate</h3>
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

                        <Link href="">
                            <span>Selection Sort</span>
                        </Link>
                    </div>
                    <div className="footer-links">
                        <Link href="/insertion">
                            <span>Insertion Sort</span>
                        </Link>
                        <Link href="">
                            <span>Bucket Sort</span>
                        </Link>
                        <Link href="">
                            <span>Merge Sort</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer