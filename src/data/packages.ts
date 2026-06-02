export interface Package {
  id: string;
  name: string;
  price: number;
  image: string;
  start: string;
  end: string;
  days: string;
  included: string[];
  attractions: string[];
  excluded: string[];
  description: string;
}

export const travelPackages: Package[] = [
  {
    id: "mahi-river-explorer",
    name: "Mahi River & Island Explorer (Banswara)",
    price: 1499,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mahi_Dam._Banswara..jpg",
    start: "Banswara City Center (8:00 AM)",
    end: "Banswara City Center (6:00 PM)",
    days: "1 Day (0 Nights)",
    description: "Discover the spectacular Mahi Bajaj Sagar dam, known as the 'City of a Hundred Islands' and explore the lush green lakeside cliffs of Chacha Kota.",
    included: [
      "AC transportation throughout the day",
      "Traditional Rajasthani buffet lunch (Daal Baati Churma)",
      "Local certified tribal guide & explorer helper",
      "Tripura Sundari Temple entry tickets",
      "Shared boating ride in Mahi Bajaj Sagar"
    ],
    attractions: [
      "Chacha Kota (scenic lakeside island views and cliffs)",
      "Mahi Bajaj Sagar Dam & view points",
      "Tripura Sundari Temple (Ancient Shakti Peeth)",
      "Madareshwar Temple Caves (Natural hill cavern temple)"
    ],
    excluded: [
      "Personal items, souvenirs, and tips",
      "Morning breakfast and evening snacks",
      "Additional private boating activities",
      "Camera and drone shoot permits"
    ]
  },
  {
    id: "dungarpur-heritage-trail",
    name: "Historic Dungarpur Heritage & Art Trail",
    price: 1799,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Juna_Mahal_Dungarpur_16.jpg",
    start: "Dungarpur Railway Station/Bus Stand (9:00 AM)",
    end: "Dungarpur City (7:00 PM)",
    days: "1 Day (0 Nights)",
    description: "Immerse yourself in the architecture, history, and murals of Juna Mahal and the serene lakeside environment of Gaib Sagar in Dungarpur.",
    included: [
      "Entry fees to Juna Mahal & Badal Mahal",
      "Guided walk by a local history specialist",
      "Traditional Vagadi-style organic lunch",
      "Water bottles and energy drinks",
      "Local auto/cab transport between spots"
    ],
    attractions: [
      "Juna Mahal (7-storey ancient fort with exquisite murals and glasswork)",
      "Gaib Sagar Lake & Badal Mahal (Scenic lakeside architectural marvel)",
      "Deo Somnath Temple (12th-century stone temple built without mortar)",
      "Udai Bilas Palace (Exterior view and surrounding sanctuary lake)"
    ],
    excluded: [
      "Travel costs to and from Dungarpur city",
      "Tips to guides and restaurant staff",
      "Personal camera photography charges inside the palace"
    ]
  },
  {
    id: "sitamata-wilderness-safari",
    name: "Sitamata Wilderness & Flying Squirrel Safari",
    price: 3999,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/River_Jakham_in_Sitamata_sanctuary_in_Pratapgarh.jpg",
    start: "Pratapgarh Town (12:00 PM - Day 1)",
    end: "Pratapgarh Town (1:00 PM - Day 2)",
    days: "2 Days / 1 Night",
    description: "Journey deep into the teak forests of Sitamata Sanctuary to observe rare flying squirrels, pristine bamboo groves, and ancient archaeological caves.",
    included: [
      "1 Night stay in rustic Eco-Cottages inside the sanctuary area",
      "All meals included (cooked by tribal hosts using local forest recipes)",
      "Open-gypsy forest safari permit and guide fee",
      "Local tribal tracker guide for tracking wildlife",
      "Night walk and campfire session"
    ],
    attractions: [
      "Sitamata Wildlife Sanctuary safari",
      "Sighting of the rare Flying Squirrel at sunset",
      "Jakham Dam (Scenic masonry dam built on the river Jakham)",
      "Valmiki Ashram & Sita Mata Temple sites deep inside the woods",
      "Arampura Forest Observation Post"
    ],
    excluded: [
      "Personal snacks, soft drinks, or juices",
      "Transport from home city to Pratapgarh starting point",
      "Alcoholic beverages",
      "Forest department fees for high-end zoom lenses"
    ]
  },
  {
    id: "baneshwar-cultural-festival",
    name: "The Sacred Confluence & Tribal Culture Experience",
    price: 3499,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Beneshwar_dham.JPG",
    start: "Dungarpur or Banswara Town (10:00 AM - Day 1)",
    end: "Dungarpur or Banswara Town (5:00 PM - Day 2)",
    days: "2 Days / 1 Night",
    description: "Experience the vibrant spirit of the Baneshwar Fair, the ultimate tribal gathering at the sacred confluence of Som, Mahi, and Jakham rivers.",
    included: [
      "1 Night accommodation in premium luxury tents near the riverbed",
      "Traditional home-cooked buffet breakfast, lunch, and dinner",
      "Access to cultural shows, tribal dance performance, and workshops",
      "Local guide explaining the rituals, history, and fair activities",
      "Boat transit across the river confluence"
    ],
    attractions: [
      "Baneshwar Dham Temple and the Holy Confluence (Triveni Sangam)",
      "Vibrant Tribal Crafts and bamboo pottery market stalls",
      "Folk Art Showcase (traditional tribal songs, archery show, and Gavari dance)",
      "Ghotia Amba & Mangarh Dham historical narratives"
    ],
    excluded: [
      "Purchase of handicraft items, souvenirs",
      "Funfair rides and personal amusement park tickets",
      "Special prayers/offerings (Pooja samagri) at the temple"
    ]
  },
  {
    id: "salumbar-royal-lakes",
    name: "Salumbar Royal Forts & Sacred Lakes Tour",
    price: 1299,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Jaisamandlake.jpg",
    start: "Salumbar Center (8:30 AM)",
    end: "Salumbar Center (5:30 PM)",
    days: "1 Day (0 Nights)",
    description: "Explore the historic stepwells, medieval water structures, and the scenic, tranquil shores of Jaisamand Lake within the newly formed Salumbar district.",
    included: [
      "Local guide fees and history narration",
      "Entry charges to the historic stepwells and monuments",
      "Lakeside traditional lunch at Jaisamand view deck",
      "Comfortable auto/cab local transportation"
    ],
    attractions: [
      "Hadi Rani Kund (fabulous geometric stepped stepwell built in honor of the queen)",
      "Jaisamand Lake & Island Sanctuary (one of the largest artificial lakes in Asia)",
      "Ruthi Rani ka Mahal (Palace of the Angry Queen perched on the hilltop)",
      "Salumbar Royal Fort (external photo stop and city viewpoint)"
    ],
    excluded: [
      "Optional Jaisamand boat safari ride (can be purchased directly)",
      "Hotel pick up outside Salumbar town limits",
      "Personal mineral water bottles and soft drinks"
    ]
  },
  {
    id: "vagad-heritage-caravan",
    name: "Vagad & Mewal Tribal Heritage Caravan (The Ultimate Circuit)",
    price: 8999,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Gaib_Sagar_Lake_Dungarpur_5.jpg",
    start: "Udaipur Airport/Railway Station (8:00 AM - Day 1)",
    end: "Udaipur Airport/Railway Station (6:00 PM - Day 4)",
    days: "4 Days / 3 Nights",
    description: "The complete journey covering Salumbar, Dungarpur, Banswara, and Pratapgarh. Connect with tribal elders, discover ancient forts, and trek in wilderness.",
    included: [
      "3 Nights stay in premium heritage hotels & nature resorts",
      "All meals (Breakfast, Lunch, Dinner) featuring regional recipes",
      "Private AC Sedan/SUV for the entire 4-day travel",
      "Dedicated tour director and local tribal guides in each district",
      "Wildlife safari fees, boating fees, and all monument tickets",
      "Traditional tribal welcome and archery demonstration workshop"
    ],
    attractions: [
      "Day 1: Jaisamand Lake & Hadi Rani Kund (Salumbar) - Udai Bilas Palace (Dungarpur)",
      "Day 2: Juna Mahal & Deo Somnath (Dungarpur) - Baneshwar Dham Confluence",
      "Day 3: Mahi River Islands & Chacha Kota boating (Banswara) - Tripura Sundari",
      "Day 4: Sitamata Sanctuary wildlife tracking (Pratapgarh) - Return to Udaipur"
    ],
    excluded: [
      "Flight or Train tickets to Udaipur",
      "Alcoholic beverages and personal laundry",
      "Gratitude/tips for the driver and tour guides"
    ]
  }
];
