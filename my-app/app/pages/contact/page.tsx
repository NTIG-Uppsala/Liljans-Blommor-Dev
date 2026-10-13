import { Tel, Mail, Location } from "@/app/components/primary-layout/contacts"
import { Weekdays, Saturday, Sunday } from "@/app/components/primary-layout/openingHours"

export default function Temp() {

    return (

        <div className="sub-main">
            <b>Kontakt</b>
            <ul>
                <li>Tel: <Tel /> </li>
                <li>E-post: <span className="mail"> <Mail /> </span></li>
            </ul>

            <b>Adress</b>
            <ul>
                <li className="location"> <Location /> </li>
            </ul>

            <b>Öppettider</b>
            <ul>
                <li className="weekdays"> <Weekdays /> </li>
                <li className="saturday"> <Saturday /> </li>
                <li className="sunday"> <Sunday /> </li>
            </ul>
        </div >

    );

}