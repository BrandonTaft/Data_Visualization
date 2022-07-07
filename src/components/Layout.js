import NavBar from "./NavBar";
import Background from "./Background";
import { useRouter } from 'next/router';


function Layout({ children }) {
    const router = useRouter();
    let path = router.pathname;
    // let className = "content";
    // if(path === '/'){
    //     className += " home-background";
    // } 
    return (

        <div className="layout" >
            {path === '/' ? "" : <><NavBar path={path} /><Background /></>}
            {/* <div className={className}> */}
            
                {children}
            
        </div>
    )
}

export default Layout