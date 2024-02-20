// main button
function buttonClick() {
  triketSecthionShow();
  triketHiden()
}
// trciket submit section hiden 
function triketHiden() {
  const show = document.getElementById("tricket-id");
  show.classList.add("hidden");
}
// confarmation mail hiden 
function triketContune() {
  const show = document.getElementById("my_modal_2");
  show.classList.add("hidden");;
}
// tricker submit secsiton show display
function triketSecthionShow() {
  const show = document.getElementById("submit");
  show.classList.remove("hidden");
}

// shit on clik
const seclets = document.getElementsByTagName("li");
let count = 0;
let counts = 40;
let tricketPrice = 0;
let shitCount=0;
let arryShit=[];
// const arrayLant=0

for (const seclet of seclets) {
  seclet.addEventListener("click", function () {
    count = count + 1;
    counts = counts - 1;
    shitCount = shitCount + 1 ;
    tricketPrice = tricketPrice + 550;
    

    if(shitCount <= 4){
      
      // const value = seclet.innerText;
      // shitPositiveCount("total-price", tricketPrice);
      // shitPositiveCount("final-price", tricketPrice);
      // shitPositiveCount("positve-shit", count);
      // avibleShit("Available-shit",counts)
      //  showsShit("shit", value);
      // setClass("set-class");
      // money("set-money");
      // seclet.classList.add("bg-green-300");
      
      const value = seclet.innerText;
      if(arryShit.includes(value) === false){
       
        shitPositiveCount("total-price", tricketPrice);
        shitPositiveCount("final-price", tricketPrice);
        shitPositiveCount("positve-shit", count);
        avibleShit("Available-shit",counts)
         showsShit("shit", value);
        setClass("set-class");
        money("set-money");
        seclet.classList.add("bg-green-300");
        
        arryShit.push(value)
       
     
        //  arrayLant=arryShit.langht()
        //  console.log(arrayLant )
         
      }
      else{
        return alert('You sclet Multipul Shit') 
       
        
      }
        
    }
    else{
    return alert('maximun you scelete 4 Shit')
    
    }
    
  });
}
// apply id hiden 
function applytHiden() {
  const show = document.getElementById("apply-hiden");
  show.classList.add("hidden");
}

function getCopunValu(){
  const cuponCode=document.getElementById('cupon').value
  return cuponCode
 
}
// appy copun 

function cuponAppy(){
  const cupon= getCopunValu()
  const discount15='NEW15';
 
if(cupon === 'NEW15' || cupon === 'Couple 20'){
   if(cupon === 'NEW15'){
    const newPrice= tricketPrice * 15 / 100;
   const discountPrice=tricketPrice-newPrice;
   shitPositiveCount('final-price',discountPrice)
   applytHiden()
   }
   else{
    const newPrice= tricketPrice * 20 / 100;
    const discountPrice=tricketPrice-newPrice;
    shitPositiveCount('final-price',discountPrice)
    applytHiden()
   }
  }
 else{
  alert ('Invalid cupon')
}
}



// tricketPriceTotal

//   shit count
function shitPositiveCount(id, values) {
  const element = document.getElementById(id);
  element.innerText = values;
}
// avible avibe shit
function avibleShit(id, value) {
  const avible = document.getElementById(id);
  const number = parseInt(avible);
  number.innerText = value;
  avible.innerText = value;
  return number;
}
// set background color
function setBackground(elements) {
  const element = document.getElementById(elements);
  element.classList.add("bg-amber-200");
  return element;
}

// set shows display
function showsShit(id, name) {
  const selector = document.getElementById(id);
  const h4 = document.createElement("h4");
  h4.innerText = name;
  selector.appendChild(h4);
}
// set class
function setClass(name) {
  const selector = document.getElementById(name);
  const h4 = document.createElement("h4");
  h4.innerText = "Economoy";
  selector.appendChild(h4);
}
// set money
function money(name) {
  const selector = document.getElementById(name);
  const h4 = document.createElement("h4");
  h4.innerText = "550";
  selector.appendChild(h4);
}
