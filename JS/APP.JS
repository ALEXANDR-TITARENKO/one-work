


function rez(){

    document.querySelector('.intro_content').innerHTML = `<div class="rezume"></div> `
    let row = document.createElement('div')
    row.innerHTML = `<div class="intro_subtitle"><h1>Я проживаю в городе Оренбург</h1><p>Изучаю JavaScript с января месяца</p><p>Планирую на этом зарабатывать</p></div>
    <a href="#nul" class="btn" onclick="ret()">назад</a>`
    
    document.querySelector('.rezume').appendChild(row)
}


function ret(){

          document.querySelector('.intro_content').innerHTML = ` <h2 class="intro_subtitle">Привет! Меня зовут</h2>
    <h1 class="intro_title">Александр Александрович</h1>
    <div class="social">
     <a class="social_inner" href="https://www.facebook.com/profile.php?id=100003353176204"><img src="images/Facebook.png" width="40" alt=""></a>
     <a class="social_inner" href="https://www.instagram.com/alexandr_titarenko_25/"><img src="images/Instagram.png" width="40" alt=""></a>
     <a class="social_inner" href="https://www.viber.com/ru/"><img src="images/Viber.png" width="40" alt=""></a>
     <a class="social_inner" href="https://vk.com/alexandertitarenk0"><img src="images/VK.png" width="40" alt=""></a>
     <a class="social_inner" href="https://www.whatsapp.com/?lang=ru"><img src="images/WhatsApp.png" width="40" alt=""></a>
     <a class="social_inner" href="https://www.youtube.com/"><img src="images/YouTube.png" width="40" alt=""></a>
    </div>
    <button class="btn" type="button"  onclick="show('block')" href="">Сделайте заявку</button>
         <button class="btn" type="button" id="rezum" onclick="rez()" href="">Обо мне</button>`
   
}

function cont(){
    document.querySelector('.intro_content').innerHTML= `<div class="con"> </div>`
    let row = document.createElement('div')
    row.innerHTML = `<div class="intro_subtitle"><h1>Мой номер телефона</h1><p><a href="tel:89328476343" class="btn2">+7-(932)-847-63-43</a></p>
    <p><a class ="btn2" href="mailto: hammer94@mail.ru">Напишите мне на почту</a></p>
</div>
    <a href="#nul" class="btn" onclick="ret()">назад</a>`
    document.querySelector('.con').appendChild(row)
}

const achros = document.querySelectorAll(`a[href*="#top"]`)
for (let achr of achros ){
    achr.addEventListener('click', function(event){
         event.preventDefault()
         const blockID = achr.getAttribute('href')
         document.querySelector("" + blockID).scrollIntoView({
             behavior: "smooth",
             block: "start"
         })
    })
}



const show = function(atr){
    document.getElementById('modalForm').style.display = atr
    document.getElementById('filter').style.display = atr

}



const cart = [
    {id:1,time: 2021 , title: 'Гостинная' , price: 'Дизайн', img: 'images/1diz.JPG'},
    {id:2,time: 2018 , title: 'Прихожая' , price:'Ремонт', img:'images/2diz.JPG' },
    {id:3,time: 2022 , title: 'Спальня' , price:'Косметический', img:'images/3diz.JPG'},
    {id:4,time: 2010 , title: 'Кухня' , price:'Косметический', img:'images/4diz.JPEG'},
    {id:5,time: 2012 , title: 'Санузел' , price:'Капитальный', img:'images/5diz.JPEG'},
    {id:6,time: 2002 , title: 'Прихожая' , price:'Косметический', img:'images/6diz.JPEG'},
    {id:7,time: 2018 , title: 'Корридор' , price:'Основной', img:'images/7diz.JPEG'},
    {id:8,time: 2020 , title: 'Спальня' , price:'Косметический', img:'images/8diz.JPEG'},
    {id:9,time: 2021 , title: 'Спальня' , price:'Косметический', img:'images/9diz.JPEG'},


]
const toHTML = atr =>       //создали константу с динамической карточкой фрукта
` <div class="portfolio_col">
                       
<div class="works" id="top">
        <img class="works_images"src="${atr.img}" id="${atr.id}" onclick="imgCart()" alt="" data-btn="YES" data-id="${atr.id}" >


   <div class="works_content">${atr.title}</div>
   <div class="works_cat">${atr.price}

       <time class="works_dat">${atr.time}</time>
   </div>

</div>
</div>`
     
      
function render(){                                              //функция вставляет html 
        const html = cart.map(toHTML).join('')                      //прошлись по массиву с фруктами, добавив метод добавления  html, соеденив все в строку
        document.querySelector('#atr').innerHTML = html   // вставляем html после #fruits
    }
 render()


function imgCart(){

    document.addEventListener('click', event=>{  
        
         const btn = event.target.dataset.btn    // отсортировал по data отрибуту
         const id = +event.target.dataset.id
                 
            if(btn === "YES"){                        //Условие если YES то обрабатываем событие
                const i = cart.find(f=>f.id === id)
                  document.querySelector('#atr').innerHTML=`
                  
                <div class="over" onclick="render()">
                     <div class = "con" >
                            <center> <img class="zoom" src="${i.img}"></center>
                             <div class="titl">${i.title}</div>
                     </div>
                 </div>
                
                     ` 
                     console.log(i)
            }
    })
} 
                    

