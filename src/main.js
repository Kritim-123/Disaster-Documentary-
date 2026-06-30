import { hydratePlace, places } from "./data/places.js?v=20260630a";

const app = document.querySelector("#app");
const featuredSlugs = ["joplin-missouri", "church-rock-new-mexico", "gatlinburg-tennessee"];

function route() {
  const hash = window.location.hash || "#/";
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [section, slug] = parts;

  if (!section) return renderHome();
  if (section === "atlas") return renderAtlas();
  if (section === "places" && slug) return renderPlace(slug);
  if (section === "places") return renderPlaces();
  if (section === "about") return renderAbout();
  if (section === "sources") return renderSources();
  if (section === "documentary") return renderDocumentary();
  return renderNotFound();
}

function setPage(html) {
  app.innerHTML = html;
  window.scrollTo({ top: 0, behavior: "instant" });
  requestAnimationFrame(() => {
    document.querySelectorAll(".reveal").forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
      el.classList.add("is-visible");
    });
    initBeforeAfter();
    initAtlasMap();
  });
}

function renderHome() {
  const heroPlace = hydratePlace(places.find((place) => place.slug === "gatlinburg-tennessee"));
  setPage(`
    <section class="hero home-hero">
      <div class="hero-media">
        <img src="${heroPlace.afterImage.url}" alt="${heroPlace.afterImage.alt}" />
      </div>
      <div class="hero-copy reveal">
        <p class="kicker mono">VISUAL ATLAS / UNITED STATES</p>
        <h1>AFTERIMAGE ATLAS</h1>
        <p class="lede">Nine American places where disaster changed the landscape — and memory stayed behind.</p>
        <a class="button" href="#/atlas">Enter the Atlas</a>
      </div>
    </section>
    <section class="intro-band reveal">
      <div>
        <p class="kicker mono">ARCHIVE NOTE</p>
        <h2>This project does not treat disaster as spectacle.</h2>
      </div>
      <p>It follows the marks left behind in landscapes, archives, homes, rivers, forests, and memory. The prototype begins with three fully staged entries and a complete data structure for all nine places.</p>
    </section>
    ${mapSection()}
    <section class="section">
      <div class="section-heading reveal">
        <p class="kicker mono">FEATURED ENTRIES</p>
        <h2>Three Sample Place Pages</h2>
      </div>
      <div class="card-grid">
        ${places.filter((place) => featuredSlugs.includes(place.slug)).map(placeCard).join("")}
      </div>
    </section>
    ${documentaryBanner()}
  `);
}

function renderAtlas() {
  setPage(`
    <section class="page-title reveal">
      <p class="kicker mono">ATLAS / MAP</p>
      <h1>Coordinates of Afterimage</h1>
      <p>Each pin is a place where disaster is not only an event, but an archive of decisions, weather, infrastructure, and memory.</p>
    </section>
    ${mapSection(true)}
  `);
}

function renderPlaces() {
  setPage(`
    <section class="page-title reveal">
      <p class="kicker mono">PLACES</p>
      <h1>Nine Field Entries</h1>
      <p>Three entries are fully designed. The remaining six are structured placeholders ready for verified public-domain imagery and expanded source notes.</p>
    </section>
    <section class="section">
      <div class="card-grid all-places">${places.map(placeCard).join("")}</div>
    </section>
  `);
}

function renderPlace(slug) {
  const rawPlace = places.find((item) => item.slug === slug);
  if (!rawPlace) return renderNotFound();
  const place = hydratePlace(rawPlace);

  setPage(`
    <section class="hero place-hero ${place.color}">
      <div class="hero-media ${place.afterImage.placeholder ? "placeholder-media" : ""}">
        ${imageMarkup(place.afterImage)}
      </div>
      <div class="hero-copy reveal">
        <p class="kicker mono">${place.state.toUpperCase()} / ${place.year}</p>
        <h1>${place.title}, ${place.state}</h1>
        <p class="lede">${place.disaster}</p>
        <p>${place.theme}</p>
      </div>
      <div class="metadata-panel reveal">
        ${metaBlock("Location", `${place.title}, ${place.state}`)}
        ${metaBlock("Event", place.disaster)}
        ${metaBlock("Year", place.year)}
        ${metaBlock("Theme", place.theme)}
        ${metaBlock("Coordinates", `${place.coordinates.lat.toFixed(4)}, ${place.coordinates.lng.toFixed(4)}`)}
      </div>
    </section>
    <article class="place-story">
      ${storySection("The Place Before", place.beforeText, place.beforeImage)}
      <section class="story-section reveal">
        <div>
          <p class="kicker mono">THE RUPTURE</p>
          <h2>The image breaks open.</h2>
          <p>${place.ruptureText}</p>
        </div>
        ${beforeAfter(place)}
      </section>
      ${storySection("The After", place.afterText, place.afterImage)}
      ${fieldEvidence(place)}
      <section class="story-section timeline-wrap reveal">
        <div>
          <p class="kicker mono">TIMELINE</p>
          <h2>Before, event, aftermath, long view.</h2>
        </div>
        <ol class="timeline">
          ${place.timeline.map((item) => `<li><span>${item.label}</span><p>${item.text}</p></li>`).join("")}
        </ol>
      </section>
      <section class="reflection reveal">
        <p class="kicker mono">REFLECTION</p>
        <h2>${place.reflectionQuestion}</h2>
      </section>
      <section class="section credits-section reveal">
        <div class="section-heading">
          <p class="kicker mono">IMAGE CREDITS</p>
          <h2>Archive Notes</h2>
        </div>
        <div class="credit-grid">
          ${creditCard(place.beforeImage)}
          ${creditCard(place.afterImage)}
        </div>
      </section>
    </article>
  `);
}

function renderAbout() {
  setPage(`
    <section class="page-title reveal">
      <p class="kicker mono">ABOUT THE PROJECT</p>
      <h1>A quiet archive of changed places.</h1>
      <p>Afterimage Atlas is an artistic documentary website about American landscapes altered by disaster, contamination, fire, flood, wind, radiation, and memory.</p>
    </section>
    <section class="intro-band reveal">
      <div>
        <p class="kicker mono">METHOD</p>
        <h2>Poetic restraint, verified sources, image-first storytelling.</h2>
      </div>
      <p>The site is designed like a small museum exhibition: cinematic images, map coordinates, archival captions, and reflective questions. It is a prototype for a future documentary project, not a warning dashboard or news feed.</p>
    </section>
  `);
}

function renderSources() {
  const allImages = places.flatMap((place) => {
    const hydrated = hydratePlace(place);
    return [
      { place: `${hydrated.title}, ${hydrated.state}`, image: hydrated.beforeImage },
      { place: `${hydrated.title}, ${hydrated.state}`, image: hydrated.afterImage },
      ...(hydrated.galleryImages || []).map((image) => ({ place: `${hydrated.title}, ${hydrated.state}`, image }))
    ];
  });

  setPage(`
    <section class="page-title reveal">
      <p class="kicker mono">SOURCES & IMAGE CREDITS</p>
      <h1>Archive Ledger</h1>
      <p>Image credits are treated as part of the exhibit. Placeholder records are clearly marked until final public-domain or openly licensed media is selected.</p>
    </section>
    <section class="section">
      <div class="source-list">
        ${allImages
          .map(
            ({ place, image }) => `
              <article class="source-row reveal">
                <p class="mono">${place}</p>
                <h2>${image.title}</h2>
                <p>${image.caption}</p>
                <p><strong>Source:</strong> ${image.source} · <strong>License:</strong> ${image.license} · <strong>Photographer/Agency:</strong> ${image.photographer}</p>
                <a href="${image.originalUrl}" target="_blank" rel="noreferrer">${image.placeholder ? "Placeholder record" : "Original URL"}</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `);
}

function renderDocumentary() {
  setPage(`
    <section class="hero film-hero">
      <div class="hero-media">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Church_Rock_uranium_mill_tailings_dam_breach.jpeg/1280px-Church_Rock_uranium_mill_tailings_dam_breach.jpeg" alt="Archival image of the Church Rock tailings dam breach." />
      </div>
      <div class="hero-copy reveal">
        <p class="kicker mono">DOCUMENTARY COMING SOON</p>
        <h1>The film is in production.</h1>
        <p class="lede">The documentary will extend the atlas into interviews, field sound, archival footage, and present-day landscapes.</p>
      </div>
    </section>
    <section class="intro-band reveal">
      <div>
        <p class="kicker mono">PRODUCTION NOTE</p>
        <h2>Expected later.</h2>
      </div>
      <p>This page is a placeholder for the future documentary release. The site is built now as a visual and editorial foundation for that longer work.</p>
    </section>
  `);
}

function renderNotFound() {
  setPage(`
    <section class="page-title reveal">
      <p class="kicker mono">404</p>
      <h1>This atlas page has not been cataloged.</h1>
      <p><a href="#/places">Return to Places</a></p>
    </section>
  `);
}

function mapSection(expanded = false) {
  return `
    <section class="map-section reveal">
      <div class="section-heading">
        <p class="kicker mono">MAP STUDY</p>
        <h2>Nine coordinates, nine forms of aftermath.</h2>
      </div>
      <div class="map-board ${expanded ? "expanded" : ""}" data-atlas-map>
        <div class="map-toolbar" aria-hidden="true">
          <div class="map-search">
            <span class="mono">Afterimage Atlas</span>
            <strong>United States field map</strong>
          </div>
          <div class="map-layers">
            <span>Terrain</span>
            <span>Archive</span>
            <span>Satellite</span>
          </div>
        </div>
        <div class="map-controls" aria-hidden="true">
          <span>+</span>
          <span>-</span>
        </div>
        <div class="map-scale mono" aria-hidden="true">250 mi</div>
        <div class="map-land" aria-hidden="true">
          <span class="state-label label-nm">New Mexico</span>
          <span class="state-label label-mo">Missouri</span>
          <span class="state-label label-tn">Tennessee</span>
          <span class="state-label label-nc">North Carolina</span>
          <span class="state-label label-ny">New York</span>
          <span class="road road-west"></span>
          <span class="road road-southwest"></span>
          <span class="road road-midwest"></span>
          <span class="road road-appalachia"></span>
          <span class="road road-northeast"></span>
          <span class="river river-east"></span>
          <span class="river river-west"></span>
        </div>
        ${places
          .map((place) => {
            const x = ((place.coordinates.lng + 125) / 59) * 100;
            const y = ((49 - place.coordinates.lat) / 24) * 100;
            return `
              <a
                class="pin pin-${place.slug} ${place.color}"
                style="--x:${x}%; --y:${y}%;"
                href="#/places/${place.slug}"
                aria-label="${place.title}, ${place.state}"
                data-map-pin
              >
                <span></span>
                <small>${place.title}</small>
                <em>
                  <b>${place.title}, ${place.state}</b>
                  <i>${place.disaster} / ${place.year}</i>
                </em>
              </a>
            `;
          })
          .join("")}
        <div class="map-info" data-map-info>
          <p class="mono">Selected Field Entry</p>
          <strong>Hover a pin</strong>
          <span>Each marker opens a documentary place page.</span>
        </div>
      </div>
    </section>
  `;
}

function placeCard(place) {
  const hydrated = hydratePlace(place);
  const image = hydrated.afterImage.placeholder ? hydrated.beforeImage : hydrated.afterImage;
  return `
    <article class="place-card reveal ${hydrated.color}">
      <a href="#/places/${hydrated.slug}">
        <div class="card-image ${image.placeholder ? "placeholder-media" : ""}">${imageMarkup(image)}</div>
        <div class="card-body">
          <p class="mono">${hydrated.state} / ${hydrated.year}</p>
          <h3>${hydrated.title}</h3>
          <p>${hydrated.shortDescription}</p>
          <span>${hydrated.status === "featured" ? "Open designed page" : "Open archive scaffold"}</span>
        </div>
      </a>
    </article>
  `;
}

function documentaryBanner() {
  return `
    <section class="documentary-banner reveal">
      <p class="kicker mono">DOCUMENTARY COMING SOON</p>
      <h2>A longer film will follow the atlas into interviews, field sound, archival footage, and present-day landscapes.</h2>
      <a class="button" href="#/documentary">Production Note</a>
    </section>
  `;
}

function storySection(label, text, image) {
  return `
    <section class="story-section reveal">
      <div>
        <p class="kicker mono">${label.toUpperCase()}</p>
        <h2>${label}</h2>
        <p>${text}</p>
      </div>
      <figure class="${image.placeholder ? "placeholder-media" : ""}">
        ${imageMarkup(image)}
        <figcaption>${image.caption}</figcaption>
      </figure>
    </section>
  `;
}

function beforeAfter(place) {
  return `
    <figure class="before-after" data-before-after>
      <div class="ba-frame">
        <div class="ba-image ba-before ${place.beforeImage.placeholder ? "placeholder-media" : ""}">
          ${imageMarkup(place.beforeImage)}
          <span>BEFORE</span>
        </div>
        <div class="ba-image ba-after ${place.afterImage.placeholder ? "placeholder-media" : ""}">
          ${imageMarkup(place.afterImage)}
          <span>AFTER</span>
        </div>
        <input type="range" min="0" max="100" value="50" aria-label="Before and after comparison slider" />
      </div>
      <figcaption>${place.afterImage.caption} <span class="mono">${place.afterImage.source} / ${place.afterImage.license}</span></figcaption>
    </figure>
  `;
}

function fieldEvidence(place) {
  if (!place.galleryImages?.length) return "";
  return `
    <section class="field-evidence reveal">
      <div class="section-heading">
        <p class="kicker mono">FIELD EVIDENCE</p>
        <h2>Images from the archive folder.</h2>
      </div>
      <div class="evidence-grid">
        ${place.galleryImages
          .map(
            (image) => `
              <figure class="evidence-card">
                ${imageMarkup(image)}
                <figcaption>
                  <strong>${image.title}</strong>
                  <span>${image.caption}</span>
                </figcaption>
              </figure>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function imageMarkup(image) {
  if (!image.url) {
    return `
      <div class="placement-image placement-${image.tone || "ash"}">
        <div class="placement-grid" aria-hidden="true"></div>
        <div class="placement-copy">
          <span class="mono">${image.placementLabel || "Temporary placement image"}</span>
          <strong>${image.placementTitle || image.title}</strong>
          <small>${image.placementTheme || image.caption}</small>
          <em class="mono">${image.placementYear || "Archive pending"}</em>
        </div>
      </div>
    `;
  }
  return `<img src="${image.url}" alt="${image.alt}" loading="lazy" onerror="this.closest('figure, .hero-media, .card-image, .ba-image')?.classList.add('image-failed')" />`;
}

function creditCard(image) {
  return `
    <article class="credit-card ${image.placeholder ? "is-placeholder" : ""}">
      <p class="mono">${image.placeholder ? "PLACEHOLDER" : "VERIFIED ARCHIVE"}</p>
      <h3>${image.title}</h3>
      <p>${image.caption}</p>
      <dl>
        <dt>Source</dt><dd>${image.source}</dd>
        <dt>License</dt><dd>${image.license}</dd>
        <dt>Photographer/Agency</dt><dd>${image.photographer}</dd>
      </dl>
      <a href="${image.originalUrl}" target="_blank" rel="noreferrer">${image.placeholder ? "Needs final source" : "Original URL"}</a>
    </article>
  `;
}

function metaBlock(label, value) {
  return `<div><span class="mono">${label}</span><strong>${value}</strong></div>`;
}

function initBeforeAfter() {
  document.querySelectorAll("[data-before-after]").forEach((wrap) => {
    const slider = wrap.querySelector("input");
    const after = wrap.querySelector(".ba-after");
    const update = () => {
      const value = slider.value;
      after.style.clipPath = `inset(0 0 0 ${value}%)`;
      wrap.style.setProperty("--handle", `${value}%`);
    };
    slider.addEventListener("input", update);
    update();
  });
}

function initAtlasMap() {
  document.querySelectorAll("[data-atlas-map]").forEach((map) => {
    const info = map.querySelector("[data-map-info]");
    if (!info) return;

    const reset = () => {
      info.innerHTML = `
        <p class="mono">Selected Field Entry</p>
        <strong>Hover a pin</strong>
        <span>Each marker opens a documentary place page.</span>
      `;
    };

    map.querySelectorAll("[data-map-pin]").forEach((pin) => {
      const place = places.find((item) => pin.getAttribute("href") === `#/places/${item.slug}`);
      if (!place) return;

      const show = () => {
        info.innerHTML = `
          <p class="mono">${place.state} / ${place.year}</p>
          <strong>${place.title}</strong>
          <span>${place.disaster}</span>
        `;
      };

      pin.addEventListener("mouseenter", show);
      pin.addEventListener("mouseover", show);
      pin.addEventListener("pointerenter", show);
      pin.addEventListener("pointerover", show);
      pin.addEventListener("focus", show);
      pin.addEventListener("mouseleave", reset);
      pin.addEventListener("pointerleave", reset);
      pin.addEventListener("blur", reset);
    });
  });
}

window.addEventListener("hashchange", route);
route();
