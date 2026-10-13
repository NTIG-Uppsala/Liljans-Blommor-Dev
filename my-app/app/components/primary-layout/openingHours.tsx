import { weekdays, saturday, sunday } from "../../../data/openingHours.json"

export function Weekdays() {
    return (
        <li>Vardagar: {weekdays}</li>
    )
}

export function Saturday() {
    return (
        <li>Lördagar: {saturday}</li>
    )
}

export function Sunday() {
    return (
        <li>Söndagar: {sunday}</li>
    )
}