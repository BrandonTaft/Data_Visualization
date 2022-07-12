import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from 'next/router';

function Layout({ children }) {
    const router = useRouter();
    let path = router.pathname;

    return (
        <div className="dark layout" >
            {path === '/' ? "" : <NavBar path={path} />}
            {children}
            <Footer />
        </div>
    )
}

export default Layout