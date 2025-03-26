// Sample property data
const properties = [
    {
        id: 1,
        title: "Modern Luxury Apartment",
        description: "Stunning 3-bedroom apartment with panoramic city views and premium finishes",
        price: "$850,000",
        location: "Downtown District",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        agent: {
            name: "Sarah Johnson",
            phone: "+1 (555) 123-4567",
            email: "sarah.j@realestate.com"
        }
    },
    {
        id: 2,
        title: "Cozy Family Home",
        description: "Beautiful 4-bedroom house with a spacious backyard and modern kitchen",
        price: "$975,000",
        location: "Suburban Heights",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        agent: {
            name: "Michael Chen",
            phone: "+1 (555) 987-6543",
            email: "michael.c@realestate.com"
        }
    },
    {
        id: 3,
        title: "Waterfront Penthouse",
        description: "Exclusive penthouse with private terrace and breathtaking ocean views",
        price: "$1,250,000",
        location: "Marina Bay",
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=1000",
        beds: 3,
        baths: 3.5,
        sqft: 2200,
        agent: {
            name: "Emma Davis",
            phone: "+1 (555) 456-7890",
            email: "emma.d@realestate.com"
        }
    }
];

// Function to create property cards
function createPropertyCard(property) {
    const template = document.getElementById('property-card-template');
    const card = template.content.cloneNode(true);
    
    // Set image and basic info
    const img = card.querySelector('img');
    img.src = property.image;
    img.alt = property.title;
    
    // Set price
    card.querySelector('.price-overlay h3').textContent = property.price;
    
    // Set title and location
    card.querySelector('.title').textContent = property.title;
    card.querySelector('.location span').textContent = property.location;
    
    // Set description
    card.querySelector('.description').textContent = property.description;
    
    // Set features
    const features = card.querySelectorAll('.feature span');
    features[0].textContent = `${property.beds} beds`;
    features[1].textContent = `${property.baths} baths`;
    features[2].textContent = `${property.sqft} sqft`;
    
    // Set agent info
    card.querySelector('.agent-info h4').textContent = `Contact Agent: ${property.agent.name}`;
    const contactItems = card.querySelectorAll('.contact-item span');
    contactItems[0].textContent = property.agent.phone;
    contactItems[1].textContent = property.agent.email;
    
    return card;
}

// Initialize the page
function initializePage() {
    const propertyGrid = document.getElementById('propertyGrid');
    
    // Create and append property cards
    properties.forEach(property => {
        propertyGrid.appendChild(createPropertyCard(property));
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Add favorite button functionality
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            const heart = this.querySelector('svg');
            heart.style.fill = this.classList.contains('active') ? '#ef4444' : 'none';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);