document.querySelector('.Lupe').addEventListener('click', function() {
    var searchbar = document.getElementById('SearchBar'); 
    var bild = document.getElementById('meinBild'); 
  
    if (searchbar.style.display === 'block') {
      searchbar.style.display = 'none';
      bild.src = "icons/ico-search.svg"; 
    } else {      
      searchbar.style.display = 'block';
      bild.src = "icons/ico-cross.svg"; 
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const striche = document.querySelector(".Striche");
  const fenster = document.querySelector(".Fenster");

  striche.addEventListener("click", () => {
    if (fenster.style.display === "flex") {
      fenster.style.display = "none";
    } else {
      fenster.style.display = "flex";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    if (!sessionStorage.getItem("popupShown")) {
        const popup = document.getElementById("popup");
        popup.style.display = "flex";

        document.getElementById("close-btn").addEventListener("click", function() {
            popup.style.display = "none";
        });

        sessionStorage.setItem("popupShown", "true");
    }
});