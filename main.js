// new Swiper('.carousel_main .carousel_wrapper', {
//     loop: true,
//     autoplay: {
//         delay: 3000x
//     }
// }); swiper.js 라이브러리 없으면 작동 안함

const slide = document.querySelector('.carousel-wrapper');
//슬라이드 크기 구하기 //clientWidth 요소의 가로값 가져오기
let slideWidth = slide.clientWidth;
// 값 변경을 위한 슬라이드 전체 선택
let slideItems = document.querySelectorAll(".carousel-slide");
//최대값이 보유한 슬라이드 수를 넘기지 않도록
const maxSlide = slideItems.length;
const pagination = document.querySelector(".slide-pagination");
//버튼 클릭시 현재 슬라이드 위치 나타내기
let slideNum = 1;

// 무한 슬라이드
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 슬라이드 앞뒤로 각각 마지막, 첫번쨰 슬라이드 붙여주기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItems = document.querySelectorAll(".carousel-slide");

let offset = slideWidth + slideNum;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

// 앞뒤 범위를 초과하지 않게 만들기

const SLIDE_DURATTION = .8;

function nextMove() {
  //슬라이드 번호 1 상승
  slideNum++;
  //불린 데이터 반환
  if (slideNum <= maxSlide) {
     //슬라이드 크기 * 슬라이드 번호
    const offset = slideWidth * slideNum;
    //슬라이드 전체 크기많큼 반복 순회 
    slideItems.forEach((i) => {
      //setAttribute('속성이름','속성값') 속성이름에 속성값 할당
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  } else {
    slideNum = 0;
    let offset = slideWidth * slideNum;
    slideItems.forEach((i) => {
      // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`); ${}  삭제 가능
      i.setAttribute("style", `transition: 0s; left: ${-offset}px`);
    });
    slideNum++;
    offset = slideWidth * slideNum;
    //setTimeout 특정시간 지난 후 코드 실행 함수
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${SLIDE_DURATTION}s; left: ${-offset}px`);
      });
      //딜레이 0
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  }
}
function prevMove() {
  slideNum--;
  if (slideNum > 0) {
    const offset = slideWidth * slideNum;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  } else {
    slideNum = maxSlide + 1;
    let offset = slideWidth * slideNum;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: 0s; left: ${-offset}px`);
    });
    slideNum--;
    offset = slideWidth * slideNum;
    setTimeout(() => {
      slideItems.forEach((i) => {
       i.setAttribute("style", `transition: ${SLIDE_DURATTION}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  }
}
// 페이지네이션 버튼 생성
for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide-pagination > li");

// 페이지네이션 작동 버튼
for (let i = 0; i < maxSlide; i++) {
  //클릭하면 동작
  paginationItems[i].addEventListener("click", () => {
    //i는 클릭한 슬라이드 번호 1은 기본 슬라이드 1번
    slideNum = i + 1; 
    const offset = slideWidth * slideNum;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  });
}

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

//루프, 딜레이
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);

// 두번째 캐러셀

let counter = 1;
// slideItems[slideItems.length - 1].after(startElem);

setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  //counter의 크기가 이미지의 개수를 초과할 경우
  if(counter > 5){
    // counter를 1로 초기화
    counter = 1;
  }
  //자동 슬라이드 딜레이
}, 3000);