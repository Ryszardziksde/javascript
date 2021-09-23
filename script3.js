function day() {
    day = prompt("Jaki jest dzisiaj dzień tygodnia? (1-7)")
    if (day<=5 & day>=1)
        alert("Dzień roboczy")
        else if (day>5 & day<=7)
            alert("Weekend")
            else 
            alert("Podaj prawidłowy dzień tygodnia")
}