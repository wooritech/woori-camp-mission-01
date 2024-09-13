# WOORI PET FOOD

## 2024-01-18-01

우리펫푸드 사이드 미션을 시작했다.  
vscode의 branch 연결에서 꼬여서 시간을 날렸다.  

지식+

- main이 아닌 브랜치에 연결할 경우에는 소스 제어의 리포지터리 복제를 누르고 연결한 뒤 순번대로  
  1. git remote add origin [복사한 주소]
  2. git pull origin main --allow-unrelated-histories
  3. git push -u origin [연결하길 원하는 저장소 이름]을 작성하면 된다.

- main 외 다른 특정 브랜치만 clone 하기
  1. git clone -b [연결하길 원하는 브랜치 이름] --single-branch [원하는 이름 주소]

- figma는 로그인 하지 않으면 페이지 생김새만 보이고 로그인 해야지 수겅 방식이 보인다.

- 라이브 서버에 이미지가 안나온다!  
  1. 이미지 주소 확인하기
  2. 에러 문구 확인하기


## 2024-01-19-02

일괄 수정을 위한 command+shift+l이 작동하지 않는다.

공백없이 만들기 위해 position: absolute의 값을 0으로 했더니 li로 작성한 a들이 겹쳐 나온다.  

![출력](./github/images/day02.png)
![코드](./github/images/day02-1.png)

## 2024-01-22-03

whj/main-carousel 브랜치를 생성해서 캐로셀 작업을 시작했다.  
캐로셀을 구현하는데 다음 이미지로 넘어가는게 안된다.  
마우스로 잡아서 이동도 안되고 페이지네이션으로 이동하는것도 안되고... js가 문제인지 css가 문제인지...

## 2024-01-23-04

header에 관한해 리뷰어에게 리뷰를 받고 완료했다.  
어제 작동하지 않던 이동문제를 해결하기 위해 찾아다니며 관련 코드를 분석해서 작성해보았다.  
페이지네이션으로 이동하는 부분은 구현에는 성공했는데 정확한 의미는...  
자동으로 넘어가도록 구현하는데 new Swiper를 사용했는데 실패했다. => 라이브러리가 없으니까!  

## 2024-01-24-05

페이지네이션과 자동 슬라이드가 충돌했다.  
라이브러리 하나는 100줄의 코딩과 맞먹거나 그 이상이다.  

## 2024-01-25-06

캐러셀 구현 성공했다!  
js가 난관이다...  
페이지네이션을 for문을 사용해서 만들었는데 대략적으로는 알겠는데 구조가 정확히 어떻게 되는건지...  
js는 머리 박으면서 해보는것 말고는 닶이 없을듯...  
병합도 제대로 했다고 생각했는데 다시보면 잘못된 부분이 있어서 고치고 다시 병합하고...   

밥이 보약 섹션도 거의 완료했다. 이제 다음 캐러셀에 도전할 일이 얼마 안남았다.

## 2024-01-26-07

FittedBox 사용해보자! 컨테이너 사이즈에 맞춰서 글자 크기를 조절할수있단다.  
찾아보니 이건 또 아닌것 같다...  
캐러셀 리뷰받고 적용완료했다...  
병합하는데 오류가 쏟아진다.   
매직넘버 = 선언없이 바로쓰는 것들 => 선언해두면 나중에 한번에 바꿀수있다.

## 2024-01-29-08

### 상자에 그림자 넣기!!

box-shadow: 숫자1 숫자2 숫자3 숫자4 색상 inset;  
- 숫자1, 2, 색상만 작성해도 사용 가능
- 숫자1 => x축 그림자 (양수는 오른쪽 음수는 왼쪽)
- 숫자2 => y축 그림자 (양수는 아래쪽 음수는 위쪽)
- 숫자3 => 그림자 블러 처리
- 숫자4 => 그림자 크기
- 색상  => 색상
- inset=> 그림자가 내부로 생성 

### useState

![Alt text](./github/images/image.png)

## 2024-01-30-09

캐러셀을 구현하기는 했는데 이게 맞나 모르겠네... 

## 2024-01-31-10

첫번째 페이지 자동 슬라이드 시간 2배 문제 해결함.  

페이지네이션으로 이미지 이동후 6초가 되기전에 이동하는 문제 해결하기위한 코딩

반복을 종료하고 재호출 = 실패
  
```js
let counter = 2;

let interval = setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  //counter의 크기가 이미지의 개수를 초과할 경우
  if(counter > 5){
    // counter를 1로 초기화
    counter = 1;
  }
  //자동 슬라이드 딜레이
}, 6000);

function stop() {
  clearInterval(interval);
};

interval = setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  //counter의 크기가 이미지의 개수를 초과할 경우
  if(counter > 5){
    // counter를 1로 초기화
    counter = 1;
  }
  //자동 슬라이드 딜레이
}, 6000);
```
```js
let counter = 2;

function myFn () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1;
  }
}

let interval = setInterval(myFn, 6000);

clearInterval(interval);
interval = setInterval(myFn, 6000);
```

onclick을 사용한 딜레이 초기화 = 실패

```js
let counter = 2;
const delay = 6000;
const carouselBtn = document.querySelectorAll('.manual-btn')
carouselBtn.onclick = () => {
  delay = 6000;
}

setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  //counter의 크기가 이미지의 개수를 초과할 경우
  if(counter > 5){
    // counter를 1로 초기화
    counter = 1;
  }
  //자동 슬라이드 딜레이
}, delay);
```

## 2024-02-02-12

오늘도 캐러셀을 만족스럽게 만드는데 실패했다.  
setinterval을 종료시키고 재실행하는데에서 막히고있다.  

사이사이 머리좀 쉴겸 따로 파일을 만들어서 페이지 이미지들을 만들었다.  
캐러셀만 잡으면 두번째 페이지까지는 빠르게 갈것같다.  

## 2024-02-05-13

드디어 캐레셀이 완성됬다.   
이제 리뷰받고 올리변 된다.  
그럼 3페이지까지는 문제 없겠네...  

## 2024-02-06-14

캐러셀2 완성  
푸터 완성  
상품 목록 pr 대기중

### TIL = today i learned

학습 내용 정리하는 장소 만들기


## 2024-02-13-17

두개의 슬라이드가 따로 돌아가게 만들려고했는데 1번 슬라이드가 다 돌아가야 두번째 슬라이드가 돌아간다.

```html
<div class="container1">
    <div class="wrap slideshow1">
      <div class="carousel">
        <div class="carousel-item">
          <img class="carousel-img" src="./public/banner01.png" alt="">
          <img class="carousel-img" src="./public/banner02.png" alt="">
          <img class="carousel-img" src="./public/banner03.png" alt="">
          <img class="carousel-img" src="./public/banner04.png" alt="">
        </div>
        <div class="carousel-btn">
          <button onclick="stop" type="button"></button>
          <button onclick="stop" type="button"></button>
          <button onclick="stop" type="button"></button>
          <button onclick="stop" type="button"></button>
        </div>
      </div>
    </div>
  </div>
  <div class="container2">
    <div class="wrap slideshow2">
      <div class="carousel">
        <div class="carousel-item">
          <img class="carousel-img" src="./public/banner2-01.jpeg" alt="">
          <img class="carousel-img" src="./public/banner2-02.jpeg" alt="">
          <img class="carousel-img" src="./public/banner2-03.jpeg" alt="">
          <img class="carousel-img" src="./public/banner2-04.jpeg" alt="">
          <img class="carousel-img" src="./public/banner2-05.jpeg" alt="">
        </div>
        <div class="carousel-btn">
          <button onclick="stop" type="button"></button>
          <button onclick="stop" type="button"></button>
          <button onclick="stop" type="button"></button>
          <button onclick="stop" type="button"></button>
          <button onclick="stop" type="button"></button>
        </div>
      </div>
    </div>
  </div>
  <script type="module">
    import slideshow from "./main.js"

    slideshow(".slideshow1");
    slideshow(".slideshow2");
  </script>
```
```js
const slideshow = (target) => {
  document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-img");
    const carouselButtons = document.querySelectorAll(".carousel-btn button");
  
    let currentIndex = 0;
    const totalItems = carouselItems.length;
  
    function showItem(index) {
      if (index < 0) {
        index = totalItems - 1;
      } else if (index >= totalItems) {
        index = 0;
      }
  
      carouselItems.forEach((item) => {
        item.style.display = "none";
      });
  
      carouselItems[index].style.display = "block";
      currentIndex = index;
  
      carouselButtons.forEach((button) => {
        button.classList.remove("active");
      });
  
      carouselButtons[index].classList.add("active");
    }
  
    function showNext() {
      const nextIndex = currentIndex + 1;
      showItem(nextIndex);
    }
  
    carouselButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        showItem(index);
      });
    });
  
    setInterval(showNext, 5000);
   
    showItem(currentIndex);
  });
};

export default slideshow;
```

## 2024-02-14-18

#### css의 transition이 작동하지 않을 경우

- display가 none일 경우 1에서 2로 넘어가는게 아니라 아무것도 없는 상태라고 인식하여 작동하지 않는다.
- higith가 auto인 경우

## 2024-02-15-19

Uncaught SyntaxError: Unexpected token 'export'

1. export를 사용할 script에 type = "module"을 붙인다.
2. export default를 module.exports = 로 바꾼다.
3. 동일한 js 중복해서 가져올 경우 하나의 경로에서 type = "module"이 없으면 정상작동하면서 오류 메시지가 나온다.

개발자도구 디버깅 "https://mainia.tistory.com/2801"

### js를 작성할 경우 추적해야되는 함수를 최소한으로 작성한다.

### 함수의 함수화

```js
const 이름 = () => {
  함수화할 함수;
}
```

### 캐러셀이 마지막 슬라이드 부터 나오는 경우

- 시작 슬라이드를 1로 지정할 경우 마지막 슬라이드부터 나오고 2번 슬라이드로 transition없이 바로 넘어간다
- 시작 슬라이드를 0로 지정할 경우 마지막 슬라이드부터 나오고 1번 슬라이드로 transition없이 바로 넘어간다
- 시작 슬라이드를 -1로 지정할 경우 마지막 슬라이드부터 나오고 딜레이의 2배가 지난후 1번 슬라이드로 transition이 적용되며 넘어간다
