export default function Header() {

    return (

        <header>

            <div className="top-header">
                <h1>Liljans Blommor</h1>
                <h1 id="tel">Tel: <span className="tel">Laddar...</span></h1>
            </div>

            <div className="sub-header">
                <nav>
                    <a className="navBarText" href="index.html">Startsida</a>
                    <a className="navBarText" href="products.html">Produkter</a>
                    <a className="navBarText" href="products.html#flowerDeliveryTitle">Blommogram</a>
                    <a className="navBarText" href="contact.html">Kontakt</a>
                    <a className="navBarText" href="aboutus.html">Om&nbsp;oss</a>
                </nav>
            </div>

        </header>

    );

}