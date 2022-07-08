import React, { useState, useEffect } from 'react';
import Link from './Link';
import Image from 'next/image';


function Footer() {
    const [pic, setPic] = useState([]);

    // useEffect(() => {
    //     const params =
    //     {
    //         // model: "https://d1a370nemizbjq.cloudfront.net/246b3438-80b3-47eb-9d53-39134c3991b1.glb",
    //         model: "https://d1a370nemizbjq.cloudfront.net/092d843b-f7a8-44b7-9f2e-e100abd56305.glb",
    //         scene: "fullbody-portrait-v1",
    //         armature: "ArmatureTargetMale",
    //         blendShapes: {}
    //     }
    //     const http = new XMLHttpRequest()
    //     http.open("POST", "https://render.readyplayer.me/render")
    //     http.setRequestHeader("Content-type", "application/json")
    //     http.send(JSON.stringify(params))
    //     http.onload = function () {
    //         let result = JSON.parse(http.responseText)
    //         setPic(result.renders[0])
    //     }
    // }, [])

    return (
        <div className="footer">
            <div>
                <Image src="/icons/the-bear.png" alt="logo" width="80px" height="80px" />
                <p className="copyright"> &copy;{new Date().getFullYear()} </p>
                <p> Brandon Taft </p>
            </div>
            <Link href="/sitemap.xml">
                <span className="sitemap-link"> Sitemap </span>
            </Link>
            <div>
            <div className="footer-link-container">
                <Link href="/">
                    <span>Home</span>
                </Link>

                <Link href="/bubble">
                    <span>Bubble</span>
                </Link>

                <Link href="">
                    <span>Quick</span>
                </Link>

                <Link href="">
                    <span>Selection</span>
                </Link>
            </div>
            <div className="footer-link-container">
                <Link href="/insertion">
                    <span>Insertion</span>
                </Link>
                <Link href="">
                    <span>Bucket</span>
                </Link>
                <Link href="">
                    <span>Merge</span>
                </Link>
            </div>
            </div>
            <div>
                <a href="https://github.com/BrandonTaft" target="_blank">
                    <Image src="/icons/github.png" alt="github" layout="intrinsic" width={20} height={20} />
                </a>
                <a href="https://www.brandontaft.net/" target="_blank">
                    <Image src="/icons/logo.png" alt="my-logo" layout="intrinsic" width={20} height={20} />
                </a>
                <a href="https://www.linkedin.com/in/brandonmtaft/" target="_blank">
                    <Image src="/icons/linked.png" alt="linkedIn-logo" layout="intrinsic" width={20} height={20} />
                </a>
                <a href="mailto:btaftcan@gmail.com" >
                    <Image src="/icons/gmail-logo.png" alt="gmail-logo" layout="intrinsic" width={20} height={20} />
                </a>
            </div>
        </div>
    )
}

export default Footer