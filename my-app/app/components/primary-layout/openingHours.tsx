import { weekdays, saturday, sunday } from "../../../data/openingHours.json"

export function Weekdays() {
    return (
        <div>Vardagar: {weekdays}</div>
    );
}

export function Saturday() {
    return (
        <div>Lördagar: {saturday}</div>
    );
}

export function Sunday() {
    return (
        <div>Söndagar: {sunday}</div>
    );
}