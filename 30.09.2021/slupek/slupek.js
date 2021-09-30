ilosc = prompt("Podaj procent zawartości (0-100):")
kreska = "| "
reszta = 100 - ilosc
for (i = 0; i < ilosc; i++) {
    document.write(kreska.fontcolor("blue"));
}

for (i = 0; i < reszta; i++) {
    document.write(kreska.fontcolor("pink"));
}