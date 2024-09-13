// new Swiper('.carousel_main .carousel_wrapper', {
//     loop: true,
//     autoplay: {
//         delay: 3000x
//     }
// }); swiper.js 라이브러리 없으면 작동 안함

// js 전체 모둘화해서 export로 내보내기
// 캐러셀마다 적용시키기 위해 target으로 적용시킬 캐러셀 선택 delay로 시간 선택
const createCarousel = (target, delay) => {
  const slide = document.querySelector(target);
  //슬라이드 크기 구하기 //clientWidth 요소의 가로값 가져오기
  // slideWidth 제거 resetCarouselItemsPoint에서 slide.clientWidth 직접 사용
  // let slideWidth = slide.clientWidth;
  // 값 변경을 위한 슬라이드 전체 선택
  let slideItems = slide.querySelectorAll(".carousel-slide");
  //최대값이 보유한 슬라이드 수를 넘기지 않도록
  const maxSlide = slideItems.length;
  const pagination = slide.querySelector(".slide-pagination");
  //버튼 클릭시 현재 슬라이드 위치 나타내기
  // 1이면 마지막에서 2로 끊어져서
  // 0이면 마지막에서 1로 끊어져서
  // -1이면 마지막에서 1로 시간 2배
  let slideNum = 1;

  const makeLoopSlide = () => {
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
  };
  
  makeLoopSlide()
  // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
  slideItems = slide.querySelectorAll(".carousel-slide");

  // offset과 slideWidth의 값이 변하는것을 추적하던 것을 slide를 사용하여 추적하도록 변경한다 
  // let offset = slideWidth * slideNum;

  // 중복코드였던 slideItems.forEach((i) => {i.setAttribute("style", `left: ${-offset}px`);});를 아래 내용처럼 함수로 뽑아서 사용
  // 슬라이드 크기많큼 반복 선회
  const resetCarouselItemsPoint = (zeroTransition = false) => {

    slideItems.forEach((i) => {
      // offset을 resetCarouselItemsPoint 내부에서 선언한다.
      // 슬라이드 번호 * 슬라이드 크기
      const offset = slideNum * slide.clientWidth;
      //if 문을 사용하여 zeroTransition의 값이 기본값인 false면 else문을 실행하도록 한다.
      //true면 if문을 실행
      if(zeroTransition) {
        i.setAttribute("style", `transition: 0s; left: ${-offset}px`);
      } else {
        i.setAttribute("style", `left: ${-offset}px`);
      }
    });
  }
  // 페이지 번호에 따른 active 설정 로직에 관한 내용 함수화하여 중복제거
  const resetActivePagination = () => {
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[slideNum - 1].classList.add("active");
  }

  function nextMove() {
    //슬라이드 번호 1 상승
    slideNum++;
    //불린 데이터 반환
    if (slideNum <= maxSlide) {
      resetCarouselItemsPoint()
      resetActivePagination()
    } else {
      slideNum = 0;
      resetCarouselItemsPoint(true)
      slideNum++;
      resetCarouselItemsPoint()
      resetActivePagination()
    }
  }
  // 페이지네이션 버튼 생성
  for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
  }

  const paginationItems = slide.querySelectorAll(".slide-pagination > li");

  // 페이지네이션 작동 버튼
  for (let i = 0; i < maxSlide; i++) {
    //클릭하면 동작
    paginationItems[i].addEventListener("click", () => {
      //i는 클릭한 슬라이드 번호 1은 기본 슬라이드 1번
      slideNum = i + 1; 
      // const offset = slideWidth * slideNum;
      clearInterval(loopInterval);
      loopInterval = setInterval(() => {nextMove();}, delay);
      resetCarouselItemsPoint();
      resetActivePagination()
    });
  }

  // slideWidth를 제거
  // window.addEventListener("resize", () => {
  //   slideWidth = slide.clientWidth;
  // });

  //루프, 딜레이
  let loopInterval = setInterval(() => {
    nextMove();
  }, delay);

  // 슬라이드 초기 설정

  resetCarouselItemsPoint()
};

export default createCarousel;