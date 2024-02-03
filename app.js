const faqs = document.querySelectorAll(".faq-section");

faqs.forEach(function (faq) {
  const btn = faq.querySelector(".questions-btn");
  btn.addEventListener("click", function () {
    faqs.forEach(function (item) {
      if (item !== faq) {
        item.classList.remove("show-text");
        console.log(btn);
      }
    });
    faq.classList.toggle("show-text");
  });
});
