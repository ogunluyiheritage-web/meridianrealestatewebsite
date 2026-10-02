/**
 * MARIDAN PRIVATE OFFICE — UNIFIED APPLICATION & CINEMATIC SCROLL ARCHITECTURE
 * 
 * Single source of truth for:
 * - Property portfolio data & specifications
 * - Cinematic property scroll engine (pinned viewport, hold periods, reversible scroll)
 * - Property detail rendering & metadata protection (title never disappears)
 * - Catalogue filtering & responsive grid
 * - Interactive navigation & client notes
 * - Accessibility & reduced motion handling
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. BRAND & PORTFOLIO DATA
     ========================================================================== */

  const brand = Object.freeze({
    name: 'MARIDAN',
    description: 'Private real-estate advisory for exceptional residences.',
    serviceArea: 'United States · International',
    consultationLabel: 'Private consultation',
    contactEmail: 'hello@maridan.co'
  });

  const room = (filename) => `assets/rooms/${filename}`;
  const residenceImg = (num, file) => `assets/properties/residence-${String(num).padStart(2, '0')}/${file}`;
  const residenceHero = (num) => residenceImg(num, num === 12 ? 'hero' : 'hero.jpg');

  const properties = [
    {
      id: 1,
      slug: 'alora-house',
      name: 'Alora House',
      location: 'Hudson Valley, NY',
      type: 'Villa',
      price: 18500000,
      priceLabel: '$18,500,000',
      currency: 'USD',
      bedrooms: 5,
      bathrooms: 6,
      interiorArea: '740 sq m (7,965 sq ft)',
      grounds: '1.8 Private Hectares',
      parking: '4-Car Private Motor Court',
      availability: 'Private viewing by appointment',
      shortDescription: 'A private residential pavilion composed around reflection water, native landscape and generous northern light.',
      description: 'Alora House is an architectural study in quietude and proportion. Set against a protected hillside in the Hudson Valley, the residence uses hand-finished limestone, darkened zinc and floor-to-ceiling glass to dissolve the boundary between interior sanctuary and surrounding forest.',
      architecturalStory: 'The house is organised as a sequence of single-storey pavilions linked by stone cloisters. Each room is calibrated to receive daylight at a specific hour, creating an unhurried diurnal rhythm from dawn arrival to evening terrace.',
      heroImage: residenceImg(1, 'hero.jpg'),
      highlights: [
        { label: 'Site', detail: 'Protected woodland elevation with long southern views' },
        { label: 'Materials', detail: 'Chauvigny limestone, quarter-sawn white oak, bronze joinery' },
        { label: 'Wellness', detail: '18-metre heated reflection pool and cedar sauna pavilion' },
        { label: 'Security', detail: 'Discreet perimeter monitoring and private access drive' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Exterior Setting',
          category: '01 · Exterior',
          title: 'The Forest Approach',
          note: 'A winding woodland drive leads to a low-slung stone gateway where native birches filter early light across the limestone arrival court.',
          image: residenceImg(1, 'view-02.jpg'),
          meta: ['Private forest boundary', 'Low-profile limestone volume']
        },
        {
          index: 1,
          label: 'Arrival Threshold',
          category: '02 · Arrival',
          title: 'A Considered Threshold',
          note: 'The entry cloister frames an interior water courtyard, muting exterior sounds and setting a slower tempo for the residence.',
          image: room('garden.jpg'),
          meta: ['Hand-carved oak pivot door', 'Reflecting pond transition']
        },
        {
          index: 2,
          label: 'Living Pavilion',
          category: '03 · Living Space',
          title: 'The Great Room',
          note: 'Four-metre acoustic ceilings and unbroken glazed spans connect the primary lounge to the forest canopy without visual distraction.',
          image: residenceImg(1, 'view-04.jpg'),
          meta: ['Four-metre ceiling span', 'Acoustically tuned volume']
        },
        {
          index: 3,
          label: 'Culinary Suite',
          category: '04 · Dining & Kitchen',
          title: 'Craft & Gathering',
          note: 'Monolithic quartzite surfaces meet hidden cabinetry and a custom long-table dining room designed for evening conversation.',
          image: room('dining-room.jpg'),
          meta: ['Monolithic quartzite island', 'Integrated service kitchen']
        },
        {
          index: 4,
          label: 'Primary Retreat',
          category: '05 · Primary Suite',
          title: 'A Private Sanctuary',
          note: 'Positioned in its own quiet wing, the primary suite opens to a private contemplation garden with dressing rooms and stone bath.',
          image: room('primary-suite.jpg'),
          meta: ['Private sunrise garden', 'Dual dressing quarters']
        },
        {
          index: 5,
          label: 'Pool Terrace',
          category: '06 · Outdoor Space',
          title: 'Water & Horizon',
          note: 'An 18-metre granite-edged pool aligns with the setting sun, offering a calm architectural conclusion between residence and landscape.',
          image: residenceImg(1, 'view-03.jpg'),
          meta: ['Granite reflection pool', 'Covered fire hearth']
        }
      ]
    },
    {
      id: 2,
      slug: 'mora-residence',
      name: 'Mora Residence',
      location: 'Coconut Grove · Miami, FL',
      type: 'Residence',
      price: 14200000,
      priceLabel: '$14,200,000',
      currency: 'USD',
      bedrooms: 4,
      bathrooms: 5,
      interiorArea: '580 sq m (6,240 sq ft)',
      grounds: '1,400 sq m Lush Grounds',
      parking: '3-Car Integrated Garage',
      availability: 'Private viewing by appointment',
      shortDescription: 'A light-led coastal sanctuary shaped by shaded breezeways, water courtyards and deep tropical verandas.',
      description: 'Mora Residence reinterprets subtropical modernism through an austere architectural lens. Smooth poured concrete, slatted teak louvers and reflecting pools create a microclimate of cooling cross-ventilation and filtered sunlight.',
      architecturalStory: 'The house steps back into lush mature canopy, offering total privacy from the street while opening completely to its protected interior courtyards.',
      heroImage: residenceImg(2, 'hero.jpg'),
      highlights: [
        { label: 'Climate', detail: 'Engineered passive cross-ventilation and deep overhangs' },
        { label: 'Craft', detail: 'Board-formed concrete, marine teak and coral stone floors' },
        { label: 'Acoustics', detail: 'Lush tropical sound buffering with private water features' },
        { label: 'Access', detail: 'Private gated lane with maritime canal proximity' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Tropical Façade',
          category: '01 · Exterior',
          title: 'Banyan Canopy',
          note: 'Sculptural concrete planes rise through mature banyan trees, veiled by vertical teak screens that regulate daylight and sea breezes.',
          image: residenceImg(2, 'hero.jpg'),
          meta: ['Board-formed concrete', 'Teak shade louvers']
        },
        {
          index: 1,
          label: 'Water Court',
          category: '02 · Arrival',
          title: 'The Cooling Court',
          note: 'Stepping stones across a shallow koi pond form the threshold, lowering ambient temperatures before you cross into the reception hall.',
          image: residenceImg(2, 'view-02.jpg'),
          meta: ['Water soundscape', 'Honed coral stone']
        },
        {
          index: 2,
          label: 'Double-Height Living',
          category: '03 · Living Space',
          title: 'Air & Generosity',
          note: 'The central salon features six-metre clerestory windows that welcome coastal sky while protecting art collections from harsh direct sun.',
          image: residenceImg(2, 'view-04.jpg'),
          meta: ['Six-metre clerestory', 'Filtered coastal daylight']
        },
        {
          index: 3,
          label: 'Culinary Pavilion',
          category: '04 · Dining & Kitchen',
          title: 'Culinary Precision',
          note: 'Warm walnut joinery and fluted travertine anchor a culinary space made for intimate breakfasts or catered dinner parties.',
          image: room('kitchen.jpg'),
          meta: ['Fluted travertine counters', 'Subtle service corridor']
        },
        {
          index: 4,
          label: 'Guest Quarters',
          category: '05 · Private Suite',
          title: 'The Garden Suite',
          note: 'Each guest chamber functions as an autonomous retreat, facing its own pocket courtyard with private outdoor rain shower.',
          image: room('guest-suite.png'),
          meta: ['Autonomous garden entry', 'En-suite rain bath']
        },
        {
          index: 5,
          label: 'Pool Veranda',
          category: '06 · Outdoor Space',
          title: 'Veranda & Basin',
          note: 'A deep shaded loggia extends seamlessly to a dark basalt lap pool fringed by palms and fragrant night-blooming jasmine.',
          image: residenceImg(2, 'view-03.jpg'),
          meta: ['Deep shaded loggia', 'Basalt reflection basin']
        }
      ]
    },
    {
      id: 3,
      slug: 'oro-courtyard',
      name: 'Oro Courtyard',
      location: 'Palm Beach, FL',
      type: 'Villa',
      price: 21000000,
      priceLabel: '$21,000,000',
      currency: 'USD',
      bedrooms: 5,
      bathrooms: 6,
      interiorArea: '680 sq m (7,320 sq ft)',
      grounds: '2,200 sq m Private Estate',
      parking: '4-Car Courtyard Garage',
      availability: 'Private viewing by appointment',
      shortDescription: 'A serene estate where internal cloisters and historic stone give every room an unhurried, grounded rhythm.',
      description: 'Oro Courtyard evokes the timeless proportion of classical Mediterranean villas, stripped of ornamental clutter. Honed oolite stone, lime wash and aged bronze create a monastery-like calm right in prime Palm Beach.',
      architecturalStory: 'Three interconnected courtyards organise the house into distinct residential zones: public entertaining, culinary gathering, and secluded family quarters.',
      heroImage: residenceImg(3, 'hero.jpg'),
      highlights: [
        { label: 'Proportion', detail: 'Classical courtyard axes with minimalist contemporary detailing' },
        { label: 'Stone', detail: 'Hand-selected oolite limestone cut from historic Florida quarries' },
        { label: 'Privacy', detail: 'High walled perimeter with century-old olive and cycad specimens' },
        { label: 'Technology', detail: 'Fully concealed acoustic and climate management' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Walled Forecourt',
          category: '01 · Exterior',
          title: 'Stone & Olive Grove',
          note: 'A discreet bronze-clad gate opens into a pebble forecourt planted with mature olive trees and ancient oolite stone walls.',
          image: residenceImg(3, 'view-02.jpg'),
          meta: ['High-walled sanctuary', 'Aged oolite stone']
        },
        {
          index: 1,
          label: 'The Cloister',
          category: '02 · Arrival',
          title: 'The Shaded Loggia',
          note: 'Arched openings filter morning light across limestone floors, connecting the entrance hall directly to the courtyard garden.',
          image: room('garden.jpg'),
          meta: ['Limestone arcade', 'Quiet acoustic envelope']
        },
        {
          index: 2,
          label: 'The Library Salon',
          category: '03 · Living Space',
          title: 'Proportion & Warmth',
          note: 'Book-matched timber joinery, floor-to-ceiling glass and soft linen furnishings create a room designed for contemplative study and quiet drinks.',
          image: residenceImg(3, 'view-03.jpg'),
          meta: ['Floor-to-ceiling library', 'Custom bronze hearth']
        },
        {
          index: 3,
          label: 'The Dining Cloister',
          category: '04 · Dining & Kitchen',
          title: 'Gathering by Courtyard',
          note: 'Full-height glass panels slide away entirely, turning dinner into an open-air experience overlooking the moonlit fountain.',
          image: room('dining-room.jpg'),
          meta: ['Pocket sliding glass', 'Fountain backdrop']
        },
        {
          index: 4,
          label: 'Primary Pavilion',
          category: '05 · Primary Suite',
          title: 'Upper Sanctuary',
          note: 'Occupying the entire southern wing, the suite features a private morning balcony, dual marble dressing salons and deep soaking tub.',
          image: residenceImg(3, 'view-04.jpg'),
          meta: ['Calacatta marble bath', 'Private morning terrace']
        },
        {
          index: 5,
          label: 'Water Garden',
          category: '06 · Outdoor Space',
          title: 'The Swimming Cloister',
          note: 'Enclosed on three sides by stone loggias, the swimming basin remains protected from coastal wind, offering complete seclusion.',
          image: room('pool-terrace.jpg'),
          meta: ['Secluded swimming basin', 'Limestone sunning lawn']
        }
      ]
    },
    {
      id: 4,
      slug: 'atlas-penthouse',
      name: 'Atlas Penthouse',
      location: 'Trousdale Estates · Los Angeles, CA',
      type: 'Residence',
      price: 16500000,
      priceLabel: '$16,500,000',
      currency: 'USD',
      bedrooms: 4,
      bathrooms: 5,
      interiorArea: '520 sq m (5,600 sq ft)',
      grounds: '350 sq m Panoramic Sky Terrace',
      parking: '3 Private Subterranean Bays',
      availability: 'Private viewing by appointment',
      shortDescription: 'An elevated architectural study in light, cantilevered volume and an unhurried vista from city to sea.',
      description: 'Hovering over Los Angeles, Atlas Penthouse pairs monumental structural cantilevers with delicate travertine surfaces. Every elevation has been oriented to capture changing daylight, keeping the urban sprawl at a poetic distance.',
      architecturalStory: 'The residence celebrates California mid-century minimalism, scaled and engineered to contemporary technical and security expectations.',
      heroImage: residenceImg(4, 'hero.jpg'),
      highlights: [
        { label: 'View', detail: '270-degree unbroken panorama from Downtown to the Pacific' },
        { label: 'Engineering', detail: 'Post-tensioned concrete structure allowing column-free salons' },
        { label: 'Joinery', detail: 'Custom smoked larch millwork and hand-patinated bronze' },
        { label: 'Elevator', detail: 'Biometric private elevator with direct security vestibule' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Cantilever Façade',
          category: '01 · Exterior',
          title: 'Above the Ridgeline',
          note: 'A sharp, floating silhouette against the sky. Cantilevered floorplates cast dramatic shadows across the terraced arrival court.',
          image: residenceImg(4, 'view-02.jpg'),
          meta: ['Cantilevered silhouette', 'Trousdale elevation']
        },
        {
          index: 1,
          label: 'Private Vestibule',
          category: '02 · Arrival',
          title: 'The Arrival Gallery',
          note: 'Exiting the private lift, a bronze-clad gallery opens slowly toward the horizon, holding the view until you step into the main volume.',
          image: residenceImg(4, 'view-03.jpg'),
          meta: ['Biometric elevator', 'Framed horizon vista']
        },
        {
          index: 2,
          label: 'The Sky Salon',
          category: '03 · Living Space',
          title: 'The Grand Vista',
          note: 'Thirty metres of motorized frameless glass retract into pockets, creating a true open-air pavilion high above the city basin.',
          image: room('living-room.jpg'),
          meta: ['Pocket motorized glazing', 'Column-free living span']
        },
        {
          index: 3,
          label: 'The Chef Atelier',
          category: '04 · Dining & Kitchen',
          title: 'Culinary Architecture',
          note: 'Stainless steel back-kitchen paired with a sculpture-grade Roman travertine social island and temperature-controlled wine room.',
          image: room('kitchen.jpg'),
          meta: ['Roman travertine island', 'Concealed prep kitchen']
        },
        {
          index: 4,
          label: 'Primary Horizon',
          category: '05 · Primary Suite',
          title: 'The Ocean Wing',
          note: 'Wake up to the Pacific marine layer through automated sheer linen panels. Features integrated fireplace and dual boutique closets.',
          image: room('primary-suite.jpg'),
          meta: ['Pacific ocean vista', 'Custom acoustic millwork']
        },
        {
          index: 5,
          label: 'Cantilever Terrace',
          category: '06 · Outdoor Space',
          title: 'The Sunset Edge',
          note: 'A perimeter glass infinity pool appears to pour directly into the city lights below, flanked by an outdoor fire lounge.',
          image: residenceImg(4, 'view-04.jpg'),
          meta: ['Infinity edge reflection', 'Frameless wind screens']
        }
      ]
    },
    {
      id: 5,
      slug: 'cypress-house',
      name: 'Cypress House',
      location: 'Montecito · Santa Barbara, CA',
      type: 'Villa',
      price: 15900000,
      priceLabel: '$15,900,000',
      currency: 'USD',
      bedrooms: 5,
      bathrooms: 6,
      interiorArea: '620 sq m (6,670 sq ft)',
      grounds: '1.2 Hectares of Ancient Oaks',
      parking: '4-Car Motor Court',
      availability: 'Private viewing by appointment',
      shortDescription: 'A grounded Montecito estate where century-old oaks meet stone massing and calm architectural proportion.',
      description: 'Cypress House bridges Santa Barbara craft and contemporary Japanese restraint. Set beneath majestic coastal live oaks, the residence is built with locally quarried sandstone, dark cedar siding and bronze casements.',
      architecturalStory: 'The house is organized horizontally to respect the canopy of the trees, allowing every room an immediate, tactile connection to soil and sky.',
      heroImage: residenceImg(5, 'hero.jpg'),
      highlights: [
        { label: 'Setting', detail: 'Private Montecito foothills acreage with ocean whispers' },
        { label: 'Sandstone', detail: 'Local hand-chiseled stone walls up to 60cm in thickness' },
        { label: 'Equestrian', detail: 'Direct access to protected bridleways and walking paths' },
        { label: 'Gardens', detail: 'Drought-tolerant native meadow and heritage citrus orchard' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Oak Meadow Approach',
          category: '01 · Exterior',
          title: 'The Oak Allée',
          note: 'Gravel crunching under tires beneath 200-year-old coastal live oaks, leading to a low sandstone motor court.',
          image: room('garden.jpg'),
          meta: ['Heritage oak canopy', 'Sandstone massing']
        },
        {
          index: 1,
          label: 'Garden Entry Court',
          category: '02 · Arrival',
          title: 'The Stone Entry',
          note: 'A tranquil glass gallery cuts through heavy sandstone walls, leading past a quiet courtyard garden into the heart of the home.',
          image: room('guest-suite.png'),
          meta: ['Sandstone masonry', 'Courtyard lightwell']
        },
        {
          index: 2,
          label: 'Timber Salon',
          category: '03 · Living Space',
          title: 'The Hearth Room',
          note: 'A massive hand-carved stone fireplace anchors a high-ceilinged room lined in reclaimed cedar and illuminated by soft garden light.',
          image: room('living-room.jpg'),
          meta: ['Hand-carved fireplace', 'Reclaimed cedar ceiling']
        },
        {
          index: 3,
          label: 'The Orchard Kitchen',
          category: '04 · Dining & Kitchen',
          title: 'Culinary Garden View',
          note: 'The kitchen opens directly to a kitchen garden of herbs, Meyer lemon and fig trees, connecting food to the land.',
          image: room('dining-room.jpg'),
          meta: ['Farm-to-table access', 'Honed granite counters']
        },
        {
          index: 4,
          label: 'Primary Pavilion',
          category: '05 · Primary Suite',
          title: 'The Meadow Suite',
          note: 'A secluded sanctuary at the garden edge, featuring a private soaking tub overlooking wild lavender and mountain ridgelines.',
          image: room('primary-suite.jpg'),
          meta: ['Mountain ridgeline views', 'Private outdoor tub']
        },
        {
          index: 5,
          label: 'Meadow Terrace',
          category: '06 · Outdoor Space',
          title: 'The Evening Terrace',
          note: 'Stone terraces step down naturally into native grass meadows, framing twilight views of the Santa Ynez mountains.',
          image: room('pool-terrace.jpg'),
          meta: ['Native meadow border', 'Santa Ynez mountain view']
        }
      ]
    },
    {
      id: 6,
      slug: 'ridge-house',
      name: 'Ridge House',
      location: 'Red Mountain · Aspen, CO',
      type: 'Residence',
      price: 24500000,
      priceLabel: '$24,500,000',
      currency: 'USD',
      bedrooms: 6,
      bathrooms: 7,
      interiorArea: '810 sq m (8,720 sq ft)',
      grounds: '1.5 Hectares Mountain Parcel',
      parking: '4 Heated Garage Bays',
      availability: 'Private viewing by appointment',
      shortDescription: 'A high-altitude alpine residence crafted from dark board-formed concrete, blackened steel and triple-pane glass.',
      description: 'Perched on the coveted Red Mountain ridge in Aspen, Ridge House redefines mountain architecture. Instead of generic log cabins, it offers sharp architectural geometry tuned for snow loads, thermal efficiency and breathtaking views of Aspen Mountain.',
      architecturalStory: 'The house is anchored into granite bedrock. As you move from entry to living spaces, the floor plates step down the slope, revealing dramatic vertical peaks.',
      heroImage: residenceImg(6, 'hero.jpg'),
      highlights: [
        { label: 'Altitude', detail: 'Red Mountain vantage with uninterrupted Aspen Mountain view' },
        { label: 'Efficiency', detail: 'Geothermal heating, triple glazing and automated snow melt' },
        { label: 'Ski Access', detail: 'Private heated ski room and direct winter shuttle coordination' },
        { label: 'Entertaining', detail: '1,500-bottle wine cellar, screening room and indoor spa' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Alpine Profile',
          category: '01 · Exterior',
          title: 'Alpine Geometry',
          note: 'Sharp dark zinc rooflines and board-formed concrete massing stand resolute against snow-covered aspen and fir trees.',
          image: residenceImg(6, 'hero.jpg'),
          meta: ['Heated stone driveway', 'Darkened zinc cladding']
        },
        {
          index: 1,
          label: 'Heated Vestibule',
          category: '02 · Arrival',
          title: 'The Mountain Foyer',
          note: 'Heated basalt floors welcome guests inside, with a double-sided glass fireplace providing warmth and visual transparency.',
          image: room('garden.jpg'),
          meta: ['Radiant basalt floors', 'Double-sided fireplace']
        },
        {
          index: 2,
          label: 'Panoramic Great Hall',
          category: '03 · Living Space',
          title: 'The Summit Hall',
          note: 'Seven-metre glazing frames the full expanse of Aspen Mountain. Raw timber trusses and blackened steel balance modern volume with warmth.',
          image: room('living-room.jpg'),
          meta: ['Seven-metre alpine glass', 'Timber & steel trusses']
        },
        {
          index: 3,
          label: 'Alpine Dining & Hearth',
          category: '04 · Dining & Kitchen',
          title: 'The Winter Kitchen',
          note: 'A dramatic dark quartzite island and long live-edge table set against panoramic mountain dusk.',
          image: room('kitchen.jpg'),
          meta: ['Dark quartzite island', 'Live-edge dining table']
        },
        {
          index: 4,
          label: 'Master Chalet Wing',
          category: '05 · Primary Suite',
          title: 'The Glacier Suite',
          note: 'A private sanctuary above the trees with a cantilevered glass balcony, custom wool textiles and an open stone bath.',
          image: room('primary-suite.jpg'),
          meta: ['Cantilevered balcony', 'Freestanding granite tub']
        },
        {
          index: 5,
          label: 'Snow Terrace & Spa',
          category: '06 · Outdoor Space',
          title: 'The Heated Deck',
          note: 'An integrated cedar hot tub and heated fire circle surrounded by falling snow and stars.',
          image: room('pool-terrace.jpg'),
          meta: ['Integrated cedar spa', 'Radiant outdoor terrace']
        }
      ]
    },
    {
      id: 7,
      slug: 'harbor-residence',
      name: 'Harbor Residence',
      location: 'Newport, RI',
      type: 'Residence',
      price: 13400000,
      priceLabel: '$13,400,000',
      currency: 'USD',
      bedrooms: 5,
      bathrooms: 5,
      interiorArea: '590 sq m (6,350 sq ft)',
      grounds: '4,000 sq m Waterfront Parcel',
      parking: '3-Car Carriage House',
      availability: 'Private viewing by appointment',
      shortDescription: 'A coastal waterfront residence marrying maritime craft with contemporary light-filled proportion.',
      description: 'Positioned on the rocky shoreline of Narragansett Bay, Harbor Residence honors maritime heritage with cedar shingles, bleached oak and bronze details, while using massive structural openings to celebrate maritime light.',
      architecturalStory: 'The rooms follow the curve of the shoreline, so every morning begins with the movement of water and sailboats gliding across the bay.',
      heroImage: residenceImg(7, 'hero.jpg'),
      highlights: [
        { label: 'Waterfront', detail: 'Direct deep-water private dockage and stone rip-rap coastline' },
        { label: 'Maritime', detail: 'Bleached white oak flooring, hand-patinated nautical bronze' },
        { label: 'Gardens', detail: 'Coastal dune grass landscaping designed for sea spray resilience' },
        { label: 'Privacy', detail: 'Cul-de-sac privacy behind historic stone perimeter walling' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Coastal Façade',
          category: '01 · Exterior',
          title: 'The Harbor Edge',
          note: 'Weathered cedar shingles and clean zinc roof planes rise above the rocky shoreline, facing the prevailing south-westerly breeze.',
          image: residenceImg(7, 'hero.jpg'),
          meta: ['Narragansett Bay frontage', 'Weathered cedar craft']
        },
        {
          index: 1,
          label: 'Maritime Foyer',
          category: '02 · Arrival',
          title: 'The Breezeway',
          note: 'Double-height windows immediately reveal sailboats on the water as you enter across wide-plank bleached oak floors.',
          image: room('garden.jpg'),
          meta: ['Bleached oak planks', 'Through-house ocean sightlines']
        },
        {
          index: 2,
          label: 'Waterfront Salon',
          category: '03 · Living Space',
          title: 'The Ocean Room',
          note: 'Light dances on white plastered ceilings as floor-to-ceiling sliding glass creates an effortless transition to seaside decks.',
          image: room('living-room.jpg'),
          meta: ['Water reflection light', 'Seamless deck transition']
        },
        {
          index: 3,
          label: 'Galley & Long Table',
          category: '04 · Dining & Kitchen',
          title: 'Seaside Dining',
          note: 'A custom stainless steel culinary suite paired with a nautical brass dining pendant and unhurried waterfront views.',
          image: room('dining-room.jpg'),
          meta: ['Nautical brass accents', 'Waterfront dining perspective']
        },
        {
          index: 4,
          label: 'Captain’s Suite',
          category: '05 · Primary Suite',
          title: 'The Lighthouse Room',
          note: 'Curved bay windows face the open Atlantic horizon. Fall asleep to the rhythmic swell of the tide.',
          image: room('primary-suite.jpg'),
          meta: ['Atlantic horizon vista', 'Sound-softened acoustics']
        },
        {
          index: 5,
          label: 'Private Dock & Lawn',
          category: '06 · Outdoor Space',
          title: 'The Pier & Lawn',
          note: 'Manicured sea lawn leads to a private deep-water dock accommodating tenders and yachts up to 65 feet.',
          image: room('pool-terrace.jpg'),
          meta: ['Deep-water private pier', 'Granite seawall fire pit']
        }
      ]
    },
    {
      id: 8,
      slug: 'solace-house',
      name: 'Solace House',
      location: 'Lake Austin · Austin, TX',
      type: 'Villa',
      price: 11800000,
      priceLabel: '$11,800,000',
      currency: 'USD',
      bedrooms: 4,
      bathrooms: 5,
      interiorArea: '480 sq m (5,160 sq ft)',
      grounds: '3,200 sq m Hill Country Parcel',
      parking: '3-Car Covered Portico',
      availability: 'Private viewing by appointment',
      shortDescription: 'A Hill Country haven where limestone, rammed earth and shaded waterscapes buffer the Texas sun.',
      description: 'Set along the quiet waters of Lake Austin, Solace House celebrates regional materials. Thick rammed-earth walls and Texas limestone provide high thermal mass, creating a cool, cathedral-like respite inside.',
      architecturalStory: 'The house is organised around a central breezeway that captures lake air currents, connecting living pavilions to an elevated water terrace.',
      heroImage: residenceImg(8, 'hero.jpg'),
      highlights: [
        { label: 'Thermal', detail: 'Thick rammed-earth construction with passive summer cooling' },
        { label: 'Water', detail: 'Private boat slip with automated hydraulic lift on Lake Austin' },
        { label: 'Native', detail: 'Restored Hill Country flora, live oaks and bluebonnet terraces' },
        { label: 'Acoustics', detail: 'Architectural water cascades dampening all regional sound' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Limestone Façade',
          category: '01 · Exterior',
          title: 'The Hill Country Bluff',
          note: 'Rammed earth in natural clay tones blends into the limestone bluff, shaded by sprawling live oak canopies.',
          image: residenceImg(8, 'hero.jpg'),
          meta: ['Rammed earth walls', 'Live oak shade canopy']
        },
        {
          index: 1,
          label: 'Cooling Breezeway',
          category: '02 · Arrival',
          title: 'The Dogtrot Breezeway',
          note: 'A modern interpretation of the Texas dogtrot creates an open-air breezeway framing the calm waters of the lake.',
          image: room('guest-suite.png'),
          meta: ['Natural breeze channeling', 'Cool stone threshold']
        },
        {
          index: 2,
          label: 'Cathedral Living',
          category: '03 · Living Space',
          title: 'The Shaded Pavilion',
          note: 'High-volume timber ceilings and deep overhangs keep direct heat away, allowing gentle reflected light to fill the room.',
          image: room('living-room.jpg'),
          meta: ['Deep overhang shade', 'Texas limestone walls']
        },
        {
          index: 3,
          label: 'Culinary Hearth',
          category: '04 · Dining & Kitchen',
          title: 'The Stone Kitchen',
          note: 'Honest wood cabinetry and hand-hammered copper details surround an open cooking hearth designed for relaxed family meals.',
          image: room('kitchen.jpg'),
          meta: ['Hand-hammered copper', 'Integrated hearth']
        },
        {
          index: 4,
          label: 'Lake View Suite',
          category: '05 · Primary Suite',
          title: 'Waterfront Slumber',
          note: 'Positioned just feet above the water level, offering private terrace access and early-morning kayak departures.',
          image: room('primary-suite.jpg'),
          meta: ['Water-level perspective', 'Linen blackout louvers']
        },
        {
          index: 5,
          label: 'Cantilever Boat Dock',
          category: '06 · Outdoor Space',
          title: 'The Lake Lounge',
          note: 'A two-storey boat slip with an upper sundeck and cooling plunge pool beneath mature weeping willows.',
          image: room('pool-terrace.jpg'),
          meta: ['Hydraulic boat slip', 'Upper sundeck pavilion']
        }
      ]
    },
    {
      id: 9,
      slug: 'juniper-estate',
      name: 'Juniper Estate',
      location: 'Paradise Valley · Scottsdale, AZ',
      type: 'Estate',
      price: 17800000,
      priceLabel: '$17,800,000',
      currency: 'USD',
      bedrooms: 6,
      bathrooms: 7,
      interiorArea: '920 sq m (9,900 sq ft)',
      grounds: '2.5 Hectares Desert Sanctuary',
      parking: '6-Car Subterranean Vault',
      availability: 'Private viewing by appointment',
      shortDescription: 'A desert estate where rammed earth and reflection pools create an oasis against Camelback Mountain.',
      description: 'Juniper Estate takes inspiration from timeless desert architecture. Thick insulated walls, sheltered peristyles and sunken garden courtyards shield the interior from harsh heat while framing dramatic rock formations.',
      architecturalStory: 'Water acts as an architectural material throughout the estate, cooling the air and mirroring the dramatic Sonoran Desert sunsets.',
      heroImage: residenceImg(9, 'hero.jpg'),
      highlights: [
        { label: 'Setting', detail: 'Commanding views of Camelback Mountain and the Sonoran valley' },
        { label: 'Thermal', detail: 'Massive insulated earth walls with integrated hydronic radiant cooling' },
        { label: 'Oasis', detail: 'Sunken courtyard microclimates with mature date palms and citrus' },
        { label: 'Collector', detail: 'Climate-controlled 6-vehicle display vault and private security gate' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Desert Silhouette',
          category: '01 · Exterior',
          title: 'The Red Rock Frame',
          note: 'Earthy architectural volumes emerge naturally from desert sand, aligned directly with Camelback Mountain’s iconic ridge.',
          image: residenceImg(9, 'hero.jpg'),
          meta: ['Camelback Mountain axis', 'Rammed earth pigments']
        },
        {
          index: 1,
          label: 'Peristyle Entry',
          category: '02 · Arrival',
          title: 'The Oasis Court',
          note: 'Passing through heavy bronze gates, a sunken courtyard of date palms, cool stone and cascading water drops the temperature instantly.',
          image: room('garden.jpg'),
          meta: ['Sunken microclimate', 'Shaded palm colonnade']
        },
        {
          index: 2,
          label: 'Desert Sanctuary',
          category: '03 · Living Space',
          title: 'The Sunken Salon',
          note: 'Sunken conversation lounge featuring polished terrazzo floors and high clerestory windows framing purple dusk skies.',
          image: room('living-room.jpg'),
          meta: ['Polished terrazzo floor', 'Sunken conversation pit']
        },
        {
          index: 3,
          label: 'The Courtyard Dining',
          category: '04 · Dining & Kitchen',
          title: 'Evening Feast',
          note: 'Indoor dining flows past bronze screens into a walled citrus court illuminated by hand-cast bronze oil lanterns.',
          image: room('dining-room.jpg'),
          meta: ['Bronze screening', 'Walled citrus court']
        },
        {
          index: 4,
          label: 'The Oasis Pavilion',
          category: '05 · Primary Suite',
          title: 'The Canyon Retreat',
          note: 'A secluded wing with a private courtyard, outdoor fireplace and double indoor-outdoor shower open to the desert stars.',
          image: room('primary-suite.jpg'),
          meta: ['Open-air star shower', 'Private canyon courtyard']
        },
        {
          index: 5,
          label: 'Infinity Basin',
          category: '06 · Outdoor Space',
          title: 'The Horizon Basin',
          note: 'A black quartzite pool mirrors the evening desert sky, accompanied by sunken fire lounges and desert botanical gardens.',
          image: room('pool-terrace.jpg'),
          meta: ['Black quartzite pool', 'Sunken desert fire lounge']
        }
      ]
    },
    {
      id: 10,
      slug: 'canyon-residence',
      name: 'Canyon Residence',
      location: 'Serra Retreat · Malibu, CA',
      type: 'Residence',
      price: 15200000,
      priceLabel: '$15,200,000',
      currency: 'USD',
      bedrooms: 4,
      bathrooms: 5,
      interiorArea: '540 sq m (5,810 sq ft)',
      grounds: '1.6 Hectares Canyon Parcel',
      parking: '4-Car Gated Portico',
      availability: 'Private viewing by appointment',
      shortDescription: 'A secluded Malibu canyon retreat where timber, concrete and ocean air form an unhurried sanctuary.',
      description: 'Hidden within the private gated Serra Retreat in Malibu, Canyon Residence is enveloped by eucalyptus and sycamore trees. Architectural concrete, warm cedar and expansive steel-framed glass evoke a secluded treehouse of grand scale.',
      architecturalStory: 'The house hovers lightly above the canyon floor on sculptural concrete pilings, preserving native root systems and catching canyon breezes.',
      heroImage: residenceImg(10, 'hero.jpg'),
      highlights: [
        { label: 'Security', detail: 'Double-gated Serra Retreat privacy with 24-hour guard patrol' },
        { label: 'Nature', detail: 'Private canyon acreage with seasonal stream and eucalyptus grove' },
        { label: 'Surfing', detail: 'Golf-cart ride to private Malibu Colony beach and Surfrider point' },
        { label: 'Wellness', detail: 'Outdoor cold plunge, cedar sauna and dedicated yoga pavilion' }
      ],
      scenes: [
        {
          index: 0,
          label: 'Canyon Canopy',
          category: '01 · Exterior',
          title: 'The Eucalyptus Grove',
          note: 'Nestled deep in the canyon, the house appears between towering eucalyptus trees with cedar siding naturally weathering to silver.',
          image: residenceImg(10, 'hero.jpg'),
          meta: ['Serra Retreat privacy', 'Mature eucalyptus grove']
        },
        {
          index: 1,
          label: 'Suspended Bridge',
          category: '02 · Arrival',
          title: 'The Canopy Walk',
          note: 'A floating timber and steel bridge crosses a seasonal creek bed, leading to a pivot door of blackened steel and glass.',
          image: room('garden.jpg'),
          meta: ['Floating timber bridge', 'Blackened steel portal']
        },
        {
          index: 2,
          label: 'The Treehouse Salon',
          category: '03 · Living Space',
          title: 'The Canyon Great Room',
          note: 'Wraparound glass walls place you directly in the tree branches. A suspended rotating hearth warms cool coastal evenings.',
          image: room('living-room.jpg'),
          meta: ['Suspended rotating hearth', 'Wraparound canopy glass']
        },
        {
          index: 3,
          label: 'Cedar Kitchen',
          category: '04 · Dining & Kitchen',
          title: 'Organic Warmth',
          note: 'Raw cedar millwork, honed soapstone counters and an open table facing the canyon sunset.',
          image: room('kitchen.jpg'),
          meta: ['Honed soapstone counters', 'Custom cedar cabinetry']
        },
        {
          index: 4,
          label: 'Canopy Suite',
          category: '05 · Primary Suite',
          title: 'The Birds-Eye Suite',
          note: 'Elevated at canopy level with motorized glass pocket doors opening onto a cantilevered teak deck.',
          image: room('primary-suite.jpg'),
          meta: ['Canopy-level cantilever', 'Motorized pocket glass']
        },
        {
          index: 5,
          label: 'Canyon Pool & Deck',
          category: '06 · Outdoor Space',
          title: 'The Secluded Basin',
          note: 'A dark green stone lap pool mirrors the canyon ridge, bordered by wild rosemary and private sunning decks.',
          image: room('pool-terrace.jpg'),
          meta: ['Dark green stone basin', 'Cold plunge & sauna']
        }
      ]
    }
  ];

  /* Sample listings added to the collection.  Each listing carries its own
     asset namespace so a detail page can never resolve imagery from another
     residence.  Replace these demonstration image sets with commissioned
     photography before publishing a live listing. */
  const sampleListing = (id, slug, name, location, type, price, bedrooms, bathrooms, livingRooms, area, lot, floors, parking, yearBuilt, description, story, amenities) => ({
    id, slug, name, location, type, price, priceLabel: `$${price.toLocaleString('en-US')}`,
    currency: 'USD', bedrooms, bathrooms, livingRooms, interiorArea: `${area.toLocaleString('en-US')} sq ft`,
    grounds: lot, floors, parking, yearBuilt, availability: 'Sample listing — availability to be verified',
    shortDescription: description.split('. ')[0] + '.', description, architecturalStory: story,
    heroImage: residenceHero(id),
    photos: [
      { image: residenceHero(id), label: 'Front exterior' },
      ...(id === 11 ? [
        { image: residenceImg(id, 'living.jpg'), label: 'Living room' },
        { image: residenceImg(id, 'kitchen.jpg'), label: 'Kitchen and dining' },
        { image: residenceImg(id, 'primary-suite.jpg'), label: 'Primary bedroom' },
        { image: residenceImg(id, 'outdoor.jpg'), label: 'Outdoor living' }
      ] : [])
    ],
    highlights: amenities.map(([label, detail]) => ({ label, detail })),
    scenes: []
  });

  properties.push(
    sampleListing(11, 'sagecrest-residence', 'Sagecrest Residence', 'Austin, TX, United States', 'Contemporary Estate', 8750000, 5, 6, 2, 6240, '1.14 acres', 2, '3-car garage + 4 guest spaces', 2023, 'Sample listing. Sagecrest Residence is a limestone and glass retreat positioned above the Barton Creek greenbelt, with broad living spaces that open to the landscape.', 'A double-height great room anchors the plan, while a quiet primary wing, chef’s kitchen, and shaded pool terrace allow every part of the home to feel both composed and relaxed.', [['Private pool', 'Saltwater pool with a shaded loggia'], ['Home office', 'Acoustically private study with greenbelt view'], ['Smart home', 'Integrated lighting, climate, and shading controls'], ['Security', 'Gated arrival and monitored perimeter']]),
    sampleListing(12, 'horizon-oaks-estate', 'Horizon Oaks Estate', 'Nashville, TN, United States', 'Country Estate', 6950000, 6, 7, 3, 7180, '4.6 acres', 2, '4-car garage + motor court', 2022, 'Sample listing. Horizon Oaks Estate balances a warm contemporary interior with long meadow views and a deeply private tree-lined approach.', 'White oak joinery, tailored stonework, and generous glazing set a measured tone throughout the entertaining rooms, bedroom suites, and covered outdoor kitchen.', [['Landscaped garden', 'Native planting and walking paths'], ['Outdoor entertaining', 'Covered kitchen, fireplace, and dining terrace'], ['Walk-in wardrobes', 'Dual primary dressing rooms'], ['Parking', 'Four-car garage and guest motor court']]),
    sampleListing(13, 'mariner-house', 'Mariner House', 'Carmel-by-the-Sea, CA, United States', 'Coastal Residence', 12400000, 4, 5, 2, 4860, '0.48 acres', 2, '2-car garage + 2 spaces', 2021, 'Sample listing. Mariner House frames the Pacific through clerestory glass, sheltered courtyards, and a sequence of finely finished coastal rooms.', 'The architecture uses weathered timber, pale stone, and bronze detailing to create a home that feels rooted in its bluff-top setting without competing with the horizon.', [['Ocean-view terrace', 'Protected outdoor lounge and fire feature'], ['Wine room', 'Climate-controlled tasting room'], ['Smart home', 'Automated shades and whole-home audio'], ['Security', 'Private drive with discreet access control']]),
    sampleListing(14, 'willowmere-house', 'Willowmere House', 'Lake Forest, IL, United States', 'Lakefront Estate', 9800000, 5, 6, 2, 6840, '1.9 acres', 2, '3-car garage + 5 spaces', 2019, 'Sample listing. Willowmere House is a calm lakefront estate with formal gardens, generous entertaining rooms, and a private shoreline setting.', 'A central gallery connects the principal rooms to the garden and water, while the upper level gives each bedroom suite a distinct outlook and ample privacy.', [['Private shoreline', 'Lake access and sheltered viewing lawn'], ['Landscaped garden', 'Formal garden rooms and mature trees'], ['Home office', 'Library office with custom millwork'], ['Outdoor entertaining', 'Stone terrace with built-in grill']]),
    sampleListing(15, 'mesa-verde-retreat', 'Mesa Verde Retreat', 'Scottsdale, AZ, United States', 'Desert Villa', 7600000, 4, 5, 2, 5320, '1.2 acres', 1, '3-car garage + 3 spaces', 2024, 'Sample listing. Mesa Verde Retreat is a low-slung desert villa arranged around a shaded courtyard and a horizon-facing infinity pool.', 'Rammed earth walls and oak ceilings temper the desert light, creating a fluid progression from gallery entry to open kitchen, primary suite, and outdoor rooms.', [['Infinity pool', 'Heated edge pool facing the McDowell foothills'], ['Wellness room', 'Fitness studio with garden court'], ['Outdoor entertaining', 'Sunken fire lounge and dining pavilion'], ['Smart home', 'Climate, lighting, and pool automation']]),
    sampleListing(16, 'brookline-manor', 'Brookline Manor', 'Brookline, MA, United States', 'Historic Estate', 11250000, 6, 7, 3, 7520, '0.72 acres', 3, '2-car garage + 4 spaces', 1912, 'Sample listing. Brookline Manor brings a carefully restored historic envelope together with luminous modern family spaces and an enclosed garden.', 'Original millwork and leaded glass remain in the formal rooms, while a new kitchen wing, mudroom, and garden salon bring everyday life into the landscape.', [['Landscaped garden', 'Walled garden with mature specimen trees'], ['Home office', 'Panelled library and separate study'], ['Security', 'Monitored entry and camera-ready wiring'], ['Parking', 'Detached garage and gated drive']]),
    sampleListing(17, 'cypress-tide-house', 'Cypress Tide House', 'Charleston, SC, United States', 'Waterfront Residence', 8450000, 5, 5, 2, 5980, '0.86 acres', 2, '3-car garage + 3 spaces', 2020, 'Sample listing. Cypress Tide House is a refined waterfront residence defined by layered porches, marsh views, and a quiet, material-rich interior.', 'The kitchen and main living room share a long axis to the water, with guest suites upstairs and a secluded primary suite opening to a private morning porch.', [['Private dock', 'Deep-water dock with boat lift'], ['Private pool', 'Courtyard pool and outdoor shower'], ['Outdoor entertaining', 'Screened dining porch and summer kitchen'], ['Security', 'Gated entry and smart locks']]),
    sampleListing(18, 'aspen-line-lodge', 'Aspen Line Lodge', 'Aspen, CO, United States', 'Mountain Lodge', 15900000, 6, 7, 3, 8310, '2.1 acres', 3, '3-car heated garage', 2023, 'Sample listing. Aspen Line Lodge is a contemporary mountain home with framed alpine views, expansive entertaining spaces, and a private wooded site.', 'Board-formed concrete, cedar, and hand-finished steel make the architecture feel resolute in winter and effortless in summer, from the great room to the ski room and terrace.', [['Ski room', 'Heated equipment room with custom storage'], ['Wellness suite', 'Sauna, steam, and treatment room'], ['Outdoor entertaining', 'Heated terrace with fire feature'], ['Parking', 'Heated three-car garage']]),
    sampleListing(19, 'palmetto-court', 'Palmetto Court', 'Palm Beach, FL, United States', 'Garden Villa', 13800000, 5, 6, 2, 6110, '0.39 acres', 2, '2-car garage + 3 spaces', 2022, 'Sample listing. Palmetto Court is a garden villa near the coast, with intimate courtyards, a sculptural stair, and relaxed rooms for year-round living.', 'The plan places public rooms around the central garden and pool, allowing sunlight and planting to appear at every turn while preserving a serene primary retreat.', [['Private pool', 'Garden pool with cabana'], ['Walk-in wardrobes', 'Custom dual dressing rooms'], ['Smart home', 'Whole-home climate and lighting control'], ['Security', 'Gated courtyard entry']]),
    sampleListing(20, 'granite-bay-house', 'Granite Bay House', 'Seattle, WA, United States', 'Modern Residence', 9350000, 5, 5, 2, 6470, '0.63 acres', 2, '3-car garage + 2 spaces', 2021, 'Sample listing. Granite Bay House is a Pacific Northwest home that layers quiet concrete, warm timber, and broad water views across two considered levels.', 'A glazed stair links the main entertaining floor to private bedroom suites, with a library, chef’s kitchen, and covered terrace carrying the home into every season.', [['Water view', 'Sheltered outlook across Puget Sound'], ['Home office', 'Library with built-in work wall'], ['Outdoor entertaining', 'Covered terrace with infrared heating'], ['Security', 'Integrated cameras and alarm system']]),
    sampleListing(21, 'stonegate-farm', 'Stonegate Farm', 'New Canaan, CT, United States', 'Country Estate', 10850000, 6, 7, 3, 7890, '3.2 acres', 2, '3-car garage + motor court', 2020, 'Sample listing. Stonegate Farm is a contemporary country estate with an orchard-like setting, a generous family layout, and polished entertaining spaces.', 'The home transitions from a stone arrival hall to a light-filled kitchen and garden room, with a separate guest wing and a primary suite that overlooks the grounds.', [['Landscaped garden', 'Orchard, lawns, and kitchen garden'], ['Home office', 'Private office with garden entrance'], ['Private pool', 'Pool, spa, and changing pavilion'], ['Parking', 'Garage and circular motor court']]),
    sampleListing(22, 'silver-lake-pavilion', 'Silver Lake Pavilion', 'Los Angeles, CA, United States', 'Hillside Residence', 6750000, 4, 5, 2, 4420, '0.29 acres', 3, '2-car garage + 2 spaces', 2024, 'Sample listing. Silver Lake Pavilion is a sculptural hillside home with layered terraces, framed city views, and highly private living spaces.', 'The residence makes the most of its slope with a sequence of open living areas, a protected primary floor, and a roof terrace built for sunset dinners.', [['Roof terrace', 'Outdoor kitchen and skyline lounge'], ['Home office', 'Flexible studio with separate entry'], ['Smart home', 'Lighting, sound, and access automation'], ['Security', 'Gated drive and video entry']]),
    sampleListing(23, 'tanglewood-house', 'Tanglewood House', 'Houston, TX, United States', 'Contemporary Estate', 7900000, 5, 6, 2, 6980, '0.51 acres', 2, '3-car garage + 4 spaces', 2023, 'Sample listing. Tanglewood House is a composed city estate with strong indoor-outdoor connections, serene bedrooms, and a richly landscaped rear garden.', 'A shaded entry court opens into a gallery-like living room, while the kitchen, family room, and covered terrace form an easy setting for daily life and entertaining.', [['Private pool', 'Pool and covered outdoor lounge'], ['Wine room', 'Temperature-controlled display cellar'], ['Walk-in wardrobes', 'Custom millwork in primary suite'], ['Security', 'Monitored security and controlled gate']]),
    sampleListing(24, 'cedar-ridge-compound', 'Cedar Ridge Compound', 'Park City, UT, United States', 'Mountain Estate', 14200000, 7, 8, 3, 9140, '3.8 acres', 3, '4-car heated garage', 2022, 'Sample listing. Cedar Ridge Compound is a private mountain estate with expansive gathering spaces, separate guest quarters, and uninterrupted ridgeline views.', 'The architecture separates family and guest zones across three levels, joined by a dramatic great room, chef’s kitchen, wellness spaces, and terraces that follow the terrain.', [['Guest house', 'Separate two-bedroom guest pavilion'], ['Wellness suite', 'Gym, sauna, and cold-plunge room'], ['Outdoor entertaining', 'Fire terrace and covered dining'], ['Parking', 'Heated four-car garage with gear storage']])
  );

  /* ==========================================================================
     2. UTILITIES & DOM HELPERS
     ========================================================================== */

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (val) => String(val ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '(': '&#40;', ')': '&#41;',
    '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);

  const propertyCard = (property, index = 0) => `
    <article class="property-card reveal" data-property-id="${property.id}" style="--card-delay:${Math.min(index, 8) * 70}ms">
      <a class="property-card__link" href="property.html?slug=${property.slug}" aria-label="Explore ${escapeHtml(property.name)} in ${escapeHtml(property.location)}">
        <div class="property-card__image" style="background-image:url('${property.heroImage}')"></div>
        <div class="property-card__overlay"></div>
        <div class="property-card__content">
          <p class="eyebrow">${escapeHtml(property.location)}</p>
          <h3>${escapeHtml(property.name)}</h3>
          <p class="property-card__meta">${escapeHtml(property.priceLabel)} <span>${escapeHtml(property.type)} · ${escapeHtml(property.interiorArea)}</span></p>
          <p class="property-card__description">${escapeHtml(property.shortDescription)}</p>
          <span class="card-link">Explore residence →</span>
        </div>
      </a>
    </article>
  `;

  function setMeta(name, content) {
    let node = $(`meta[name="${name}"]`);
    if (!node) {
      node = document.createElement('meta');
      node.name = name;
      document.head.appendChild(node);
    }
    node.content = content;
  }

  function setOgMeta(property, content) {
    let node = $(`meta[property="${property}"]`);
    if (!node) {
      node = document.createElement('meta');
      node.setAttribute('property', property);
      document.head.appendChild(node);
    }
    node.content = content;
  }

  /* ==========================================================================
     3. NAVIGATION CONTROLLER
     ========================================================================== */

  function initNavigation() {
    const header = $('header');
    const button = $('.menu', header);
    const nav = $('#site-navigation', header);
    if (!header || !button || !nav) return;

    const setOpen = (open) => {
      header.classList.toggle('nav-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Close' : 'Menu';
    };

    button.addEventListener('click', () => {
      setOpen(!header.classList.contains('nav-open'));
    });

    // Close when clicking nav link
    $$('a', nav).forEach(link => {
      link.addEventListener('click', () => setOpen(false));
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) {
        setOpen(false);
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        setOpen(false);
        button.focus();
      }
    });
  }

  /* ==========================================================================
     4. CINEMATIC PROPERTY SCROLL ENGINE
     ==========================================================================
     Architecture:
     property-scroll-container (creates scroll distance: 6 scenes * 100vh)
         └── sticky property-viewport (pins at top: 0 until 100% progress)
                 ├── persistent property metadata bar (title never disappears)
                 ├── scenes layer (6 scenes with hold periods and smooth crossfades)
                 └── persistent HUD (scene counter, progress bar, scroll prompt)
     ========================================================================== */

  function initResidenceCinematic(property) {
    const mount = $('[data-property-cinematic]');
    if (!mount || !property || !property.scenes || !property.scenes.length) return;

    // Clear any previous instances safely
    mount.innerHTML = '';

    const scenes = property.scenes;
    const numScenes = scenes.length;

    // Preload all scene images immediately to prevent flashes or delays
    scenes.forEach(scene => {
      const img = new Image();
      img.src = scene.image;
    });

    // Set scroll distance factor: 6 scenes = 6.2 screen heights
    mount.style.setProperty('--scroll-height-factor', String(numScenes + 0.6));

    // Construct sticky viewport DOM
    const viewport = document.createElement('div');
    viewport.className = 'property-viewport';

    // 1. Persistent Top Metadata Bar
    const header = document.createElement('header');
    header.className = 'property-viewport__header';
    header.innerHTML = `
      <div class="property-viewport__identity">
        <a class="property-viewport__brand" href="index.html">MARIDAN<sup>®</sup></a>
        <span class="property-viewport__sep">/</span>
        <span class="property-viewport__residence">${escapeHtml(property.name)}</span>
      </div>
      <div class="property-viewport__specs">
        <span>${escapeHtml(property.location)}</span>
        <span class="property-viewport__dot">·</span>
        <span>${escapeHtml(property.bedrooms)} Beds · ${escapeHtml(property.bathrooms)} Baths · ${escapeHtml(property.interiorArea.split('(')[0].trim())}</span>
        <span class="property-viewport__dot">·</span>
        <strong class="property-viewport__price">${escapeHtml(property.priceLabel)}</strong>
      </div>
    `;

    // 2. Scenes Layer
    const scenesContainer = document.createElement('div');
    scenesContainer.className = 'property-viewport__scenes';

    scenes.forEach((scene, index) => {
      const article = document.createElement('article');
      article.className = `property-scene ${index === 0 ? 'is-active' : ''}`;
      article.setAttribute('data-scene-index', String(index));
      article.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');

      article.innerHTML = `
        <div class="property-scene__image-wrapper">
          <div class="property-scene__image" style="background-image:url('${scene.image}')"></div>
          <div class="property-scene__overlay"></div>
        </div>
        <div class="property-scene__content">
          <span class="property-scene__badge">${escapeHtml(scene.category)}</span>
          <h2 class="property-scene__title">${escapeHtml(scene.title)}</h2>
          <p class="property-scene__text">${escapeHtml(scene.note)}</p>
          <div class="property-scene__meta">
            ${scene.meta.map(item => `<span>${escapeHtml(item)}</span>`).join('')}
          </div>
        </div>
      `;
      scenesContainer.appendChild(article);
    });

    // 3. Bottom HUD Control Bar
    const hud = document.createElement('footer');
    hud.className = 'property-viewport__hud';
    hud.innerHTML = `
      <div class="property-hud__left">
        <span class="property-hud__counter"><span data-hud-current>01</span> / 0${numScenes}</span>
        <span class="property-hud__divider">|</span>
        <span class="property-hud__scene-name" data-hud-label>${escapeHtml(scenes[0].label)}</span>
      </div>
      <div class="property-hud__center">
        <div class="property-hud__progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Property journey progress">
          <div class="property-hud__progress-fill" data-hud-bar></div>
        </div>
      </div>
      <div class="property-hud__right">
        <span class="property-hud__prompt">Scroll to advance journey</span>
      </div>
    `;

    viewport.appendChild(header);
    viewport.appendChild(scenesContainer);
    viewport.appendChild(hud);
    mount.appendChild(viewport);

    // Reduced motion handling
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      mount.classList.add('property-scroll-container--static');
      return;
    }

    // SCROLL PROGRESS ENGINE
    const sceneElements = $$('.property-scene', scenesContainer);
    const hudCurrent = $('[data-hud-current]', hud);
    const hudLabel = $('[data-hud-label]', hud);
    const hudBar = $('[data-hud-bar]', hud);

    let animationFrame = 0;
    let lastActiveIndex = -1;

    const updateScrollProgress = () => {
      animationFrame = 0;

      const rect = mount.getBoundingClientRect();
      const totalScrollable = mount.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Calculate normalized progress strictly between 0.000 and 1.000
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));

      // Update progress bar
      if (hudBar) {
        hudBar.style.width = `${(progress * 100).toFixed(1)}%`;
      }

      // Map progress to scenes
      // Each scene receives a slot: 1.0 / numScenes
      // Inside each slot:
      // - First ~70%: HOLD PERIOD (scene completely settled, stable, still)
      // - Final ~30%: TRANSITION WINDOW (outgoing scene crossfades out; incoming reveals)
      const slotSize = 1 / numScenes;
      const rawPosition = progress * numScenes;
      const currentSlotIndex = Math.min(numScenes - 1, Math.floor(rawPosition));
      const localProgress = rawPosition - currentSlotIndex; // 0.0 to 1.0 within current slot

      const holdThreshold = 0.70; // 70% hold period, 30% transition
      let transitionPhase = 0;

      if (currentSlotIndex < numScenes - 1 && localProgress > holdThreshold) {
        transitionPhase = (localProgress - holdThreshold) / (1 - holdThreshold); // 0.0 to 1.0
      }

      // Update scene opacities and visibility
      sceneElements.forEach((el, index) => {
        let opacity = 0;
        let isVisible = false;

        if (index === currentSlotIndex) {
          // Current active scene: fades from 1.0 down to 0.0 only during transition window
          opacity = 1 - transitionPhase;
          isVisible = true;
        } else if (index === currentSlotIndex + 1 && transitionPhase > 0) {
          // Next scene: fades from 0.0 up to 1.0 during transition window
          opacity = transitionPhase;
          isVisible = true;
        }

        // Apply opacity cleanly
        el.style.opacity = opacity.toFixed(3);
        el.classList.toggle('is-active', isVisible);
        el.setAttribute('aria-hidden', String(!isVisible));

        // Keep image transform anchored during hold period
        const image = $('.property-scene__image', el);
        if (image) {
          // Restrained, subtle architectural scale (1.025 settling to 1.00)
          const scale = index === currentSlotIndex
            ? 1.00
            : (1.025 - transitionPhase * 0.025);
          image.style.transform = `scale(${scale.toFixed(3)})`;
        }

        // Restrained text movement during transition; anchored during hold
        const content = $('.property-scene__content', el);
        if (content) {
          if (index === currentSlotIndex) {
            content.style.transform = 'translateY(0px)';
          } else if (index === currentSlotIndex + 1 && transitionPhase > 0) {
            const translateY = (1 - transitionPhase) * 16;
            content.style.transform = `translateY(${translateY.toFixed(1)}px)`;
          } else {
            content.style.transform = 'translateY(16px)';
          }
        }
      });

      // Update HUD indicators when entering a new scene
      const displayIndex = transitionPhase > 0.5 ? currentSlotIndex + 1 : currentSlotIndex;
      if (displayIndex !== lastActiveIndex && scenes[displayIndex]) {
        lastActiveIndex = displayIndex;
        if (hudCurrent) hudCurrent.textContent = String(displayIndex + 1).padStart(2, '0');
        if (hudLabel) hudLabel.textContent = scenes[displayIndex].label;
      }
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateScrollProgress);
      }
    };

    // Allow clicking the progress track to smoothly seek in the property journey
    const track = $('.property-hud__progress-track', hud);
    if (track) {
      track.style.cursor = 'pointer';
      track.addEventListener('click', (e) => {
        const trackRect = track.getBoundingClientRect();
        const clickPercent = Math.max(0, Math.min(1, (e.clientX - trackRect.left) / trackRect.width));
        const totalScrollable = mount.offsetHeight - window.innerHeight;
        const targetScrollY = mount.getBoundingClientRect().top + window.scrollY + clickPercent * totalScrollable;
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      });
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    // Initial paint
    requestUpdate();
  }

  /* ==========================================================================
     5. PROPERTY PAGE CONTROLLER
     ========================================================================== */

  const handleGalleryImgFallback = (img) => {
    if (!img || img.dataset.handledFallback === 'true') return;
    img.dataset.handledFallback = 'true';
    img.onerror = null;
    const figure = img.closest('.property-photo-gallery__item');
    if (!figure) return;
    const panel = document.createElement('div');
    panel.className = 'gallery-fallback-panel';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Photography Notice');
    panel.innerHTML = `
      <span class="gallery-fallback-panel__eyebrow">MARIDAN · ARCHITECTURAL RECORD</span>
      <p class="gallery-fallback-panel__text">Commissioned photography for this residence is currently in preparation. Complete architectural dossier and private appointments are available on request.</p>
    `;
    img.replaceWith(panel);
    figure.classList.add('property-photo-gallery__item--fallback');
  };
  window.__maridanReplaceGalleryImg = handleGalleryImgFallback;

  function verifyPropertyCardBackgrounds() {
    $$('.property-card').forEach(card => {
      const imgDiv = $('.property-card__image', card);
      if (!imgDiv || imgDiv.dataset.bgVerified) return;
      imgDiv.dataset.bgVerified = 'pending';
      const styleBg = imgDiv.style.backgroundImage || '';
      const match = styleBg.match(/url\(['"]?([^'"]+)['"]?\)/);
      if (match && match[1]) {
        const probe = new Image();
        probe.onerror = () => {
          imgDiv.dataset.bgVerified = 'failed';
          card.classList.add('has-fallback-hero');
          imgDiv.classList.add('is-fallback');
        };
        probe.onload = () => {
          imgDiv.dataset.bgVerified = 'verified';
        };
        probe.src = match[1];
      }
    });
  }

  function initPropertyPage() {
    const isPropertyPage = document.body.hasAttribute('data-property-page');
    if (!isPropertyPage) return;

    // The detail page remains a concise architectural dossier; its former
    // walkthrough trigger is intentionally removed from the rendered UI.
    $('[href="#property-journey"]')?.remove();

    // Resolve property from URL slug
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    const property = properties.find(p => p.slug === slug) || properties[0];

    // Document SEO Title & Metadata
    document.title = `${property.name} | MARIDAN`;
    setMeta('description', `${property.name} in ${property.location}. ${property.shortDescription}`);
    setOgMeta('og:title', `${property.name} | MARIDAN Private Residences`);
    setOgMeta('og:description', property.shortDescription);

    // Schema.org JSON-LD Structured Data
    const existingSchema = $('#property-schema');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.id = 'property-schema';
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      'name': property.name,
      'description': property.description,
      'areaServed': brand.serviceArea,
      'offers': {
        '@type': 'Offer',
        'price': property.price,
        'priceCurrency': property.currency,
        'availability': 'https://schema.org/PreOrder'
      }
    });
    document.head.appendChild(schema);

    // Populate all [data-property-field] elements strictly
    // (Title never disappears because values are directly bound to semantic text content)
    $$('[data-property-field]').forEach(el => {
      const field = el.dataset.propertyField;
      if (field === 'name') {
        el.textContent = property.name;
        const asm = assembleHeading(el, { staggerMs: 35, displacementPx: 38 });
        if (asm) setTimeout(() => asm.trigger(), 180);
      }
      else if (field === 'location') el.textContent = property.location;
      else if (field === 'price') el.textContent = property.priceLabel;
      else if (field === 'specs-summary') el.textContent = `${property.bedrooms} Bedrooms · ${property.bathrooms} Bathrooms · ${property.interiorArea}`;
      else if (field === 'description') el.textContent = property.description;
      else if (field === 'architecturalStory') el.textContent = property.architecturalStory;
      else if (field === 'shortDescription') el.textContent = property.shortDescription;
      else if (property[field]) el.textContent = property[field];
    });

    // Populate hero cover image with verified fallback handling
    $$('[data-property-image]').forEach(el => {
      el.style.backgroundImage = `url('${property.heroImage}')`;
      el.classList.remove('is-fallback');
      const heroParent = el.closest('.detail-hero');
      if (heroParent) heroParent.classList.remove('has-fallback-hero');

      const probe = new Image();
      probe.onerror = () => {
        el.classList.add('is-fallback');
        if (heroParent) heroParent.classList.add('has-fallback-hero');
      };
      probe.src = property.heroImage;
    });

    const sampleNote = $('[data-property-sample-note]');
    if (sampleNote) sampleNote.hidden = !String(property.availability).startsWith('Sample listing');

    // Supporting photographs belong to the resolved listing, never to a shared page state.
    const gallery = $('[data-property-gallery-images]');
    if (gallery) {
      const propertyAssetPath = `assets/properties/residence-${String(property.id).padStart(2, '0')}/`;
      const photos = (property.photos || [
        { image: property.heroImage, label: 'Residence exterior' },
        ...property.scenes
          .filter(scene => scene.image.startsWith(propertyAssetPath))
          .map(scene => ({ image: scene.image, label: scene.label }))
      ]).filter((photo, index, all) => all.findIndex(item => item.image === photo.image) === index);

      // Capture image load error events inside the gallery container
      gallery.addEventListener('error', (event) => {
        if (event.target && event.target.tagName === 'IMG') {
          handleGalleryImgFallback(event.target);
        }
      }, true);

      gallery.innerHTML = photos.map((photo, index) => `
        <figure class="property-photo-gallery__item ${index === 0 ? 'property-photo-gallery__item--hero' : ''}">
          <img src="${escapeHtml(photo.image)}" alt="${escapeHtml(property.name)} — ${escapeHtml(photo.label)}" loading="${index < 2 ? 'eager' : 'lazy'}" onerror="window.__maridanReplaceGalleryImg && window.__maridanReplaceGalleryImg(this)">
          <figcaption>${escapeHtml(photo.label)}</figcaption>
        </figure>
      `).join('');

      $$('img', gallery).forEach(img => {
        if (img.complete && img.naturalWidth === 0) {
          handleGalleryImgFallback(img);
        }
      });
    }

    // Populate specifications facts grid
    const factsContainer = $('[data-property-facts]');
    if (factsContainer) {
      const facts = [
        ['Property Type', property.type],
        ['Location', property.location],
        ['Interior Living Area', property.interiorArea],
        ['Lot Size', property.grounds],
        ['Bedrooms', `${property.bedrooms}`],
        ['Bathrooms', `${property.bathrooms}`],
        ['Living Rooms', property.livingRooms || 'Not specified'],
        ['Floors', property.floors || 'Not specified'],
        ['Garage & Parking', property.parking],
        ...(property.yearBuilt ? [['Year Built', property.yearBuilt]] : []),
        ['Price', property.priceLabel],
        ['Availability', property.availability]
      ];
      factsContainer.innerHTML = facts.map(([label, value]) => `
        <div class="fact-card">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join('');
    }

    // Populate architectural highlights
    const amenitiesContainer = $('[data-property-amenities]');
    if (amenitiesContainer && property.highlights) {
      amenitiesContainer.innerHTML = property.highlights.map(h => `
        <div class="amenity-item">
          <b>${escapeHtml(h.label)}</b>
          <p>${escapeHtml(h.detail)}</p>
        </div>
      `).join('');
    }

    // Populate enquiry links
    const enquiryLinks = $$('[data-property-enquire-link], [data-property-cta]');
    enquiryLinks.forEach(link => {
      link.href = `contact.html?property=${encodeURIComponent(property.slug)}`;
    });

    // Populate related residences (3 distinct properties)
    const relatedContainer = $('[data-related]');
    if (relatedContainer) {
      const relatedList = properties.filter(p => p.id !== property.id).slice(0, 3);
      relatedContainer.innerHTML = relatedList.map(propertyCard).join('');
      verifyPropertyCardBackgrounds();
    }

  }

  // Handle browser back/forward without reloads
  window.addEventListener('popstate', () => {
    if (document.body.hasAttribute('data-property-page')) {
      initPropertyPage();
    }
  });

  /* ==========================================================================
     6. PROPERTIES CATALOGUE CONTROLLER
     ========================================================================== */

  function initCataloguePage() {
    const gallery = $('[data-property-gallery]');
    if (!gallery) return;

    let activeFilter = 'All';

    const render = (filter) => {
      activeFilter = filter;
      const list = properties.filter(p => filter === 'All' || p.type === filter);
      const columns = innerWidth >= 1440 ? 4 : innerWidth >= 1024 ? 3 : innerWidth >= 640 ? 2 : 1;
      gallery.className = 'property-grid catalogue-grid';
      gallery.innerHTML = Array.from({ length: Math.ceil(list.length / columns) }, (_, rowIndex) => `<div class="catalogue-row reveal">${list.slice(rowIndex * columns, rowIndex * columns + columns).map((property, index) => propertyCard(property, rowIndex * columns + index).replace('property-card reveal', 'property-card')).join('')}</div>`).join('');
      initReveals();
      initCard3DHover();
      verifyPropertyCardBackgrounds();
    };

    $$('.filter').forEach(button => {
      button.addEventListener('click', () => {
        $$('.filter').forEach(b => b.classList.toggle('is-active', b === button));
        render(button.dataset.filter);
      });
    });

    render('All');
    let currentColumns = innerWidth >= 1440 ? 4 : innerWidth >= 1024 ? 3 : innerWidth >= 640 ? 2 : 1;
    addEventListener('resize', () => { const nextColumns = innerWidth >= 1440 ? 4 : innerWidth >= 1024 ? 3 : innerWidth >= 640 ? 2 : 1; if (nextColumns !== currentColumns) { currentColumns = nextColumns; render(activeFilter); } }, { passive: true });
  }

  /* ==========================================================================
     7. FEATURED PROPERTIES CINEMATIC WALKTHROUGH CONTROLLER
     ========================================================================== */

  function initFeaturedWalkthrough(mount) {
    if (!mount) return;

    const featuredResidences = [
      {
        residenceNum: '01',
        slug: 'alora-house',
        name: 'Alora House',
        location: 'Hudson Valley, NY',
        priceLabel: '$18,500,000',
        shortDescription: 'A private residential pavilion composed around reflection water, native landscape and generous northern light.',
        views: [
          {
            index: 1,
            label: 'Front Elevation & Water Court',
            image: 'assets/properties/residence-01/view-01.jpg'
          },
          {
            index: 2,
            label: 'Limestone Cloister Walkway',
            image: 'assets/properties/residence-01/view-02.jpg'
          },
          {
            index: 3,
            label: 'Granite Reflection Pool & Terrace',
            image: 'assets/properties/residence-01/view-03.jpg'
          },
          {
            index: 4,
            label: 'The Great Room Living Pavilion',
            image: 'assets/properties/residence-01/view-04.jpg'
          }
        ]
      },
      {
        residenceNum: '02',
        slug: 'mora-residence',
        name: 'Mora Residence',
        location: 'Coconut Grove · Miami, FL',
        priceLabel: '$14,200,000',
        shortDescription: 'A light-led coastal sanctuary shaped by shaded breezeways, water courtyards and deep tropical verandas.',
        views: [
          {
            index: 1,
            label: 'Subtropical Concrete & Teak Elevation',
            image: 'assets/properties/residence-02/view-01.jpg'
          },
          {
            index: 2,
            label: 'Coral Stone Water Court Arrival',
            image: 'assets/properties/residence-02/view-02.jpg'
          },
          {
            index: 3,
            label: 'Shaded Veranda & Basalt Lap Pool',
            image: 'assets/properties/residence-02/view-03.jpg'
          },
          {
            index: 4,
            label: 'Double-Height Salon & Clerestory',
            image: 'assets/properties/residence-02/view-04.jpg'
          }
        ]
      }
    ];

    // Flatten all views into sequential steps
    const steps = [];
    featuredResidences.forEach((res, resIdx) => {
      res.views.forEach((v, vIdx) => {
        steps.push({
          stepIdx: steps.length,
          residenceIdx: resIdx,
          residence: res,
          viewIdx: vIdx,
          view: v
        });
      });
    });

    const totalSteps = steps.length;
    mount.style.setProperty('--fw-scroll-factor', String(totalSteps * 0.95));

    // Preload all genuine photographs to prevent flashes or scroll hitching
    steps.forEach(s => {
      const img = new Image();
      img.src = s.view.image;
    });

    // Build the DOM
    mount.innerHTML = `
      <div class="featured-walkthrough__sticky">
        <div class="featured-walkthrough__layers" aria-hidden="true">
          ${steps.map((s, idx) => `
            <div class="featured-walkthrough__layer ${idx === 0 ? 'is-active' : ''}" data-fw-layer="${idx}" style="background-image: url('${s.view.image}');"></div>
          `).join('')}
          <div class="featured-walkthrough__overlay"></div>
        </div>

        <div class="featured-walkthrough__topbar">
          <div class="featured-walkthrough__curation">
            <span class="featured-walkthrough__tag">Featured Architectural Study</span>
            <div class="featured-walkthrough__indicator">
              <span class="fw-residence-badge" data-fw-res-badge>RESIDENCE 01</span>
              <span class="fw-sep">/</span>
              <span class="fw-view-counter" data-fw-view-counter>VIEW 01 OF 04</span>
              <span class="fw-sep">·</span>
              <span class="fw-view-title" data-fw-view-title>${escapeHtml(steps[0].view.label)}</span>
            </div>
          </div>
          <div class="featured-walkthrough__nav-hint">
            <span class="fw-scroll-prompt">Scroll to explore</span>
            <div class="fw-progress-track">
              <div class="fw-progress-fill" data-fw-progress-bar></div>
            </div>
          </div>
        </div>

        <div class="featured-walkthrough__card">
          <div class="featured-walkthrough__residence-info" data-fw-residence-card>
            <p class="featured-walkthrough__eyebrow" data-fw-res-eyebrow>RESIDENCE 01 / 0${featuredResidences.length}</p>
            <h3 class="featured-walkthrough__title" data-fw-res-name>${escapeHtml(featuredResidences[0].name)}</h3>
            <p class="featured-walkthrough__location" data-fw-res-location>${escapeHtml(featuredResidences[0].location)}</p>
            <p class="featured-walkthrough__price" data-fw-res-price>${escapeHtml(featuredResidences[0].priceLabel)}</p>
            <p class="featured-walkthrough__description" data-fw-res-desc>${escapeHtml(featuredResidences[0].shortDescription)}</p>
            <div class="featured-walkthrough__actions">
              <a class="button button--light" data-fw-res-link href="property.html?slug=${encodeURIComponent(featuredResidences[0].slug)}">View residence</a>
              <div class="featured-walkthrough__view-dots" data-fw-view-dots>
                ${featuredResidences[0].views.map((_, i) => `<span class="fw-dot ${i === 0 ? 'is-active' : ''}" data-dot-index="${i}"></span>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="featured-walkthrough__controls">
          <button class="featured-control-btn" type="button" data-fw-prev aria-label="Previous architectural view">←</button>
          <button class="featured-control-btn" type="button" data-fw-next aria-label="Next architectural view">→</button>
        </div>
      </div>
    `;

    const layers = $$('.featured-walkthrough__layer', mount);
    const resBadge = $('[data-fw-res-badge]', mount);
    const viewCounter = $('[data-fw-view-counter]', mount);
    const viewTitle = $('[data-fw-view-title]', mount);
    const progressBar = $('[data-fw-progress-bar]', mount);

    const resCard = $('[data-fw-residence-card]', mount);
    const resEyebrow = $('[data-fw-res-eyebrow]', mount);
    const resName = $('[data-fw-res-name]', mount);
    const resLoc = $('[data-fw-res-location]', mount);
    const resPrice = $('[data-fw-res-price]', mount);
    const resDesc = $('[data-fw-res-desc]', mount);
    const resLink = $('[data-fw-res-link]', mount);
    const viewDotsContainer = $('[data-fw-view-dots]', mount);

    let currentStepIdx = 0;
    let activeResIdx = 0;
    let isTicking = false;

    function attachDotClicks() {
      if (!viewDotsContainer) return;
      $$('.fw-dot', viewDotsContainer).forEach(dot => {
        dot.addEventListener('click', () => {
          const dIdx = parseInt(dot.dataset.dotIndex, 10);
          const targetStep = (activeResIdx * 4) + dIdx;
          scrollToStep(targetStep);
        });
      });
    }

    function scrollToStep(idx) {
      const scrollDist = mount.offsetHeight - window.innerHeight;
      if (scrollDist <= 0) return;
      const stepProgress = (idx + 0.5) / totalSteps;
      const targetScrollY = mount.getBoundingClientRect().top + window.scrollY + (stepProgress * scrollDist);
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }

    function applyStep(stepIdx) {
      if (stepIdx < 0 || stepIdx >= totalSteps) return;
      const s = steps[stepIdx];
      currentStepIdx = stepIdx;

      // 1. One large architectural image at a time with smooth crossfade and subtle scale
      layers.forEach((layer, idx) => {
        layer.classList.toggle('is-active', idx === stepIdx);
      });

      // 2. Subtle view indicator updates
      if (resBadge) resBadge.textContent = `RESIDENCE ${s.residence.residenceNum}`;
      if (viewCounter) viewCounter.textContent = `VIEW 0${s.viewIdx + 1} OF 0${s.residence.views.length}`;
      if (viewTitle) viewTitle.textContent = s.view.label;

      // 3. Update view dots for current residence
      if (viewDotsContainer) {
        const dots = $$('.fw-dot', viewDotsContainer);
        dots.forEach((dot, i) => {
          dot.classList.toggle('is-active', i === s.viewIdx);
        });
      }

      // 4. Stable property information: Only changes when moving to the next residence!
      if (s.residenceIdx !== activeResIdx) {
        activeResIdx = s.residenceIdx;
        const res = s.residence;

        if (resCard) {
          resCard.classList.add('is-switching');
          setTimeout(() => {
            if (resEyebrow) resEyebrow.textContent = `RESIDENCE ${res.residenceNum} / 0${featuredResidences.length}`;
            if (resName) resName.textContent = res.name;
            if (resLoc) resLoc.textContent = res.location;
            if (resPrice) resPrice.textContent = res.priceLabel;
            if (resDesc) resDesc.textContent = res.shortDescription;
            if (resLink) resLink.href = `property.html?slug=${encodeURIComponent(res.slug)}`;

            if (viewDotsContainer) {
              viewDotsContainer.innerHTML = res.views.map((_, i) =>
                `<span class="fw-dot ${i === s.viewIdx ? 'is-active' : ''}" data-dot-index="${i}"></span>`
              ).join('');
              attachDotClicks();
            }

            resCard.classList.remove('is-switching');
          }, 240);
        }
      }
    }

    function onScroll() {
      const rect = mount.getBoundingClientRect();
      const scrollDist = mount.offsetHeight - window.innerHeight;
      if (scrollDist <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollDist));

      if (progressBar) {
        progressBar.style.width = `${(progress * 100).toFixed(1)}%`;
      }

      const rawStep = Math.floor(progress * totalSteps);
      const targetStep = Math.min(totalSteps - 1, Math.max(0, rawStep));

      if (targetStep !== currentStepIdx) {
        applyStep(targetStep);
      }
    }

    window.addEventListener('scroll', () => {
      if (!isTicking) {
        requestAnimationFrame(() => {
          onScroll();
          isTicking = false;
        });
        isTicking = true;
      }
    }, { passive: true });

    const prevBtn = $('[data-fw-prev]', mount);
    const nextBtn = $('[data-fw-next]', mount);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevIdx = Math.max(0, currentStepIdx - 1);
        scrollToStep(prevIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextIdx = Math.min(totalSteps - 1, currentStepIdx + 1);
        scrollToStep(nextIdx);
      });
    }

    attachDotClicks();
    onScroll();
  }

  /* ==========================================================================
     8. HOME PAGE SHOWCASE & TESTIMONIALS
     ========================================================================== */

  function initHomePage() {
    const featuredWalkthroughMount = $('[data-featured-walkthrough]');
    if (featuredWalkthroughMount) {
      initFeaturedWalkthrough(featuredWalkthroughMount);
    } else {
      const featuredMount = $('[data-featured]');
      if (featuredMount) {
        featuredMount.innerHTML = properties.slice(0, 3).map(propertyCard).join('');
      }
    }

    const homeCollection = $('[data-home-collection]');
    if (homeCollection) {
      homeCollection.innerHTML = properties.slice(2, 6).map(propertyCard).join('');
      initCard3DHover();
    }
    verifyPropertyCardBackgrounds();

    // Testimonials / Standards controller
    const mount = $('.testimonials');
    if (mount) {
      const notes = [
        { label: 'Our standard / 01', title: 'Private from first conversation', copy: 'Discretion is built into the process: considered introductions, clear communication and an approach that respects the pace of every decision.' },
        { label: 'Our standard / 02', title: 'Edited with purpose', copy: 'We favour a smaller, more meaningful collection over endless choice, so every residence is worthy of your attention.' },
        { label: 'Our standard / 03', title: 'Guided by how you live', copy: 'The practical details matter, but the final measure is how a home feels from the first arrival to the everyday rituals that follow.' },
        { label: 'Our standard / 04', title: 'Useful beyond the key handover', copy: 'A considered relationship does not end with a transaction. We remain a trusted point of contact as needs, places and plans evolve.' }
      ];

      let current = 0;
      const stage = $('.testimonial__stage', mount);
      const progress = $('.testimonial__progress', mount);

      const paint = () => {
        if (!stage) return;
        const note = notes[current];
        stage.innerHTML = `
          <p class="eyebrow">${escapeHtml(note.label)}</p>
          <blockquote class="testimonial__statement">“${escapeHtml(note.copy)}”</blockquote>
          <p class="testimonial__name">${escapeHtml(note.title)}</p>
        `;
        if (progress) {
          progress.textContent = `0${current + 1} / 0${notes.length}`;
        }
      };

      const change = (dir) => {
        current = (current + dir + notes.length) % notes.length;
        paint();
      };

      const prevBtn = $('.testimonial__arrow--previous', mount);
      const nextBtn = $('.testimonial__arrow--next', mount);
      if (prevBtn) prevBtn.addEventListener('click', () => change(-1));
      if (nextBtn) nextBtn.addEventListener('click', () => change(1));

      paint();
    }
  }

  /* ==========================================================================
     8. CONTACT & ENQUIRY FORM CONTROLLER
     ========================================================================== */

  function initContactPage() {
    const form = $('[data-enquiry-form]');
    if (!form) return;

    // Populate property select dropdown with all residences
    const propertySelect = $('select[name="property"]', form);
    if (propertySelect) {
      const optionsHtml = [
        '<option value="General enquiry">General enquiry</option>',
        ...properties.map(p => `<option value="${escapeHtml(p.name)}" data-slug="${p.slug}">${escapeHtml(p.name)} (${escapeHtml(p.location)})</option>`)
      ].join('');
      propertySelect.innerHTML = optionsHtml;

      // Pre-select if URL contains property slug or name
      const requestedSlug = new URLSearchParams(window.location.search).get('property');
      if (requestedSlug) {
        const found = properties.find(p => p.slug === requestedSlug || p.name.toLowerCase() === requestedSlug.toLowerCase());
        if (found) {
          propertySelect.value = found.name;
        }
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = $('[data-form-status]', form);
      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) status.textContent = 'Please complete all required fields so we may respond thoughtfully.';
        return;
      }

      const data = new FormData(form);
      const subject = `Private enquiry — ${data.get('property') || 'MARIDAN Private Office'}`;
      const message = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Phone: ${data.get('phone') || 'Not provided'}`,
        `Residence: ${data.get('property')}`,
        `Enquiry Type: ${data.get('type')}`,
        '',
        `Message:`,
        data.get('message')
      ].join('\n');

      if (status) status.textContent = 'Preparing your private email enquiry to MARIDAN...';
      window.location.href = `mailto:${brand.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    });
  }

  /* ==========================================================================
     8B. ABOUT PAGE 3D & CINEMATIC CONTROLLER
     ========================================================================== */

  function initAboutPage() {
    const isAboutPage = document.body.classList.contains('page--about');
    if (!isAboutPage) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!isReducedMotion) {
      document.body.classList.add('about-motion-ready');
      if ('IntersectionObserver' in window) {
        document.body.classList.add('about-reveals-ready');
      }
    }

    // 1. Hero 3D Interactive Pointer Parallax & Light Sweep
    const heroSection = document.querySelector('[data-hero-3d]');
    const heroBg = document.querySelector('[data-hero-bg]');
    const heroContent = document.querySelector('[data-hero-content]');

    if (heroSection && isPointerFine && !isReducedMotion) {
      let mouseX = 0, mouseY = 0;
      let curX = 0, curY = 0;
      let rafId = null;

      const onMouseMove = (e) => {
        const rect = heroSection.getBoundingClientRect();
        if (e.clientY < rect.top || e.clientY > rect.bottom) return;
        const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        mouseX = Math.max(-1, Math.min(1, normX));
        mouseY = Math.max(-1, Math.min(1, normY));

        heroSection.style.setProperty('--mouse-x-pct', `${Math.round(((e.clientX - rect.left) / rect.width) * 100)}%`);
        heroSection.style.setProperty('--mouse-y-pct', `${Math.round(((e.clientY - rect.top) / rect.height) * 100)}%`);

        if (!rafId) rafId = requestAnimationFrame(updateHeroParallax);
      };

      const updateHeroParallax = () => {
        curX += (mouseX - curX) * 0.08;
        curY += (mouseY - curY) * 0.08;

        if (heroBg) {
          heroBg.style.transform = `translate3d(${(-curX * 14).toFixed(2)}px, ${(-curY * 10).toFixed(2)}px, 0)`;
        }
        if (heroContent) {
          heroContent.style.transform = `translate3d(${(curX * 16).toFixed(2)}px, ${(curY * 12).toFixed(2)}px, 20px) rotateY(${(curX * 1.5).toFixed(2)}deg) rotateX(${(-curY * 1.5).toFixed(2)}deg)`;
        }

        if (Math.abs(mouseX - curX) > 0.001 || Math.abs(mouseY - curY) > 0.001) {
          rafId = requestAnimationFrame(updateHeroParallax);
        } else {
          rafId = null;
        }
      };

      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    // 2. Interactive 3D Card Tilt for Philosophy & Curated Cards
    if (isPointerFine && !isReducedMotion) {
      const tiltCards = document.querySelectorAll('[data-tilt-card]');
      tiltCards.forEach(card => {
        let cardRaf = null;
        let tX = 0, tY = 0;

        card.addEventListener('pointerenter', () => {
          card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';
        });

        card.addEventListener('pointermove', (e) => {
          const rect = card.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return;
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          tX = (y - 0.5) * -10;
          tY = (x - 0.5) * 10;

          if (!cardRaf) {
            cardRaf = requestAnimationFrame(() => {
              card.style.transform = `perspective(1000px) rotateX(${tX.toFixed(2)}deg) rotateY(${tY.toFixed(2)}deg) translateZ(10px)`;
              cardRaf = null;
            });
          }
        });

        card.addEventListener('pointerleave', () => {
          card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease';
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
      });
    }

    // 3. Smooth Architectural Scroll Parallax for Fullscreen Section & Story Image
    if (!isReducedMotion) {
      const archSection = document.querySelector('[data-architecture-parallax]');
      const archImg = archSection ? archSection.querySelector('img') : null;
      const storyImg = document.querySelector('.about-story__image');

      let scrollRaf = null;
      const onScroll = () => {
        if (!scrollRaf) {
          scrollRaf = requestAnimationFrame(() => {
            const vh = window.innerHeight;

            if (archSection && archImg) {
              const rect = archSection.getBoundingClientRect();
              if (rect.bottom > 0 && rect.top < vh) {
                const progress = (vh - rect.top) / (vh + rect.height);
                const shiftY = (progress - 0.5) * 45;
                archImg.style.transform = `translate3d(0, ${shiftY.toFixed(1)}px, 0) scale(1.08)`;
              }
            }

            if (storyImg) {
              const rect = storyImg.getBoundingClientRect();
              if (rect.bottom > 0 && rect.top < vh) {
                const progress = (vh - rect.top) / (vh + rect.height);
                const shiftY = (progress - 0.5) * 30;
                storyImg.style.transform = `translate3d(0, ${shiftY.toFixed(1)}px, 0)`;
              }
            }

            scrollRaf = null;
          });
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  /* ==========================================================================
     9. HERO SCROLL-CONTROLLED HOUSE WALKTHROUGH CONTROLLER
     ========================================================================== */

  function initHeroWalkthrough() {
    const hero = $('[data-hero-walkthrough]');
    if (!hero) return;

    const views = [
      {
        image: 'assets/properties/residence-01/view-01.jpg',
        label: '01 · MAIN ARCHITECTURAL ELEVATION'
      },
      {
        image: 'assets/properties/residence-01/view-02.jpg',
        label: '02 · STONE CLOISTERS & ARRIVAL COURTYARD'
      },
      {
        image: 'assets/properties/residence-01/view-03.jpg',
        label: '03 · REFLECTION POOL & SUN TERRACE'
      },
      {
        image: 'assets/properties/residence-01/view-04.jpg',
        label: '04 · GREAT ROOM SALON INTERIOR'
      }
    ];

    hero.classList.add('hero--walkthrough');

    // Preload views for seamless crossfading
    views.forEach(v => {
      const img = new Image();
      img.src = v.image;
    });

    const layers = $$('.hero__walkthrough-layer', hero);
    const indicator = $('[data-hero-view-indicator]', hero);

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      if (layers.length) {
        layers.forEach((layer, i) => {
          layer.style.opacity = i === 0 ? '1' : '0';
          layer.style.transform = 'none';
        });
      }
      return;
    }

    // Camera movement parameters: subtle, unhurried architectural drift
    const cameraProfiles = [
      { scaleStart: 1.000, scaleEnd: 1.025, xStart: 0, xEnd: 0, yStart: 0, yEnd: -6 },
      { scaleStart: 1.028, scaleEnd: 1.004, xStart: -4, xEnd: 0, yStart: 4, yEnd: 0 },
      { scaleStart: 1.000, scaleEnd: 1.026, xStart: 0, xEnd: 3, yStart: 0, yEnd: -4 },
      { scaleStart: 1.026, scaleEnd: 1.000, xStart: 0, xEnd: 0, yStart: 4, yEnd: 0 }
    ];

    let currentViewIdx = 0;
    let isTicking = false;

    function renderProgress() {
      const rect = hero.getBoundingClientRect();
      const scrollDistance = hero.offsetHeight - window.innerHeight;
      if (scrollDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollDistance));

      // Calculate opacities:
      // 0.00–0.25 -> View 1
      // 0.25–0.50 -> View 2
      // 0.50–0.75 -> View 3
      // 0.75–1.00 -> View 4
      // Transitions crossfade smoothly; View 4 holds steady before natural release
      let o0 = 0, o1 = 0, o2 = 0, o3 = 0;
      let activeIdx = 0;

      if (progress < 0.18) {
        o0 = 1;
        activeIdx = 0;
      } else if (progress < 0.28) {
        const t = (progress - 0.18) / 0.10;
        o0 = 1 - t;
        o1 = t;
        activeIdx = progress < 0.23 ? 0 : 1;
      } else if (progress < 0.45) {
        o1 = 1;
        activeIdx = 1;
      } else if (progress < 0.55) {
        const t = (progress - 0.45) / 0.10;
        o1 = 1 - t;
        o2 = t;
        activeIdx = progress < 0.50 ? 1 : 2;
      } else if (progress < 0.70) {
        o2 = 1;
        activeIdx = 2;
      } else if (progress < 0.80) {
        const t = (progress - 0.70) / 0.10;
        o2 = 1 - t;
        o3 = t;
        activeIdx = progress < 0.75 ? 2 : 3;
      } else {
        o3 = 1;
        activeIdx = 3;
      }

      const opacities = [o0, o1, o2, o3];

      layers.forEach((layer, idx) => {
        const op = opacities[idx] !== undefined ? opacities[idx] : 0;
        layer.style.opacity = op.toFixed(3);

        if (op > 0.01) {
          layer.style.visibility = 'visible';
          const profile = cameraProfiles[idx] || cameraProfiles[0];
          let spanStart = 0;
          let spanEnd = 1;
          if (idx === 0) { spanStart = 0.00; spanEnd = 0.28; }
          else if (idx === 1) { spanStart = 0.18; spanEnd = 0.55; }
          else if (idx === 2) { spanStart = 0.45; spanEnd = 0.80; }
          else if (idx === 3) { spanStart = 0.70; spanEnd = 1.00; }

          const spanT = Math.min(1, Math.max(0, (progress - spanStart) / (spanEnd - spanStart)));
          const curScale = (profile.scaleStart + (profile.scaleEnd - profile.scaleStart) * spanT).toFixed(4);
          const curX = (profile.xStart + (profile.xEnd - profile.xStart) * spanT).toFixed(1);
          const curY = (profile.yStart + (profile.yEnd - profile.yStart) * spanT).toFixed(1);
          const curZ = (spanT * 14).toFixed(1);

          layer.style.transform = `translate3d(${curX}px, ${curY}px, ${curZ}px) scale(${curScale})`;
        } else {
          layer.style.visibility = 'hidden';
          layer.style.transform = 'none';
        }
      });

      // Spatial depth separation for foreground editorial content
      const heroCopy = $('.hero__copy', hero);
      if (heroCopy) {
        const copyY = (progress * 32).toFixed(1);
        const copyZ = (progress * 22).toFixed(1);
        heroCopy.style.transform = `translate3d(0, -${copyY}px, ${copyZ}px)`;
        heroCopy.style.opacity = progress > 0.82 ? Math.max(0, 1 - (progress - 0.82) * 5.5).toFixed(3) : '1';
      }

      const heroDetails = $('.hero__details', hero);
      if (heroDetails) {
        const detailsZ = (progress * 16).toFixed(1);
        heroDetails.style.transform = `translate3d(0, 0, ${detailsZ}px)`;
      }

      if (activeIdx !== currentViewIdx) {
        currentViewIdx = activeIdx;
        if (indicator && views[activeIdx]) {
          indicator.style.opacity = '0';
          setTimeout(() => {
            indicator.textContent = `RESIDENCE STUDY / ${views[activeIdx].label}`;
            indicator.style.opacity = '1';
          }, 150);
        }
      }
    }

    window.addEventListener('scroll', () => {
      if (!isTicking) {
        requestAnimationFrame(() => {
          renderProgress();
          isTicking = false;
        });
        isTicking = true;
      }
    }, { passive: true });

    renderProgress();
  }

  /* ==========================================================================
     10. EDITORIAL TYPOGRAPHY ASSEMBLY (Universal Letter-by-Letter Engine)
     ========================================================================== */

  // Universal helper: Assembles any heading into indivisible word spans & letter spans
  function assembleHeading(heading, options = {}) {
    if (!heading || heading.dataset.lettersPrepared === 'true') return null;
    heading.dataset.lettersPrepared = 'true';
    heading.classList.add('heading-assembly');

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      heading.classList.add('is-assembled', 'is-completed');
      return {
        trigger: () => {},
        duration: 0,
        charCount: 0
      };
    }

    let charIndex = 0;
    const charStaggerMs = options.staggerMs || 35;
    const charDisplacementPx = options.displacementPx || (innerWidth <= 768 ? 32 : 44);

    function processNodes(nodes) {
      const fragment = document.createDocumentFragment();

      nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent;
          const tokens = text.split(/(\s+)/);
          tokens.forEach(token => {
            if (!token) return;
            if (/^\s+$/.test(token)) {
              fragment.appendChild(document.createTextNode(' '));
            } else {
              const wordSpan = document.createElement('span');
              wordSpan.className = 'heading-assembly__word';
              for (const ch of token) {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'heading-assembly__letter';
                letterSpan.textContent = ch;
                letterSpan.style.setProperty('--letter-delay', `${charIndex * charStaggerMs}ms`);
                letterSpan.style.setProperty('--letter-offset', `${charDisplacementPx}px`);
                wordSpan.appendChild(letterSpan);
                charIndex++;
              }
              fragment.appendChild(wordSpan);
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName.toLowerCase() === 'br') {
            fragment.appendChild(document.createElement('br'));
          } else {
            const clone = node.cloneNode(false);
            const innerFragment = processNodes(Array.from(node.childNodes));
            clone.appendChild(innerFragment);
            fragment.appendChild(clone);
          }
        }
      });

      return fragment;
    }

    const originalNodes = Array.from(heading.childNodes);
    const assembledFragment = processNodes(originalNodes);
    heading.innerHTML = '';
    heading.appendChild(assembledFragment);

    const totalDuration = charIndex * charStaggerMs + 780;
    heading.dataset.charCount = String(charIndex);

    function trigger() {
      if (heading.classList.contains('is-assembled')) return;
      heading.classList.add('is-assembled');
      setTimeout(() => {
        heading.classList.add('is-completed');
      }, totalDuration + 80);
    }

    return {
      trigger,
      duration: totalDuration,
      charCount: charIndex
    };
  }

  // Expose globally so dynamic pages (e.g. property details) can invoke it
  window.__maridanAssembleHeading = assembleHeading;

  function initTypographyAssembly() {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Home hero heading
    const heroHeading = $('[data-assemble-heading]');
    if (heroHeading) {
      const heroAsm = assembleHeading(heroHeading, { staggerMs: 35, displacementPx: 44 });
      const eyebrow = $('.hero__copy .eyebrow');
      const lead = $('.hero__copy .lead');
      const actions = $('.hero__copy .hero__actions, .hero__copy .button');

      if (isReducedMotion) {
        if (eyebrow) eyebrow.classList.add('is-visible');
        if (lead) lead.classList.add('is-visible');
        if (actions) actions.classList.add('is-visible');
      } else if (heroAsm) {
        setTimeout(() => {
          if (eyebrow) eyebrow.classList.add('is-visible');
        }, 120);

        setTimeout(() => {
          heroAsm.trigger();
        }, 260);

        setTimeout(() => {
          if (lead) lead.classList.add('is-visible');
        }, Math.max(850, 260 + Math.min(heroAsm.charCount * 35, 750)));

        setTimeout(() => {
          if (actions) actions.classList.add('is-visible');
        }, Math.max(1050, 260 + heroAsm.duration - 150));
      }
    }

    // 2. Page heroes above the fold (About, Properties, Contact, Detail)
    const pageHeroes = $$('.page-hero h1, .contact h1, .detail-hero h1');
    pageHeroes.forEach(h1 => {
      if (h1 === heroHeading) return;
      const asm = assembleHeading(h1, { staggerMs: 35, displacementPx: 40 });
      if (asm) {
        setTimeout(() => {
          asm.trigger();
        }, 220);
      }
    });

    // 3. Scroll-triggered section headings (IntersectionObserver with 15-25% threshold)
    const sectionHeadings = $$(
      '.intro h2, .story h2, .lifestyle h2, .lifestyle-walkthrough h2, .featured-experience__intro h2, .collection-section .section-head h2, .about-block h2, .process h2, .cta h2, [data-letter-heading]'
    );

    if (sectionHeadings.length) {
      const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target.__triggerAssembly) {
              target.__triggerAssembly();
            } else {
              target.classList.add('is-assembled');
              const count = parseInt(target.dataset.charCount || '20', 10);
              setTimeout(() => {
                target.classList.add('is-completed');
              }, count * 35 + 850);
            }
            headingObserver.unobserve(target);
          }
        });
      }, { threshold: 0.20 });

      sectionHeadings.forEach(h2 => {
        const asm = assembleHeading(h2, { staggerMs: 32, displacementPx: innerWidth <= 768 ? 28 : 38 });
        if (asm) {
          h2.__triggerAssembly = asm.trigger;
          headingObserver.observe(h2);
        }
      });
    }
  }

  /* ==========================================================================
     11. PROPERTY CARDS 3D HOVER & DEPTH INTERACTION
     ========================================================================== */

  function initCard3DHover() {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || isReducedMotion) return;

    const cards = $$('.property-card');
    cards.forEach(card => {
      if (card.dataset.hover3dInitialized === 'true') return;
      card.dataset.hover3dInitialized = 'true';

      let rafId = null;
      let targetRotateX = 0;
      let targetRotateY = 0;

      function updateCard() {
        card.style.transform = `translate3d(0, -6px, 12px) scale(1.014) rotateX(${targetRotateX}deg) rotateY(${targetRotateY}deg)`;
        rafId = null;
      }

      card.addEventListener('pointerenter', () => {
        card.style.transition = 'transform 0.16s ease-out, box-shadow 0.35s ease';
      });

      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        targetRotateX = (-y * 3.2).toFixed(2);
        targetRotateY = (x * 3.2).toFixed(2);

        if (!rafId) {
          rafId = requestAnimationFrame(updateCard);
        }
      });

      card.addEventListener('pointerleave', () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        card.style.transition = 'transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.65s ease';
        card.style.transform = 'translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg)';
      });
    });
  }

  /* ==========================================================================
     12. ARCHITECTURAL IMAGE PARALLAX & SECTION DEPTH
     ========================================================================== */

  function initImageParallax() {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const targets = $$('.lifestyle__image, .story__image, .page-hero .image-cover, .cta.image-cover, .detail-hero__image');
    if (!targets.length) return;

    targets.forEach(el => el.classList.add('has-parallax'));

    let isTicking = false;

    function updateParallax() {
      const vh = window.innerHeight;
      targets.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom >= -60 && rect.top <= vh + 60) {
          const center = rect.top + rect.height / 2;
          const progress = (center - vh / 2) / (vh / 2);
          const clamped = Math.max(-1, Math.min(1, progress));
          const maxPx = innerWidth <= 768 ? 8 : 16;
          const offsetY = (-clamped * maxPx).toFixed(1);
          el.style.setProperty('--parallax-y', `${offsetY}px`);
        }
      });
      isTicking = false;
    }

    window.addEventListener('scroll', () => {
      if (!isTicking) {
        requestAnimationFrame(updateParallax);
        isTicking = true;
      }
    }, { passive: true });

    updateParallax();
  }

  /* ==========================================================================
     13. REVEAL & ABOUT 3D PROCESS CONTROLLER
     ========================================================================== */

  function initReveals() {
    const targets = $$('.reveal, .process, footer');
    if (!targets.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible', 'is-completed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add('is-visible');
          observer.unobserve(entry.target);
          setTimeout(() => {
            target.classList.add('is-completed');
          }, 1100);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     13B. DIURNAL ARCHITECTURAL 3D WALKTHROUGH (Morning through to after dark)
     ========================================================================== */

  function initDiurnalWalkthrough() {
    const section = document.getElementById('diurnal-study');
    if (!section) return;

    const scenes = Array.from(section.querySelectorAll('[data-cinematic-scene]'));
    const clockEl = section.querySelector('[data-diurnal-clock]');
    const phaseEl = section.querySelector('[data-diurnal-phase]');
    const noteEl = section.querySelector('[data-diurnal-note]');
    const barEl = section.querySelector('[data-diurnal-bar]');
    const milestones = section.querySelectorAll('.milestone');

    if (!scenes.length) return;

    const cinematicPhases = [
      {
        pct: 0,
        clock: '07:15',
        phase: 'FRONT EXTERIOR',
        note: 'A cinematic approach to the residence, framing the architecture, landscape and arrival court like a private property film.'
      },
      {
        pct: 0.2,
        clock: '08:05',
        phase: 'ENTRANCE',
        note: 'The camera moves closer to the arrival sequence, bringing the entry architecture and warm material palette into focus.'
      },
      {
        pct: 0.4,
        clock: '13:00',
        phase: 'LIVING ROOM',
        note: 'Step inside the residence and reveal the double-height living space, glazing, natural light and surrounding landscape.'
      },
      {
        pct: 0.6,
        clock: '15:30',
        phase: 'KITCHEN / DINING',
        note: 'Continue into the kitchen and dining pavilion, where stone, timber and expansive glazing create the main social heart of the home.'
      },
      {
        pct: 0.8,
        clock: '19:30',
        phase: 'PRIMARY SUITE',
        note: 'The tour slows into the private wing, revealing the bedroom proportions, evening light and quiet architectural detailing.'
      },
      {
        pct: 1,
        clock: '22:30',
        phase: 'EVENING EXTERIOR',
        note: 'Finish outside at dusk, with the residence glowing against the landscape for a cinematic final view.'
      }
    ];

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId = null;
    let isVisible = false;
    let initialized = false;

    const smoothstep = (value) => {
      const x = Math.max(0, Math.min(1, value));
      return x * x * (3 - 2 * x);
    };

    function phaseIndexFor(progress) {
      if (progress >= 0.9) return 5;
      if (progress >= 0.7) return 4;
      if (progress >= 0.5) return 3;
      if (progress >= 0.3) return 2;
      if (progress >= 0.1) return 1;
      return 0;
    }

    function updateCinematic(progress) {
      const p = Math.max(0, Math.min(1, progress));
      const segmentCount = scenes.length - 1;
      const scaled = p * segmentCount;
      const baseIndex = Math.min(Math.floor(scaled), segmentCount - 1);
      const local = scaled - baseIndex;
      const eased = smoothstep(local);

      scenes.forEach((scene, index) => {
        let opacity = 0;
        let scale = 1.045;
        let x = 0;
        let y = 0;

        if (index === baseIndex) {
          opacity = 1 - eased;
          scale = 1.075 - (eased * 0.045);
          x = (index % 2 === 0 ? -1 : 1) * eased * 0.7;
          y = eased * -0.35;
        } else if (index === baseIndex + 1) {
          opacity = eased;
          scale = 1.085 - (eased * 0.045);
          x = (index % 2 === 0 ? 1 : -1) * (1 - eased) * 0.7;
          y = (1 - eased) * 0.45;
        } else if (index === 0 && p === 0) {
          opacity = 1;
          scale = 1.075;
        } else if (index === scenes.length - 1 && p === 1) {
          opacity = 1;
          scale = 1;
        }

        scene.style.opacity = opacity.toFixed(4);
        scene.style.transform = `scale(${scale.toFixed(4)}) translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
        scene.classList.toggle('is-active', opacity > 0.5);
      });

      const index = phaseIndexFor(p);
      const activePhase = cinematicPhases[index];

      if (clockEl) clockEl.textContent = activePhase.clock;
      if (phaseEl) phaseEl.textContent = activePhase.phase;
      if (noteEl) noteEl.textContent = activePhase.note;
      if (barEl) barEl.style.width = `${(p * 100).toFixed(1)}%`;

      milestones.forEach((milestone, i) => {
        const isActive = i === index;
        milestone.classList.toggle('is-active', isActive);
        milestone.setAttribute('aria-selected', String(isActive));
      });

      section.classList.toggle('is-night', p >= 0.84);
    }

    function render() {
      rafId = null;
      if (!isVisible) return;

      if (reducedMotion) {
        currentProgress = targetProgress;
      } else {
        currentProgress += (targetProgress - currentProgress) * 0.13;
        if (Math.abs(targetProgress - currentProgress) < 0.0005) {
          currentProgress = targetProgress;
        }
      }

      updateCinematic(currentProgress);

      if (!reducedMotion && Math.abs(targetProgress - currentProgress) >= 0.0005) {
        rafId = requestAnimationFrame(render);
      }
    }

    function requestRender() {
      if (!rafId && isVisible) rafId = requestAnimationFrame(render);
    }

    function onScroll() {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      targetProgress = scrollable > 0
        ? Math.max(0, Math.min(1, -rect.top / scrollable))
        : 0;
      requestRender();
    }

    function goToMilestone(percent) {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const targetScrollY = window.pageYOffset + rect.top + (percent / 100) * scrollable;
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }

    milestones.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        goToMilestone(parseFloat(button.dataset.milestone) || 0);
      });
    });

    function markReady() {
      if (initialized) return;
      initialized = true;
      section.classList.remove('is-loading', 'is-error');
      section.classList.add('is-ready');
      section.setAttribute('aria-busy', 'false');
      updateCinematic(0);
    }

    const imagePromises = scenes.map((scene) => {
      const image = scene.querySelector('img');
      if (!image) return Promise.resolve();
      if (image.complete) return Promise.resolve();
      return new Promise((resolve) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', resolve, { once: true });
      });
    });

    const start = () => {
      isVisible = true;
      markReady();
      onScroll();
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          start();
        }
      }, { rootMargin: '100% 0px', threshold: 0.01 });
      observer.observe(section);
    } else {
      start();
    }

    Promise.all(imagePromises).then(markReady);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    updateCinematic(0);
  }

  function initDiurnalWalkthroughScene(canvas, section) {
    if (!canvas || !section || typeof THREE === 'undefined') return;

    const futureModelPath = 'assets/models/maridan-residence.glb';
    const enableFutureGlb = false;
    const clockEl = section.querySelector('[data-diurnal-clock]');
    const phaseEl = section.querySelector('[data-diurnal-phase]');
    const noteEl = section.querySelector('[data-diurnal-note]');
    const barEl = section.querySelector('[data-diurnal-bar]');
    const milestones = section.querySelectorAll('.milestone');

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Diurnal sequence keyframes: 0% Dawn -> 25% Side -> 50% Rear -> 75% Golden -> 100% Night
    const diurnalPhases = [
      {
        pct: 0.0,
        minutes: 435, // 07:15
        clock: '07:15',
        phase: 'MORNING DAWN / FRONT FAÇADE',
        note: 'Soft morning sunlight rakes across the limestone entrance court, illuminating the double-height glazed pavilion and native birch grove.',
        sunPos: new THREE.Vector3(25, 12, 19),
        sunColor: new THREE.Color(0xfff0df),
        sunIntensity: 1.2,
        hemiSky: new THREE.Color(0xcde2f2),
        hemiGround: new THREE.Color(0xded7cd),
        hemiIntensity: 0.72,
        environmentIntensity: 0.2,
        bg: new THREE.Color(0xdce6f0),
        interiorLight: 0.0,
        glassEmissive: new THREE.Color(0x000000),
        glassIntensity: 0.0,
        poolLight: 0.0,
        uplight: 0.0,
        fireLight: 0.0
      },
      {
        pct: 0.25,
        minutes: 705, // 11:45
        clock: '11:45',
        phase: 'MIDDAY LIGHT / EAST CLOISTER',
        note: 'Crisp midday sun overhead casts rhythmic geometric shadows along the stone-pillared cloister and contemplation garden.',
        sunPos: new THREE.Vector3(8, 32, 10),
        sunColor: new THREE.Color(0xfffbf2),
        sunIntensity: 1.45,
        hemiSky: new THREE.Color(0xbde2fd),
        hemiGround: new THREE.Color(0xebe5db),
        hemiIntensity: 0.78,
        environmentIntensity: 0.22,
        bg: new THREE.Color(0xd7e4ec),
        interiorLight: 0.0,
        glassEmissive: new THREE.Color(0x000000),
        glassIntensity: 0.0,
        poolLight: 0.0,
        uplight: 0.0,
        fireLight: 0.0
      },
      {
        pct: 0.50,
        minutes: 960, // 16:00
        clock: '16:00',
        phase: 'AFTERNOON SUN / REAR POOL & LOGGIA',
        note: 'Warm afternoon light glints across the 18-metre reflection pool, opening seamless indoor-outdoor sightlines through the living pavilion.',
        sunPos: new THREE.Vector3(-18, 18, -16),
        sunColor: new THREE.Color(0xf2dfbd),
        sunIntensity: 1.18,
        hemiSky: new THREE.Color(0xd6d7d4),
        hemiGround: new THREE.Color(0xc7beb0),
        hemiIntensity: 0.60,
        environmentIntensity: 0.18,
        bg: new THREE.Color(0xd4d3ce),
        interiorLight: 0.12,
        glassEmissive: new THREE.Color(0xffe4c2),
        glassIntensity: 0.08,
        poolLight: 0.1,
        uplight: 0.0,
        fireLight: 0.12
      },
      {
        pct: 0.75,
        minutes: 1155, // 19:15
        clock: '19:15',
        phase: 'GOLDEN HOUR / WEST WING & FIRE LOUNGE',
        note: 'Raking amber light grazes the cantilevered zinc master wing as interior architectural lights kindle and fire embers ignite.',
        sunPos: new THREE.Vector3(-28, 5.5, 4),
        sunColor: new THREE.Color(0xf2bc87),
        sunIntensity: 1.05,
        hemiSky: new THREE.Color(0xa17f86),
        hemiGround: new THREE.Color(0x62554d),
        hemiIntensity: 0.42,
        environmentIntensity: 0.12,
        bg: new THREE.Color(0x806975),
        interiorLight: 0.85,
        glassEmissive: new THREE.Color(0xffcc91),
        glassIntensity: 0.4,
        poolLight: 0.3,
        uplight: 0.55,
        fireLight: 0.6
      },
      {
        pct: 1.0,
        minutes: 1350, // 22:30
        clock: '22:30',
        phase: 'AFTER DARK / ARCHITECTURAL ILLUMINATION',
        note: 'Full 360° return to the front façade. Warm interior cove lighting, submerged pool glow, and discreet façade uplights sculpt the evening silhouette.',
        sunPos: new THREE.Vector3(-6, -22, 10),
        sunColor: new THREE.Color(0x283c5e),
        sunIntensity: 0.04,
        hemiSky: new THREE.Color(0x18263a),
        hemiGround: new THREE.Color(0x25211f),
        hemiIntensity: 0.22,
        environmentIntensity: 0.035,
        bg: new THREE.Color(0x111927),
        interiorLight: 1.35,
        glassEmissive: new THREE.Color(0xffbf78),
        glassIntensity: 0.75,
        poolLight: 0.45,
        uplight: 0.5,
        fireLight: 0.75
      }
    ];

    function formatClock(progress) {
      const p = Math.max(0, Math.min(1, progress));
      const seg = p * 4;
      const idx = Math.min(Math.floor(seg), 3);
      const frac = seg - idx;
      const m0 = diurnalPhases[idx].minutes;
      const m1 = diurnalPhases[idx + 1].minutes;
      const totalMinutes = Math.round(m0 + (m1 - m0) * frac);
      const h = Math.floor(totalMinutes / 60);
      const m = totalMinutes % 60;
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    }

    // 1. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    const getRenderPixelRatio = () => Math.min(window.devicePixelRatio || 1, window.innerWidth <= 768 ? 1.5 : 2);
    renderer.setPixelRatio(getRenderPixelRatio());
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.98;
    renderer.outputEncoding = THREE.sRGBEncoding;
    const localTextureLoader = new THREE.TextureLoader();
    let environmentTarget = null;

    // 2. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(diurnalPhases[0].bg);

    const camera = new THREE.PerspectiveCamera(
      40,
      canvas.clientWidth / canvas.clientHeight,
      0.5,
      250
    );

    const targetLookAt = new THREE.Vector3(0, 3.2, 0);

    // 3. Procedural Architectural Textures (Self-contained, Zero CORS risk)
    function createLimestoneTexture() {
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 512;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#ded7c8';
      ctx.fillRect(0, 0, 512, 512);

      const rows = 16;
      const rowH = 512 / rows;
      const tones = ['#e4ded2', '#dad3c4', '#dfd8cb', '#cec5b4', '#e8e2d6', '#d6cdbd'];

      for (let r = 0; r < rows; r++) {
        const y = r * rowH;
        let x = (r % 2 === 0) ? 0 : -35;
        while (x < 512) {
          const blockW = 60 + ((r * 17 + x * 13) % 45);
          const col = tones[(r * 5 + Math.floor(x)) % tones.length];
          ctx.fillStyle = col;
          ctx.fillRect(Math.max(0, x), y + 1, Math.min(512 - x, blockW - 2), rowH - 2);

          for (let g = 0; g < 14; g++) {
            const gx = x + ((g * 29) % blockW);
            const gy = y + ((g * 19) % rowH);
            if (gx >= 0 && gx < 512 && gy >= 0 && gy < 512) {
              ctx.fillStyle = (g % 2 === 0) ? 'rgba(0,0,0,0.035)' : 'rgba(255,255,255,0.06)';
              ctx.fillRect(gx, gy, 2, 2);
            }
          }

          ctx.fillStyle = 'rgba(75, 65, 55, 0.28)';
          ctx.fillRect(x + blockW - 2, y, 2, rowH);
          x += blockW;
        }
        ctx.fillStyle = 'rgba(75, 65, 55, 0.32)';
        ctx.fillRect(0, y + rowH - 1.5, 512, 1.5);
      }

      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(3, 3);
      return tex;
    }

    function createLimestoneBump() {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 256, 256);

      const rows = 16;
      const rowH = 256 / rows;
      for (let r = 0; r < rows; r++) {
        const y = r * rowH;
        let x = (r % 2 === 0) ? 0 : -18;
        while (x < 256) {
          const blockW = 30 + ((r * 17 + x * 13) % 25);
          const val = 120 + ((r * 11 + x * 7) % 30);
          ctx.fillStyle = `rgb(${val},${val},${val})`;
          ctx.fillRect(Math.max(0, x), y + 1, Math.min(256 - x, blockW - 2), rowH - 2);

          ctx.fillStyle = '#222222';
          ctx.fillRect(x + blockW - 2, y, 2, rowH);
          x += blockW;
        }
        ctx.fillStyle = '#222222';
        ctx.fillRect(0, y + rowH - 1, 256, 1);
      }

      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(3, 3);
      return tex;
    }

    function createZincTexture() {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#26292f';
      ctx.fillRect(0, 0, 256, 256);

      const seamSpacing = 32;
      for (let x = 0; x < 256; x += seamSpacing) {
        const grad = ctx.createLinearGradient(x, 0, x + seamSpacing, 0);
        grad.addColorStop(0, '#21242a');
        grad.addColorStop(0.2, '#2a2f37');
        grad.addColorStop(0.85, '#262a30');
        grad.addColorStop(1, '#1b1d22');
        ctx.fillStyle = grad;
        ctx.fillRect(x, 0, seamSpacing - 1, 256);

        ctx.fillStyle = '#3a4049';
        ctx.fillRect(x, 0, 1.5, 256);
        ctx.fillStyle = '#141619';
        ctx.fillRect(x + 1.5, 0, 1.5, 256);
      }

      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(2, 2);
      return tex;
    }

    function createTimberTexture() {
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#9e734a';
      ctx.fillRect(0, 0, 512, 256);

      const plankH = 16;
      const woodTones = ['#a87d52', '#976c44', '#b3865a', '#90643d', '#a0754c'];

      for (let y = 0; y < 256; y += plankH) {
        const tone = woodTones[(Math.floor(y / plankH) * 3) % woodTones.length];
        ctx.fillStyle = tone;
        ctx.fillRect(0, y, 512, plankH - 1.5);

        for (let g = 0; g < 4; g++) {
          ctx.fillStyle = 'rgba(70, 40, 15, 0.08)';
          ctx.fillRect(0, y + 2 + g * 3.5, 512, 1);
        }

        ctx.fillStyle = 'rgba(30, 15, 5, 0.45)';
        ctx.fillRect(0, y + plankH - 1.5, 512, 1.5);
      }

      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(2, 2);
      return tex;
    }

    function createFlagstoneTexture() {
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 512;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#cfc9bd';
      ctx.fillRect(0, 0, 512, 512);

      const gridX = 4;
      const gridY = 8;
      const w = 512 / gridX;
      const h = 512 / gridY;
      const tones = ['#d6d0c4', '#cbc4b6', '#d2ccbf', '#c4bcb0', '#ddd7cb'];

      for (let gy = 0; gy < gridY; gy++) {
        for (let gx = 0; gx < gridX; gx++) {
          const col = tones[(gx * 3 + gy * 7) % tones.length];
          ctx.fillStyle = col;
          ctx.fillRect(gx * w + 1, gy * h + 1, w - 2, h - 2);

          ctx.fillStyle = 'rgba(0,0,0,0.03)';
          for (let p = 0; p < 8; p++) {
            ctx.fillRect(gx * w + ((p * 23) % w), gy * h + ((p * 17) % h), 3, 3);
          }
        }
      }

      ctx.fillStyle = 'rgba(60, 55, 48, 0.35)';
      for (let gx = 0; gx <= 512; gx += w) ctx.fillRect(gx - 1, 0, 2, 512);
      for (let gy = 0; gy <= 512; gy += h) ctx.fillRect(0, gy - 1, 512, 2);

      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(6, 6);
      return tex;
    }

    function createBirchBarkTexture() {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 512;
      const ctx = c.getContext('2d');

      const grad = ctx.createLinearGradient(0, 0, 256, 0);
      grad.addColorStop(0, '#e5e1d7');
      grad.addColorStop(0.3, '#f5f3ec');
      grad.addColorStop(0.7, '#faf8f2');
      grad.addColorStop(1, '#dfdbd0');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 512);

      for (let i = 0; i < 90; i++) {
        const y = (i * 23) % 512;
        const x = (i * 47) % 200;
        const len = 8 + ((i * 13) % 24);
        const thick = 1 + ((i * 7) % 2.5);
        ctx.fillStyle = (i % 5 === 0) ? '#22201d' : 'rgba(40, 36, 32, 0.75)';
        ctx.fillRect(x, y, len, thick);
      }

      const knotPositions = [
        [40, 90], [180, 170], [80, 290], [160, 410], [50, 480]
      ];
      knotPositions.forEach(([kx, ky]) => {
        ctx.beginPath();
        ctx.moveTo(kx, ky);
        ctx.lineTo(kx - 12, ky + 16);
        ctx.lineTo(kx + 12, ky + 16);
        ctx.closePath();
        ctx.fillStyle = '#181512';
        ctx.fill();

        ctx.fillStyle = 'rgba(30, 25, 20, 0.4)';
        ctx.fillRect(kx - 16, ky + 14, 32, 3);
      });

      const tex = new THREE.CanvasTexture(c);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, 2);
      return tex;
    }

    // Material definitions
    function setSrgbBaseColorEncoding(texture) {
      texture.encoding = THREE.sRGBEncoding;
      texture.needsUpdate = true;
      return texture;
    }

    const limestoneTex = setSrgbBaseColorEncoding(createLimestoneTexture());
    const limestoneBump = createLimestoneBump();
    const zincTex = setSrgbBaseColorEncoding(createZincTexture());
    const timberTex = setSrgbBaseColorEncoding(createTimberTexture());
    const flagstoneTex = setSrgbBaseColorEncoding(createFlagstoneTexture());
    const birchBarkTex = setSrgbBaseColorEncoding(createBirchBarkTexture());

    const limestoneMat = new THREE.MeshStandardMaterial({
      color: 0xd8d2c2,
      map: limestoneTex,
      bumpMap: limestoneBump,
      bumpScale: 0.08,
      roughness: 0.84,
      metalness: 0.04
    });

    const darkZincMat = new THREE.MeshStandardMaterial({
      color: 0x24282e,
      map: zincTex,
      roughness: 0.36,
      metalness: 0.78
    });

    const timberMat = new THREE.MeshStandardMaterial({
      color: 0xa87e54,
      map: timberTex,
      roughness: 0.68,
      metalness: 0.05
    });

    const flagstoneMat = new THREE.MeshStandardMaterial({
      color: 0xc8c2b5,
      map: flagstoneTex,
      roughness: 0.88,
      metalness: 0.04
    });

    const bronzeTrimMat = new THREE.MeshStandardMaterial({
      color: 0x2e2722,
      roughness: 0.38,
      metalness: 0.82
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x94b4c8,
      roughness: 0.05,
      metalness: 0.22,
      transparent: true,
      opacity: 0.48,
      emissive: new THREE.Color(0x000000),
      emissiveIntensity: 0
    });

    const poolWaterMat = new THREE.MeshStandardMaterial({
      color: 0x0c2838,
      roughness: 0.03,
      metalness: 0.28,
      transparent: true,
      opacity: 0.88
    });

    const poolBasinMat = new THREE.MeshStandardMaterial({
      color: 0x09141c,
      roughness: 0.6
    });

    const fireEmberMat = new THREE.MeshStandardMaterial({
      color: 0xff6600,
      emissive: new THREE.Color(0xff4400),
      emissiveIntensity: 0,
      roughness: 0.9
    });

    const birchBarkMat = new THREE.MeshStandardMaterial({
      map: birchBarkTex,
      roughness: 0.88,
      metalness: 0.02
    });

    const birchBranchMat = new THREE.MeshStandardMaterial({
      color: 0x221d19,
      roughness: 0.9
    });

    const birchFoliageMat = new THREE.MeshStandardMaterial({
      color: 0x617448,
      roughness: 0.86,
      metalness: 0.02
    });

    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x768057,
      roughness: 0.9
    });

    const boulderMat = new THREE.MeshStandardMaterial({
      color: 0x8a8477,
      roughness: 0.92
    });

    // 4. Construct Architectural Residence Group
    const villaGroup = new THREE.Group();

    // 4A. Podium & Grounds
    const groundGeo = new THREE.BoxGeometry(78, 0.1, 72);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0xc8c3b7, roughness: 0.96 });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.position.set(0, -0.05, 0);
    groundMesh.receiveShadow = true;
    villaGroup.add(groundMesh);

    const mainPlinthGeo = new THREE.BoxGeometry(36, 0.7, 30);
    const mainPlinth = new THREE.Mesh(mainPlinthGeo, flagstoneMat);
    mainPlinth.position.set(0, 0.35, 0);
    mainPlinth.receiveShadow = true;
    villaGroup.add(mainPlinth);

    const entryTerraceGeo = new THREE.BoxGeometry(18, 0.35, 10);
    const entryTerrace = new THREE.Mesh(entryTerraceGeo, flagstoneMat);
    entryTerrace.position.set(1, 0.175, 15);
    entryTerrace.receiveShadow = true;
    villaGroup.add(entryTerrace);

    const rearTerraceGeo = new THREE.BoxGeometry(28, 0.35, 14);
    const rearTerrace = new THREE.Mesh(rearTerraceGeo, flagstoneMat);
    rearTerrace.position.set(1, 0.175, -12);
    rearTerrace.receiveShadow = true;
    villaGroup.add(rearTerrace);

    // 4B. Rear 18-Metre Reflection Lap Pool & Water Features
    const poolBasinGeo = new THREE.BoxGeometry(19.4, 0.6, 7.4);
    const poolBasin = new THREE.Mesh(poolBasinGeo, poolBasinMat);
    poolBasin.position.set(3, 0.4, -11);
    villaGroup.add(poolBasin);

    // Pool Coping Border (Honed Limestone Coping)
    const copingLongGeo = new THREE.BoxGeometry(19.6, 0.14, 0.7);
    const copingShortGeo = new THREE.BoxGeometry(0.7, 0.14, 7.4);

    const copingNorth = new THREE.Mesh(copingLongGeo, limestoneMat);
    copingNorth.position.set(3, 0.76, -7.65);
    copingNorth.castShadow = true;
    copingNorth.receiveShadow = true;
    villaGroup.add(copingNorth);

    const copingSouth = new THREE.Mesh(copingLongGeo, limestoneMat);
    copingSouth.position.set(3, 0.76, -14.35);
    copingSouth.castShadow = true;
    copingSouth.receiveShadow = true;
    villaGroup.add(copingSouth);

    const copingWest = new THREE.Mesh(copingShortGeo, limestoneMat);
    copingWest.position.set(-6.45, 0.76, -11);
    copingWest.castShadow = true;
    copingWest.receiveShadow = true;
    villaGroup.add(copingWest);

    const copingEast = new THREE.Mesh(copingShortGeo, limestoneMat);
    copingEast.position.set(12.45, 0.76, -11);
    copingEast.castShadow = true;
    copingEast.receiveShadow = true;
    villaGroup.add(copingEast);

    // Reflective Water Plane
    const waterGeo = new THREE.PlaneGeometry(18.2, 6.2);
    const waterMesh = new THREE.Mesh(waterGeo, poolWaterMat);
    waterMesh.rotation.x = -Math.PI / 2;
    waterMesh.position.set(3, 0.68, -11);
    waterMesh.receiveShadow = true;
    villaGroup.add(waterMesh);

    // Floating limestone stepping stones
    for (let i = -2; i <= 2; i++) {
      const stepStoneGeo = new THREE.BoxGeometry(1.4, 0.12, 1.2);
      const stepStone = new THREE.Mesh(stepStoneGeo, limestoneMat);
      stepStone.position.set(1 + i * 2.3, 0.74, -11);
      stepStone.castShadow = true;
      stepStone.receiveShadow = true;
      villaGroup.add(stepStone);
    }

    // Sunken Fire Lounge & Fire Table
    const fireBenchGeo = new THREE.BoxGeometry(7.5, 0.42, 3.8);
    const fireBench = new THREE.Mesh(fireBenchGeo, flagstoneMat);
    fireBench.position.set(-7.5, 0.56, -12.5);
    fireBench.castShadow = true;
    fireBench.receiveShadow = true;
    villaGroup.add(fireBench);

    const fireTableGeo = new THREE.BoxGeometry(3.6, 0.38, 0.95);
    const fireTable = new THREE.Mesh(fireTableGeo, bronzeTrimMat);
    fireTable.position.set(-7.5, 0.72, -12.5);
    fireTable.castShadow = true;
    fireTable.receiveShadow = true;
    villaGroup.add(fireTable);

    const fireEmberGeo = new THREE.BoxGeometry(3.2, 0.08, 0.6);
    const fireEmber = new THREE.Mesh(fireEmberGeo, fireEmberMat);
    fireEmber.position.set(-7.5, 0.92, -12.5);
    villaGroup.add(fireEmber);

    // 4C. Central Ground Floor Living Pavilion (Great Room & Dining)
    const salonFloorGeo = new THREE.BoxGeometry(20, 0.05, 14);
    const salonFloor = new THREE.Mesh(salonFloorGeo, timberMat);
    salonFloor.position.set(0, 0.725, 0);
    salonFloor.receiveShadow = true;
    villaGroup.add(salonFloor);

    // Main Roof Slab & Timber Underside Soffit
    const salonRoofGeo = new THREE.BoxGeometry(22, 0.42, 16);
    const salonRoof = new THREE.Mesh(salonRoofGeo, darkZincMat);
    salonRoof.position.set(0, 4.6, 0);
    salonRoof.castShadow = true;
    salonRoof.receiveShadow = true;
    villaGroup.add(salonRoof);

    const salonSoffitGeo = new THREE.BoxGeometry(21.8, 0.04, 15.8);
    const salonSoffit = new THREE.Mesh(salonSoffitGeo, timberMat);
    salonSoffit.position.set(0, 4.38, 0);
    villaGroup.add(salonSoffit);

    // Recessed architectural ceiling cove for warm interior lighting
    const coveFrameGeo = new THREE.BoxGeometry(15, 0.1, 9);
    const coveFrameMat = new THREE.MeshBasicMaterial({ color: 0xffd080 });
    const coveFrame = new THREE.Mesh(coveFrameGeo, coveFrameMat);
    coveFrame.position.set(0, 4.35, 0);
    villaGroup.add(coveFrame);

    // 4D. Chauvigny Limestone Dividing Chimney / Pylon Monolith
    const pylonGeo = new THREE.BoxGeometry(2.8, 9.8, 4.2);
    const pylon = new THREE.Mesh(pylonGeo, limestoneMat);
    pylon.position.set(-3.2, 4.9, 0);
    pylon.castShadow = true;
    pylon.receiveShadow = true;
    villaGroup.add(pylon);

    // Ribbon Fireplace recess in limestone pylon
    const ribbonFireGeo = new THREE.BoxGeometry(2.9, 0.45, 1.4);
    const ribbonFireMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });
    const ribbonFire = new THREE.Mesh(ribbonFireGeo, ribbonFireMat);
    ribbonFire.position.set(-3.2, 1.25, 0);
    villaGroup.add(ribbonFire);

    const flameEmberGeo = new THREE.BoxGeometry(2.4, 0.08, 0.5);
    const flameEmber = new THREE.Mesh(flameEmberGeo, fireEmberMat);
    flameEmber.position.set(-3.2, 1.1, 0);
    villaGroup.add(flameEmber);

    // 4E. Glass Curtain Walls with Thin Bronze Mullions
    // Front Glass & Mullions (Faces 0% View)
    const frontGlassGeo = new THREE.BoxGeometry(12.5, 3.8, 0.08);
    const frontGlass = new THREE.Mesh(frontGlassGeo, glassMat);
    frontGlass.position.set(1.5, 2.6, 7.0);
    villaGroup.add(frontGlass);

    // Front horizontal transom & vertical mullions
    const frontTransomGeo = new THREE.BoxGeometry(12.6, 0.08, 0.12);
    const frontTransom = new THREE.Mesh(frontTransomGeo, bronzeTrimMat);
    frontTransom.position.set(1.5, 3.7, 7.0);
    villaGroup.add(frontTransom);

    for (let m = -2; m <= 2; m++) {
      const mullionGeo = new THREE.BoxGeometry(0.08, 3.8, 0.12);
      const mullion = new THREE.Mesh(mullionGeo, bronzeTrimMat);
      mullion.position.set(1.5 + m * 2.4, 2.6, 7.0);
      mullion.castShadow = true;
      villaGroup.add(mullion);
    }

    // Rear Glass & Mullions (Faces 50% Pool View)
    const rearGlassGeo = new THREE.BoxGeometry(14.5, 3.8, 0.08);
    const rearGlass = new THREE.Mesh(rearGlassGeo, glassMat);
    rearGlass.position.set(2.5, 2.6, -7.0);
    villaGroup.add(rearGlass);

    const rearTransom = new THREE.Mesh(new THREE.BoxGeometry(14.6, 0.08, 0.12), bronzeTrimMat);
    rearTransom.position.set(2.5, 3.7, -7.0);
    villaGroup.add(rearTransom);

    for (let m = -3; m <= 3; m++) {
      const mullionGeo = new THREE.BoxGeometry(0.08, 3.8, 0.12);
      const mullion = new THREE.Mesh(mullionGeo, bronzeTrimMat);
      mullion.position.set(2.5 + m * 2.3, 2.6, -7.0);
      mullion.castShadow = true;
      villaGroup.add(mullion);
    }

    // Projecting Bronze Overhang Fascia Canopy over front glass
    const frontCanopyGeo = new THREE.BoxGeometry(13.2, 0.28, 1.6);
    const frontCanopy = new THREE.Mesh(frontCanopyGeo, darkZincMat);
    frontCanopy.position.set(1.5, 4.45, 7.8);
    frontCanopy.castShadow = true;
    frontCanopy.receiveShadow = true;
    villaGroup.add(frontCanopy);

    // 4F. East Arrival Wing & Timber Pavilion
    const arrivalWingGeo = new THREE.BoxGeometry(8.5, 3.8, 11.5);
    const arrivalWing = new THREE.Mesh(arrivalWingGeo, timberMat);
    arrivalWing.position.set(7.5, 2.6, 1.0);
    arrivalWing.castShadow = true;
    arrivalWing.receiveShadow = true;
    villaGroup.add(arrivalWing);

    // Grand Bronze Pivot Entrance Door
    const bronzeDoorGeo = new THREE.BoxGeometry(2.2, 3.8, 0.18);
    const bronzeDoor = new THREE.Mesh(bronzeDoorGeo, bronzeTrimMat);
    bronzeDoor.position.set(4.5, 2.6, 6.8);
    bronzeDoor.castShadow = true;
    villaGroup.add(bronzeDoor);

    const doorFrameGeo = new THREE.BoxGeometry(3.0, 4.0, 0.25);
    const doorFrame = new THREE.Mesh(doorFrameGeo, limestoneMat);
    doorFrame.position.set(4.5, 2.7, 6.75);
    doorFrame.castShadow = true;
    doorFrame.receiveShadow = true;
    villaGroup.add(doorFrame);

    // 4G. East Stone Cloister / Pillared Colonnade (Viewed at 25% Side View)
    const cloisterPillarGeo = new THREE.BoxGeometry(0.65, 3.8, 0.65);
    for (let c = 0; c < 7; c++) {
      const zPos = 7.0 - c * 2.2;
      const pillar = new THREE.Mesh(cloisterPillarGeo, limestoneMat);
      pillar.position.set(12.0, 2.6, zPos);
      pillar.castShadow = true;
      pillar.receiveShadow = true;
      villaGroup.add(pillar);
    }

    // Continuous Cloister Flat Roof Canopy
    const cloisterRoofGeo = new THREE.BoxGeometry(1.8, 0.35, 15.5);
    const cloisterRoof = new THREE.Mesh(cloisterRoofGeo, darkZincMat);
    cloisterRoof.position.set(12.0, 4.65, 0.4);
    cloisterRoof.castShadow = true;
    cloisterRoof.receiveShadow = true;
    villaGroup.add(cloisterRoof);

    const cloisterSoffitGeo = new THREE.BoxGeometry(1.6, 0.04, 15.3);
    const cloisterSoffit = new THREE.Mesh(cloisterSoffitGeo, timberMat);
    cloisterSoffit.position.set(12.0, 4.45, 0.4);
    villaGroup.add(cloisterSoffit);

    // 4I. Curated Interior Silhouette Furnishings (Seen through Living Room Glazing)
    const sofaGeo = new THREE.BoxGeometry(5.4, 0.65, 2.0);
    const sofaMat = new THREE.MeshStandardMaterial({ color: 0xe8e4dc, roughness: 0.9 });
    const sofa = new THREE.Mesh(sofaGeo, sofaMat);
    sofa.position.set(-1.5, 1.05, 2.0);
    sofa.castShadow = true;
    villaGroup.add(sofa);

    const sofaChaiseGeo = new THREE.BoxGeometry(2.0, 0.65, 3.2);
    const sofaChaise = new THREE.Mesh(sofaChaiseGeo, sofaMat);
    sofaChaise.position.set(0.2, 1.05, 0.5);
    sofaChaise.castShadow = true;
    villaGroup.add(sofaChaise);

    const coffeeTableGeo = new THREE.BoxGeometry(2.6, 0.28, 1.3);
    const coffeeTableMat = new THREE.MeshStandardMaterial({ color: 0x1f1f1f, roughness: 0.4 });
    const coffeeTable = new THREE.Mesh(coffeeTableGeo, coffeeTableMat);
    coffeeTable.position.set(-1.5, 0.86, 0.2);
    coffeeTable.castShadow = true;
    villaGroup.add(coffeeTable);

    const diningTableGeo = new THREE.BoxGeometry(4.2, 0.12, 1.6);
    const diningTable = new THREE.Mesh(diningTableGeo, timberMat);
    diningTable.position.set(6.2, 1.25, 1.2);
    diningTable.castShadow = true;
    villaGroup.add(diningTable);

    // 4H. West Cantilevered 2-Story Master Suite Wing (Residence 01 Architectural Hero Feature)
    // Dark standing-seam zinc clad upper volume projecting dramatically westward
    const upperVolumeGeo = new THREE.BoxGeometry(16.5, 3.4, 12.0);
    const upperVolume = new THREE.Mesh(upperVolumeGeo, darkZincMat);
    upperVolume.position.set(-4.0, 6.4, -0.5);
    upperVolume.castShadow = true;
    upperVolume.receiveShadow = true;
    villaGroup.add(upperVolume);

    // Cantilevered Upper Terrace Roof with warm timber soffit
    const upperRoofGeo = new THREE.BoxGeometry(18.5, 0.36, 14.0);
    const upperRoof = new THREE.Mesh(upperRoofGeo, darkZincMat);
    upperRoof.position.set(-4.0, 8.25, -0.5);
    upperRoof.castShadow = true;
    upperRoof.receiveShadow = true;
    villaGroup.add(upperRoof);

    const upperSoffitGeo = new THREE.BoxGeometry(18.3, 0.04, 13.8);
    const upperSoffit = new THREE.Mesh(upperSoffitGeo, timberMat);
    upperSoffit.position.set(-4.0, 8.05, -0.5);
    villaGroup.add(upperSoffit);

    // Upper level panoramic glazing (North Front ribbon + West sunset corner)
    const upperFrontGlassGeo = new THREE.BoxGeometry(11.0, 2.1, 0.08);
    const upperFrontGlass = new THREE.Mesh(upperFrontGlassGeo, glassMat);
    upperFrontGlass.position.set(-3.5, 6.5, 5.54);
    villaGroup.add(upperFrontGlass);

    const upperWestGlassGeo = new THREE.BoxGeometry(0.08, 2.1, 7.5);
    const upperWestGlass = new THREE.Mesh(upperWestGlassGeo, glassMat);
    upperWestGlass.position.set(-12.29, 6.5, -0.5);
    villaGroup.add(upperWestGlass);

    // Cantilevered Master Balcony Slab (South / Rear Pool View)
    const upperBalconySlabGeo = new THREE.BoxGeometry(9.0, 0.28, 3.2);
    const upperBalconySlab = new THREE.Mesh(upperBalconySlabGeo, darkZincMat);
    upperBalconySlab.position.set(-6.5, 4.85, -7.5);
    upperBalconySlab.castShadow = true;
    upperBalconySlab.receiveShadow = true;
    villaGroup.add(upperBalconySlab);

    // Frameless glass balcony railing
    const upperBalconyRailGeo = new THREE.BoxGeometry(9.0, 1.05, 0.06);
    const upperBalconyRail = new THREE.Mesh(upperBalconyRailGeo, glassMat);
    upperBalconyRail.position.set(-6.5, 5.48, -9.05);
    villaGroup.add(upperBalconyRail);

    // Slim Bronze Structural Support Columns for West Cantilever
    const colGeo = new THREE.CylinderGeometry(0.09, 0.09, 4.4, 12);
    const col1 = new THREE.Mesh(colGeo, bronzeTrimMat);
    col1.position.set(-11.8, 2.4, 4.8);
    col1.castShadow = true;
    villaGroup.add(col1);

    const col2 = new THREE.Mesh(colGeo, bronzeTrimMat);
    col2.position.set(-11.8, 2.4, -5.8);
    col2.castShadow = true;
    villaGroup.add(col2);

    // Architectural Cedar Sun Louvers on West Facade
    for (let l = 0; l < 8; l++) {
      const louverGeo = new THREE.BoxGeometry(0.06, 0.14, 6.8);
      const louver = new THREE.Mesh(louverGeo, timberMat);
      louver.position.set(-12.35, 5.6 + l * 0.28, -0.5);
      villaGroup.add(louver);
    }

    // 4J. Authentic White Paper Birch Trees (Betula Papyrifera - Alora House Landscape)
    function createBirchTree(x, z, scale = 1, rotationY = 0) {
      const birchGroup = new THREE.Group();

      // Slender white trunk with characteristic gentle curve
      const trunkGeo = new THREE.CylinderGeometry(0.08 * scale, 0.16 * scale, 5.6 * scale, 10);
      const trunk = new THREE.Mesh(trunkGeo, birchBarkMat);
      trunk.position.set(0, 2.8 * scale, 0);
      trunk.rotation.z = 0.05;
      trunk.castShadow = true;
      birchGroup.add(trunk);

      // Angled branch 1
      const branch1Geo = new THREE.CylinderGeometry(0.04 * scale, 0.07 * scale, 2.2 * scale, 8);
      const branch1 = new THREE.Mesh(branch1Geo, birchBarkMat);
      branch1.position.set(0.6 * scale, 3.8 * scale, 0.2 * scale);
      branch1.rotation.z = -0.55;
      branch1.castShadow = true;
      birchGroup.add(branch1);

      // Angled branch 2
      const branch2Geo = new THREE.CylinderGeometry(0.03 * scale, 0.06 * scale, 1.8 * scale, 8);
      const branch2 = new THREE.Mesh(branch2Geo, birchBarkMat);
      branch2.position.set(-0.5 * scale, 4.4 * scale, -0.3 * scale);
      branch2.rotation.z = 0.5;
      branch2.castShadow = true;
      birchGroup.add(branch2);

      // Layered airy deciduous birch foliage clusters
      const foliageClusters = [
        { x: 0, y: 5.6, z: 0, r: 1.35 },
        { x: 0.9, y: 4.8, z: 0.3, r: 1.1 },
        { x: -0.8, y: 5.1, z: -0.4, r: 1.05 },
        { x: 0.3, y: 6.3, z: -0.2, r: 0.95 },
      ];

      foliageClusters.forEach(cfg => {
        const leafGeo = new THREE.SphereGeometry(cfg.r * scale, 10, 8);
        leafGeo.scale(1.2, 0.75, 1.15);
        const leafMesh = new THREE.Mesh(leafGeo, birchFoliageMat);
        leafMesh.position.set(cfg.x * scale, cfg.y * scale, cfg.z * scale);
        leafMesh.castShadow = true;
        birchGroup.add(leafMesh);
      });

      birchGroup.position.set(x, 0.7, z);
      birchGroup.rotation.y = rotationY;
      return birchGroup;
    }

    // Specimen Birch Placements matching site photos
    villaGroup.add(createBirchTree(13.8, 5.5, 1.15, 0.4));
    villaGroup.add(createBirchTree(14.6, -3.2, 1.25, 1.2));
    villaGroup.add(createBirchTree(-13.8, 9.8, 1.1, 2.1));
    villaGroup.add(createBirchTree(4.2, 11.8, 0.95, 0.8));
    villaGroup.add(createBirchTree(-14.2, -8.6, 1.2, 1.7));
    villaGroup.add(createBirchTree(12.8, -10.8, 1.05, 2.8));

    // 4K. Native Ornamental Reed Grass Clusters Along Pool & Terrace Edge
    function createGrassTuft(x, z, s = 1) {
      const grassGroup = new THREE.Group();
      for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2;
        const bladeGeo = new THREE.ConeGeometry(0.12 * s, 0.7 * s, 5);
        const blade = new THREE.Mesh(bladeGeo, grassMat);
        blade.position.set(Math.cos(ang) * 0.18 * s, 0.35 * s, Math.sin(ang) * 0.18 * s);
        blade.rotation.x = Math.sin(ang) * 0.25;
        blade.rotation.z = -Math.cos(ang) * 0.25;
        blade.castShadow = true;
        grassGroup.add(blade);
      }
      grassGroup.position.set(x, 0.75, z);
      return grassGroup;
    }

    // Clustered grass accents
    villaGroup.add(createGrassTuft(10.2, -5.2, 1.1));
    villaGroup.add(createGrassTuft(10.6, -6.8, 0.9));
    villaGroup.add(createGrassTuft(10.3, -11.6, 1.2));
    villaGroup.add(createGrassTuft(-6.8, -12.4, 1.0));
    villaGroup.add(createGrassTuft(-9.2, -12.2, 1.15));

    // 4L. Weathered Natural Granite Boulders (Alpine Accent Rocks)
    function createBoulder(x, z, sx, sy, sz) {
      const boulderGeo = new THREE.DodecahedronGeometry(0.7, 1);
      boulderGeo.scale(sx, sy, sz);
      const boulder = new THREE.Mesh(boulderGeo, boulderMat);
      boulder.position.set(x, 0.7 + sy * 0.35, z);
      boulder.rotation.set(0.3, 0.6, 0.2);
      boulder.castShadow = true;
      boulder.receiveShadow = true;
      return boulder;
    }

    villaGroup.add(createBoulder(11.2, 9.8, 1.2, 0.9, 1.4));
    villaGroup.add(createBoulder(12.5, -4.5, 1.4, 1.0, 1.1));
    villaGroup.add(createBoulder(-11.5, -11.2, 1.5, 0.8, 1.3));
    villaGroup.add(createBoulder(-12.8, 8.4, 1.1, 0.7, 1.0));

    // Retire the first-study massing. The refined residence below is a complete
    // new composition, while the existing scroll and lighting lifecycle remains intact.
    villaGroup.visible = false;
    villaGroup.traverse((object) => {
      if (object.isMesh && object.geometry) object.geometry.dispose();
    });

    /*
      Refined Villa No. 02
      A deliberately asymmetric, two-storey courtyard villa. Elements are built
      as deep assemblies (recess, frame, glass, mullions) rather than surface
      cards, so each elevation remains legible during the full turntable rotation.
    */
    const residenceGroup = new THREE.Group();
    const fallbackModelGroup = new THREE.Group();
    fallbackModelGroup.name = 'MARIDAN_PROCEDURAL_FALLBACK';
    const glbModelGroup = new THREE.Group();
    glbModelGroup.name = 'MARIDAN_GLB_MODEL';
    glbModelGroup.visible = false;
    const siteGroup = new THREE.Group();
    fallbackModelGroup.add(siteGroup);
    residenceGroup.add(fallbackModelGroup, glbModelGroup);

    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0xd8d0c1, map: limestoneTex, roughness: 0.82, metalness: 0.0,
      bumpMap: limestoneBump, bumpScale: 0.075
    });
    const paleConcreteMat = new THREE.MeshStandardMaterial({ color: 0xc7c3bb, roughness: 0.88, metalness: 0.0 });
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x302a24, roughness: 0.48, metalness: 0.58 });
    const cedarMat = new THREE.MeshStandardMaterial({ color: 0x754d2d, map: timberTex, roughness: 0.62, metalness: 0.02 });
    const interiorMat = new THREE.MeshStandardMaterial({ color: 0x73604b, roughness: 0.82, emissive: 0x38200c, emissiveIntensity: 0.08 });
    const villaGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x9eb6c0, roughness: 0.24, metalness: 0.02, transmission: 0.02,
      transparent: true, opacity: 0.78, clearcoat: 0.18, clearcoatRoughness: 0.28,
      emissive: 0x000000, emissiveIntensity: 0
    });
    const villaWaterMat = new THREE.MeshPhysicalMaterial({
      color: 0x3c91a7, roughness: 0.28, metalness: 0.04, transparent: true,
      opacity: 0.88, clearcoat: 0.25, clearcoatRoughness: 0.3
    });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x526d42, roughness: 0.96 });
    const plantingMat = new THREE.MeshStandardMaterial({ color: 0x29412b, roughness: 0.94 });
    const soilMat = new THREE.MeshStandardMaterial({ color: 0x4a4033, roughness: 0.98 });
    const pavingMat = new THREE.MeshStandardMaterial({ color: 0xa9a59c, map: flagstoneTex, roughness: 0.82 });

    function loadPbrTexture(material, property, url, repeat, colorMap, normalStrength) {
      return new Promise((resolve) => {
        try {
          localTextureLoader.load(url, (texture) => {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(repeat, repeat);
            texture.encoding = colorMap ? THREE.sRGBEncoding : THREE.LinearEncoding;
            if (property === 'map') material.color.set(0xffffff);
            if (property === 'roughnessMap') material.roughness = 1;
            if (property === 'normalMap') material.normalScale.set(normalStrength, normalStrength);
            material[property] = texture;
            material.needsUpdate = true;
            resolve(true);
          }, undefined, () => {
            console.warn(`Optional material map failed to load: ${url}`);
            resolve(false);
          });
        } catch (error) {
          console.warn(`Optional material map could not be requested: ${url}`, error);
          resolve(false);
        }
      });
    }

    function loadPbrTextureSet(material, assetName, repeat, normalStrength, normalExtension) {
      const basePath = `assets/materials/${assetName}`;
      return Promise.all([
        loadPbrTexture(material, 'map', `${basePath}_diff_1k.jpg`, repeat, true, 0),
        loadPbrTexture(material, 'roughnessMap', `${basePath}_rough_1k.jpg`, repeat, false, 0),
        loadPbrTexture(material, 'normalMap', `${basePath}_nor_gl_1k.${normalExtension}`, repeat, false, normalStrength)
      ]);
    }

    let viewerAssetsPromise = null;
    let glbModelLoadPromise = null;

    function disposeImportedModel(root) {
      const geometries = new Set();
      const materials = new Set();
      const textures = new Set();
      root.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry);
        const objectMaterials = Array.isArray(object.material) ? object.material : [object.material];
        objectMaterials.forEach((material) => {
          if (!material) return;
          materials.add(material);
          Object.values(material).forEach((value) => {
            if (value && value.isTexture) textures.add(value);
          });
        });
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
    }

    function measureVisibleGeometry(root) {
      const bounds = new THREE.Box3();
      const meshBounds = new THREE.Box3();
      let meshCount = 0;
      root.traverse((object) => {
        if (!object.isMesh || !object.geometry || !object.geometry.attributes.position) return;
        let ancestor = object;
        while (ancestor) {
          if (!ancestor.visible) return;
          ancestor = ancestor.parent;
        }
        if (object.geometry.attributes.position.count < 3) return;
        if (!object.geometry.boundingBox) object.geometry.computeBoundingBox();
        if (!object.geometry.boundingBox || object.geometry.boundingBox.isEmpty()) return;
        meshBounds.copy(object.geometry.boundingBox).applyMatrix4(object.matrixWorld);
        if (meshBounds.isEmpty()) return;
        bounds.union(meshBounds);
        meshCount++;
      });
      return { bounds, meshCount };
    }

    function registerImportedMaterials(root) {
      let meshCount = 0;
      root.traverse((object) => {
        if (!object.isMesh || !object.geometry || !object.geometry.attributes.position) return;
        meshCount++;
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        object.receiveShadow = true;
        object.castShadow = materials.some((material) => material && (!material.transparent || material.opacity >= 0.98));
        materials.forEach((material) => {
          if (!material) return;
          if ('envMapIntensity' in material) {
            material.envMapIntensity = Math.max(0, lastEnvironmentIntensity);
            environmentMaterials.add(material);
          }
          if (!material.emissive || !material.emissive.isColor) return;
          const materialName = (material.name || '').toUpperCase();
          if (materialName.startsWith('MARIDAN_GLASS')) phaseGlassMaterials.add(material);
          else if (materialName.startsWith('MARIDAN_INTERIOR')) phaseInteriorMaterials.add(material);
          else if (materialName.startsWith('MARIDAN_FIRE')) phaseFireMaterials.add(material);
        });
      });
      return meshCount;
    }

    function attachValidatedGlb(gltf) {
      const importedScene = gltf && (gltf.scene || (gltf.scenes && gltf.scenes[0]));
      if (!importedScene) return false;
      if (importedScene.userData.maridanFrontAxis && importedScene.userData.maridanFrontAxis !== '+Z') {
        disposeImportedModel(importedScene);
        return false;
      }

      const normalizedRoot = new THREE.Group();
      normalizedRoot.add(importedScene);
      normalizedRoot.updateMatrixWorld(true);

      const buildingNode = importedScene.getObjectByName('MARIDAN_BUILDING') || importedScene;
      const measured = measureVisibleGeometry(buildingNode);
      if (measured.meshCount === 0 || measured.bounds.isEmpty()) {
        disposeImportedModel(normalizedRoot);
        return false;
      }

      const targetDimensions = new THREE.Vector3(30.85, 8.385, 18.4);
      const sourceDimensions = measured.bounds.getSize(new THREE.Vector3());
      if (![sourceDimensions.x, sourceDimensions.y, sourceDimensions.z].every(Number.isFinite) || sourceDimensions.y <= 0.001) {
        disposeImportedModel(normalizedRoot);
        return false;
      }

      const scaleFactor = targetDimensions.y / sourceDimensions.y;
      const normalizedDimensions = sourceDimensions.clone().multiplyScalar(scaleFactor);
      const dimensionErrors = [
        Math.abs(normalizedDimensions.x - targetDimensions.x) / targetDimensions.x,
        Math.abs(normalizedDimensions.y - targetDimensions.y) / targetDimensions.y,
        Math.abs(normalizedDimensions.z - targetDimensions.z) / targetDimensions.z
      ];
      if (!Number.isFinite(scaleFactor) || scaleFactor <= 0 || dimensionErrors.some((error) => error > 0.25)) {
        disposeImportedModel(normalizedRoot);
        return false;
      }

      normalizedRoot.scale.setScalar(scaleFactor);
      normalizedRoot.updateMatrixWorld(true);
      const normalizedBounds = measureVisibleGeometry(buildingNode).bounds;
      const normalizedCenter = normalizedBounds.getCenter(new THREE.Vector3());
      normalizedRoot.position.set(
        0.075 - normalizedCenter.x,
        -normalizedBounds.min.y,
        -1.6 - normalizedCenter.z
      );
      normalizedRoot.updateMatrixWorld(true);

      if (registerImportedMaterials(normalizedRoot) === 0) {
        disposeImportedModel(normalizedRoot);
        return false;
      }

      glbModelGroup.add(normalizedRoot);
      glbModelGroup.visible = true;
      fallbackModelGroup.visible = false;
      return true;
    }

    function loadFutureGlb() {
      if (glbModelLoadPromise) return glbModelLoadPromise;
      glbModelLoadPromise = new Promise((resolve) => {
        if (!enableFutureGlb || typeof THREE.GLTFLoader !== 'function') {
          resolve(false);
          return;
        }
        try {
          new THREE.GLTFLoader().load(futureModelPath, (gltf) => {
            try {
              resolve(attachValidatedGlb(gltf));
            } catch (error) {
              const importedScene = gltf && (gltf.scene || (gltf.scenes && gltf.scenes[0]));
              if (importedScene) disposeImportedModel(importedScene);
              resolve(false);
            }
          }, undefined, () => resolve(false));
        } catch (error) {
          resolve(false);
        }
      });
      return glbModelLoadPromise;
    }

    function finishViewerPreparation() {
      assetsReady = true;
      section.classList.remove('is-loading');
      section.setAttribute('aria-busy', 'false');
      if (isVisible && !rafId) rafId = requestAnimationFrame(render);
    }

    function loadViewerAssets() {
      if (viewerAssetsPromise) return viewerAssetsPromise;
      viewerAssetsPromise = Promise.all([
        loadPbrTextureSet(stoneMat, 'sandstone_blocks_04', 3, 0.22, 'png'),
        loadPbrTextureSet(cedarMat, 'japanese_cedar_planks', 2, 0.16, 'jpg'),
        loadEnvironment(),
        loadFutureGlb()
      ]).then(() => {
        try {
          updateDiurnalState(currentProgress);
          if (typeof renderer.compile === 'function') renderer.compile(scene, camera);
        } catch (error) {
          console.warn('Viewer shader precompilation failed; the renderer will compile on demand.', error);
        }
        finishViewerPreparation();
      }).catch((error) => {
        console.warn('Viewer assets could not all be prepared; using available procedural fallbacks.', error);
        finishViewerPreparation();
      });
      return viewerAssetsPromise;
    }

    function villaBox(size, position, material, parent = fallbackModelGroup, shadow = true) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), material);
      mesh.position.set(position[0], position[1], position[2]);
      mesh.castShadow = shadow;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    }

    function addGlazedOpening(width, height, position, facing = 0, options = {}) {
      const group = new THREE.Group();
      const depth = options.depth || 0.22;
      const frame = options.frame || bronzeMat;
      const glass = options.glass || villaGlassMat;
      // Deep charcoal reveal makes the glass read as recessed, not applied.
      villaBox([width + 0.34, height + 0.34, depth], [0, 0, 0], bronzeMat, group);
      villaBox([width, height, 0.045], [0, 0, depth / 2 + 0.012], glass, group, false);
      villaBox([width + 0.16, 0.11, depth + 0.08], [0, height / 2 - 0.015, 0], frame, group);
      villaBox([width + 0.16, 0.11, depth + 0.08], [0, -height / 2 + 0.015, 0], frame, group);
      villaBox([0.11, height, depth + 0.08], [-width / 2 + 0.015, 0, 0], frame, group);
      villaBox([0.11, height, depth + 0.08], [width / 2 - 0.015, 0, 0], frame, group);
      const divisions = options.divisions || Math.max(2, Math.round(width / 2.3));
      for (let i = 1; i < divisions; i++) {
        villaBox([0.065, height - 0.12, depth + 0.095], [-width / 2 + (width / divisions) * i, 0, 0.01], frame, group);
      }
      group.position.set(position[0], position[1], position[2]);
      group.rotation.y = facing;
      fallbackModelGroup.add(group);
      return group;
    }

    function addBalcony(width, depth, position, facing = 0) {
      const group = new THREE.Group();
      villaBox([width, 0.22, depth], [0, 0, 0], paleConcreteMat, group);
      villaBox([width + 0.14, 0.08, 0.16], [0, 0.55, depth / 2 - 0.05], bronzeMat, group, false);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(width - 0.18, 0.92, 0.035), villaGlassMat);
      rail.position.set(0, 0.48, depth / 2 + 0.015);
      group.add(rail);
      for (let i = 0; i < 5; i++) villaBox([0.035, 0.94, 0.06], [-width / 2 + 0.1 + i * (width - 0.2) / 4, 0.47, depth / 2], bronzeMat, group, false);
      group.position.set(position[0], position[1], position[2]);
      group.rotation.y = facing;
      fallbackModelGroup.add(group);
    }

    function addVerticalLouvers(count, spacing, position, facing = 0, height = 4.5) {
      const group = new THREE.Group();
      for (let i = 0; i < count; i++) villaBox([0.13, height, 0.28], [(i - (count - 1) / 2) * spacing, 0, 0], cedarMat, group);
      group.position.set(position[0], position[1], position[2]);
      group.rotation.y = facing;
      fallbackModelGroup.add(group);
    }

    // Site and ground relationship.
    villaBox([64, 0.34, 58], [0, -0.17, 0], lawnMat, siteGroup, false);
    villaBox([38, 0.34, 24], [0, 0.02, 8.5], pavingMat, siteGroup, false);
    villaBox([31, 0.52, 22], [0, 0.27, 0], pavingMat, siteGroup);
    villaBox([28, 0.28, 13], [0, 0.1, -15], pavingMat, siteGroup);

    // Pool is deliberately aligned to the rear terrace, with a heavy coping edge.
    villaBox([19.8, 0.58, 8.6], [3.2, 0.02, -20.2], bronzeMat, siteGroup);
    villaBox([18.9, 0.12, 7.7], [3.2, 0.36, -20.2], villaWaterMat, siteGroup, false);
    villaBox([20.4, 0.16, 0.52], [3.2, 0.48, -16.0], stoneMat, siteGroup);
    villaBox([20.4, 0.16, 0.52], [3.2, 0.48, -24.4], stoneMat, siteGroup);

    // Main massing: a calm central pavilion is held by genuinely different wings.
    villaBox([8.8, 7.6, 11.8], [0, 4.08, 0.6], stoneMat);
    villaBox([11.8, 0.38, 14.2], [0, 8.08, 0.5], bronzeMat);
    villaBox([11.45, 0.12, 13.8], [0, 7.83, 0.5], cedarMat, fallbackModelGroup, false);
    villaBox([10.7, 3.65, 11.2], [-10.0, 2.1, 0.4], paleConcreteMat);
    villaBox([9.7, 3.2, 10.1], [-9.2, 5.55, -0.55], stoneMat);
    villaBox([11.0, 0.34, 12.0], [-9.6, 7.26, -0.4], bronzeMat);
    villaBox([10.0, 3.7, 12.7], [10.2, 2.15, -0.25], stoneMat);
    villaBox([10.6, 3.05, 9.2], [9.3, 5.48, 1.35], paleConcreteMat);
    villaBox([11.6, 0.34, 11.0], [9.6, 7.05, 1.05], bronzeMat);

    // Front elevation: inset double-height arrival room, flanked by sculptural piers.
    villaBox([2.15, 7.65, 2.2], [-5.25, 4.05, 6.0], stoneMat);
    villaBox([2.15, 7.65, 2.2], [5.25, 4.05, 6.0], stoneMat);
    villaBox([13.0, 0.62, 2.3], [0, 8.3, 6.0], bronzeMat);
    addGlazedOpening(6.55, 6.35, [0, 4.38, 6.66], 0, { divisions: 3, depth: 0.36 });
    villaBox([2.25, 3.25, 0.3], [0, 2.1, 6.08], bronzeMat);
    villaBox([0.09, 3.1, 0.43], [0, 2.15, 6.25], cedarMat);
    addGlazedOpening(5.9, 2.35, [-10.0, 2.55, 6.15], 0, { divisions: 3 });
    addGlazedOpening(5.2, 2.15, [10.2, 2.55, 6.35], 0, { divisions: 3 });
    addGlazedOpening(5.5, 2.18, [-9.0, 5.75, 4.7], 0, { divisions: 3 });
    addGlazedOpening(4.3, 2.05, [9.3, 5.65, 6.08], 0, { divisions: 2 });
    addBalcony(5.7, 1.55, [-9.0, 4.55, 5.85], 0);
    addBalcony(4.55, 1.5, [9.35, 4.48, 6.05], 0);

    // Rear is intentionally more open, organised around the pool loggia and upper terrace.
    villaBox([19.5, 0.34, 4.2], [1.9, 3.9, -6.75], bronzeMat);
    addGlazedOpening(7.2, 3.25, [-4.0, 2.45, -5.66], Math.PI, { divisions: 4, depth: 0.36 });
    addGlazedOpening(6.1, 3.25, [5.7, 2.45, -5.66], Math.PI, { divisions: 3, depth: 0.36 });
    addGlazedOpening(6.4, 2.2, [-1.2, 5.72, -5.45], Math.PI, { divisions: 3 });
    addGlazedOpening(4.2, 2.08, [9.0, 5.65, -4.85], Math.PI, { divisions: 2 });
    addBalcony(9.2, 2.25, [-1.2, 4.55, -6.75], Math.PI);
    villaBox([20.0, 0.25, 5.2], [1.7, 0.78, -8.2], pavingMat);

    // East side: cloistered and private. West side: taller timber screen and corner glazing.
    addGlazedOpening(5.9, 3.05, [15.25, 2.45, 0.0], Math.PI / 2, { divisions: 3 });
    addGlazedOpening(4.5, 2.05, [14.95, 5.62, 1.8], Math.PI / 2, { divisions: 2 });
    addVerticalLouvers(13, 0.33, [15.36, 4.6, -3.0], Math.PI / 2, 4.7);
    villaBox([0.42, 4.0, 10.0], [14.6, 2.4, 0.7], stoneMat);
    addGlazedOpening(5.35, 3.12, [-14.68, 2.5, -1.2], -Math.PI / 2, { divisions: 3 });
    addGlazedOpening(4.2, 2.1, [-14.62, 5.75, -1.0], -Math.PI / 2, { divisions: 2 });
    villaBox([0.44, 4.15, 5.5], [-14.5, 2.5, 4.3], paleConcreteMat);
    addVerticalLouvers(10, 0.34, [-14.55, 5.15, -1.7], -Math.PI / 2, 4.1);

    // Stone entrance steps, garden beds, and restrained plant forms.
    for (let i = 0; i < 4; i++) villaBox([7.0 + i * 0.8, 0.17, 0.75], [0, 0.42 - i * 0.12, 8.0 + i * 0.52], stoneMat, siteGroup);
    function shrub(x, z, scale) {
      const group = new THREE.Group();
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.44 * scale, 0.62 * scale, 0.42 * scale, 8), soilMat);
      const crown = new THREE.Mesh(new THREE.SphereGeometry(0.72 * scale, 10, 8), plantingMat);
      crown.scale.set(1.15, 0.75, 1);
      crown.position.y = 0.62 * scale;
      group.add(base, crown);
      group.position.set(x, 0.18, z);
      siteGroup.add(group);
    }
    [[-14, 8.5, 1.1], [-12.5, 9.8, 0.78], [13.5, 8.8, 1.05], [15, 6.9, 0.7], [-14, -8.2, 0.9], [14, -8.0, 1.0], [-9, -13.2, 0.8], [12, -13.6, 0.82]].forEach(v => shrub(v[0], v[1], v[2]));

    // Low architectural bollards add night-scale without clutter.
    for (const x of [-6.8, 6.8]) {
      const bollard = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), bronzeMat);
      bollard.position.set(x, 0.68, 8.4);
      bollard.castShadow = true;
      siteGroup.add(bollard);
    }

    scene.add(villaGroup);
    scene.add(residenceGroup);

    const environmentMaterials = new Set();
    const phaseGlassMaterials = new Set();
    const phaseInteriorMaterials = new Set();
    const phaseFireMaterials = new Set();
    residenceGroup.traverse((object) => {
      if (!object.isMesh) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => {
        if (material && 'envMapIntensity' in material) environmentMaterials.add(material);
      });
    });
    let lastEnvironmentIntensity = -1;

    // 5. Lighting Setup
    const sunLight = new THREE.DirectionalLight(diurnalPhases[0].sunColor, diurnalPhases[0].sunIntensity);
    sunLight.position.copy(diurnalPhases[0].sunPos);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 75;
    sunLight.shadow.camera.left = -24;
    sunLight.shadow.camera.right = 24;
    sunLight.shadow.camera.top = 22;
    sunLight.shadow.camera.bottom = -22;
    sunLight.shadow.bias = -0.0003;
    sunLight.shadow.normalBias = 0.03;
    scene.add(sunLight);

    const hemiLight = new THREE.HemisphereLight(
      diurnalPhases[0].hemiSky,
      diurnalPhases[0].hemiGround,
      diurnalPhases[0].hemiIntensity
    );
    scene.add(hemiLight);

    // Interior Warm Lighting (activates evening / night)
    const salonLight = new THREE.PointLight(0xffcc7a, 0, 24, 1.5);
    salonLight.position.set(-1.5, 3.2, 2.0);
    residenceGroup.add(salonLight);

    const diningLight = new THREE.PointLight(0xffbe6b, 0, 18, 1.5);
    diningLight.position.set(6.0, 3.2, 1.0);
    residenceGroup.add(diningLight);

    const upperMasterLight = new THREE.PointLight(0xffd58c, 0, 22, 1.5);
    upperMasterLight.position.set(-4.0, 6.6, -0.5);
    residenceGroup.add(upperMasterLight);

    const terraceLight = new THREE.PointLight(0xffb759, 0, 14, 1.5);
    terraceLight.position.set(-6.5, 5.8, -7.0);
    residenceGroup.add(terraceLight);

    // Underwater Reflection Pool Lights (azure/cyan glow)
    const poolLight1 = new THREE.PointLight(0x38bdf8, 0, 15, 1.6);
    poolLight1.position.set(-2.0, 0.42, -20.2);
    residenceGroup.add(poolLight1);

    const poolLight2 = new THREE.PointLight(0x38bdf8, 0, 15, 1.6);
    poolLight2.position.set(8.0, 0.42, -20.2);
    residenceGroup.add(poolLight2);

    // Exterior Architectural Uplights
    const uplightFront = new THREE.PointLight(0xffdfa8, 0, 12, 1.8);
    uplightFront.position.set(1.5, 0.4, 9.2);
    residenceGroup.add(uplightFront);

    const uplightColonnade = new THREE.PointLight(0xffdfa8, 0, 14, 1.8);
    uplightColonnade.position.set(12.0, 0.4, 0.5);
    residenceGroup.add(uplightColonnade);

    const uplightWest = new THREE.PointLight(0xffdfa8, 0, 12, 1.8);
    uplightWest.position.set(-11.5, 0.4, -0.5);
    residenceGroup.add(uplightWest);

    const uplightRear = new THREE.PointLight(0xffdfa8, 0, 12, 1.8);
    uplightRear.position.set(3.5, 0.4, -6.8);
    residenceGroup.add(uplightRear);

    // Rear Sunken Fire Lounge flame glow
    const firePitLight = new THREE.PointLight(0xff5500, 0, 10, 1.8);
    firePitLight.position.set(-8.0, 0.7, -9.5);
    residenceGroup.add(firePitLight);

    // 6. Camera & Diurnal Interpolation
    let targetProgress = 0;
    let currentProgress = 0;
    let isVisible = false;
    let assetsReady = false;
    let rafId = null;

    // Interactive pointer drag offset
    let isDragging = false;
    let pointerStartX = 0;
    let dragAngleOffset = 0;

    function getBaseRadius() {
      return window.innerWidth <= 768 ? 36 : 29.5;
    }

    function updateDiurnalState(p) {
      const clamped = Math.max(0, Math.min(1, p));
      const seg = clamped * 4;
      const idx = Math.min(Math.floor(seg), 3);
      const rawFrac = seg - idx;
      // Smoothstep easing
      const frac = rawFrac * rawFrac * (3 - 2 * rawFrac);

      const k0 = diurnalPhases[idx];
      const k1 = diurnalPhases[idx + 1];

      // Interpolate sun
      sunLight.position.lerpVectors(k0.sunPos, k1.sunPos, frac);
      sunLight.color.lerpColors(k0.sunColor, k1.sunColor, frac);
      sunLight.intensity = THREE.MathUtils.lerp(k0.sunIntensity, k1.sunIntensity, frac);

      // Interpolate ambient
      hemiLight.color.lerpColors(k0.hemiSky, k1.hemiSky, frac);
      hemiLight.groundColor.lerpColors(k0.hemiGround, k1.hemiGround, frac);
      hemiLight.intensity = THREE.MathUtils.lerp(k0.hemiIntensity, k1.hemiIntensity, frac);
      const environmentIntensity = THREE.MathUtils.lerp(k0.environmentIntensity, k1.environmentIntensity, frac);
      if (Math.abs(environmentIntensity - lastEnvironmentIntensity) > 0.0001) {
        environmentMaterials.forEach((material) => {
          material.envMapIntensity = environmentIntensity;
        });
        lastEnvironmentIntensity = environmentIntensity;
      }

      // Interpolate background
      scene.background.lerpColors(k0.bg, k1.bg, frac);
      section.style.backgroundColor = '#' + scene.background.getHexString();

      // Interpolate interior lights
      const intInt = THREE.MathUtils.lerp(k0.interiorLight, k1.interiorLight, frac);
      salonLight.intensity = intInt;
      diningLight.intensity = intInt * 0.9;
      upperMasterLight.intensity = intInt * 1.05;
      terraceLight.intensity = intInt * 0.7;

      // Interpolate glass emissive (illuminated glowing windows)
      glassMat.emissive.lerpColors(k0.glassEmissive, k1.glassEmissive, frac);
      glassMat.emissiveIntensity = THREE.MathUtils.lerp(k0.glassIntensity, k1.glassIntensity, frac);
      villaGlassMat.emissive.lerpColors(k0.glassEmissive, k1.glassEmissive, frac);
      villaGlassMat.emissiveIntensity = THREE.MathUtils.lerp(k0.glassIntensity, k1.glassIntensity, frac) * 0.62;
      interiorMat.emissive.lerpColors(k0.glassEmissive, k1.glassEmissive, frac);
      interiorMat.emissiveIntensity = 0.08 + THREE.MathUtils.lerp(k0.interiorLight, k1.interiorLight, frac) * 0.16;
      phaseGlassMaterials.forEach((material) => {
        material.emissive.lerpColors(k0.glassEmissive, k1.glassEmissive, frac);
        material.emissiveIntensity = THREE.MathUtils.lerp(k0.glassIntensity, k1.glassIntensity, frac) * 0.62;
      });
      phaseInteriorMaterials.forEach((material) => {
        material.emissive.lerpColors(k0.glassEmissive, k1.glassEmissive, frac);
        material.emissiveIntensity = 0.08 + intInt * 0.16;
      });

      // Interpolate pool lights
      const pInt = THREE.MathUtils.lerp(k0.poolLight, k1.poolLight, frac);
      poolLight1.intensity = pInt;
      poolLight2.intensity = pInt;

      // Interpolate uplights
      const upInt = THREE.MathUtils.lerp(k0.uplight, k1.uplight, frac);
      uplightFront.intensity = upInt;
      uplightColonnade.intensity = upInt;
      uplightWest.intensity = upInt;
      uplightRear.intensity = upInt;

      // Fire pit flame flicker
      const fireInt = THREE.MathUtils.lerp(k0.fireLight, k1.fireLight, frac);
      const flicker = fireInt > 0 ? (Math.sin(Date.now() * 0.008) * 0.15 + 1) : 0;
      firePitLight.intensity = fireInt * flicker;
      fireEmberMat.emissiveIntensity = fireInt * flicker;
      phaseFireMaterials.forEach((material) => {
        material.emissiveIntensity = fireInt * flicker;
      });

      // HUD & UI updates
      let activeIndex = 0;
      if (clamped >= 0.88) activeIndex = 4;
      else if (clamped >= 0.65) activeIndex = 3;
      else if (clamped >= 0.38) activeIndex = 2;
      else if (clamped >= 0.15) activeIndex = 1;
      else activeIndex = 0;

      const activeData = diurnalPhases[activeIndex];
      if (clockEl) clockEl.textContent = formatClock(clamped);
      if (phaseEl) phaseEl.textContent = activeData.phase;
      if (noteEl) noteEl.textContent = activeData.note;
      if (barEl) barEl.style.width = `${(clamped * 100).toFixed(1)}%`;

      milestones.forEach((m, i) => {
        const isActive = i === activeIndex;
        m.classList.toggle('is-active', isActive);
        m.setAttribute('aria-selected', String(isActive));
      });

      const isNight = clamped >= 0.65;
      section.classList.toggle('is-night', isNight);
      return !isReducedMotion && fireInt > 0.01;
    }

    function updateCamera(p) {
      const radius = getBaseRadius();
      // Orbit angle: 0 at start, exactly 2π at 100%
      const totalAngle = (p * Math.PI * 2) + dragAngleOffset;
      residenceGroup.rotation.y = -totalAngle;

      // Dynamic height: slightly lower at 50% (rear view) to catch dramatic water pool reflection
      const rearDip = Math.sin(p * Math.PI) * 0.35;
      const camY = 6.0 - rearDip;

      camera.position.set(0, camY, radius);
      camera.lookAt(targetLookAt);
    }

    function render() {
      if (!isVisible || !assetsReady) {
        rafId = null;
        return;
      }

      if (isReducedMotion || Math.abs(targetProgress - currentProgress) < 0.0005) {
        currentProgress = targetProgress;
      } else {
        currentProgress += (targetProgress - currentProgress) * 0.12;
      }

      // Spring drag offset back to 0 when not dragging
      let dragIsSettling = false;
      if (!isDragging && Math.abs(dragAngleOffset) > 0.001) {
        dragAngleOffset += (0 - dragAngleOffset) * 0.08;
        if (Math.abs(dragAngleOffset) < 0.001) dragAngleOffset = 0;
        else dragIsSettling = true;
      }

      const fireIsAnimating = updateDiurnalState(currentProgress);
      updateCamera(currentProgress);
      renderer.render(scene, camera);

      const progressIsSettling = Math.abs(targetProgress - currentProgress) >= 0.0005;
      if (progressIsSettling || isDragging || dragIsSettling || fireIsAnimating) {
        rafId = requestAnimationFrame(render);
      } else {
        rafId = null;
      }
    }

    function loadEnvironment() {
      return new Promise((resolve) => {
        if (typeof THREE.RGBELoader !== 'function' || typeof THREE.PMREMGenerator !== 'function') {
          console.warn('HDR loader or PMREM support is unavailable; using the procedural sky lighting.');
          resolve(false);
          return;
        }

        let pmremGenerator;
        try {
          pmremGenerator = new THREE.PMREMGenerator(renderer);
          pmremGenerator.compileEquirectangularShader();
        } catch (error) {
          if (pmremGenerator) pmremGenerator.dispose();
          console.warn('Optional HDR environment could not be prepared; using the procedural sky lighting.', error);
          resolve(false);
          return;
        }

        try {
          new THREE.RGBELoader()
            .setDataType(THREE.UnsignedByteType)
            .load('assets/environment/kloppenheim_06_puresky_2k.hdr', (hdrTexture) => {
              try {
                hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
                environmentTarget = pmremGenerator.fromEquirectangular(hdrTexture);
                scene.environment = environmentTarget.texture;
                resolve(true);
              } catch (error) {
                console.warn('Optional HDR environment processing failed; using the procedural sky lighting.', error);
                resolve(false);
              } finally {
                hdrTexture.dispose();
                pmremGenerator.dispose();
              }
            }, undefined, () => {
              pmremGenerator.dispose();
              console.warn('Optional HDR environment failed to load; using the procedural sky lighting.');
              resolve(false);
            });
        } catch (error) {
          pmremGenerator.dispose();
          console.warn('Optional HDR environment could not be requested; using the procedural sky lighting.', error);
          resolve(false);
        }
      });
    }

    // Inspection & Testing Hook
    window.__setDiurnalProgress = function(p) {
      targetProgress = p;
      currentProgress = p;
      updateDiurnalState(p);
      updateCamera(p);
      renderer.render(scene, camera);
      return canvas.toDataURL('image/png');
    };

    if (window.location.search.includes('exportPhases')) {
      setTimeout(() => {
        const phases = [
          { name: "dawn_0", p: 0.0 },
          { name: "side_25", p: 0.25 },
          { name: "rear_50", p: 0.50 },
          { name: "golden_75", p: 0.75 },
          { name: "night_100", p: 1.0 }
        ];
        phases.forEach(item => {
          const dataUrl = window.__setDiurnalProgress(item.p);
          console.log("===PHASE_IMG:" + item.name + "===" + dataUrl);
        });
      }, 500);
    }

    function onScroll() {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable > 0) {
        targetProgress = Math.max(0, Math.min(1, -rect.top / scrollable));
      }
      if (assetsReady && isVisible && !rafId) {
        rafId = requestAnimationFrame(render);
      }
    }

    // 7. Milestone Click Support (smooth scroll to phase)
    milestones.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pct = parseFloat(btn.dataset.milestone) / 100;
        const rect = section.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        const targetScrollY = window.pageYOffset + rect.top + pct * scrollable;
        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        });
      });
    });

    // 8. Interactive Drag on Canvas (Tactile 3D manipulation)
    canvas.addEventListener('pointerdown', (e) => {
      isDragging = true;
      pointerStartX = e.clientX;
      canvas.setPointerCapture(e.pointerId);
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - pointerStartX;
      pointerStartX = e.clientX;
      dragAngleOffset += (deltaX / window.innerWidth) * 2.8;
      if (assetsReady && isVisible && !rafId) {
        rafId = requestAnimationFrame(render);
      }
    });

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }

    canvas.addEventListener('pointerup', endDrag);
    canvas.addEventListener('pointercancel', endDrag);

    // 9. Resize Handling
    function onResize() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const pixelRatio = getRenderPixelRatio();
      if (renderer.getPixelRatio() !== pixelRatio) renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height, false);
      if (isVisible && !rafId) {
        rafId = requestAnimationFrame(render);
      }
    }

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // 10. IntersectionObserver (Pause RAF when off-screen for peak 60fps performance)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          onScroll();
          onResize();
          if (assetsReady && !rafId) {
            rafId = requestAnimationFrame(render);
          }
        }
      });
    }, { threshold: 0.01 });

    observer.observe(section);

    const assetObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        assetObserver.disconnect();
        loadViewerAssets();
      }
    }, { rootMargin: '100% 0px', threshold: 0.01 });
    assetObserver.observe(section);

    // Initial positioning
    onScroll();
    onResize();
    updateDiurnalState(0);
    updateCamera(0);

    window.addEventListener('pagehide', () => {
      observer.disconnect();
      if (environmentTarget) environmentTarget.dispose();
      if (glbModelGroup.children.length) disposeImportedModel(glbModelGroup);
      renderer.dispose();
    }, { once: true });
  }

  /* ==========================================================================
     14. INITIALIZATION LIFECYCLE
     ========================================================================== */

  function init() {
    initNavigation();
    initPropertyPage();
    initCataloguePage();
    initHomePage();
    initAboutPage();
    initHeroWalkthrough();
    initDiurnalWalkthrough();
    initTypographyAssembly();
    initCard3DHover();
    verifyPropertyCardBackgrounds();
    initImageParallax();
    initContactPage();
    initReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
