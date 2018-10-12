document.addEventListener("DOMContentLoaded", function() {          // po załadowaniu dookumentu wywołujemy funkcję

// SLIDER

    var prevPicture = document.getElementById('prevPicture');       // wyszukujemy i pobieramy do zmiennej element o identyfikatorze 'prevPicture'
    var nextPicture = document.getElementById('nextPicture');       // wyszukujemy i pobieramy do zmiennej element o identyfikatorze 'nextPicture'
    var listLi = document.querySelectorAll('.slider ul li');        // wyszukujemy i pobieramy do zmiennej tablicę elementów listy z elementu o klasie 'slider'

    var counter = 0;                                                // dodajemy zmienną pomocniczą do zliczania

    listLi[counter].classList.add('visible');                       // pokazujemy tylko ten obrazek, którego indeks jest równy obecnemu stanowi licznika

    prevPicture.addEventListener('click', function() {              // dodajemy eventListener do przycisku pokazującego poprzedni obrazek

        listLi[counter].classList.remove('visible');                // po kliknięciu odbieramy obecnemu obrazkowi klasę 'visible'
        if (counter === 0) {                                        // jeśli licznik równa się 0

            counter = listLi.length-1;                              // przechodzimy do ostatniego obrazka z tablicy

        }
        else {                                                      // w innym wypadku

            counter--;                                              // zmniejszamy licznik o 1
        }

        listLi[counter].classList.add('visible');               // pokazujemy obrazek, którego indeks jest równy obecnemu stanowi licznika
        
    });

    nextPicture.addEventListener('click', function() {              // dodajemy eventListener do przycisku pokazującego nastęþny obrazek

        listLi[counter].classList.remove('visible');                // zabieramy klasę 'visible' aktualnemu elementowi
        if (counter === listLi.length-1) {                          // jeśli licznik jest równy liczbie obrazków

            counter = 0;                                            // ustawiamy licznik na 0

        }

        else {                                                      // w innym wypadku

            counter++;                                              // zwiększamy licznik o 1

        }

        listLi[counter].classList.add('visible');                   // pokazujemy obrazek, którego indeks jest równy obecnemu stanowi licznika

    })


// DROP-DOWN

var listElements = document.querySelectorAll("nav > ul > li");     // wyszukujemy i pobieramy do zmiennej tablicę elementów listy z elementu o klasie 'nav'

    for (var i = 0; i < listElements.length; i++) {                     // dla każdego elementu tablicy

        listElements[i].addEventListener('mouseover', function() {      // dodajemy eventListener, który po najechaniu myszką wykonuje funkcję

            var subList = this.querySelector('ul');                     // wyszukujemy i pobieramy do zmiennej listę w najechanym elemencie

            if (subList !== null) {                                     // jeśli taka lista istnieje

                subList.style.display = 'block';                        // wyświetlamy ją

            }

        });

        listElements[i].addEventListener('mouseout', function() {       // dodajemy eventListener, który po wyjechaniu myszką wykonuje funkcję

            var subList = this.querySelector('ul');                     // wyszukujemy i pobieramy do zmiennej listę w najechanym elemencie

            if (subList !== null) {                                     // jeśli taka lista istnieje

                subList.style.display = 'none';                         // ukrywamy ją

            }

        });

}

// ZNIKAJĄCE TEKSTY

var mainBoxes = document.getElementsByClassName('main-box');
var descriptionBoxes = document.getElementsByClassName('description-box');

for (var i = 0; i < mainBoxes.length; i++) {

    mainBoxes[0].addEventListener('mouseover', function() {

        descriptionBoxes[0].setAttribute('style', 'display: none');

    })

    mainBoxes[1].addEventListener('mouseover', function() {

        descriptionBoxes[1].setAttribute('style', 'display: none');

    })

    mainBoxes[0].addEventListener('mouseout', function() {

        descriptionBoxes[0].setAttribute('style', 'display: block');

    })

    mainBoxes[1].addEventListener('mouseout', function() {

        descriptionBoxes[1].setAttribute('style', 'display: block');

    })

}

});
