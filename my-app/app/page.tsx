import { Tel, Mail, Location } from "@/app/components/primary-layout/contacts";
import { Weekdays, Saturday, Sunday } from "@/app/components/primary-layout/openingHours";
import ProductsShowcase from "@/app/components/home-page/bestSellerProducts"
import Link from "next/link.js";



export default function Home() {
  return (

    <main>

      <h2>Välkommen till<br></br>
        Liljans Blommor
      </h2>

      <h3>Öppettider
        <p className="noMargin weekdays"> <Weekdays /> </p>
        <p className="noMargin saturday"> <Saturday /> </p>
        <p className="noMargin sunday"> <Sunday /> </p>
      </h3>

      <div className="sub-main">


        <h1>Bästsäljare</h1>

        <div id="gallery" data-page="indexPage">

          {/* <img id="loading" src="../assets/gifs/loading.gif" alt="Loading..."></img> */}

          <ProductsShowcase />

        </div>
        <div className="products-button">
          <Link href="/pages/products">Gå till produkter</Link>
        </div>


        <div className="toggleContainer">
          <label className="toggle">
            <input type="checkbox" id="taxToggle"></input>
            <span className="option incl">Inklusive moms</span>
            <span className="option excl">Exklusive moms</span>
            <span className="slider"></span>
          </label>
        </div>


      </div>

    </main>

  );
}
