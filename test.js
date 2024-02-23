document.getElementById("selectBox1").addEventListener("change", checkSelection);
document.getElementById("selectBox2").addEventListener("change", checkSelection);

var selectedValue1 = null;
var selectedValue2 = null;

function checkSelection() {
  // 첫 번째 셀렉트 박스에서 선택된 옵션의 값을 가져옵니다.
  var selectBox1 = document.getElementById("selectBox1");
  var selectedIndex1 = selectBox1.selectedIndex;
  selectedValue1 = selectBox1.options[selectedIndex1].value;

  // 두 번째 셀렉트 박스에서 선택된 옵션의 값을 가져옵니다.
  var selectBox2 = document.getElementById("selectBox2");
  var selectedIndex2 = selectBox2.selectedIndex;
  selectedValue2 = selectBox2.options[selectedIndex2].value;

  // 두 개의 셀렉트 박스가 모두 선택되었을 때만 li 요소를 생성합니다.
  if (selectedValue1 != "0" && selectedValue2 != "0") {
    createListItem();
    // 셀렉트 박스의 인덱스를 0으로 만들어서 초기화
    selectBox1.selectedIndex = 0;
    selectBox2.selectedIndex = 0;
  }
}

// 가격 산정 
function getPrice(productId1, productId2) {
  var total = 0;
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
  // 산정된 가격 반환
  return total;
}

//생성되는 li에 추가될 내용들
function createListItem() {
  // 새로운 li 요소를 생성합니다.
  var li = document.createElement("li");
  var price = getPrice(selectedValue1,selectedValue2);

  // 선택된 옵션들의 값을 조합하여 li 요소에 추가합니다.
  li.textContent = "강아지 간식" + selectedValue1 + " / " + selectedValue2 + price;

  // 삭제 버튼을 생성하고 li 요소에 추가합니다.
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.onclick = function() {
    // 클릭된 삭제 버튼의 부모 요소를 찾아서 삭제합니다.
    this.parentNode.remove();
  };
  li.appendChild(deleteButton);

  // 생성된 li 요소를 ul에 추가합니다.
  document.getElementById("list").appendChild(li);
}

// 총액

// 바로구매
function btn() {
  i = 0;
  if(i > 0) {
    alert(i+'입니다')
  }else if (i = 0){
    alert('상품을 선택해주세요')
  };
}