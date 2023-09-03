export default class Show {
    constructor() {

    }
    displayData(data) {
        let container = ``;
        for (let i = 0; i < data.length; i++) {
            container += `
            <div class="col-md-3 overflow-hidden">
            <div class="box h-100 rounded position-relative overflow-hidden" role="button" id="${i}">
                <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded">
                <div class="caption position-absolute px-2 rounded">
                    <p class="text-black fs-4 fw-bold">${data[i].strMeal}</p>
                </div>
            </div>
        </div>
        
            `
        }

        document.getElementById("rowBody").innerHTML = container;

    }
    displayCat(data) {

        let container = ``;
        for (let i = 0; i < data.length; i++) {
            container += `
                        <div class="col-md-3 overflow-hidden">
                        <div class="box h-100 rounded position-relative overflow-hidden" role="button" data-cat="${data[i].strCategory.toLowerCase()}" id="${data[i].idCategory}">
                            <img src="${data[i].strCategoryThumb}" alt="" class="w-100 rounded">
                            <div class="caption2 position-absolute px-2 rounded text-center">
                            <h3 class="text-black">${data[i].strCategory}</h3>
                                <p class="my-4">${data[i].strCategoryDescription.slice(0, 100)}</p>
                            </div>
                        </div>
                    </div>
                        
                        `
        }
        document.getElementById("rowBody").innerHTML = container;
    }

    displaySearch() {

    }
    displayCategotyType(data) {
        let container = ``;
        for (let i = 0; i < data.length; i++) {
            container += `
                        <div class="col-md-3 overflow-hidden">
                        <div class="box h-100 rounded position-relative overflow-hidden" role="button" data-cat="${data[i].strCategory}" id="${i}">
                            <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded">
                            <div class="caption2 position-absolute px-2 rounded text-center">
                            <h3 class="text-black">${data[i].strMeal}</h3>
                              
                            </div>
                        </div>
                    </div>
                        
                        `
        }
        document.getElementById("rowBody").innerHTML = container;

    }

    displayArea(data) {
        let container = ``
        for (let i = 0; i < data.length; i++) {
            container += `
            <div class="col-md-3">
            <div class="box h-100 rounded text-center" role="button" data-area="${data[i].strArea}">
            <i class="fa-solid fa-house fs-1 "></i>
                <h2 class="my-3">${data[i].strArea} </h2>
                </div>
        </div>
            
            `
        }
        document.getElementById("rowBody").innerHTML = container
    }
    displayAreaData(data) {
        let container = ``;
        for (let i = 0; i < data.length; i++) {
            container += `
                        <div class="col-md-3 overflow-hidden">
                        <div class="box h-100 rounded position-relative overflow-hidden" role="button" id="${i}">
                            <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded">
                            <div class="caption2 position-absolute px-2 rounded text-center">
                            <h3 class="text-black">${data[i].strMeal}</h3>
                              
                            </div>
                        </div>
                    </div>
                        `
        }
        document.getElementById("rowBody").innerHTML = container

    }

    displayingredients(data){
        let container = ``
        for(let i = 0 ; i < data.length;i++){
            container +=`
            <div class="col-md-3">
            <div class="box h-100 rounded text-center overflow-hidden" role="button" data-type="${data[i].strIngredient}">
            <i class="fa-solid fa-drumstick-bite fs-1 text-black-50"></i>
                <h2 class="my-3 fs-5">${data[i].strIngredient} </h2>
                <p class="my-4">${data[i].strDescription !== null ? data[i].strDescription.slice(0,131) : "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fis"}</p>
                </div>
        </div>
            `
        }
        document.getElementById("rowBody").innerHTML = container;
    }
    displayIngreType(data) {
        let container = ``;
        for (let i = 0; i < data.length; i++) {
            container += `
                        <div class="col-md-3 overflow-hidden">
                        <div class="box h-100 rounded position-relative overflow-hidden" role="button" id="${i}">
                            <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded">
                            <div class="caption2 position-absolute px-2 rounded text-center">
                            <h3 class="text-black">${data[i].strMeal}</h3>
                              
                            </div>
                        </div>
                    </div>
                        `
        }
        document.getElementById("rowBody").innerHTML = container

    }


}