/* Editorial gallery + lightbox for the "Inside the Classroom" section.
   GALLERY_IMAGES is a fixed, curated case-study composition — each entry's
   "area" maps to a named grid-template-area in the CSS (classroom, building,
   mentor, collab, screens, moment, group). Entries with "standalone: true"
   render as the four-tile mini-gallery below the main grid. Order in the array is also the
   lightbox prev/next order and reading order on mobile. */
(function () {
  var GALLERY_IMAGES = [
    {
      src: "../assets/summer-2026/gallery/classroom.jpg",
      alt: "Wide view of the Future Wrights classroom during a build session",
      caption: "The classroom, mid-build.",
      area: "classroom"
    },
    {
      src: "../assets/summer-2026/gallery/DSC00593.JPG",
      alt: "Two students working together on their laptops",
      caption: "Building the day's project.",
      area: "building"
    },
    {
      src: "../assets/summer-2026/gallery/DSC00550.JPG",
      alt: "An instructor helping a student debug their code",
      caption: "Mentors circulating during build time.",
      area: "mentor"
    },
    {
      src: "../assets/summer-2026/gallery/DSC00964.JPG",
      alt: "Students collaborating around a shared laptop screen",
      caption: "Working through an idea together.",
      area: "collab"
    },
    {
      src: "../assets/summer-2026/gallery/student_on_laptop.jpg",
      alt: "Close-up of a student working on their project on a laptop",
      caption: "A student project, mid-build.",
      area: "screens"
    },
    {
      src: "../assets/summer-2026/gallery/DSC00917.JPG",
      alt: "A quiet moment of focused work in the classroom",
      caption: "Heads down, building.",
      area: "moment"
    },
    {
      src: "../assets/summer-2026/gallery/DSC00659.JPG",
      alt: "The full cohort together on the final day",
      caption: "The cohort, together.",
      area: "group"
    },
    {
      src: "../assets/summer-2026/gallery/DSC00644.JPG",
      alt: "Future Wrights bootcamp classroom moment",
      caption: "In the classroom.",
      standalone: true
    },
    {
      src: "../assets/summer-2026/gallery/DSC00923.JPG",
      alt: "Future Wrights bootcamp classroom moment",
      caption: "Learning together.",
      standalone: true
    },
    {
      src: "../assets/summer-2026/gallery/DSC00912.JPG",
      alt: "Future Wrights bootcamp classroom moment",
      caption: "Focused work.",
      standalone: true
    },
    {
      src: "../assets/summer-2026/gallery/DSC00628.JPG",
      alt: "Future Wrights bootcamp classroom moment",
      caption: "In the classroom.",
      standalone: true
    }
  ];

  var DEMO_DAY_IMAGES = [
    { src: "assets/summer-2026/gallery/demo-day-01.jpg", alt: "A student presenting their capstone project on Demo Day", caption: "Presenting a finished project." },
    { src: "assets/summer-2026/gallery/group-01.jpg", alt: "The full cohort together on the final day", caption: "Celebrating the cohort." },
    { src: "assets/summer-2026/gallery/screens-01.jpg", alt: "A student's project running in the browser", caption: "Projects ready to share." },
    { src: "assets/summer-2026/gallery/collaboration-01.jpg", alt: "Students collaborating around a shared laptop", caption: "Peers cheering each other on." },
    { src: "assets/summer-2026/gallery/mentoring-01.jpg", alt: "An instructor helping a student", caption: "Mentors in the room." }
  ];

  var grid = document.querySelector("[data-gallery-grid]");
  var standalone = document.querySelector("[data-gallery-standalone]");
  var demoGallery = document.querySelector("[data-demo-gallery]");
  var lightbox = document.getElementById("galleryLightbox");
  if (!grid || !lightbox) return;

  var img = lightbox.querySelector(".lightbox__img");
  var captionEl = lightbox.querySelector(".lightbox__caption");
  var counterEl = lightbox.querySelector(".lightbox__counter");
  var closeBtn = lightbox.querySelector("[data-lightbox-close]");
  var prevBtn = lightbox.querySelector("[data-lightbox-prev]");
  var nextBtn = lightbox.querySelector("[data-lightbox-next]");

  var currentIndex = 0;
  var activeImages = GALLERY_IMAGES;
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

  function renderDemoGallery() {
    if (!demoGallery) return;
    var areas = ["a", "b", "c", "d", "e"];
    DEMO_DAY_IMAGES.forEach(function (item, index) {
      var figure = document.createElement("figure");
      figure.className = "demo-day-gallery__item demo-day-gallery__item--" + areas[index];
      var button = document.createElement("button");
      button.type = "button";
      button.className = "demo-day-gallery__btn";
      button.setAttribute("aria-label", "View Demo Day photo " + (index + 1) + " of " + DEMO_DAY_IMAGES.length + ": " + item.caption);
      button.addEventListener("click", function () {
        lastFocusedTrigger = button;
        openLightbox(index, DEMO_DAY_IMAGES);
      });
      var image = document.createElement("img");
      image.src = item.src;
      image.alt = item.alt;
      image.loading = "lazy";
      var caption = document.createElement("span");
      caption.className = "demo-day-gallery__caption";
      caption.textContent = item.caption;
      button.appendChild(image);
      button.appendChild(caption);
      figure.appendChild(button);
      demoGallery.appendChild(figure);
    });
  }

  function updateLightboxContent() {
    var item = activeImages[currentIndex];
    img.src = item.src;
    img.alt = item.alt;
    captionEl.textContent = item.caption || "";
    counterEl.textContent = (currentIndex + 1) + " / " + activeImages.length;
  }

  function openLightbox(index, collection) {
    activeImages = collection || GALLERY_IMAGES;
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
    currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
    updateLightboxContent();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % activeImages.length;
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
  renderDemoGallery();
})();
