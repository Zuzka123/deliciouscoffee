// ak sa klikne na tlacitko (#show_hide) tak sa zmeni text Coffe drinks na Tea drinks
$("#show_hide").on("click", function () {

    // Ak je text v buttone "Coffee Drinks" tak sa v buttone zmeni text "Tea Drinks" inak 
    // sa prepne na "Coffee Drinks"
    // ternarny operator namiesto if cyklu
    $("#show_hide").text() == "Coffee Drinks" ? $("#show_hide").text("Tea Drinks") : $("#show_hide").text("Coffee Drinks");

    // .toggleClass()  -> funkcia na prepnutie triedy v danom elemente; 
    // tu prepinam triedu "hidden (css)"
    $("#card1").toggleClass("hidden");
    $("#card2").toggleClass("hidden");
});

// scroll
// .ready() najprv sa nacita cela stranka a az potom sa vykona funkcia
// .offset().top-65 odsadenie na tope, aby nav(fixed) neprekryvalo #aboutUs ked sa zroluje k nemu
$(document).ready(function () {
    $("#link_about").click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutUs").offset().top-65
        }, 1500);
    })
});

$(document).ready(function () {
    $("#link_contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contactUs").offset().top-65
        }, 1500);
    })
});

// 1 like dislike
for (let index = 1; index <= 8; index++) {
    let heart = document.querySelector(".heart" + index)
    let finger = document.querySelector(".finger" + index)
    let heartDisplay = document.querySelector(".heartDisplay" + index)
    let fingerDisplay = document.querySelector(".fingerDisplay" + index)

    heart.addEventListener("click", function () {
        if (!heartDisplay.hasAttribute("addedHeart")) {
// parseInt - prekonvertuje string na cislo aby sa mohlo pripocitat
            heartDisplay.textContent = parseInt(heartDisplay.textContent) + 1
            heartDisplay.setAttribute("addedHeart", true)
        }
    })
    finger.addEventListener("click", function () {
        if (!heartDisplay.hasAttribute("addedFinger")) {
            fingerDisplay.textContent = parseInt(fingerDisplay.textContent) + 1
            heartDisplay.setAttribute("addedFinger", true)
        }
    })
}
