import Tel from "@/app/components/primary-layout/tel"

export default function Temp() {

    return (

        <div className="sub-main">
            <b>Kontakt</b>
            <ul>
                <li>Tel: <Tel /> </li>
                <li>E-post: <span className="mail">Laddar...</span></li>
            </ul>

            <b>Adress</b>
            <ul>
                <li className="location">Laddar...</li>
            </ul>

            <b>Öppettider</b>
            <ul>
                <li className="weekdays">Laddar...</li>
                <li className="saturday">Laddar...</li>
                <li className="sunday">Laddar...</li>
            </ul>
        </div>

    );

}