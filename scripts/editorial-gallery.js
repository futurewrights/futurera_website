/* Editorial gallery + lightbox for the "Inside the Classroom" section.
   GALLERY_IMAGES is a fixed, curated case-study composition — each entry's
   "area" maps to a named grid-template-area in the CSS (classroom, building,
   mentor, collab, screens, moment, group). The one entry with
   "standalone: true" (Demo Day) renders separately, full-width, below the
   grid as a transition into its own section. Order in the array is also the
   lightbox prev/next order and reading order on mobile. */
(function () {
  var GALLERY_IMAGES = [
    {
      src: "assets/summer-2026/gallery/classroom-01.jpg",
      alt: "Wide view of the Future Wrights classroom during a build session",
      caption: "The classroom, mid-build.",
      area: "classroom"
    },
    {
      src: "assets/summer-2026/gallery/building-01.jpg",
      alt: "Two students working together on their laptops",
      caption: "Building the day's project.",
      area: "building"
    },
    {
      src: "assets/summer-2026/gallery/mentoring-01.jpg",
      alt: "An instructor helping a student debug their code",
      caption: "Mentors circulating during build time.",
      area: "mentor"
    },
    {
      src: "assets/summer-2026/gallery/collaboration-01.jpg",
      alt: "Students collaborating around a shared laptop screen",
      caption: "Working through an idea together.",
      area: "collab"
    },
    {
      src: "assets/summer-2026/gallery/screens-01.jpg",
      alt: "Close-up of a student's project running in the browser",
      caption: "A capstone app, mid-build.",
      area: "screens"
    },
    {
      src: "assets/summer-2026/gallery/classroom-02.jpg",
      alt: "A quiet moment of focused work in the classroom",
      caption: "Heads down, building.",
      area: "moment"
    },
    {
      src: "assets/summer-2026/gallery/group-01.jpg",
      alt: "The full cohort together on the final day",
      caption: "The cohort, together.",
      area: "group"
    },
    {
      src: "assets/summer-2026/gallery/demo-day-01.jpg",
      alt: "A student presenting their capstone project on Demo Day",
      caption: "Demo Day — presenting to the room.",
      standalone: true
    }
  ];

  var grid = document.querySelector("[data-gallery-grid]");
  var standalone = document.querySelector("[data-gallery-standalone]");
  var lightbox = document.getElementById("galleryLightbox");
  if (!grid || !lightbox) return;

  var img = lightbox.querySelector(".lightbox__img");
  var captionEl = lightbox.querySelector(".lightbox__caption");
  var counterEl = lightbox.querySelector(".lightbox__counter");
  var closeBtn = lightbox.querySelector("[data-lightbox-close]");
  var prevBtn = lightbox.querySelector("[data-lightbox-prev]");
  var nextBtn = lightbox.querySelector("[data-lightbox-next]");

  var currentIndex = 0;
  var lastFocusedTrigger = null;
  var touchStartX = null;

  function createTile(item, index) {
    var figure = document.createElement("figure");
    figure.className = "gallery-tile" + (item.area ? " gallery-tile--" + item.area : "");

    var button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-tile__btn";
    button.setAttribute("data-index", String(index));
    button.setAttribute(
      "aria-label",
      "View photo " + (index + 1) + " of " + GALLERY_IMAGES.length + ": " + item.caption
    );
    button.addEventListener("click", function () {
      lastFocusedTrigger = button;
      openLightbox(index);
    });

    var image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    button.appendChild(image);

    if (item.caption) {
      var caption = document.createElement("span");
      caption.className = "gallery-tile__hover-caption";
      caption.textContent = item.caption;
      button.appendChild(caption);
    }

    figure.appendChild(button);
    return figure;
  }

  function renderGrid() {
    var gridFrag = document.createDocumentFragment();
    GALLERY_IMAGES.forEach(function (item, index) {
      var tile = createTile(item, index);
      if (item.standalone) {
        if (standalone) standalone.appendChild(tile);
      } else {
        gridFrag.appendChild(tile);
      }
    });
    grid.appendChild(gridFrag);
  }

  function updateLightboxContent() {
    var item = GALLERY_IMAGES[currentIndex];
    img.src = item.src;
    img.alt = item.alt;
    captionEl.textContent = item.caption || "";
    counterEl.textContent = (currentIndex + 1) + " / " + GALLERY_IMAGES.length;
  }

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeydown);
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocusedTrigger) lastFocusedTrigger.focus();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    updateLightboxContent();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    updateLightboxContent();
  }

  function onKeydown(e) {
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") showPrev();
    else if (e.key === "ArrowRight") showNext();
  }

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  lightbox.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    var deltaX = e.changedTouches[0].clientX - touchStartX;
    var SWIPE_THRESHOLD = 40;
    if (deltaX > SWIPE_THRESHOLD) showPrev();
    else if (deltaX < -SWIPE_THRESHOLD) showNext();
    touchStartX = null;
  }, { passive: true });

  renderGrid();
})();
