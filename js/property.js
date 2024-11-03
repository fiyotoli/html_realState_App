const property = [
    {
        id: 1,
        image: "./assets/images/property1.jpg",
        title: "Cozy Apartment",
        price: "ETB 200,000",
        description: "A cozy apartment located in the heart of the city.Experience the warmth and charm of this cozy apartment, designed for ultimate comfort and relaxation. Perfectly suited for those seeking a peaceful retreat, it offers a blend of modern amenities and homely touches. Enjoy a bright, open layout with inviting furnishings and serene surroundings to unwind.",
        bathrooms: 2,
        ownerEmail: "tasfayneshtolasa35@gmail.com", // Add owner email here

        bedrooms: 3,
        squareKm: 1.5,
        location: "Downtow",
        category: "Apartment"
    },
    {
        id: 2,
        ownerEmail: "tasfayneshtolasa35@gmail.com",
        image: "./assets/images/property2.jpg",
        title: "Modern House",
        price: "ETB 350,000",
        description: "A modern house with state-of-the-art facilities.",
        bathrooms: 3,
        bedrooms: 4,
        squareKm: 2.0,
        location: "Bole",
        category: "House"
    },
    {
        id: 3,
        ownerEmail: "tasfayneshtolasa35@gmail.com",
        image: "./assets/images/property3.jpg",
        title: "Luxury Villa",
        price: "ETB 1,200,000",
        description: "A luxurious villa with beautiful views.",
        bathrooms: 5,
        bedrooms: 6,
        squareKm: 3.5,
        location: "Old Airport",
        category: "Villa"
    },
    {
        id: 4,
        ownerEmail: "tasfayneshtolasa35@gmail.com",
        image: "./assets/images/property4.jpg",
        title: "Charming Cottage",
        price: "ETB 180,000",
        description: "A charming cottage perfect for weekend getaways.",
        bathrooms: 1,
        bedrooms: 2,
        squareKm: 1.2,
        location: "Gullele",
        category: "Cottage"
    },
    {
        id: 5,
        ownerEmail: "tasfayneshtolasa35@gmail.com",
        image: "./assets/images/property5.jpg",
        title: "Beachfront Property",
        price: "ETB 750,000",
        description: "A beautiful beachfront property ideal for relaxation.",
        bathrooms: 4,
        bedrooms: 5,
        squareKm: 2.5,
        location: "Langano Beach",
        category: "Property"
    },
    {
        id: 6,
        ownerEmail: "tasfayneshtolasa35@gmail.com",
        image: "./assets/images/property6.jpg",
        title: "Urban Loft",
        price: "ETB 300,000",
        description: "An urban loft with a modern design.",
        bathrooms: 2,
        bedrooms: 3,
        squareKm: 1.8,
        location: "Bole",
        category: "Apartment"
    },
    {
        id: 7,
        ownerEmail: "tasfayneshtolasa35@gmail.com",
        image: "./assets/images/property7.jpg",
        title: "Suburban Home",
        price: "ETB 400,000",
        description: "A suburban home with a large backyard.",
        bathrooms: 3,
        bedrooms: 4,
        squareKm: 2.3,
        location: "Lebbu",
        category: "House"
    },
    {
        id: 8,
        ownerEmail: "tasfayneshtolasa35@gmail.com",
        image: "./assets/images/property8.jpg",
        title: "Mountain Cabin",
        price: "ETB 280,000",
        description: "A cozy mountain cabin with scenic views.",
        bathrooms: 2,
        bedrooms: 3,
        squareKm: 1.9,
        location: "Entoto",
        category: "Cottage"
    },
    {
        id: 9,
        ownerEmail: "tasfayneshtolasa35@gmail.com",
        image: "./assets/images/property9.jpg",
        title: "Penthouse Suite",
        price: "ETB 1,000,000",
        description: "A stunning penthouse suite with luxury amenities.",
        bathrooms: 4,
        bedrooms: 5,
        squareKm: 2.8,
        location: "Downtown",
        category: "Villa"
    },
];

// Function to display properties
function displayProperty(num) {
    const propertyCardsContainer = document.getElementById('property-cards');
    propertyCardsContainer.innerHTML = ''; // Clear existing cards

    property.slice(0, num).forEach(property => {
        const card = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card shadow">
                    <img src="${property.image}" class="card-img-top" alt="${property.title} style="height: 300px; width: auto;  object-fit: cover;"">
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
                            <i class="bi bi-coin text-success px-1"></i>
                                  <span>${property.price}</span>
                            </span>
                        </div> <a href="property-detail.html?id=${property.id}" class="btn btn-success rounded-pill">View Details</a>
                    </div>
                </div>
            </div>
        `;
        propertyCardsContainer.innerHTML += card;
    });
}

// Function to filter properties
function filterProperties() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceRange').value;

    const filteredProperties = property.filter(prop => {
        const matchesTitle = prop.title.toLowerCase().includes(searchInput);
        const matchesCategory = categoryFilter ? prop.category === categoryFilter : true;
        const priceValue = parseFloat(prop.price.replace(/[ETB,]/g, ''));

        let matchesPrice = false;
        switch (priceRange) {
            case '0-1000000':
                matchesPrice = priceValue <= 1000000;
                break;
            case '1000000-2000000':
                matchesPrice = priceValue > 1000000 && priceValue <= 2000000;
                break;
            case '2000000-3000000':
                matchesPrice = priceValue > 2000000 && priceValue <= 3000000;
                break;
            case 'above3000000':
                matchesPrice = priceValue > 3000000;
                break;
            default:
                matchesPrice = true; // No price filter
                break;
        }

        return matchesTitle && matchesCategory && matchesPrice;
    });

    displayFilteredProperties(filteredProperties);
}

// Function to display filtered properties
function displayFilteredProperties(filteredProperties) {
    const propertyCardsContainer = document.getElementById('property-cards');
    propertyCardsContainer.innerHTML = ''; // Clear existing cards

    filteredProperties.forEach(property => {
        const card = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card shadow">
                    <img src="${property.image}" class="card-img-top" alt="${property.title}" style="height: 300px; width: auto;  object-fit: cover;">
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
                            <i class="bi bi-coin text-success px-1"></i>
                                  <span>${property.price}</span>
                            </span>
                        </div> <a href="property-detail.html?id=${property.id}" class="btn btn-success rounded-pill">View Details</a>
                    </div>   </div>
                </div>
            </div>
        `;
        propertyCardsContainer.innerHTML += card;
    });
}

// Function to initialize the price range input display
function initPriceRangeInput() {
    const priceRangeInput = document.getElementById('priceRange');
    const priceValueDisplay = document.getElementById('priceValue');
    priceValueDisplay.textContent = 'Price: All';

    priceRangeInput.addEventListener('change', function() {
        const priceRanges = {
            '0-1000000': 'Price: Up to $1,000,000',
            '1000000-2000000': 'Price: $1,000,000 - $2,000,000',
            '2000000-3000000': 'Price: $2,000,000 - $3,000,000',
            'above3000000': 'Price: Above $3,000,000',
        };
        priceValueDisplay.textContent = priceRanges[this.value] || 'Price: All';
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProperty(20); // Initial call to display the first six properties
    initPriceRangeInput(); // Initialize the price range input display

    // Add event listeners for filter elements
    document.getElementById('searchInput').addEventListener('keyup', filterProperties);
    document.getElementById('categoryFilter').addEventListener('change', filterProperties);
    document.getElementById('priceRange').addEventListener('change', filterProperties);
});


// Function to display related products based on category
function displayRelatedProducts(category) {
    const relatedProperties = property.filter(prop => prop.category === category);
    const relatedProductsContainer = document.getElementById('related-products');
    relatedProductsContainer.innerHTML = '';

    relatedProperties.forEach(prop => {
        const card = `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card shadow d-flex flex-column">
                <img src="${prop.image}" class="card-img-top" alt="${prop.title}" style="height: 300px; width: auto; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title mb-2">${prop.title}</h5>
                    <div class="mb-2">
                        <i class="bi bi-star-fill text-success"></i>
                        <i class="bi bi-star-fill text-success"></i>
                        <i class="bi bi-star-fill text-success"></i>
                        <i class="bi bi-star-fill text-success"></i>
                        <i class="bi bi-star-half text-success"></i>
                    </div>
                    <div class="mb-3 d-flex align-items-center">
                        <span class="rounded bg-warning bg-opacity-10 p-2">
                            <i class="bi bi-coin text-success px-1"></i>
                            <span>${prop.price}</span>
                        </span>
                    </div>
                    <div class="mt-auto">
                        <a href="property-detail.html?id=${prop.id}" class="btn btn-success" onclick="smoothScrollToTop()">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
        relatedProductsContainer.innerHTML += card;
    });
}
