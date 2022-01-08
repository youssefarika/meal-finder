let input = document.querySelector("input");
const button = document.querySelector(".but");
const APP_ID = "0f3d2b4a";
const APP_key = "31e28080681452e7eb080252b3721754";
const meals = document.querySelectorAll(".meals");
const cardone = document.querySelector(".card.one");
const cardtwo = document.querySelector(".card.two");
const cardthree = document.querySelector(".card.three");
const cardfour = document.querySelector(".card.four");
const cardfive = document.querySelector(".card.five");
const cardsix = document.querySelector(".card.six");
const cardseven = document.querySelector(".card.seven");
const cardeight = document.querySelector(".card.eight");
const cardnine = document.querySelector(".card.nine");

function visibility() {
  meals.forEach((meal) => {
    meal.style.visibility = "visible";
  });
}

async function get() {
  button.addEventListener("click", get);
  button.addEventListener("click", visibility);
  const response = await fetch(
    `https://api.edamam.com/search?q=${input.value}&app_id=${APP_ID}&app_key=${APP_key}`
  );
  const data = await response.json();
  console.log(data.hits);

  //   convert card one
  var sub = cardone.querySelector(".sub");
  var calo = cardone.querySelector(".calo");
  var diet = cardone.querySelector(".diet");
  var health = cardone.querySelector(".health");
  var img = cardone.querySelector("img");
  sub.innerText = data.hits[0].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[0].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[0].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[0].recipe.healthLabels[0]}`;
  img.src = data.hits[0].recipe.image;
  // create card of recipe
  var outrecione = document.querySelector(".out-reci.one");
  outrecione.innerHTML = `${data.hits[0].recipe.ingredientLines} <img src="${data.hits[0].recipe.image}" alt="">  <h4> ${data.hits[0].recipe.label} </h4>
              <div class="butt-reci">
              <button class="reci-but one"><i class="fas fa-times"></i></button>
              </div>
              `;
  var removeone = document.querySelector(".reci-but.one");
  removeone.onclick = function () {
    outrecione.classList.remove("show");
  };
  var getsone = document.querySelector(".get.one");
  getsone.onclick = function () {
    outrecione.classList.add("show");
  };
  //   convert card two
  var sub = cardtwo.querySelector(".sub");
  var calo = cardtwo.querySelector(".calo");
  var diet = cardtwo.querySelector(".diet");
  var health = cardtwo.querySelector(".health");
  var img = cardtwo.querySelector("img");
  sub.innerText = data.hits[1].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[1].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[1].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[1].recipe.healthLabels[1]}`;
  img.src = data.hits[1].recipe.image;
  // create card of recipe
  var outrecitwo = document.querySelector(".out-reci.two");
  outrecitwo.innerHTML = `${data.hits[1].recipe.ingredientLines} <img src="${data.hits[1].recipe.image}" alt="">  <h4> ${data.hits[1].recipe.label} </h4>
        <div class="butt-reci">
        <button class="reci-but two"><i class="fas fa-times"></i></button>
        </div>
        `;
  var removetwo = document.querySelector(".reci-but.two");
  removetwo.onclick = function () {
    outrecitwo.classList.remove("show");
  };

  var getss = document.querySelector(".get.two");
  getss.onclick = function () {
    outrecitwo.classList.add("show");
  };
  //   convert card three
  var sub = cardthree.querySelector(".sub");
  var calo = cardthree.querySelector(".calo");
  var diet = cardthree.querySelector(".diet");
  var health = cardthree.querySelector(".health");
  var img = cardthree.querySelector("img");
  sub.innerText = data.hits[2].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[2].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[2].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[2].recipe.healthLabels[2]}`;
  img.src = data.hits[2].recipe.image;
  // create card of recipe
  var outrecithree = document.querySelector(".out-reci.three");
  outrecithree.innerHTML = `${data.hits[2].recipe.ingredientLines} <img src="${data.hits[2].recipe.image}" alt="">  <h4> ${data.hits[2].recipe.label} </h4>
          <div class="butt-reci">
          <button class="reci-but three"><i class="fas fa-times"></i></button>
          </div>
          `;
  var removethree = document.querySelector(".reci-but.three");
  removethree.onclick = function () {
    outrecithree.classList.remove("show");
  };
  var getssthree = document.querySelector(".get.three");
  getssthree.onclick = function () {
    outrecithree.classList.add("show");
  };
  //   convert card four
  var sub = cardfour.querySelector(".sub");
  var calo = cardfour.querySelector(".calo");
  var diet = cardfour.querySelector(".diet");
  var health = cardfour.querySelector(".health");
  var img = cardfour.querySelector("img");
  sub.innerText = data.hits[3].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[3].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[3].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[3].recipe.healthLabels[3]}`;
  img.src = data.hits[3].recipe.image;
  // create card of recipe
  var outrecifour = document.querySelector(".out-reci.four");
  outrecifour.innerHTML = `${data.hits[3].recipe.ingredientLines} <img src="${data.hits[3].recipe.image}" alt="">  <h4> ${data.hits[3].recipe.label} </h4>
            <div class="butt-reci">
            <button class="reci-but four"><i class="fas fa-times"></i></button>
            </div>
            `;
  var removefour = document.querySelector(".reci-but.four");
  removefour.onclick = function () {
    outrecifour.classList.remove("show");
  };
  var getssfour = document.querySelector(".get.four");
  getssfour.onclick = function () {
    outrecifour.classList.add("show");
  };
  //   convert card five
  var sub = cardfive.querySelector(".sub");
  var calo = cardfive.querySelector(".calo");
  var diet = cardfive.querySelector(".diet");
  var health = cardfive.querySelector(".health");
  var img = cardfive.querySelector("img");
  sub.innerText = data.hits[4].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[4].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[4].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[4].recipe.healthLabels[4]}`;
  img.src = data.hits[4].recipe.image;
  // create card of recipe
  // create card of recipe
  var outrecifive = document.querySelector(".out-reci.five");
  outrecifive.innerHTML = `${data.hits[4].recipe.ingredientLines} <img src="${data.hits[4].recipe.image}" alt="">  <h4> ${data.hits[4].recipe.label} </h4>
            <div class="butt-reci">
            <button class="reci-but five"><i class="fas fa-times"></i></button>
            </div>
            `;
  var removefive = document.querySelector(".reci-but.five");
  removefive.onclick = function () {
    outrecifive.classList.remove("show");
  };
  var getssfive = document.querySelector(".get.five");
  getssfive.onclick = function () {
    outrecifive.classList.add("show");
  };
  //   convert card six
  var sub = cardsix.querySelector(".sub");
  var calo = cardsix.querySelector(".calo");
  var diet = cardsix.querySelector(".diet");
  var health = cardsix.querySelector(".health");
  var img = cardsix.querySelector("img");
  sub.innerText = data.hits[5].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[5].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[5].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[5].recipe.healthLabels[5]}`;
  img.src = data.hits[5].recipe.image;
  // create card of recipe
  var outrecisix = document.querySelector(".out-reci.six");
  outrecisix.innerHTML = `${data.hits[5].recipe.ingredientLines} <img src="${data.hits[5].recipe.image}" alt="">  <h4> ${data.hits[5].recipe.label} </h4>
              <div class="butt-reci">
              <button class="reci-but six"><i class="fas fa-times"></i></button>
              </div>
              `;
  var removesix = document.querySelector(".reci-but.six");
  removesix.onclick = function () {
    outrecisix.classList.remove("show");
  };
  var getssix = document.querySelector(".get.six");
  getssix.onclick = function () {
    outrecisix.classList.add("show");
  };

  //   convert card seven
  var sub = cardseven.querySelector(".sub");
  var calo = cardseven.querySelector(".calo");
  var diet = cardseven.querySelector(".diet");
  var health = cardseven.querySelector(".health");
  var img = cardseven.querySelector("img");
  sub.innerText = data.hits[6].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[6].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[6].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[6].recipe.healthLabels[6]}`;
  img.src = data.hits[6].recipe.image;
  // create card of recipe
  var outreciseven = document.querySelector(".out-reci.seven");
  outreciseven.innerHTML = `${data.hits[6].recipe.ingredientLines} <img src="${data.hits[6].recipe.image}" alt="">  <h4> ${data.hits[6].recipe.label} </h4>
              <div class="butt-reci">
              <button class="reci-but seven"><i class="fas fa-times"></i></button>
              </div>
              `;
  var removeseven = document.querySelector(".reci-but.seven");
  removeseven.onclick = function () {
    outreciseven.classList.remove("show");
  };
  var getsseven = document.querySelector(".get.seven");
  getsseven.onclick = function () {
    outreciseven.classList.add("show");
  };
  //   convert card eight
  var sub = cardeight.querySelector(".sub");
  var calo = cardeight.querySelector(".calo");
  var diet = cardeight.querySelector(".diet");
  var health = cardeight.querySelector(".health");
  var img = cardeight.querySelector("img");
  sub.innerText = data.hits[7].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[7].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[7].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[7].recipe.healthLabels[7]}`;
  img.src = data.hits[7].recipe.image;
  // create card of recipe
  var outrecieight = document.querySelector(".out-reci.eight");
  outrecieight.innerHTML = `${data.hits[7].recipe.ingredientLines} <img src="${data.hits[7].recipe.image}" alt="">  <h4> ${data.hits[7].recipe.label} </h4>
              <div class="butt-reci">
              <button class="reci-but eight"><i class="fas fa-times"></i></button>
              </div>
              `;
  var removeeight = document.querySelector(".reci-but.eight");
  removeeight.onclick = function () {
    outrecieight.classList.remove("show");
  };
  var getseight = document.querySelector(".get.eight");
  getseight.onclick = function () {
    outrecieight.classList.add("show");
  };

  //   convert card nine
  var sub = cardnine.querySelector(".sub");
  var calo = cardnine.querySelector(".calo");
  var diet = cardnine.querySelector(".diet");
  var health = cardnine.querySelector(".health");
  var img = cardnine.querySelector("img");
  sub.innerText = data.hits[8].recipe.label;
  calo.innerText = `Calories: ${Math.floor(data.hits[8].recipe.calories)}`;
  diet.innerText = `Diet lavel: ${data.hits[8].recipe.dietLabels}`;
  health.innerText = `Health Labels: ${data.hits[8].recipe.healthLabels[7]}`;
  img.src = data.hits[8].recipe.image;
  // create card of recipe
  var outrecinine = document.querySelector(".out-reci.nine");
  outrecinine.innerHTML = `${data.hits[8].recipe.ingredientLines} <img src="${data.hits[8].recipe.image}" alt="">  <h4> ${data.hits[8].recipe.label} </h4>
              <div class="butt-reci">
              <button class="reci-but nine"><i class="fas fa-times"></i></button>
              </div>
              `;
  var removenine = document.querySelector(".reci-but.nine");
  removenine.onclick = function () {
    outrecinine.classList.remove("show");
  };
  var getsnine = document.querySelector(".get.nine");
  getsnine.onclick = function () {
    outrecinine.classList.add("show");
  };
}
get();
