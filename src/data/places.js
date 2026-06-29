function placeholderFor(place, phase = "before") {
  const phaseLabel = phase === "after" ? "After / legacy placement image" : "Before / context placement image";
  return {
    url: "",
    alt: `${phaseLabel} for ${place.title}, ${place.state}.`,
    title: `${place.title}, ${place.state} ${phase === "after" ? "aftermath" : "context"} placeholder`,
    caption: `Temporary placement image for ${place.title}, ${place.state}. Final public-domain or openly licensed archive image still needed.`,
    source: "Temporary visual placeholder",
    license: "Not a final archival image",
    originalUrl: "#",
    photographer: "Afterimage Atlas prototype",
    placeholder: true,
    placementLabel: phaseLabel,
    placementTitle: `${place.title}, ${place.state}`,
    placementTheme: place.theme,
    placementYear: place.year,
    tone: place.color
  };
}

export const places = [
  {
    slug: "joplin-missouri",
    title: "Joplin",
    state: "Missouri",
    disaster: "2011 EF5 Tornado",
    year: "2011",
    theme: "Wind, loss, reconstruction, Midwestern resilience",
    coordinates: { lat: 37.0842, lng: -94.5133 },
    status: "featured",
    color: "ember",
    shortDescription:
      "A working city in southwest Missouri where a rain-wrapped tornado crossed hospitals, schools, homes, and ordinary streets.",
    beforeText:
      "Before the tornado, Joplin was a regional center of schools, hospitals, storefronts, and neighborhoods. Its landscape held the routines of a midwestern city more than the image of a disaster site.",
    ruptureText:
      "On May 22, 2011, an EF5 tornado moved through southern Joplin. The rupture was measured in blocks, institutions, missing landmarks, and the speed with which a familiar grid became debris.",
    afterText:
      "Recovery in Joplin became civic labor: rebuilt schools, a new hospital, memorial spaces, and the quieter work of living beside what the city remembers.",
    beforeImage: {
      url: "",
      alt: "A street scene in Joplin, Missouri before the 2011 tornado.",
      title: "Joplin before the tornado",
      caption: "Placeholder: a verified public-domain before image of Joplin is still needed.",
      source: "Temporary visual placeholder",
      license: "Not a final archival image",
      originalUrl: "#",
      photographer: "Afterimage Atlas prototype",
      placeholder: true,
      placementLabel: "Before / community context",
      placementTitle: "Joplin, Missouri",
      placementTheme: "Midwestern streets before rupture",
      placementYear: "2011",
      tone: "ember"
    },
    afterImage: {
      url: "",
      alt: "Destroyed buildings and vehicles in Joplin after the 2011 tornado.",
      title: "Joplin tornado aftermath",
      caption: "Placeholder: a verified public-domain aftermath image of the 2011 Joplin tornado is still needed.",
      source: "Temporary visual placeholder",
      license: "Not a final archival image",
      originalUrl: "#",
      photographer: "Afterimage Atlas prototype",
      placeholder: true,
      placementLabel: "After / tornado aftermath",
      placementTitle: "Joplin, Missouri",
      placementTheme: "EF5 tornado, rebuilding, resilience",
      placementYear: "2011",
      tone: "ember"
    },
    timeline: [
      { label: "Before", text: "A regional city of hospitals, schools, churches, and neighborhood blocks." },
      { label: "Event", text: "May 22, 2011: an EF5 tornado crosses the southern part of the city." },
      { label: "Aftermath", text: "Lives are lost, institutions are damaged, and thousands of homes are affected." },
      { label: "Long View", text: "Rebuilding turns into a public memory of preparation, grief, and civic endurance." }
    ],
    reflectionQuestion: "What remains of a place when the street grid survives but the landmarks do not?"
  },
  {
    slug: "church-rock-new-mexico",
    title: "Church Rock",
    state: "New Mexico",
    disaster: "Uranium Mill Tailings Spill",
    year: "1979",
    theme: "Radioactive contamination, Dine land, environmental justice",
    coordinates: { lat: 35.6508, lng: -108.5064 },
    status: "featured",
    color: "toxic",
    shortDescription:
      "A rural Navajo Nation landscape marked by uranium extraction, a failed tailings dam, and decades of unresolved contamination.",
    beforeText:
      "Before the spill, the Puerco River corridor carried everyday uses: livestock, travel, gathering, and the fragile reliance of rural households on local water and land.",
    ruptureText:
      "On July 16, 1979, a tailings dam failed at the United Nuclear Corporation mill. Acidic radioactive waste moved into Pipeline Arroyo and the Puerco River system.",
    afterText:
      "The legacy remains in cleanup records, warning signs, groundwater maps, and community memory. The disaster is also a story about who is heard when contamination is remote from power.",
    beforeImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/United_Nuclear_Corporation_Church_Rock_Uranium_Mill.jpeg/1280px-United_Nuclear_Corporation_Church_Rock_Uranium_Mill.jpeg",
      alt: "United Nuclear Corporation Church Rock uranium mill site after cleanup.",
      title: "United Nuclear Corporation Church Rock Uranium Mill",
      caption: "The mill site, seen after cleanup, holds the landscape in the language of remediation.",
      source: "Wikimedia Commons / EPA Superfund context",
      license: "Public domain or openly licensed archive media",
      originalUrl: "https://commons.wikimedia.org/wiki/File:United_Nuclear_Corporation_Church_Rock_Uranium_Mill.jpeg",
      photographer: "Archive contributor",
      placeholder: false
    },
    afterImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Church_Rock_uranium_mill_tailings_dam_breach.jpeg/1280px-Church_Rock_uranium_mill_tailings_dam_breach.jpeg",
      alt: "The breach in the Church Rock uranium mill tailings dam.",
      title: "Church Rock uranium mill tailings dam breach",
      caption: "The breach that opened in the tailings dam on July 16, 1979.",
      source: "Wikimedia Commons / NRC report context",
      license: "Public domain or openly licensed archive media",
      originalUrl: "https://commons.wikimedia.org/wiki/File:Church_Rock_uranium_mill_tailings_dam_breach.jpeg",
      photographer: "Archive contributor",
      placeholder: false
    },
    timeline: [
      { label: "Before", text: "Uranium extraction reshapes land near Church Rock and the Puerco River." },
      { label: "Event", text: "July 16, 1979: a tailings dam breach releases radioactive and acidic waste." },
      { label: "Aftermath", text: "Warnings, water restrictions, and cleanup unfold unevenly across Navajo communities." },
      { label: "Long View", text: "The site remains tied to Superfund records, uranium legacy, and environmental justice." }
    ],
    reflectionQuestion: "Who is asked to live with contamination after the rest of the country looks away?"
  },
  {
    slug: "gatlinburg-tennessee",
    title: "Gatlinburg",
    state: "Tennessee",
    disaster: "Chimney Tops 2 Wildfire",
    year: "2016",
    theme: "Wildfire, tourism, mountain community",
    coordinates: { lat: 35.7143, lng: -83.5102 },
    status: "featured",
    color: "ash",
    shortDescription:
      "A mountain tourist town at the edge of Great Smoky Mountains National Park, changed by wind-driven fire and evacuation.",
    beforeText:
      "Before the fire, Gatlinburg was known through cabins, overlook roads, family trips, and a tourist economy built against the presence of the mountains.",
    ruptureText:
      "In late November 2016, fire that began near Chimney Tops moved through drought-stressed forest under violent winds. The disaster crossed from park terrain into homes and resort roads.",
    afterText:
      "The aftermath is visible in regrowth, rebuilt cabins, lawsuits, memorials, and a local economy asked to welcome visitors while mourning loss.",
    beforeImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Chimney_Tops%2C_TN%2C_in_2024.jpg/1280px-Chimney_Tops%2C_TN%2C_in_2024.jpg",
      alt: "Chimney Tops in Tennessee with visible forest regrowth.",
      title: "Chimney Tops, Tennessee, in 2024",
      caption: "Years later, regrowth and scars share the same ridgeline.",
      source: "Wikimedia Commons",
      license: "Openly licensed archive media",
      originalUrl: "https://commons.wikimedia.org/wiki/File:Chimney_Tops,_TN,_in_2024.jpg",
      photographer: "Wikimedia Commons contributor",
      placeholder: false
    },
    afterImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/East_of_Chimney_Tops2_Fire_2016_12_03-14.38.22.002-CST.jpg/1280px-East_of_Chimney_Tops2_Fire_2016_12_03-14.38.22.002-CST.jpg",
      alt: "Smoke rising from the Chimney Tops 2 Fire in 2016.",
      title: "Smoke from the Chimney Tops 2 Fire",
      caption: "Smoke from the Chimney Tops 2 Fire, December 2016.",
      source: "Wikimedia Commons / National Park Service context",
      license: "Public domain or openly licensed archive media",
      originalUrl: "https://commons.wikimedia.org/wiki/File:East_of_Chimney_Tops2_Fire_2016_12_03-14.38.22.002-CST.jpg",
      photographer: "National Park Service archive",
      placeholder: false
    },
    timeline: [
      { label: "Before", text: "A gateway town shaped by tourism, cabins, park roads, and mountain identity." },
      { label: "Event", text: "November 2016: the Chimney Tops 2 Fire spreads under drought and extreme wind." },
      { label: "Aftermath", text: "Homes and businesses are lost; residents and visitors evacuate through smoke." },
      { label: "Long View", text: "Tourism returns, but the fire remains in lawsuits, local memory, and forest scars." }
    ],
    reflectionQuestion: "What happens when a tourist town becomes a disaster landscape?"
  },
  {
    slug: "asheville-north-carolina",
    title: "Asheville",
    state: "North Carolina",
    disaster: "Recurrent Flooding and Landslides",
    year: "Recurring",
    theme: "Flood, Appalachian cultural context",
    coordinates: { lat: 35.5951, lng: -82.5515 },
    status: "archive",
    color: "flood",
    shortDescription: "A mountain city where rivers, steep slopes, and cultural memory meet recurring flood risk.",
    beforeImage: placeholderFor({
      title: "Asheville",
      state: "North Carolina",
      year: "Recurring",
      theme: "Flood, Appalachian cultural context",
      color: "flood"
    }),
    afterImage: placeholderFor({
      title: "Asheville",
      state: "North Carolina",
      year: "Recurring",
      theme: "Recurrent flooding and landslides",
      color: "flood"
    }, "after"),
    reflectionQuestion: "When water returns again and again, how does a city remember the first line it crossed?"
  },
  {
    slug: "binghamton-new-york",
    title: "Binghamton",
    state: "New York",
    disaster: "Recurrent Flooding",
    year: "Recurring",
    theme: "Chronic flood vulnerability, post-industrial community",
    coordinates: { lat: 42.0987, lng: -75.918 },
    status: "archive",
    color: "flood",
    shortDescription: "A post-industrial river city where chronic flooding turns hazard into an inherited civic condition.",
    beforeImage: placeholderFor({
      title: "Binghamton",
      state: "New York",
      year: "Recurring",
      theme: "Post-industrial river city",
      color: "flood"
    }),
    afterImage: placeholderFor({
      title: "Binghamton",
      state: "New York",
      year: "Recurring",
      theme: "Chronic flood vulnerability",
      color: "flood"
    }, "after"),
    reflectionQuestion: "How does a place live with a disaster that keeps returning under different skies?"
  },
  {
    slug: "hudson-valley-new-york",
    title: "Hudson Valley",
    state: "New York",
    disaster: "Industrial Contamination Legacy",
    year: "Legacy",
    theme: "Toxic contamination, environmental justice",
    coordinates: { lat: 41.7658, lng: -73.7413 },
    status: "archive",
    color: "toxic",
    shortDescription: "A celebrated river landscape also carrying the residue of industry, disposal, and long public argument.",
    beforeImage: placeholderFor({
      title: "Hudson Valley",
      state: "New York",
      year: "Legacy",
      theme: "River landscape and industrial history",
      color: "toxic"
    }),
    afterImage: placeholderFor({
      title: "Hudson Valley",
      state: "New York",
      year: "Legacy",
      theme: "Toxic contamination and environmental justice",
      color: "toxic"
    }, "after"),
    reflectionQuestion: "What does a beautiful river ask us to remember about what was put into it?"
  },
  {
    slug: "los-alamos-trinity-new-mexico",
    title: "Los Alamos",
    state: "New Mexico",
    disaster: "Trinity Nuclear Test Legacy",
    year: "1945",
    theme: "Nuclear/radiological memory, intergenerational trauma, declassified public sites",
    coordinates: { lat: 33.6773, lng: -106.4754 },
    status: "archive",
    color: "nuclear",
    shortDescription: "A public history of scientific triumph shadowed by radiation, secrecy, downwind memory, and declassified landscapes.",
    beforeImage: placeholderFor({
      title: "Los Alamos",
      state: "New Mexico",
      year: "1945",
      theme: "Publicly accessible and declassified nuclear history",
      color: "nuclear"
    }),
    afterImage: placeholderFor({
      title: "Los Alamos",
      state: "New Mexico",
      year: "1945",
      theme: "Trinity nuclear test legacy",
      color: "nuclear"
    }, "after"),
    reflectionQuestion: "What does it mean for a place to be both historic and wounded?"
  },
  {
    slug: "hermits-peak-calf-canyon-new-mexico",
    title: "Hermits Peak-Calf Canyon",
    state: "New Mexico",
    disaster: "Government-Caused Wildfire",
    year: "2022",
    theme: "Rural loss, largest wildfire in New Mexico history",
    coordinates: { lat: 35.7839, lng: -105.31 },
    status: "archive",
    color: "ember",
    shortDescription: "A rural northern New Mexico landscape where prescribed fire became an historic wildfire.",
    beforeImage: placeholderFor({
      title: "Hermits Peak-Calf Canyon",
      state: "New Mexico",
      year: "2022",
      theme: "Rural northern New Mexico landscape",
      color: "ember"
    }),
    afterImage: placeholderFor({
      title: "Hermits Peak-Calf Canyon",
      state: "New Mexico",
      year: "2022",
      theme: "Government-caused wildfire, largest in New Mexico history",
      color: "ember"
    }, "after"),
    reflectionQuestion: "What does accountability look like when the disaster begins as a public action?"
  },
  {
    slug: "ruidoso-new-mexico",
    title: "Ruidoso",
    state: "New Mexico",
    disaster: "2022 Floods and Compounding Disasters",
    year: "2022",
    theme: "Post-wildfire flooding and mudslides, burn scars, mountain resort community",
    coordinates: { lat: 33.3317, lng: -105.673 },
    status: "archive",
    color: "flood",
    shortDescription: "A Lincoln County mountain resort community where wildfire burn scars and heavy rain represent compounding climate disasters.",
    beforeImage: placeholderFor({
      title: "Ruidoso",
      state: "New Mexico",
      year: "2022",
      theme: "Mountain resort community in Lincoln County",
      color: "flood"
    }),
    afterImage: placeholderFor({
      title: "Ruidoso",
      state: "New Mexico",
      year: "2022",
      theme: "Post-wildfire flooding, mudslides, and debris flow risk",
      color: "flood"
    }, "after"),
    reflectionQuestion: "When fire changes the mountain, how does water become the next disaster?"
  }
];

const placeholderImage = {
  url: "",
  alt: "Placeholder image area awaiting public archive research.",
  title: "Archive image pending",
  caption: "Placeholder: final public-domain or openly licensed imagery still needed.",
  source: "Placeholder",
  license: "Pending final archival source",
  originalUrl: "#",
  photographer: "Pending",
  placeholder: true
};

export function hydratePlace(place) {
  const beforeImage = place.beforeImage || placeholderFor(place);
  const afterImage = place.afterImage || placeholderFor(place, "after");
  const beforeText = place.beforeText || place.shortDescription;
  const ruptureText =
    place.ruptureText || "This page is staged for full archival writing and image research in the next production pass.";
  const afterText =
    place.afterText || "The long aftermath will be developed with verified sources, community context, and image credits.";
  const timeline =
    place.timeline ||
    [
      { label: "Before", text: "Community context and landscape history pending archival expansion." },
      { label: "Event", text: `${place.disaster} / ${place.year}.` },
      { label: "Aftermath", text: "Immediate impacts and public records pending source review." },
      { label: "Long View", text: "Recovery, unresolved legacy, and memory to be developed." }
    ];

  return { ...place, beforeImage, afterImage, beforeText, ruptureText, afterText, timeline };
}
