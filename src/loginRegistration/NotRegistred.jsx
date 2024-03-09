/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
export function NotRegistredComp({onClose = false}) {


    return <div className="notRegistredBackground">
        <div className="notRegistred">
        <label>
            <p>Za poručivanje potrebno je da se prijavis na svoj nalog.</p>
            <button>PRIJAVI SE</button>
        </label>
        <label>
            <p>Još uvek nemaš nalog?</p>
            <button>REGISTRUJ SE</button>
        </label>
        </div>
    </div>
}