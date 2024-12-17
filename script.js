// script.js
const hotels = [
    { img:"assets/hotelImg/the-kingsbury-hotel.jpg",name: "The Kingsbury Hotel", price: 25000 , stars: 5 },
    { img: "assets/hotelImg/cinnamon-lakeside-colombo.jpg",name:"Cinnamon Lakeside Colombo", price: 20500, stars: 5 },
    { img:"assets/hotelImg/avani-bentota-resort.jpg",name: "Thaala Bentota Resort", price: 10400, stars: 4 },
    { img:"assets/hotelImg/echo-ella.jpg",name: "Ekho Ella", price: 12800, stars: 4 },
    { img:"assets/hotelImg/araliya-green-hills.jpg",name: "Araliya Green Hills", price: 12000, stars: 4 },
    { img:"assets/hotelImg/hotel-sigiriya.jpg",name: "Hotel Sigiriya", price: 8500, stars: 3 },
    { img:"assets/hotelImg/camelot-beach-hotel.jpg",name: "Camelot Beach Hotel", price: 10500, stars: 3 },
    { img:"assets/hotelImg/la-grand-galle.jpg",name: "La-Grande Galle", price: 24000, stars: 5 },
];

function displayHotels(hotels) {
    const grid = document.getElementById("results-grid");
    grid.innerHTML = "";
    hotels.forEach((hotel) => {
        const card = document.createElement("div");
        card.className = "hotel-card";
        card.innerHTML = `
            <img src="${hotel.img}" alt="${hotel.name}" class="hotel-image">
      <h4>${hotel.name}</h4>
      <p>${hotel.stars} Stars</p>
     <p class="price">LKR ${hotel.price.toLocaleString()}</p>
    `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    const priceRange = document.getElementById("price-range").value;
    const selectedStars = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(
        (cb) => parseInt(cb.value)
    );

    const filteredHotels = hotels.filter((hotel) => {
        return (
            hotel.price <= priceRange &&
            (selectedStars.length === 0 || selectedStars.includes(hotel.stars))
        );
    });

    displayHotels(filteredHotels);
}

document.getElementById("apply-filters").addEventListener("click", applyFilters);

document.getElementById("price-range").addEventListener("input", (event) => {
    document.getElementById("price-display").textContent = `LKR 0 - LKR ${parseInt(event.target.value).toLocaleString()}`;
});

// Initial load
displayHotels(hotels);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;
const cardWidth = 350 + 20; // 350px width + 10px margin on both sides
const totalCards = document.querySelectorAll('.slider-card').length;
const visibleCards = Math.floor(window.innerWidth / cardWidth);

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prev.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSliderPosition();
});

next.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, totalCards - visibleCards);
    updateSliderPosition();
});

window.addEventListener('resize', () => {
    updateSliderPosition();
});


/*[][][][][][][][]][][][][][][][][][][[]][[[]][[]][][][][][][][][][][][]*/
function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    // Regex patterns for username and password validation
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;  // Username: 3-20 alphanumeric characters or underscore
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;  // Password: 6-20 characters, at least 1 letter and 1 number

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate username
    if (!username.match(usernamePattern)) {
        errorMessage.textContent = 'Username must be 3-20 characters long and can only contain letters, numbers, and underscores.';
        return false;
    }

    // Validate password
    if (!password.match(passwordPattern)) {
        errorMessage.textContent = 'Password must be 6-20 characters long and contain at least one letter and one number.';
        return false;
    }

    return true;  // Form is valid
}
