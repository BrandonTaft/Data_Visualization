import NavBar from "./NavBar";
import { useRouter } from 'next/router';


const layoutStyle = {
    display: "flex",
    position:"relative",
    flexFlow: "column",
    height: "100vh",
    width: "100%",
};

const contentStyle = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    zIndex:"0"
};



function Layout({ children }) {
    const router = useRouter();
    let title = router.pathname;
    return (

        <div className="Layout" style={layoutStyle}>
            <NavBar title={title}/>
            <div className="Content" style={contentStyle}>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout