const keithAlfabesi = {
    'A': [14, 3], 'B': [19, 2], 'C': [28, 3], 'D': [47, 4], 'E': [61, 6],
    'F': [75, 5], 'G': [122, 6], 'H': [149, 3], 'I': [183, 6], 'J': [199, 2],
    'K': [244, 6], 'L': [298, 3], 'M': [305, 6], 'N': [323, 6], 'O': [366, 6],
    'P': [427, 6], 'Q': [488, 6], 'R': [497, 4], 'S': [549, 6], 'T': [646, 6],
    'U': [795, 5], 'V': [911, 9], 'W': [969, 6], 'X': [1292, 6], 'Y': [1301, 11],
    'Z': [1499, 3]
};

function lookAndSay(sayi, adim) {
    sayi = BigInt(sayi);
    for (let i = 0; i < adim; i++) {
        let sayiStr = sayi.toString();
        let yeniSayi = "";
        let j = 0;
        while (j < sayiStr.length) {
            let count = 1;
            while (j + 1 < sayiStr.length && sayiStr[j] === sayiStr[j + 1]) {
                j++;
                count++;
            }
            yeniSayi += count.toString() + sayiStr[j];
            j++;
        }
        sayi = BigInt(yeniSayi);
    }
    return sayi.toString();
}

function modVeHarfDonusumu(sayi) {
    let modSonucu = BigInt(sayi) % 26n;
    if (modSonucu === 0n) return 'Z';
    return String.fromCharCode('A'.charCodeAt(0) + Number(modSonucu) - 1);
}

function sifrele() {
    let inputText = document.getElementById('inputText').value.toUpperCase();
    let sifrelenmisKelime = "";
    let harfTekrarSayilari = {};

    for (let harf of inputText) {
        if (keithAlfabesi[harf]) {
            harfTekrarSayilari[harf] = (harfTekrarSayilari[harf] || 0) + 1;
            let [baslangicDegeri, keithAdimi] = keithAlfabesi[harf];
            keithAdimi += harfTekrarSayilari[harf] - 1;
            let lookAndSaySonucu = lookAndSay(baslangicDegeri, keithAdimi);
            let sifrelenmisHarf = modVeHarfDonusumu(lookAndSaySonucu);
            sifrelenmisKelime += sifrelenmisHarf;
        } else {
            sifrelenmisKelime += harf;
        }
    }

    document.getElementById('result').innerText = "Şifrelenmiş Metin: " + sifrelenmisKelime;
}