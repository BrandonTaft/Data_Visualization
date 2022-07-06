import NavBar from "./NavBar";
import { useRouter } from 'next/router';


function NestedLayout({ children }) {
    const router = useRouter();
    let title = router.pathname;
    return (

        <div className="layout" >
            <NavBar title={title} />
            <div className="content" >
                {children}
            </div>
        </div>
    )
}

export default NestedLayout