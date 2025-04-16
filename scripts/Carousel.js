const track = document.querySelector(".carousel-track");

fetch("../assets/JSON/developers.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(person => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${person.Image}" alt="${person.Name}" />
        <h3>${person.Name}</h3>
        <p>${person.Role}</p>
        <div class="label">للتواصل</div>
        <div class="socials">
          ${person.github ? `<a href="${person.github}" target="_blank"><i class="fab fa-github"></i></a>` : ""}
          ${person.Linkedin ? `<a href="${person.Linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ""}
          ${person.X ? `<a href="${person.X}" target="_blank"><i class="fab fa-twitter"></i></a>` : ""}
          ${person.Website ? `<a href="${person.Website}" target="_blank"><i class="fas fa-globe"></i></a>` : ""}
        </div>
      `;
      track.appendChild(card);
    });
    
    
    
  });

// Navigation
document.getElementById("leftBtn").addEventListener("click", () => {
  track.scrollLeft += track.offsetWidth / 2;
});

document.getElementById("rightBtn").addEventListener("click", () => {
  track.scrollLeft -= track.offsetWidth / 2;
});
