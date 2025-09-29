function hitung(operator) {
    let angka1 = document.getElementById("angka1").value.trim();
    let angka2 = document.getElementById("angka2").value.trim();
    let hasilBox = document.getElementById("hasil");
    let hasil = "";

    // Validasi input kosong
    if (angka1 === "" || angka2 === "") {
        hasilBox.innerText = "Input tidak boleh kosong!";
        hasilBox.style.color = "red";
        return;
    }

    // Validasi angka
    if (isNaN(angka1) || isNaN(angka2)) {
        hasilBox.innerText = "Input harus berupa angka!";
        hasilBox.style.color = "red";
        return;
    }

    // Ubah ke number
    angka1 = parseFloat(angka1);
    angka2 = parseFloat(angka2);

    // Hitung sesuai operator
    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            if (angka2 === 0) {
                hasilBox.innerText = "Tidak bisa bagi 0!";
                hasilBox.style.color = "red";
                return;
            }
            hasil = angka1 / angka2;
            break;
    }

    // Tampilkan hasil valid
    hasilBox.innerText = hasil;
    hasilBox.style.color = "black";
}
