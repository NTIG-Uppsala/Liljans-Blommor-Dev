export default function Footer() {

    return (

        <footer>
            <h2>Liljans Blommor</h2>

            <div className="sub-footer">
                <div>
                    <b>Kontakt</b>
                    <ul>
                        <li>Tel: <span className="tel">Laddar...</span></li>
                        <li>E-post: <span className="mail">Laddar...</span></li>
                    </ul>
                </div>

                <div>
                    <b>Adress</b>
                    <ul>
                        <li className="location">Laddar...</li>
                    </ul>
                </div>

                <div>
                    <b>Öppettider</b>
                    <ul>
                        <li className="weekdays">Laddar...</li>
                        <li className="saturday">Laddar...</li>
                        <li className="sunday">Laddar...</li>
                    </ul>
                </div>
            </div>
        </footer>

    );

}