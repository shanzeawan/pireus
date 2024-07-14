document.addEventListener('DOMContentLoaded', function() {
    const quizBeholder = document.getElementById('quiz');
    const resultaterBeholder = document.getElementById('resultater');
    const sendInnKnapp = document.getElementById('send-knap');

    const mineSporsmal = [
        {
            sporsmal: "Hva er Pireus kjent for?",
            svar: {
                a: "Mat",
                b: "Historiske monumenter",
                c: "Sol"
            },
            riktigSvar: "b"
        },
        {
            sporsmal: "Hvilken film bidro til Pireus' globale berømmelse?",
            svar: {
                a: "Never on Sunday",
                b: "Coraline",
                c: "Tangled"
            },
            riktigSvar: "a"
        },
        {
            sporsmal: "Hva er hovedhavnen i Athen?",
            svar: {
                a: "River Thames",
                b: "Pireus",
                c: "Akerselva"
            },
            riktigSvar: "b"
        }
    ];

    function byggQuiz() {
        const utdata = [];

        mineSporsmal.forEach((gjeldendeSporsmal, sporsmalNummer) => {
            const svar = [];
            for (const bokstav in gjeldendeSporsmal.svar) {
                svar.push(
                    `<label>
                        <input type="radio" name="sporsmal${sporsmalNummer}" value="${bokstav}">
                        ${bokstav} : ${gjeldendeSporsmal.svar[bokstav]}
                    </label>`
                );
            }
            utdata.push(
                `<div class="sporsmal">${gjeldendeSporsmal.sporsmal}</div>
                <div class="svar">${svar.join('<br>')}</div>
                <br><br>` // Adding two line breaks after each question
            );
        });

        quizBeholder.innerHTML = utdata.join('');
    }

    function visResultater() {
        const svarBeholdere = quizBeholder.querySelectorAll('.svar');
        let antallRiktige = 0;

        mineSporsmal.forEach((gjeldendeSporsmal, sporsmalNummer) => {
            const svarBeholder = svarBeholdere[sporsmalNummer];
            const valg = `input[name=sporsmal${sporsmalNummer}]:checked`;
            const brukerSvar = (svarBeholder.querySelector(valg) || {}).value;

            if (brukerSvar === gjeldendeSporsmal.riktigSvar) {
                antallRiktige++;
                svarBeholdere[sporsmalNummer].style.color = 'lightgreen';
            } else {
                svarBeholdere[sporsmalNummer].style.color = 'red';
            }
        });

        resultaterBeholder.innerHTML = `${antallRiktige} av ${mineSporsmal.length} riktige`;
    }

    byggQuiz();
    sendInnKnapp.addEventListener('click', visResultater);
});
