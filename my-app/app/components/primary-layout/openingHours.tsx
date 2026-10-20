import { OpeningHours } from "@/app/lib/data"

export function Weekdays() {
    return (
        <>Vardagar: {OpeningHours.weekdays}</>
    );
}

export function Saturday() {
    return (
        <>Lördagar: {OpeningHours.saturday}</>
    );
}

export function Sunday() {
    return (
        <>Söndagar: {OpeningHours.sunday}</>
    );
}