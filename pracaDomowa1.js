let imiona=["JanNowak","Kowalski Jan","Maria Jurek"]
console.log(imiona)       // Sprawdzenie czy działa funkcja 
let wyswietlenieTablicy= document.getElementById("TablicaPrzedOdwroceniem")
wyswietlenieTablicy.innerHTML= imiona//wyswietlenie w divie tablicy przed odwróceniiem
let imionaOdTyłu =imiona.reverse()//odwracanie poprzez funkcje reverse()
console.log(imionaOdTyłu) // Sprawdzenie czy działa funkcja reverse()
let element=document.getElementById("wyswietlenie")
let newElement = document.createElement('span')//tworzenie nowego elementu
let maketxt=document.createTextNode(imionaOdTyłu)//tworzenie wartosci dla elemntu i przypisanie go
element.appendChild(newElement).appendChild(maketxt)//wygenerowanie elementu