import { tel } from "../../../data/contacts.json";
import Link from "next/link.js"

export default function Header() {

    return (

        <header>

            <div className="top-header">
                <h1>Liljans Blommor</h1>
                <h1 id="tel">Tel: {tel}

                    {/* <span className="tel">Laddar...</span> */}

                </h1>
            </div>

            <div className="sub-header">
                <nav>
                    <Link className="navBarText" href={{ pathname: "pages/page.tsx" }} > Startsida</Link>
                    <a className="navBarText" href="pages/products.tsx">Produkter</a>
                    <a className="navBarText" href="pages/products.tsx#flowerDeliveryTitle">Blommogram</a>
                    <a className="navBarText" href="pages/contact.tsx">Kontakt</a>
                    <a className="navBarText" href="pages/aboutus.tsx">Om&nbsp;oss</a>
                </nav>
            </div>

        </header >

    );

}