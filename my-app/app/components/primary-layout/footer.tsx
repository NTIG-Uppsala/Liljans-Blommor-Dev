import { Tel, Mail, Location } from "./contacts";
import { Weekdays, Saturday, Sunday } from "./openingHours"

export default function Footer() {

    return (

        <footer>
            <h2>Liljans Blommor</h2>

            <div className="sub-footer">
                <div>
                    <b>Kontakt</b>
                    <ul>
                        <li>Tel: <Tel /></li>
                        <li id="mail">E-post: <Mail /></li>
                    </ul>
                </div>

                <div>
                    <b>Adress</b>
                    <ul>
                        <Location />
                    </ul>
                </div>

                <div>
                    <b>Öppettider</b>
                    <ul>
                        <li> <Weekdays /> </li>
                        <li> <Saturday /> </li>
                        <li> <Sunday /> </li>
                    </ul>
                </div>
            </div>
        </footer>

    );

}