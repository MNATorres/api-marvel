import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"
import "../styles/SimplePage.css"
import Video from "./Video"

interface SimplePageType {
    children: React.ReactNode
}
export const SimplePage: React.FC<SimplePageType> = ({ children }) => {
    return <div className="pageContainer">
        <Header />
        <div className="pageContent">
            {children}</div>
        <Navigation />
        <Video />
        <Footer />
    </div>
}
