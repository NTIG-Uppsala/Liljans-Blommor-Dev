import { OpeningHours } from "@/app/lib/data"

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