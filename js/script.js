// script.js

function konversiSuhu() {
    var suhuInput = parseFloat(document.getElementById("suhu").value);
    if (isNaN(suhuInput)) {
        document.getElementById("hasil").innerHTML = "Masukkan suhu yang valid!";
        document.getElementById("hasil").classList.add("error");
        return;
    }

    var unit = document.getElementById("unit").value;
    var hasil, penjelasan;
    if (unit === "celsius") {
        hasil = suhuInput * 9 / 5 + 32;
        penjelasan = suhuInput + " Celsius sama dengan " + hasil.toFixed(2) + " Fahrenheit.";
    } else {
        hasil = (suhuInput - 32) * 5 / 9;
        penjelasan = suhuInput + " Fahrenheit sama dengan " + hasil.toFixed(2) + " Celsius.";
    }

    document.getElementById("hasil").innerHTML = penjelasan;
    document.getElementById("hasil").classList.remove("error");

    // Mengubah warna tombol setelah diklik
    document.getElementById("konversiBtn").classList.remove("pink");
    document.getElementById("konversiBtn").classList.add("blue");
    document.getElementById("resetBtn").classList.remove("blue");
    document.getElementById("resetBtn").classList.add("pink");
}

function reset() {
    document.getElementById("suhu").value = "";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("hasil").classList.remove("error");

    // Mengembalikan warna tombol ke warna semula
    document.getElementById("konversiBtn").classList.remove("blue");
    document.getElementById("konversiBtn").classList.add("pink");
    document.getElementById("resetBtn").classList.remove("pink");
    document.getElementById("resetBtn").classList.add("blue");
}

function scrollToTemperatureForm() {
    document.getElementById('temperature-form').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollToFormula() {
    document.getElementById('formula-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
