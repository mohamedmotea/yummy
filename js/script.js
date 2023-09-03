import Product ,{ Categories } from "./product.js";
import showData from "./showData.js";
import details from "./details.js";

const product = new Product();
const display = new showData();
const detailsInfo = new details();
const categoriesData = new Categories();
// End Import Data And call

//* Html Collection
const searchName = document.querySelector("#searchName");
const searchLetter = document.querySelector("#searchLetter");
const nameInput = document.getElementById("nameInput")
const emailInput = document.getElementById("emailInput")
const numInput = document.getElementById("numInput");
const ageInput = document.getElementById("ageInput")
const passInput = document.getElementById("passInput")
const repassInput = document.getElementById("repassInput")
const subminInput = document.getElementById("subminInput")
//* End Html Collection


//& Function To Get Data
// Global Data
async function callData(type = "s", sear = "") {
    let data = await product.getData(type, sear);
    display.displayData(data);
    getId(data);
}

// Categories Data
async function callCategoryData(type = "categories.php") {
    let data = await categoriesData.getData(type);
    display.displayCat(data.categories);
    getTypeCategory();
}
function getTypeCategory() {
    $("#rowBody .box").click(async (ev) => {
        let categoryType = ev.target.closest(".box").getAttribute("data-cat");
        let data = await categoriesData.getData(`filter.php?i=${categoryType}`);
        display.displayCategotyType(data.meals);
        load()
        getId(data.meals);
    });
}
// Area Data 
async function callAreaData(type = `list.php?a=list`) {
    const data = await categoriesData.getData(type);
    let areaName;
    display.displayArea(data.meals);
    $(".col-md-3 .box").click(async (ev) => {
        areaName = ev.target.closest(".box").getAttribute("data-area");
        const dataArea = await categoriesData.getData(`filter.php?a=${areaName}`);
        display.displayAreaData(dataArea.meals);
        getId(dataArea.meals)
        load()
    })
}
// Ingredients Data
async function callIngredients(type = `list.php?i=list`) {
    const data = await categoriesData.getData(type);
    display.displayingredients(data.meals);
    $(".col-md-3 .box").click(async (ev) => {
        const typeIng = ev.target.closest(".box").getAttribute("data-type");
        const dataArea = await categoriesData.getData(`filter.php?i=${typeIng}`);
        display.displayAreaData(dataArea.meals);
        load()
        getId(dataArea.meals)
    })
}
// End Data Function


//! Event For Data Section
// Search Event
$("#searchSide").click((_) => {
    secReadyToView();
    document.querySelector(".search-input").classList.replace("d-none", "d-flex");
});
// Category Event
$("#categorySide").click((_) => {
    secReadyToView();
    callCategoryData();
});
// Area Event
$("#areaSide").click(_ => {
    secReadyToView()
    callAreaData();
});
// Ingredient Event
$("#ingredientsSide").click(_ => {
    secReadyToView()
    callIngredients()
});
// Contact Event
$("#contactSide").click(_=>{
    secReadyToView()
    $("#products").css("display", "none");
    $("#contact").css("display", "flex");
});
// ------- End Event - Data


// Function
$(_=>{
    callData();
    $(".load").fadeOut(800);
})
function getId(data) {
    $("#rowBody .col-md-3 .box").click((ev) => {
        const cardNum = ev.target.closest(".box").getAttribute("id");
        $("#products").css("display", "none");
        $("#details").css("display", "flex");
        scroll({
            top: 0,
        });
        detailsInfo.displayDetails(data, cardNum);
        load()
    });
}
function secReadyToView() {
    $("#sidebar").css("left", -$(".option-side").innerWidth());
    $("#details").css("display", "none");
    $("#products").css("display", "flex");
    $("#contact").css("display", "none");
    document.querySelector(".search-input").classList.replace("d-flex", "d-none");
    changeIcon();
    load()
}
function load(){
    $(".load").fadeIn(200,_=>{
        $(".load").fadeOut(100)
    })
}
// Sidebar
function changeIcon() {
    if ($(".option-open").css("display") === "inline-block") {
        $(".option-open").css("display", "none");
        document
            .querySelector(".option-close")
            .classList.replace("d-none", "d-flex");
    } else {
        $(".option-open").css("display", "inline-block");
        document
            .querySelector(".option-close")
            .classList.replace("d-flex", "d-none");
    }
}
$("#openSide").click((_) => {
    $("#sidebar .option-side ul").slideUp(0);
    if ($("#sidebar").css("left") < "0") {
        $("#sidebar").css("left", "0");
    } else {
        $("#sidebar").css("left", -$(".option-side").innerWidth());
    }
    $("#sidebar .option-side ul").slideDown(700);
    changeIcon();
});
// End Sidebar



//! ----   Validation Function
// Name Validation
function validationName() {
    let regex = /[a-z]$/i;
    let nameValue = nameInput.value;

    if (regex.test(nameValue) && nameValue !== "") {
        nameInput.nextElementSibling.classList.replace("d-flex", "d-none");
        return true
    } else {
        nameInput.nextElementSibling.classList.replace("d-none", "d-flex")
        return false
    }
}
// Email Validation
function emailValidation() {
    let regex = /[aA-zZ]{3,}@[a-z]{2,}\.[a-z]/g;
    let emailValue = emailInput.value;
    if (regex.test(emailValue) && emailValue !== "") {
        emailInput.nextElementSibling.classList.add("d-none");
        return true
    } else
        emailInput.nextElementSibling.classList.replace("d-none", "d-flex")
}
// Number Validation
function numberValidation() {
    let regex = /^\d{9,}$/g;
    let numValue = numInput.value;
    if (regex.test(numValue) && numValue !== "") {
        numInput.nextElementSibling.classList.add("d-none");
        return true
    } else
        numInput.nextElementSibling.classList.replace("d-none", "d-flex")
}
// Age Validation
function ageValidation() {
    let regex = /^\d{1,2}$/g;
    let ageValue = ageInput.value;
    if (regex.test(ageValue) && ageValue !== "" & ageValue !== "0") {
        ageInput.nextElementSibling.classList.add("d-none");
        return true
    } else
        ageInput.nextElementSibling.classList.replace("d-none", "d-flex")
}
// password Validation
function passValidation() {
    let regex = /[a-z]{8,}\d/gi;
    let ageValue = passInput.value;
    if (regex.test(ageValue) && ageValue !== "") {
        passInput.nextElementSibling.classList.add("d-none");
        return true
    } else
        passInput.nextElementSibling.classList.replace("d-none", "d-flex")
}
function rePassValidation() {

    let repass = repassInput.value;

    if (repass === passInput.value && repass !== "") {
        repassInput.nextElementSibling.classList.add("d-none");
        return true
    } else
        repassInput.nextElementSibling.classList.replace("d-none", "d-flex")
}
// Check All Validation
function checkValidation() {
    if ((validationName() && emailValidation() && numberValidation() && ageValidation() && passValidation() && rePassValidation()) === true) {
        console.log("Yess")
        subminInput.classList.replace("btn-danger", "btn-success")
        subminInput.removeAttribute("disabled")
    } else {
        subminInput.classList.replace("btn-success", "btn-danger");
        subminInput.setAttribute("disabled", "")

    }
}




//^ Event
// Event Validation
nameInput.addEventListener("keyup", _ => {
    validationName()
    checkValidation()
}) 
emailInput.addEventListener("keyup", _ => {
    emailValidation()
    checkValidation()
})
ageInput.addEventListener("keyup", _ => {
    ageValidation()
    checkValidation()
})
passInput.addEventListener("keyup", _ => {
    passValidation()
    checkValidation()
})
repassInput.addEventListener("keyup", _ => {
    rePassValidation()
    checkValidation()
})
document.getElementById("form").onsubmit =(ev)=>{
    ev.preventDefault()
}
// Search Event
searchName.addEventListener("keyup", (_) => {
    callData($(searchName).attr("data-type"), searchName.value);
});
searchLetter.addEventListener("keyup", (_) => {
    if (searchLetter.value != "")
        callData($(searchLetter).attr("data-type"), searchLetter.value);
});
