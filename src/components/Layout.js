import NavBar from "./NavBar";
import Background from "./Background";
import { useRouter } from 'next/router';


function Layout({ children }) {
    const router = useRouter();
    let path = router.pathname;

    return (

        <div className="layout" >
            {path === '/' ? "" : <><NavBar path={path} /><Background /></>}
            {children}
        </div>
    )
}

export default Layout