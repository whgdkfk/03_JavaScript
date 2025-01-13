const btn = document.querySelector("#btn"); // 생성 버튼
const container = document.querySelector("#container");
const count = document.querySelector("#count");

/* 추가하기 */
btn.addEventListener("click", () => {
    // container 값 초기화
    container.innerHTML = "";

    // #count의 작성된 값을 얻어와 숫자(Number) 타입으로 변환
    // input 타입은 innerText 불가, value만 가능
    const val = Number(count.value); 

    // i === 0,1,2(true), 3(false)
    for(let i = 0 ; i < val ; i++){
        /* input 요소를 만들어서 #container의 자식으로 추가  */
        const input = document.createElement("input");
        // <input type="number" class="input-number">
        input.type = "number";
        input.className = "input-number";
        container.append(input);
    }

});

/* 계산하기 */
const sumBtn = document.querySelector("#sumBtn");

sumBtn.addEventListener("click", () => {
    // inputs: 더하기 버튼이 클릭되는 시점에 화면에 존재하는 클래스가 
    // input-number인 요소를 모두 얻어와 대입한 변수(배열)
    const inputs = document.querySelectorAll(".input-number");

    let sum = 0; // sum: 합계 저장용 변수

    for(let input of inputs) {
        sum += Number(input.value);
    }

    document.querySelector("#result").innerText = sum;

});