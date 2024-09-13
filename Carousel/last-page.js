function menu() {
  var selectBox1 = document.getElementById("select1");
  var selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;

  var selectBox2 = document.getElementById("select2");
  var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;

  var priceDisplay = document.getElementById("price");
  var resetBtn = document.getElementById("reset-btn");


  if (selectedValue1 != 0 && selectedValue2 != 0) {
    var price = getPrice(selectedValue1, selectedValue2);
    priceDisplay.textContent = "가장 맛있는 강아지 사료 ("+selectBox1.value+')['+selectBox2.value+']'+ price;
  } else {
    priceDisplay.textContent = "";
    resetBtn.style.display = "none";
  }
}

// let total = 0;

function getPrice(productId1, productId2) {
  let total = 0;
  switch (productId1) {
    case "월요일":
      total += 50;
      break;
    case "화요일":
      total += 60;
      break;
    case "수요일":
      total += 70;
      break;
  }

  switch (productId2) {
    case "소고기":
      total += 1000;
      break;
    case "닭고기":
      total += 2000;
      break;
    case "연어":
      total += 3000;
      break;
  }

  return total;
}

// 정상 작동
function btn() {
  i = total;
  if(i > 0) {
    alert(i+'입니다')
  }else if (i = 0){
    alert('상품을 선택해주세요')
  };
}