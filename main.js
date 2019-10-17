async function getData(){
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=b47j9JgLYrm6fQjXlJQ4it7SQvwMFxmHMzfmFdVL')
    let responseBody = await response.json()
    return responseBody
}

async function render(){
    let planetOfTheDay = await getData() 
        let description = document.querySelector(".description")
        description.innerText = planetOfTheDay.explanation
        let img = document.querySelector("img.dagensBild")
        img.src = planetOfTheDay.url
        let date1 = document.querySelector(".imagedate")
        date1.innerText = planetOfTheDay.date
    }
    render()
    
    
    // let email = document.querySelector(".email")
    // let phone = this.container.querySelector(".phone")
    // phone.innerText = user.phone

    // for(let item of list){
    //     let newItem = itemPrototype.cloneNode(true)
    //     newItem.classList.remove("prototype")
    //     let p = newItem.querySelector("p")
    //     p.innerText = item.planetary
    //     ul.append(newItem)
