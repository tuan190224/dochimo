const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const APP_STORAGE = 'DOCHIMO_STORAGE'

var HomeItem = $('.homeItem')
const home_item = $('.home-item')
const active_item = $('.active-item')
const itemAdd = $('.active-item>.card')

const activeItem = $('.activeItem')
const collapse = $('.collapse')
const body = $('.body')
var Category = ''
var Rate = 0

const cardActive = $('.card-active')
const btnPrimary = $('.btn')
const navbar = $('.navbar')
const imgHeader = $('.imgHeader')
const card = $('.card')
const electronics = $('.electronics')
const Mens = $('.Mens')
const Women = $('.Women')
const Home = $('.Home')
// cart
var mainWrapper = $('.main-wrapper')
const cart = $('.cart')
const btnExit = $('.btn-exit')
const btnOderConfirm = $('.btn-oder-confirm')
// checkAddress
const checkAddress = $('.check-address')
const closeAddressBtn = $('.close-ck-address')

const leftContainer = $('.leftContainer')
const rightText = $('.right-text')
var sumItem = $$('.sumItem')
var Price = $$('.price')
var positionAbsolute = $('.position-absolute')
var footer = $('.footer')
// -------------------------------//

imgHeader.style.marginTop = navbar.scrollHeight + 'px'
mainWrapper.style.marginTop = navbar.scrollHeight + 'px'
checkAddress.style.marginTop = navbar.scrollHeight + 'px'
//console.log(navbar.scrollHeight)

////localStorage.setItem(APP_STORAGE, JSON.stringify([{ tuan: 26 }]))
//console.log(localStorage)

fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
        console.log(json)

        var app = {
            items: json,
            configStorage: JSON.parse(localStorage.getItem(APP_STORAGE)) || {},
            cartItems: [],
            LoadedLocalStorage: function () {
                app.cartItems = app.configStorage.cartItems || []
                console.log()
            },

            render: function () {
                var htmls = this.items.map((item) => {
                    if (Category === '' && item.rating.rate >= Rate) {
                        return `
                        <div class="card id_${item.id} animation2 " style="width: 18rem;"  "> 
                            <div class="cardImg">
                                <img src="${item.image}"/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title card-text">${item.title}</h5>
                                <p class="card-text">${item.description}</p>
                                <div class="range">
                                    

                                    <table class="rangeTable">
                                    <tr>
                                        <td class="rangeNumber">1</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${
                                                item.rating.rate
                                            }%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td class="rangeNumber">2</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${
                                                item.rating.rate * 2.5
                                            }%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rangeNumber">3</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${
                                                item.rating.rate * 3
                                            }%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rangeNumber">4</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${
                                                item.rating.rate * 10
                                            }%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rangeNumber">5</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: 95%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                    </tr>
                                    
                                    </table>

                                    <table class="star">
                                            <tr>
                                                <td colspan="5" class="starNumber" >
                                                    <h1>
                                                    ${item.rating.rate}
                                                    </h1>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 1
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 0.5 && item.rating.rate < 1
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                    </svg>
                                                </td>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 2
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 1.5 && item.rating.rate < 2
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                    </svg>
                                                </td>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 3
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 2.5 && item.rating.rate < 4
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                    </svg>
                                                </td>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 4
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 3.5 && item.rating.rate < 4
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                        </svg>
                                                </td>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 5
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 4.5 && item.rating.rate < 5
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                        </svg>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="5" class="starText">
                                                    <p>Dựa trên ${item.rating.count} đánh giá</p>
                                                </td>
                                            </tr>
                                    </table>
                            </div>
                                
                                    
                            
                                <p class="card-text profuct-price">
                                    <span class="product-price-sale">${item.price.toFixed(1)} vnd</span>
                                        <del class="product-price">${(item.price + item.price * 0.3).toFixed(
                                            1
                                        )} vnd</del>
                                </p>
                                <a href="" class="btn btn-primary " data-index="${item.id}" >Mua ngay</a>
                            </div>
                        </div>
                        `
                    } else if (item.category === Category) {
                        return `
                        <div class="card id_${item.id} animation2 " style="width: 18rem;"  "> 
                            <div class="cardImg">
                                <img src="${item.image}"/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title card-text">${item.title}</h5>
                                <p class="card-text">${item.description}</p>
                                <div class="range">
                                    

                                    <table class="rangeTable">
                                    <tr>
                                        <td class="rangeNumber">1</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${
                                                item.rating.rate
                                            }%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td class="rangeNumber">2</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${
                                                item.rating.rate * 2.5
                                            }%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rangeNumber">3</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${
                                                item.rating.rate * 3
                                            }%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rangeNumber">4</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: ${
                                                item.rating.rate * 10
                                            }%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rangeNumber">5</td>
                                        <td>
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style="width: 95%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </td>
                                    </tr>
                                    
                                    </table>

                                    <table class="star">
                                            <tr>
                                                <td colspan="5" class="starNumber" >
                                                    <h1>
                                                    ${item.rating.rate}
                                                    </h1>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 1
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 0.5 && item.rating.rate < 1
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                    </svg>
                                                </td>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 2
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 1.5 && item.rating.rate < 2
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                    </svg>
                                                </td>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 3
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 2.5 && item.rating.rate < 4
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                    </svg>
                                                </td>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 4
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 3.5 && item.rating.rate < 4
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                        </svg>
                                                </td>
                                                <td class="starIcon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill yelllwStarting" viewBox="0 0 16 16">
                                                    ${
                                                        item.rating.rate > 5
                                                            ? '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'
                                                            : item.rating.rate > 4.5 && item.rating.rate < 5
                                                            ? '<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>'
                                                            : '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'
                                                    }
                                                        </svg>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="5" class="starText">
                                                    <p>Dựa trên ${item.rating.count} đánh giá</p>
                                                </td>
                                            </tr>
                                    </table>
                            </div>
                                
                                    
                            
                                <p class="card-text profuct-price">
                                    <span class="product-price-sale">${item.price.toFixed(1)} vnd</span>
                                        <del class="product-price">${(item.price + item.price * 0.3).toFixed(
                                            1
                                        )} vnd</del>
                                </p>
                                <a href="#" class="btn btn-primary " data-index="${item.id}" >Mua ngay</a>
                            </div>
                        </div>
                        `
                    }
                })
                //console.log(htmls)

                home_item.innerHTML = htmls.join('')
            },
            cartRender: function () {
                positionAbsolute.textContent = app.cartItems.length
                var sumPrice = 0
                var htmlCart = app.cartItems.map((item) => {
                    const Id = app.items.find((i) => {
                        return i.id === item.id
                    })
                    //console.log(Id)
                    sumPrice += Number((Id.price * item.sl).toFixed(2))
                    Number
                    return Id != undefined
                        ? `
                    <div class="cartItem " >
                    <div class="img-item">
                    <img  src="${Id.image}" alt=""></div>
                    <div class="content-item">
                      <div class="content-wrapper">
                        <ul>
                          <li class="name-item"><h4>${Id.title}</h4></li>
                          <li class="id-item">
                            <sapn>Mã sản phẩm </sapn><sapn>${Id.id}</sapn>
                        </li>
                          <li class="color-item"><span>red</span></li>
                          <li class="size-item"><span>size</span> <span>L</span></li>
                          <li class="onsale-item">Sale</li>
                        </ul>
                        
                        <div class="contentBottom">
                        <div class="box">
                        <p>Số Lượng</p>
                        <input type="text" name="" id="" value="${item.sl}">
                        </div>
                        <div class="subtotal">
                        
                        <p>${Id.price * item.sl} VND</p>
                        </div>
                        </div>
                        
                        </div>
                        
                        </div> 
                        <div class="del-bt" data-index = "${Id.id}">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                          </svg>
                        </div>
                  
                  </div>
                    `
                        : ''
                })
                leftContainer.innerHTML = htmlCart.join('')
                //console.log(sumPrice)
                //console.log(app.cartItems.length)
                sumItem.forEach((element) => {
                    element.textContent = app.cartItems.length
                })

                Price.forEach((element) => {
                    element.innerHTML = sumPrice.toFixed(3) + ' vnd'
                })
            },

            handleEvents: function () {
                // preventDefault a
                function stopOpeningURL(a) {
                    a.preventDefault()
                    if (Number(a.srcElement.dataset.index) >= 0 && a.srcElement.dataset.index != '') {
                        addProduct(a)
                        // app.cartItems.push(Number(a.srcElement.dataset.index))
                        // console.log(app.cartItems)
                        positionAbsolute.textContent = app.cartItems.length
                    }
                }

                // add product for cart
                function addProduct(product) {
                    const NewProduct = Number(product.srcElement.dataset.index)

                    var ck = false
                    for (const key in app.cartItems) {
                        ck = app.cartItems[key].id === NewProduct
                        //console.log(ck)
                        if (ck) {
                            app.cartItems[key].sl += 1
                            localStorage.setItem(APP_STORAGE, JSON.stringify({ cartItems: app.cartItems }))
                            break
                        }
                    }
                    if (!ck) {
                        app.cartItems.push({ id: NewProduct, sl: 1 })
                        localStorage.setItem(APP_STORAGE, JSON.stringify({ cartItems: app.cartItems }))
                    }
                    //console.log(app.cartItems)
                    // if (CheckProduct) {
                    //     app.cartItems[CheckProduct].sl += 1
                    //     console.log(app.cartItems[CheckProduct])
                    // } else {
                    //     app.cartItems.push({ id: NewProduct, sl: 1 })
                    //     console.log(app.cartItems)
                    // }
                    // //console.log(app.cartItems)
                    // positionAbsolute.textContent = app.cartItems.length
                }
                // click product
                HomeItem.onclick = (e) => {
                    const node = e.target.closest('.card')
                    if (e.target.closest('.btn')) {
                        stopOpeningURL(e)
                    } else if (node) {
                        console.log(node)
                        activeItem(node)
                    }
                }

                navbar.onclick = (e) => {
                    const a = e.target.closest('a')
                    if (a) {
                        stopOpeningURL(e)
                    }
                }

                leftContainer.onclick = (e) => {
                    const delBtn = e.target.closest('.del-bt')
                    const delID = delBtn.dataset.index
                    console.log(delID)
                    if (delBtn) {
                        app.cartItems.forEach((item, index) => {
                            if (item.id === Number(delID)) {
                                app.cartItems.splice(index, 1) // xoa pt
                                //console.log(app.cartItems)
                                positionAbsolute.textContent = app.cartItems.length
                                app.cartRender()
                            }
                        })
                    }
                }

                function activeItem(node) {
                    //console.log(node.classList[1])
                    const a = node.classList[1]
                    const html = $('.' + a).innerHTML

                    itemAdd.innerHTML = html
                    active_item.classList.add('activeItem')
                }

                active_item.onclick = (e) => {
                    active_item.classList.remove('activeItem')
                }

                //-------------------------------//

                cardActive.onclick = (e) => {
                    e.target.closest('a')
                    if (e.target.closest('a')) {
                        stopOpeningURL(e)
                        // console.log(e.target.closest('.btn').dataset.index)
                        // app.cartItems.push(Number(e.target.closest('.btn').dataset.index))
                        // console.log(app.cartItems)
                    }
                    e.stopPropagation()
                }

                function removeClassActive() {
                    $('.active').classList.remove('active')
                }
                function home_item_style_img_disabled() {
                    home_item.style.marginTop = navbar.scrollHeight + 'px'
                    //console.log(home_item.style)
                    for (const key in imgHeader.classList) {
                        var k = imgHeader.classList[key] === 'disabled'
                    }
                    if (!k) {
                        imgHeader.classList.add('disabled')
                    }
                    // if (!imgHeader.classList.some((img) => (img = 'disabled'))) {
                    // } else {
                    //     imgHeader.classList.add('disabled')
                    // }
                }
                //-------------------------------//

                Mens.onclick = () => {
                    Category = "men's clothing"
                    Mens.classList.add('active')
                    home_item_style_img_disabled()

                    removeClassActive()
                    app.render()
                    btnExit.click()
                }

                Women.onclick = () => {
                    Category = "women's clothing"
                    Women.classList.add('active')
                    home_item_style_img_disabled()
                    removeClassActive()
                    app.render()
                    btnExit.click()
                }

                electronics.onclick = () => {
                    Category = 'electronics'
                    electronics.classList.add('active')
                    home_item_style_img_disabled()
                    removeClassActive()
                    app.render()
                    btnExit.click()
                }

                Home.onclick = () => {
                    Rate = 4
                    Category = ''
                    //home_item.removeAttr('style') // xoa style da them
                    home_item.style.marginTop = ''
                    imgHeader.classList.remove('disabled')
                    Home.classList.add('active')
                    removeClassActive()
                    app.render()
                    btnExit.click()
                }

                // ------cart ---
                cart.onclick = (e) => {
                    imgHeader.classList.add('disabled')
                    home_item.classList.add('animation1')
                    setInterval(() => footer.classList.add('disabled'), 2000)
                    setTimeout(() => {
                        home_item.classList.add('disabled')
                        home_item.classList.remove('animation1')
                    }, 900)
                    setTimeout(() => {
                        mainWrapper.classList.remove('disabled')
                        // mainWrapper.classList.add('animation4')
                    }, 500)
                    setTimeout(() => {}, 2000)
                    setTimeout(() => {
                        //mainWrapper.classList.remove('animation4')
                    }, 3500)

                    // setTimeout(() => {
                    //     mainWrapper.classList.add('animation2')
                    // }, 3000)
                    app.cartRender()
                }

                btnOderConfirm.onclick = () => {
                    checkAddress.classList.remove('disabled')
                    mainWrapper.classList.remove('animation2')
                    mainWrapper.classList.add('animation1')
                    setTimeout(() => {
                        mainWrapper.classList.add('disabled', 'animation2')
                        mainWrapper.classList.remove('animation1')
                    }, 900)
                }

                btnExit.onclick = () => {
                    mainWrapper.classList.remove('animation2')
                    mainWrapper.classList.add('animation1')
                    setTimeout(() => {
                        mainWrapper.classList.add('disabled', 'animation2')
                        mainWrapper.classList.remove('animation1')
                    }, 900)
                    setTimeout(() => {
                        home_item.classList.add('animation2')
                        home_item.classList.remove('disabled', 'animation1')
                    }, 1000)
                    setTimeout(() => {
                        home_item.classList.remove('animation2')
                    }, 2500)
                    //setTimeout(() => home_item.classList.remove('animation2'), 2000)
                    home_item_style_img_disabled()
                }
                //--------------------------//
                closeAddressBtn.onclick = () => {}
            },

            start: function () {
                // setTimeout(() => {
                //     Home.click
                // }, 2000)
                this.LoadedLocalStorage()
                this.render()
                this.cartRender()
                this.handleEvents()
            },
        }

        app.start()
    })
