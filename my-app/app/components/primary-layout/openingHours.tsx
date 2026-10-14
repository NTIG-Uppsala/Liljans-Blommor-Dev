<<<<<<< Updated upstream
import { weekdays, saturday, sunday } from "../../../data/openingHours.json";
=======
import { OpeningHours } from "@/app/lib/data"
>>>>>>> Stashed changes

export function Weekdays() {
    return (
        <div>Vardagar: {OpeningHours.weekdays}</div>
    );
}

export function Saturday() {
    return (
        <div>Lördagar: {OpeningHours.saturday}</div>
    );
}

export function Sunday() {
    return (
        <div>Söndagar: {OpeningHours.sunday}</div>
    );
}