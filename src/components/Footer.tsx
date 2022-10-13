import SlideFooter from "./SlideFooter";
import './../styles/Footer.css';
import FooterMovil from "./FooterMovil";




export default function Footer() {
    return (
        <div className="containerFooter">
            <div className="footerDesktop">
                <SlideFooter />
            </div>
            <div className="footerMovil">
                <FooterMovil />
            </div>
            <div className="authorFooter">
                <p> Page developed by Matias Torres </p>
                <p> Thank you for viewing the content </p>
            </div>
        </div>
    )
}