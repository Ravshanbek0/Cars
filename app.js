const form = document.querySelector("#form")
const name = document.querySelector("#name")
const speed = document.querySelector("#speed")
const price = document.querySelector("#price")
const url = document.querySelector("#url")
const color = document.querySelector("#color")
const cardsEl = document.querySelector(".cards")




var cars = JSON.parse(localStorage.getItem("cars")) ? JSON.parse(localStorage.getItem("cars")) : []


form.addEventListener("submit", (e) => {
  if (name.value != "" && speed.value != "" && price.value != "" && url.value != "" ){
    e.preventDefault()
    var obj = {
      name: name.value,
      speed: speed.value,
      price: price.value,
      url: url.value,
      color: color.value,
      id: Math.random() * 100
    }

    cars.push(obj)
    writeData(cars)

    name.value = ""
    speed.value = ""
    price.value = ""
    url.value = ""
    color.value = ""
  }else{
    alert("hamma malumot kiritilganiga ishnch hosil qiling")
  }
  localStorage.setItem("cars",JSON.stringify(cars))
})






const writeData = (cars)=>{

  if(cars.length == ""){
    cardsEl.innerHTML = `<h1 class="textWrong" >Hech qanday ma'lumot yo'q</h1>`
  }else{
    cardsEl.innerHTML = ""


    cars.forEach((item) => {

      cardsEl.innerHTML += `
      <div class="card" style="width: 18rem;">
                            <img src="${item.url}" class="card-img-top object-fit-cover"
                                style="width: 100%; height: 200px;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${item.name} <span onclick="RemoveCar(${item.id})" class="trash"
                                        style="float: right; cursor: pointer; color: blue"><i
                                        class="fa-solid fa-trash"></i></span></h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Speed: ${item.speed} km/s</li>
                                <li class="list-group-item">Price:  ${item.price}$</li>
                                <li class="list-group-item">Color:  ${item.color}
                                  <span 
                                    style=
                                    "height: 20px; width: 20px; display: inline-block; background: ${item.color}"></span>
                                </li>
                            </ul>
                            <div class="card-body">
                                <a href="" class="card-link">more imgs</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
    `

    })
  }

  
}

writeData(cars)



const RemoveCar = (id)=>{
  cars = cars.filter((item)=>{
    return item.id != id
  })
  localStorage.setItem("cars",JSON.stringify(cars))
  writeData(cars)
}



