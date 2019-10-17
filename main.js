// async function getData(){
//     let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=b47j9JgLYrm6fQjXlJQ4it7SQvwMFxmHMzfmFdVL')
//     let responseBody = await response.json()
//     return responseBody
// }

// async function renderPlanets(){
//     let planetOfTheDay = await getData() 
//     let description = document.querySelector(".description")
//     description.innerText = planetOfTheDay.explanation
//     let img = document.querySelector("img.dagensBild")
//     img.src = planetOfTheDay.url
//     let date1 = document.querySelector(".imagedate")
//     date1.innerText = planetOfTheDay.date
// }
    // renderPlanets()
    

async function getDataMars(){
    let response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=b47j9JgLYrm6fQjXlJQ4it7SQvwMFxmHMzfmFdVL')
    let responseBody = await response.json()
    return responseBody.photos
}

async function renderMars(){
    let marsData = await getDataMars() 
    // Beskrivningen
    // let description = document.querySelector(".description")
    // description.innerText = marsData.earth_date
    // Bilden
    // let img = document.querySelector("img.dagensBild")
    // img.src = marsData.img-src
    // Datumet
    let date1 = document.querySelector(".imagedate")
    
    for(let element of marsData){
        // let newItem = itemContent.cloneNode(true)
        // newItem.classList.remove("content")
        let description = document.querySelector(".imagedate")
        description.innerText = element.earth_date
        // description.append(newItem)
    }
} 



renderMars()
