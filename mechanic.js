document.querySelector("#square1").style.fontSize = "40px";
document.querySelector("#square2").style.fontSize = "40px";
document.querySelector("#square3").style.fontSize = "30px";

const tytuly = document.querySelectorAll(".title");

let rozmiarCzcionki = 0;

for (let tytul of tytuly) {
  tytul.addEventListener("wheel", function (event) {
    pozFirst = this.style.fontSize.indexOf("px");
    rozmiarCzcionki = Number(this.style.fontSize.substr(0, pozFirst));
    console.log(rozmiarCzcionki);
    event.preventDefault();
    if (event.deltaY > 0) {
      rozmiarCzcionki++;
      this.style.fontSize = rozmiarCzcionki + "px";
    } else {
      rozmiarCzcionki--;
      this.style.fontSize = rozmiarCzcionki + "px";
    }
  });
}
