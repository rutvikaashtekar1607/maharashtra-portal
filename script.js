/* ==========================================
   MAHARASHTRA DISTRICT PORTAL
   SCRIPT.JS
   ========================================== */

/* ==========================
   LIVE DATE & TIME
   ========================== */

function updateDateTime() {

    const now = new Date();

    // Safe check in case a page doesn't contain the datetime element
    const dateTimeElement = document.getElementById("datetime");
    if (dateTimeElement) {
        dateTimeElement.innerHTML =
            "📅 " +
            now.toLocaleDateString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }) +
            " | ⏰ " +
            now.toLocaleTimeString();
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);


/* ==========================
   DISTRICT DATA
   ========================== */

const districtPages = {

    /* Konkan */
    "mumbai city":"mumbai_city.html",
    "mumbai suburban":"mumbai_suburban.html",
    "thane":"thane.html",
    "palghar":"palghar.html",
    "raigad":"raigad.html",
    "ratnagiri":"ratnagiri.html",
    "sindhudurg":"sindhudurg.html",

    /* Nashik */
    "nashik":"nashik.html",
    "dhule":"dhule.html",
    "nandurbar":"nandurbar.html",
    "jalgaon":"jalgaon.html",
    "ahmednagar":"ahmednagar.html",

    /* Pune */
    "pune":"pune.html",
    "satara":"satara.html",
    "sangli":"sangli.html",
    "solapur":"solapur.html",
    "kolhapur":"kolhapur.html",

    /* Aurangabad */
    "aurangabad":"aurangabad.html",
    "chhatrapati sambhajinagar":"aurangabad.html",
    "jalna":"jalna.html",
    "beed":"beed.html",
    "osmanabad":"osmanabad.html",
    "dharashiv":"osmanabad.html",
    "latur":"latur.html",
    "parbhani":"parbhani.html",
    "hingoli":"hingoli.html",
    "nanded":"nanded.html",

    /* Amravati */
    "amravati":"amravati.html",
    "akola":"akola.html",
    "washim":"washim.html",
    "buldhana":"buldhana.html",
    "yavatmal":"yavatmal.html",

    /* Nagpur */
    "nagpur":"nagpur.html",
    "wardha":"wardha.html",
    "bhandara":"bhandara.html",
    "gondia":"gondia.html",
    "chandrapur":"chandrapur.html",
    "gadchiroli":"gadchiroli.html"
};


/* ==========================
   ELEMENTS
   ========================== */

const searchInput =
document.getElementById("searchInput");

const searchResult =
document.getElementById("searchResult");

const suggestions =
document.getElementById("suggestions");

const topBtn =
document.getElementById("topBtn");


/* ==========================
   LIVE SEARCH SUGGESTIONS
   ========================== */

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const value =
        this.value.toLowerCase().trim();

        if (suggestions) suggestions.innerHTML = "";
        if (searchResult) searchResult.innerHTML = "";

        if (value === "") return;

        let found = false;

        Object.keys(districtPages).forEach(district => {

            if (district.includes(value)) {

                found = true;

                const item =
                document.createElement("div");

                item.className =
                "suggestion-item";

                item.innerHTML =
                "📍 " +
                district.charAt(0).toUpperCase() +
                district.slice(1);

                item.onclick = function () {

                    window.location.href =
                    districtPages[district];

                };

                if (suggestions) {
                    suggestions.appendChild(item);
                }
            }

        });

        if (!found && searchResult) {

            searchResult.innerHTML =
            "❌ No matching district found";

        }

    });
}


/* ==========================
   ENTER KEY SEARCH
   ========================== */

if (searchInput) {
    searchInput.addEventListener("keydown", function(event){

        if(event.key === "Enter"){

            const district =
            this.value.toLowerCase().trim();

            if(districtPages[district]){

                window.location.href =
                districtPages[district];

            }
            else if (searchResult){

                searchResult.innerHTML =
                "❌ District not found";

            }

        }

    });
}


/* ==========================
   BACK TO TOP BUTTON
   ========================== */

window.addEventListener("scroll", function(){

    if (topBtn) {
        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }
        else{

            topBtn.style.display = "none";

        }
    }

});

if (topBtn) {
    topBtn.addEventListener("click", function(){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });
}


/* ==========================
   PAGE LOADED
   ========================== */

window.onload = function(){

    console.log(
        "Maharashtra District Portal Loaded Successfully"
    );

};