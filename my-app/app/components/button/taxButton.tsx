
import { useEffect } from "react";

export default function TaxButton(setCheck: any) {


    let taxButton: HTMLInputElement;

    function checkAndUncheck() {

        setCheck.setCheck(taxButton.checked);
        console.log(taxButton.checked);
    }

    useEffect(() => {

        taxButton = (document.getElementById("taxToggle") as HTMLInputElement);

    })

    return (

        <>
            <label className="toggle">
                <input type="checkbox" id="taxToggle" onChange={checkAndUncheck}></input>
                <span className="option incl">Inklusive moms</span>
                <span className="option excl">Exklusive moms</span>
                <span className="slider"></span>
            </label>
        </>
    )

}