"use strict"
// deklaracja zmiennych
// zmienna url, która zawiera pełny adres do dowcipu:
var url = 'http://api.icndb.com/jokes/random';
// wybieramy przycisk ze strony i podpinamy nasłuchiwanie na kliknięcie tak, aby każdorazowo pobierał się losowy żart:
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});
// zmienna 'paragraph' do której przypisujemy element DOM, który odpowiada za wyświetlanie dowcipu.
var paragraph = document.getElementById('joke');

// implementacja funkcji getJoke
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}
window.onload = getJoke();