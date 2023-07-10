import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from 'next/router';

function Layout({ children }) {
    const router = useRouter();
    let path = router.pathname;
    return (
        <div className="layout" >
            {/* // Hide navbar in homepage */}
            {path === '/' ? "" : <NavBar path={path} />}
            {children}
            <Footer path={path}/>
        </div>
    )
}
export default Layout