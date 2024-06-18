function stvoriRacun(pocetniIznos) {
    var trenutniIznos = pocetniIznos;

    return {
        customer: 'John',
        uplati: function (iznos) {
            trenutniIznos += iznos;
            return `Stanje računa korisnika: ${this.customer}: ${trenutniIznos} €`;

        },
        isplati: function (iznos) {
            if(iznos <= trenutniIznos) {
                trenutniIznos -= iznos;
                return `Stanje računa korisnika: ${this.customer}: ${trenutniIznos} €`;
            } else {
                return `Korisnik ${this.customer} nema dovoljno sredstava na računu za isplatu`;
            }
        }
    };
}

const mojRačun = stvoriRacun(100);
console.log(mojRačun.uplati(50));
console.log(mojRačun.isplati(30));
console.log(mojRačun.isplati(150));
