const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value;

console.log(ticketPrice)

//update total and count
function updatedSelectedCount() {
   const selectedSeats = document.querySelectorAll('.row .seat.selected');
   
  const selectedSeatsCount = selectedSeats.length;

 count.innerText = selectedSeatsCount;
 total.innerText = selectedSeatsCount * ticketPrice;

}

//copy selected seats into arr
//map through array
//return new array indexes
const seatsIndex = [...selectedSeats]

//movie select event
movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value
    updatedSelectedCount()
});


//seat click event
container.addEventListener("click", (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected")

        updatedSelectedCount()
    }
})