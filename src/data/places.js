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

const asset = (folder, file) => `${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

function projectImage({ folder, file, title, caption, alt, source, license, photographer, originalUrl = "#" }) {
  return {
    url: asset(folder, file),
    alt,
    title,
    caption,
    source: source || `Uploaded project folder: ${folder.trim()}`,
    license: license || "Source/license pending review",
    originalUrl,
    photographer: photographer || "See Source of download.docx",
    placeholder: false
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
    beforeImage: projectImage({
      folder: "Joplin, Missouri ",
      file: "site.jpeg",
      title: "Joplin site assessment",
      caption: "A field assessment scene after the tornado, where documentation becomes part of recovery.",
      alt: "Field workers assessing tornado damage in Joplin, Missouri."
    }),
    afterImage: projectImage({
      folder: "Joplin, Missouri ",
      file: "Joplin_tornado_damage_(5884769735).jpg",
      title: "Joplin tornado damage field",
      caption: "Torn trees and wreckage mark the tornado path across a residential landscape.",
      alt: "Widespread tornado damage with stripped trees and debris in Joplin, Missouri."
    }),
    galleryImages: [
      projectImage({
        folder: "Joplin, Missouri ",
        file: "22_May_2011_Joplin_tornado_damage.jpg",
        title: "May 22, 2011 damage",
        caption: "Crushed structures and tangled metal show the density of the debris field.",
        alt: "Collapsed structures and debris after the Joplin tornado."
      }),
      projectImage({
        folder: "Joplin, Missouri ",
        file: "size0-full.jpg",
        title: "Recovery machinery",
        caption: "A worker watches heavy equipment move through the wreckage.",
        alt: "A worker in a hard hat looking toward debris removal equipment."
      }),
      projectImage({
        folder: "Joplin, Missouri ",
        file: "tornado_area.jpeg",
        title: "Mapped impact area",
        caption: "The tornado path translated into a technical map of damage and intensity.",
        alt: "Map of the Joplin tornado path and damaged area."
      })
    ],
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
    beforeImage: projectImage({
      folder: "Church Rock, New Mexico ",
      file: "old-church-rock-mine-waste-area-limited-vegetation.jpg",
      title: "Mine waste area, limited vegetation",
      caption: "A dry waste landscape where contamination is visible through absence as much as presence.",
      alt: "Sparse desert mine waste area near Church Rock, New Mexico."
    }),
    afterImage: projectImage({
      folder: "Church Rock, New Mexico ",
      file: "Church_Rock_uranium_mill_EID_sign.jpeg",
      title: "Uranium mill warning sign",
      caption: "A warning sign turns the landscape into an instruction: do not enter, do not drink, do not forget.",
      alt: "Warning sign near the Church Rock uranium mill site."
    }),
    galleryImages: [
      projectImage({
        folder: "Church Rock, New Mexico ",
        file: "Church_Rock_tailings_dam_breach_diagram.jpg",
        title: "Tailings dam breach diagram",
        caption: "The breach translated into cross-section, engineering language, and evidence.",
        alt: "Technical cross-section diagram of the Church Rock tailings dam breach."
      }),
      projectImage({
        folder: "Church Rock, New Mexico ",
        file: "old-church-rock-community-meeting-2023-07-18.jpg",
        title: "Community meeting",
        caption: "A public meeting holds the long aftermath in civic space.",
        alt: "Community meeting about the Church Rock site."
      }),
      projectImage({
        folder: "Church Rock, New Mexico ",
        file: "old-church-rock-former-ion-exchange-bldg.jpg",
        title: "Former ion exchange building",
        caption: "Industrial remains sit low against the mesa, part building and part warning.",
        alt: "Former ion exchange building near Church Rock."
      }),
      projectImage({
        folder: "Church Rock, New Mexico ",
        file: "old-church-rock-mine-unnamed-arroyo-west-of-site.jpg",
        title: "Unnamed arroyo west of site",
        caption: "An arroyo carries the visual grammar of runoff, exposure, and distance.",
        alt: "Dry arroyo west of the Church Rock mine site."
      })
    ],
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
    beforeImage: projectImage({
      folder: "Gatlinburg, Tennessee ",
      file: "Smoky Mountain Fire.jpeg",
      title: "Smoky Mountain fire glow",
      caption: "A red horizon above the mountains, where tourism landscape becomes evacuation landscape.",
      alt: "Bright red wildfire glow over the Smoky Mountains near Gatlinburg."
    }),
    afterImage: projectImage({
      folder: "Gatlinburg, Tennessee ",
      file: "Smoky Mountain Fire.jpeg",
      title: "Smoky Mountain fire glow",
      caption: "A red horizon above the mountains, where tourism landscape becomes evacuation landscape.",
      alt: "Bright red wildfire glow over the Smoky Mountains near Gatlinburg."
    }),
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
    beforeImage: projectImage({
      folder: "Asheville, North Carolina ",
      file: "Flood_North_Carolina.jpg",
      title: "Flooded North Carolina street",
      caption: "A flooded commercial road becomes a temporary river, carrying the memory of earlier storms.",
      alt: "Floodwater covering a North Carolina street with signs and utility poles."
    }),
    afterImage: projectImage({
      folder: "Asheville, North Carolina ",
      file: "Hurricane Helene made landfall.jpeg",
      title: "Helene landslide scar",
      caption: "A slope cut open after Helene, showing how water and gravity rewrite the mountain.",
      alt: "Aerial view of a landslide scar through forested hills in North Carolina."
    }),
    galleryImages: [
      projectImage({
        folder: "Asheville, North Carolina ",
        file: "FEMA Assesses Damage from Hurricane Helene in Buncombe County, NC.webp",
        title: "FEMA damage assessment",
        caption: "A damaged site in Buncombe County seen through the fence line of official assessment.",
        alt: "Damaged property behind a chain-link fence in Buncombe County, North Carolina."
      })
    ],
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
    beforeImage: projectImage({
      folder: "Binghamton, New York ",
      file: "BinghamtonTSLee2011.jpg",
      title: "Binghamton floodwater after Tropical Storm Lee",
      caption: "Floodwater fills the built edge of the city, blurring river, street, and industrial ground.",
      alt: "Floodwater surrounding buildings and infrastructure in Binghamton, New York."
    }),
    afterImage: projectImage({
      folder: "Binghamton, New York ",
      file: "BinghamtonTSLee2011.jpg",
      title: "Binghamton floodwater after Tropical Storm Lee",
      caption: "Floodwater fills the built edge of the city, blurring river, street, and industrial ground.",
      alt: "Floodwater surrounding buildings and infrastructure in Binghamton, New York."
    }),
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
    beforeImage: projectImage({
      folder: "Hudson Valley, New York ",
      file: "25_websitephotos.jpg",
      title: "Hudson River edge",
      caption: "A quiet riverbank holds the contrast between scenic landscape and industrial memory.",
      alt: "A leaf-covered path leading toward water in the Hudson Valley."
    }),
    afterImage: projectImage({
      folder: "Hudson Valley, New York ",
      file: "01_websitephotos.jpg",
      title: "Hudson River sediment work",
      caption: "A dredging vessel turns contamination into a visible operation on the river surface.",
      alt: "Industrial dredging equipment working on the Hudson River."
    }),
    galleryImages: [
      projectImage({
        folder: "Hudson Valley, New York ",
        file: "02_websitephotos.jpg",
        title: "Contamination map and removal section",
        caption: "The river becomes a technical drawing of colored zones, cuts, and buried history.",
        alt: "Technical diagrams and map showing contamination zones and dredging sections."
      }),
      projectImage({
        folder: "Hudson Valley, New York ",
        file: "03_websitephotos.jpg",
        title: "River sampling platform",
        caption: "Small crews and equipment make the invisible chemistry of the river visible.",
        alt: "Workers on a river sampling platform in the Hudson Valley."
      }),
      projectImage({
        folder: "Hudson Valley, New York ",
        file: "24_websitephotos.jpg",
        title: "Field soil sampling",
        caption: "Environmental evidence gathered by hand, one measured point at a time.",
        alt: "Workers collecting soil samples in a grassy field."
      }),
      projectImage({
        folder: "Hudson Valley, New York ",
        file: "huson_valley_soil_sample.jpeg",
        title: "Winter soil sampling",
        caption: "Sampling continues across seasons, turning fields into a slow archive.",
        alt: "Workers taking soil samples in a winter field."
      })
    ],
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
    beforeImage: projectImage({
      folder: "Los Alamos, New Mexico ",
      file: "Trinity_device_readied.jpg",
      title: "Trinity device readied",
      caption: "The test device is prepared beneath a tower, a public archive image of secrecy becoming infrastructure.",
      alt: "Black-and-white photograph of the Trinity test device being readied at a tower."
    }),
    afterImage: projectImage({
      folder: "Los Alamos, New Mexico ",
      file: "Trinity_Test_Fireball_16ms.jpg",
      title: "Trinity fireball, 16 milliseconds",
      caption: "A fraction of a second becomes an image that still shapes land, memory, and inheritance.",
      alt: "The Trinity nuclear test fireball shortly after detonation."
    }),
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
    beforeImage: projectImage({
      folder: "Hermit Peak–Calf Canyon, New Mexico ",
      file: "Calf_Canyon_Hermits_Peak_Fire_Apr_29_2022.jpg",
      title: "Hermits Peak-Calf Canyon fire front",
      caption: "Smoke and flame move across the rural edge, where a prescribed action became a historic fire.",
      alt: "Large plume of smoke and flames from the Hermits Peak-Calf Canyon Fire."
    }),
    afterImage: projectImage({
      folder: "Hermit Peak–Calf Canyon, New Mexico ",
      file: "Calf_Canyon_Hermits_Peak_Fire_Apr_29_2022.jpg",
      title: "Hermits Peak-Calf Canyon fire front",
      caption: "Smoke and flame move across the rural edge, where a prescribed action became a historic fire.",
      alt: "Large plume of smoke and flames from the Hermits Peak-Calf Canyon Fire."
    }),
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
    beforeImage: projectImage({
      folder: "Ruidoso, New Mexico ",
      file: "4_Ruidso_Kean.jpg",
      title: "Ruidoso debris field",
      caption: "Stone, mud, and burned trees gather where the mountain released water after fire.",
      alt: "Rocky debris field and burned trees in the Ruidoso area."
    }),
    afterImage: projectImage({
      folder: "Ruidoso, New Mexico ",
      file: "Ruidso_Image.jpeg",
      title: "Ruidoso post-fire channel",
      caption: "A damaged channel cuts through the burn scar, carrying the next disaster downstream.",
      alt: "Post-fire flood channel with rocks and burned trees near Ruidoso."
    }),
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
    place.ruptureText ||
    `${place.disaster} is held here through image, coordinates, and record: a rupture seen in waterlines, fire fronts, damaged ground, technical diagrams, and the traces left for residents to interpret.`;
  const afterText =
    place.afterText ||
    "The aftermath is not a single scene. It appears in field assessment, warning signs, sediment work, burned channels, public meetings, and the quiet persistence of places that must keep being lived in.";
  const timeline =
    place.timeline ||
    [
      { label: "Before", text: place.shortDescription },
      { label: "Event", text: `${place.disaster} / ${place.year}.` },
      { label: "Aftermath", text: "The uploaded image record shows the first visible forms of damage, response, or contamination." },
      { label: "Long View", text: "The place remains in recovery, public record, environmental memory, or unresolved legacy." }
    ];

  return { ...place, beforeImage, afterImage, beforeText, ruptureText, afterText, timeline };
}
