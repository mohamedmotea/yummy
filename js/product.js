export default class Product {
    constructor(){
    }
  async  getData(type,search){
    const dataArr = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${search}`);
    const data = await dataArr.json()
    return data.meals
    }
}
export class Categories {
        constructor(){
        }
      async  getData(cate = "categories.php"){
            const dataArr = await fetch(`https://www.themealdb.com/api/json/v1/1/${cate}`);
            const data = await dataArr.json()
        return data
        }}