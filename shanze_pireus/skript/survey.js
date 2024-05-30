document.getElementById('undersokelse-skjema').addEventListener('submit', function(event) {
    event.preventDefault();
    const spm1 = document.getElementById('spm1').value;
    const spm2 = document.getElementById('spm2').value;
    const spm3 = document.querySelector('input[name="spm3"]:checked').value;

    const result = {
        'Favorittdel av Pireus': spm1,
        'Antall besøk': spm2,
        'Vil anbefale': spm3
    };

    document.getElementById('resultat-utdata').textContent = JSON.stringify(result, null, 2);
    document.getElementById('undersokelse-resultat').classList.remove('hidden');
});
