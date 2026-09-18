(() => {
  const lightbox = document.querySelector("#publication-lightbox");
  const lightboxImage = lightbox?.querySelector("img");

  if (!lightbox || !lightboxImage || typeof lightbox.showModal !== "function") {
    return;
  }

  document.querySelectorAll(".publication-image-button").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxImage.src = button.dataset.image || "";
      lightboxImage.alt = button.dataset.alt || "Enlarged publication figure";
      lightbox.showModal();
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.close();
  });

  lightbox.addEventListener("close", () => {
    lightboxImage.src = "";
    lightboxImage.alt = "";
  });
})();
