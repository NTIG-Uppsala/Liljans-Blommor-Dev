import { Tel, Mail } from "@/app/components/primary-layout/contacts"

export default function Temp() {

    return (

        <main>

            <h2>Våra Produkter</h2>
            <div className="sub-main">
                <div id="gallery" data-page="productsPage">
                    <img id="loading" src="../assets/gifs/loading.gif" alt=""></img>
                </div>
                <table id="productTable">
                </table>
                <label className="toggle">
                    <input type="checkbox" id="taxToggle"></input>
                    <span className="option incl">Inklusive moms</span>
                    <span className="option excl">Exklusive moms</span>
                    <span className="slider"></span>
                </label>
            </div>

            <div id="flowerDeliveryTitleContainer">

                <h2 id="flowerDeliveryTitle">Blommogram</h2>

            </div>

            <section className="flowerDelivery">

                <h2>Blommogram?</h2>

                <p>Blommogram är ett blombud du kan beställa för att leverera en blombeställning till en adress på distans,
                    exempelvis när
                    någon
                    fyller år.</p>
                <p>Här nedan kan man skriva in postnumret till den adress du funderar på att skicka till för att se om
                    adressen är tillgänglig.</p>

                <h3>Postnummer</h3>

                <label className="addressInput" htmlFor="postalCode">
                    <span className="locationIcon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"></path>
                            <circle cx="12" cy="9" r="2.5"></circle>
                        </svg>
                    </span>

                    <input type="text" id="postalCode" name="postalCode" placeholder="ex: 95959" inputMode="numeric"
                        autoComplete="postal-code" maxLength={6} pattern="/[^0-9\s\-]/g, ''{5}"
                        required></input>
                </label>

                <div id="flowerDeliveryAvailableBox"></div>

                <p>För att beställa ett blommogram, kontakta oss via telefon eller e-post:</p>

                <ul>
                    <li>Tel: <span className="tel"><Tel /></span></li>
                    <li>E-post: <span className="mail"> <Mail /> </span></li>
                </ul>
            </section>

        </main>

    );

}