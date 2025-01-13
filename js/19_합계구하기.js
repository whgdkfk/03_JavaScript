/* 계산하기 */
const calc = document.querySelector("#calc");
calc.addEventListener("click", () => {
    // 계산 버튼이 클릭되는 시점에 존재하는
    // .input-number 요소를 모두 얻어와
    // 작성된 값의 합계를 구해서 출력하기
    const inputs = document.querySelectorAll(".input-number");

    let sum = 0;

    for(let input of inputs) {
        sum += Number(input.value);
    }

    alert(`합계: ${sum}`);
});


/* 추가하기 */
// querySelector: css 선택자가 일치하는 요소 선택 (여러 개가 있어도 첫 번째 1개만 선택)
const addBtn = document.querySelector("#add"); // 추가 버튼(id는 1개만 얻어옴)
const container = document.querySelector(".container"); // 감싸는 요소

addBtn.addEventListener("click", () => {
    // 추가 버튼 클릭 시
    // div, input, span 요소를 만들어서 알맞게 조립 후
    // .container의 마지막 자식으로 추가
    const div = document.createElement("div");
    div.className = "row"; // 클래스 추가

    const input = document.createElement("input");
    input.className = "input-number";
    input.type = "number";

    const span = document.createElement("span");
    span.className = "remove-row";
    span.innerHTML = "&times;"; // HTML 특수 문자는 innerHTML 사용 (innerText X)

    /* 만들어진 span(X버튼) 요소에 이벤트 리스너 추가 */
    // 매개변수가 1개만 있을 때는 소괄호 생략 가능( (e) -> e )
    span.addEventListener("click", e => {
        // e.target: 클릭된 요소(X 버튼)
        e.target.parentElement.remove(); // 한 줄(.row) 제거
    });

    /* ********************************************** */

    // div, input, span을 알맞게 조립
    // div 안에 input, span이 순서대로 들어감
    div.append(input, span); 

    // 조립된 div를 container의 마지막 자식으로 추가
    container.append(div);

});