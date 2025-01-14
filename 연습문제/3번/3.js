// count 버튼이 클릭되었을 때 체크된 것을 찾아야 한다.
const btn = document.querySelector("#btn"); // count 버튼

// count 버튼 클릭 시
btn.addEventListener("click", () => {
    // 방법 1
    // const fruits = document.querySelectorAll(".fruit");

    // for(let fruit of fruits) {
    //     if(fruit.checked) { // fruit(체크박스)가 체크되어 있을 경우
    //         // 체크된 것만 이용하는 코드
    //     }
    // }

    // 방법 2
    // count 클릭 시점에 체크된 .fruit만 얻어오기
    const fruits = document.querySelectorAll(".fruit:checked");

    let str = "";
    let sum = 0;

    for(let fruit of fruits) {
        // 체크된 체크박스의 부모 요소(.row)를 찾은 후
        // 부모 요소의 모든 자식 요소 중 1(label), 2(span), 3(input)번 인덱스 요소
        const parent = fruit.parentElement;
        // input만 value, 나머지는 innerText
        const fruitName = parent.children[1].innerText; // 과일 이름 얻어오기(label)
        const price = parent.children[2].innerText; // 작성된 가격 얻어오기(span)
        const cnt = parent.children[3].value; // 입력된 개수 얻어오기(input)

        // 문자열 조합
        str += `${fruitName} ${cnt}개 `;

        // 선택된 과일의 가격 * 개수를 sum에 누적해라
        sum += Number(price) * Number(cnt) 
    }

    // 결과 출력
    document.querySelector("#result").innerText = `${str} 총합 ${sum}원`;
});