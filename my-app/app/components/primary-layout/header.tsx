import Link from "next/link.js"
import { Tel } from "./contacts"


export default function Header() {

    return (

        <header>

            <div className="top-header">
                <h1>Liljans Blommor</h1>
                <h1 id="tel">Tel: <Tel />

                    {/* <span className="tel">Laddar...</span> */}

                </h1>
            </div>

            <div className="sub-header">
                <nav>
                    <Link className="navBarText" href="/" replace > Startsida</Link>
                    <Link className="navBarText" href="/pages/products" replace >Produkter</Link>
                    <Link className="navBarText" href="/pages/products#flowerDeliveryTitle" replace>Blommogram</Link>
                    <Link className="navBarText" href="/pages/contact" replace>Kontakt</Link>
                    <Link className="navBarText" href="/pages/aboutus" replace>Om&nbsp;oss</Link>
                </nav>
            </div>

        </header >

    );

}