document.getElementById('beregn-knapp').addEventListener('click', function () {
    const passasjerer = parseInt(document.getElementById('passasjerer').value);
    const kostnadPerPassasjer = parseFloat(document.getElementById('kostnad-per-passasjer').value);

    if (isNaN(passasjerer) || isNaN(kostnadPerPassasjer)) {
        alert('Vennligst skriv inn gyldige tall for passasjerer og kostnad per passasjer.');
        return;
    }

    const totalKostnad = passasjerer * kostnadPerPassasjer;
    const kostnadMelding = `Totalpris for ${passasjerer} passasjer(er) er ${totalKostnad.toFixed(2)} NOK.`;

    document.getElementById('kostnad-melding').textContent = kostnadMelding;
    document.getElementById('totalkost').classList.remove('hidden');
});

document.getElementById('bestillingsskjema').addEventListener('submit', function (event) {
    event.preventDefault(); // Hindre at skjemaet sendes på tradisjonell måte

    const skjemaData = new FormData(event.target);
    const reiseDato = skjemaData.get('dato-avreise');
    const passasjerer = parseInt(document.getElementById('passasjerer').value);
    const navn = skjemaData.get('navn');
    const epost = skjemaData.get('epost');
    const kostnadPerPassasjer = parseFloat(document.getElementById('kostnad-per-passasjer').value);
    const totalKostnad = passasjerer * kostnadPerPassasjer;

    const resultatMelding = `
        Takk for din bestilling, ${navn}!<br>
        Reisedato: ${reiseDato}<br>
        Antall passasjerer: ${passasjerer}<br>
        Totalpris: ${totalKostnad.toFixed(2)} NOK<br>
        Bekreftelsen er sendt til ${epost}.
    `;

    document.getElementById('resultat-melding').innerHTML = resultatMelding;
    document.getElementById('kostnad-resultat').classList.remove('hidden');
    event.target.reset(); // Tøm skjemaet
});
