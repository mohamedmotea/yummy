export default class Details {
    constructor(){
    }
     displayDetails(data,index){
        let container =`
            <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="box">
                        <img src="${data[index].strMealThumb}" alt="" class="w-100 mb-3 rounded">
                        <p class="fs-5 fw-bold">${data[index].strMeal} </p>
                    </div>
                </div>

                <div class="col-md-8 position-relative">
              <a href="../index.html"  <i class="fa-solid fa-xmark position-absolute fs-1 m-3 text-danger" role="button" id="closeMark"></i></a>
                    <h2>Instructions</h2>
                    <p>${data[index].strInstructions || "Preheat oven to 400ºF (200ºC), and prepare two cookie sheets with parchment paper. In a bowl, mix cream cheese, sugar, and vanilla until fully combined. Lightly flour the surface and roll out puff pastry on top to flatten. Cut each sheet of puff pastry into 9 equal squares. On the top right and bottom left of the pastry, cut an L shape approximately ½ inch (1 cm) from the edge. NOTE: This L shape should reach all the way down and across the square, however both L shapes should not meet at the ends. Your pastry should look like a picture frame with two corners still intact. Take the upper right corner and fold down towards the inner bottom corner. You will now have a diamond shape. Place 1 to 2 teaspoons of the cream cheese filling in the middle, then place berries on top. Repeat with the remaining pastry squares and place them onto the parchment covered baking sheet. Bake for 15-20 minutes or until pastry is golden brown and puffed. Enjoy!"

                    
                    }</p>
                    <h3><span>Area :</span>${data[index].strArea || "2 large Potatoes"}</h3>
                    <h3><span>Category  :</span>${data[index].strCategory || "2 large Potatoes"}</h3>
                    <h3><span>Recipes  :</span></h3>
                    <ul class="d-flex flex-wrap w-100">
                        <li class="m-3 rounded">${data[index].strMeasure1 || "2 large Potatoes"} ${data[index].strIngredient1 || "2 large Potatoes"}</li>
                        <li class="m-3 rounded"><span class="p-2 m-3"> ${data[index].strMeasure2 || "2 large Potatoes"} ${data[index].strIngredient2 || "2 large Potatoes"}</span></li>
                        <li class="m-3 rounded"> ${data[index].strMeasure3|| "2 large Potatoes"} ${data[index].strIngredient3|| "2 large Potatoes"}</li>
                        <li class="m-3 rounded"> ${data[index].strMeasure4|| "2 large Potatoes"} ${data[index].strIngredient4|| "2 large Potatoes"}</li>
                        <li class="m-3 rounded"> ${data[index].strMeasure5|| "2 large Potatoes"} ${data[index].strIngredient5|| "2 large Potatoes"}</li>
                        <li class="m-3 rounded"> ${data[index].strMeasure6|| "2 large Potatoes"} ${data[index].strIngredient6|| "2 large Potatoes"}</li>
                        <li class="m-3 rounded"> ${data[index].strMeasure7|| "2 large Potatoes"} ${data[index].strIngredient7|| "2 large Potatoes"}</li>
                    
                     
                    </ul>
                    <h3 class="my-3"><span>Tags : </span></h3>
                    <ul>
                        <li>${data[index].strTags || ""}</li>
                    </ul>
                    <a class="py-2 px-3" href="${data[index].strSource}">  <button class="btn btn-success my-3">Source  </button></a>

                    <a class="py-2 px-3" href="${data[index].strYoutube}">  <button class="btn btn-danger my-3">Youtube  </button></a>
                </div>

            </div>
        </div>
            
            `
        document.getElementById("details").innerHTML = container
    }
}