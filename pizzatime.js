// begin hier je JavaScript commandos

const requirement = alert("kies je pizza's")
var klein = prompt("hoeveel klein pizza's", "")
var middel = prompt("Hoeveel middel pizza's", "")
var groot = prompt("Hoeveel grote pizza's", "")

var PK = 10;
var PM = 12;
var PG = 16;
var total = (PM * middel) + (PK * klein) + (PG * groot) ;
var tolatp = klein * 1 + middel * 1 + groot * 1;



document.write("Aantal" + "<br>")
document.write("kleine pizza's: " + klein)
document.write("<br>")
document.write("middel pizza's: " + middel)
document.write("<br>")
document.write("grote pizza's: " + groot)
document.write("<br>")
document.write("<br>")
document.write("totaal " + tolatp + " pizza's ")

document.write("<br>")



document.write("<br>")
document.write("Kleine Pizza's $ ")
document.write(PK * klein)
document.write("<br>")
document.write("Middel Pizza's $ ")
document.write(PM * middel)
document.write("<br>")
document.write("grote Pizza's $ ")
document.write(PG * groot)
document.write("<br>")
document.write("<br>")


document.write("totaal $ ")
document.write(total)
document.write("<br>")
document.write("<br>")
document.write("Uw besteling word verwerkt")
document.write("<br>")
document.write("<br>")

