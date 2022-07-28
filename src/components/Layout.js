import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from 'next/router';
import Comments from "./Comments";

function Layout({ children }) {
    const router = useRouter();
    let path = router.pathname;

    return (
        <div className="layout" >
            {path === '/' ? "" : <NavBar path={path} />}
            {children}
            <Footer />
            <Comments />
        </div>
    )
}

export default Layout