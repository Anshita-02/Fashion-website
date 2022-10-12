const slider = document.querySelector("#slider");
const test = document.querySelectorAll(".slide");

const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");

// let counter=0;

// const goNext = function(){
//     counter++;
//     slideImg();
//     if(counter==test.length-1)
//     counter=0;
// }

// const goPrev = function(){
//     counter--;
//     slideImg();
// }

// const slideImg = () =>{
//     test.forEach(function(val){
//         val.style.transform = `translateX(-${counter*100}%)`;
//     })
// }
let maxSlide = test.length;
let curSlide=0;

const goToSlide = function(slide){
test.forEach((s,i)=>
    s.style.transform = `translateX(${100*(i-slide)}%)`);
  };


  const goNext = function(){
    if(curSlide===maxSlide-1){
      curSlide=0;
    }
    else{
      curSlide++;
    }
    goToSlide(curSlide);//for curSlide=1: -100% 0% 100% 200%
    
  }
  
  //previous slide
  const goPrev = function(){
    if(curSlide===0){
      curSlide = maxSlide-1;
    }else{
      curSlide--;
    }
    goToSlide(curSlide);
   
  };
nextbtn.addEventListener("click",goNext);
prevbtn.addEventListener("click",goPrev) 