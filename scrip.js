let hotel = document.getElementById('hotel');
let rental = document.getElementById('rental');
let flight = document.getElementById('flight');
let modtxt = document.getElementById('mod');
let hidetxt = document.getElementById('hidetxt')
let hideinput = document.getElementById('hideinput');
let modinput = document.getElementById('modinput');

hotel.addEventListener("mouseenter", function(){
    hidetxt.style.display = "none";
    hideinput.style.display = "none";
    modtxt.textContent = "Hotel";
    modinput.style.width = "80%";
    modinput.placeholder = "Locations for Hotel"
    modinput.style.transition = "1s"
})

rental.addEventListener("mouseenter", function(){
    hidetxt.style.display = "none";
    hideinput.style.display = "none";
    modtxt.textContent = "Where to rent";
    modinput.style.width = "80%";
    modinput.placeholder = "Locations to rent a car"
    modinput.style.transition = "1s"
})

flight.addEventListener("mouseenter", function(){
    hidetxt.style.display = "block";
    hideinput.style.display = "block";
    modtxt.textContent = "From";
    modinput.style.width = "45%"
    modinput.placeholder = "Departing from"
})

