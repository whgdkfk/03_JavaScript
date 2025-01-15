const numbers = document.querySelectorAll(".number"); // 숫자 버튼
const inputNumber = document.querySelector("#inputNumber"); // 클릭한 번호 표시되는 곳
const addBtn = document.querySelector("#addBtn"); // 추가 버튼
const resetBtn = document.querySelector("#resetBtn"); // 초기화 버튼
const numberList = document.querySelector("#numberList");
const list = document.querySelector("#list");

for(let num of numbers) {
    num.addEventListener("click", (e) => {
        // e.target: 이벤트가 발생된 요소
        // textContent === innerText
        inputNumber.textContent += e.target.textContent; // +=: 버튼 내용 누적
    });
}

// 초기화 버튼 클릭 시
resetBtn.addEventListener("click", () => {
    inputNumber.textContent = ""; // 클릭한 번호 모두 삭제
});

// 추가 버튼 클릭 시
// div, label, span 요소를 만들어서 알맞게 조립 후
// .list의 마지막 자식으로 추가
addBtn.addEventListener("click", () => {
    // numberList.textContent = inputNumber.textContent;
    const div = document.createElement("div");
    div.className = "labelContainer";
    
    const label = document.createElement("label");
    label.className = "numberList";
    label.type = "number";
    label.innerText = inputNumber.innerText;

    const span1 = document.createElement("span1");
    span1.className = "star";
    span1.innerHTML = "☆";

    const span2 = document.createElement("span2");
    span2.className = "remove-row";
    span2.innerHTML = "&times;"

    span1.addEventListener("click", e => {
        if(e.target.innerText === "☆"){
            e.target.innerText = "★";
            e.target.style.color = "orange";
            label.style.color = "red";
        }else{
            e.target.innerText = "☆";
            e.target.style.color = "black";
            label.style.color = "black";
        }
    }); 

    span2.addEventListener("click", e => {
        e.target.parentElement.remove();
    });

    div.append(label, span1, span2);

    list.append(div);

    inputNumber.innerText = "";
    
});