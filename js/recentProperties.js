const properties = [
    {
        id: 1,
        image: "./assets/images/property1.jpg",
        title: "Cozy Apartment",
        price: "$200,000",
        bathrooms: 2,
        bedrooms: 3,
        squareKm: 1.5,
        location: "Downtown Addis Ababa",
    },
    {
        id: 2,
        image: "./assets/images/property2.jpg",
        title: "Modern House",
        price: "$350,000",
        bathrooms: 3,
        bedrooms: 4,
        squareKm: 2.0,
        location: "Bole, Addis Ababa",
    },
    {
        id: 3,
        image: "./assets/images/property3.jpg",
        title: "Luxury Villa",
        price: "$1,200,000",
        bathrooms: 5,
        bedrooms: 6,
        squareKm: 3.5,
        location: "Old Airport, Addis Ababa",
    },
    {
        id: 4,
        image: "./assets/images/property4.jpg",
        title: "Charming Cottage",
        price: "$180,000",
        bathrooms: 1,
        bedrooms: 2,
        squareKm: 1.2,
        location: "Gullele, Addis Ababa",
    },
    {
        id: 5,
        image: "./assets/images/property5.jpg",
        title: "Beachfront Property",
        price: "$750,000",
        bathrooms: 4,
        bedrooms: 5,
        squareKm: 2.5,
        location: "Langano Beach",
    },
    {
        id: 6,
        image: "./assets/images/property6.jpg",
        title: "Urban Loft",
        price: "$300,000",
        bathrooms: 2,
        bedrooms: 3,
        squareKm: 1.8,
        location: "Bole, Addis Ababa",
    },
    {
        id: 7,
        image: "./assets/images/property7.jpg",
        title: "Suburban Home",
        price: "$400,000",
        bathrooms: 3,
        bedrooms: 4,
        squareKm: 2.3,
        location: "Lebbu, Addis Ababa",
    },
    {
        id: 8,
        image: "./assets/images/property8.jpg",
        title: "Mountain Cabin",
        price: "$280,000",
        bathrooms: 2,
        bedrooms: 3,
        squareKm: 1.9,
        location: "Entoto, Addis Ababa",
    },
    {
        id: 9,
        image: "./assets/images/property9.jpg",
        title: "Penthouse Suite",
        price: "$1,000,000",
        bathrooms: 4,
        bedrooms: 5,
        squareKm: 2.8,
        location: "Downtown, Addis Ababa",
    },
];

let showAll = false; // Toggle state for "Explore More" and "Explore Less"

function displayProperties(num) {
    const propertyCardsContainer = document.getElementById('property-cards');
    propertyCardsContainer.innerHTML = ''; // Clear existing cards

    properties.slice(0, num).forEach(property => {
        const card = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card shadow">
                
                    <img src="${property.image}" class="card-img-top" style="height: 300px; width: auto;  object-fit: cover;" alt="${property.title}">
                    <div class="card-body">
                        <h5 class="card-title mb-2">${property.title}</h5>
                        <div class="mb-2">
                            <i class="bi bi-star-fill text-success"></i>
                            <i class="bi bi-star-fill text-success"></i>
                            <i class="bi bi-star-fill text-success"></i>
                            <i class="bi bi-star-fill text-success"></i>
                            <i class="bi bi-star-half text-success"></i>
                        </div>
                        <div class="mb-3 d-flex align-items-center">
                            <span class="rounded bg-warning bg-opacity-10 p-2">
                                <i class="bi bi-geo-alt-fill text-success px-1"></i>
                                <span>${property.location}</span>
                            </span>
                        </div>
                        <div class="mb-2">
                            <span class="bg-success text-white rounded-pill px-3 py-1">${property.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        propertyCardsContainer.innerHTML += card;
    });
}

function toggleProperties() {
    const exploreBtn = document.getElementById('explore-btn');
    
    if (showAll) {
        // Show only six cards
        displayProperties(6);
        exploreBtn.textContent = "Explore More";
    } else {
        // Show all cards
        displayProperties(properties.length);
        exploreBtn.textContent = "Explore Less";
    }

    showAll = !showAll; // Toggle the state
}

// Initial call to display the first six properties
displayProperties(6);

