document.getElementById("change-btn").addEventListener("click", () => {
   const inputValue = document.getElementById("text-input").value;
   document.getElementById("change-btn").textContent = inputValue || "Klick mich!";
});
document.getElementById("change-img-btn").addEventListener("click", () => {
  const image = document.getElementById("image");
});
document.getElementById("change-link-img").addEventListener("click", () => {
  const link = document.getElementById("link");
  const img = document.getElementById("linked-img");
  link.href = "";
  link.textContent = "go there";
  img.alt = "Logo";
  img.width = 100;
});
document.getElementById("change-list-item").addEventListener("click", () => {
  const list = document.getElementById("item-list");
  const firstItem = list.querySelector("li");
  firstItem.textContent = "Neuer Text für ersten Eintrag";
});