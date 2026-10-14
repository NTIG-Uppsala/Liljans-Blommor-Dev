import Link from "next/link.js";
import { Tel } from "./contacts";


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
                    <Link className="navBarText" href="/" > Startsida</Link>
                    <Link className="navBarText" href="/pages/products">Produkter</Link>
                    <Link className="navBarText" href="/pages/products#flowerDeliveryTitle">Blommogram</Link>
                    <Link className="navBarText" href="/pages/contact">Kontakt</Link>
                    <Link className="navBarText" href="/pages/aboutus">Om&nbsp;oss</Link>
                </nav>
            </div>

        </header >

    );

}