import NavBar from "./Navbar";

export default function Layout({children}){
    return <div>
        <NavBar />
        <div>{children}</div>
    </div>
}