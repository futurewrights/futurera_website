/* Editorial gallery + lightbox for the "Inside the Classroom" section.
   To add/remove/reorder photos, edit the GALLERY_IMAGES array below —
   the grid and lightbox are both generated from it.
   size: "feature" (2x2), "wide" (2x1), "tall" (1x2), or "normal" (1x1). */
(function () {
  var GALLERY_IMAGES = [
    {
      src: "assets/summer-2026/gallery/classroom-01.jpg",
      alt: "Wide view of the Future Wrights classroom during a build session",
      caption: "The classroom, mid-build.",
      size: "feature"
    },
    {
      src: "assets/summer-2026/gallery/building-01.jpg",
      alt: "Two students working together on their laptops",
      caption: "Building the day's project.",
      size: "tall"
    },
    {
      src: "assets/summer-2026/gallery/mentoring-01.jpg",
      alt: "An instructor helping a student debug their code",
      caption: "Mentors circulating during build time.",
      size: "normal"
    },
    {
      src: "assets/summer-2026/gallery/collaboration-01.jpg",
      alt: "Students collaborating around a shared laptop screen",
      caption: "Working through an idea together.",
      size: "normal"
    },
    {
      src: "assets/summer-2026/gallery/screens-01.jpg",
      alt: "Close-up of a student's project running in the browser",
      caption: "A capstone app, mid-build.",
      size: "normal"
    },
    {
      src: "assets/summer-2026/gallery/classroom-02.jpg",
      alt: "A quiet moment of focused work in the classroom",
      caption: "Heads down, building.",
      size: "tall"
    },
    {
      src: "assets/summer-2026/gallery/demo-day-01.jpg",
      alt: "A student presenting their capstone project on Demo Day",
      caption: "Demo Day — presenting to the room.",
      size: "feature"
    },
    {
      src: "assets/summer-2026/gallery/group-01.jpg",
      alt: "The full cohort together on the final day",
      caption: "The cohort, together.",
      size: "normal"
    }
  ];

  var grid = document.querySelector("[data-gallery-grid]");
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

  function renderGrid() {
    var frag = document.createDocumentFragment();
    GALLERY_IMAGES.forEach(function (item, index) {
      var figure = document.createElement("figure");
      figure.className = "gallery-tile gallery-tile--" + item.size;

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
      figure.appendChild(button);
      frag.appendChild(figure);
    });
    grid.appendChild(frag);
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
