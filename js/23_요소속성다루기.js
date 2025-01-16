/* 속성 관련 메서드 확인 */
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    const input1 = document.querySelector("#input1");
    
    // 1. 요소.getAttribute("속성명"): 속성 값 얻어오기
    // input1이 가지고 있는 속성 중 name이라는 속성 값 가져와라
    console.log("input의 name 속성 값: ", input1.getAttribute("name"));

    // 2. 요소.setAttribute("속성명", "속성값"): 요소에 새로운 속성 추가
    // type 속성의 값을 "checkbox"로 설정(추가) -> 체크박스로 변경됨
    input1.setAttribute("type", "checkbox");

    // class 속성의 값을 "big"으로 설정
    input1.setAttribute("class", "big");

    // JS 속성 설정 방법 중 class 관련
    // + CSS의 class 기반 설계를 이용해서
    // HTML 요소의 스타일을 변경할 수 있다.
    
    /* 이미 같은 속성이 존재하면 덮어쓰기 된다. */
    input1.setAttribute("type", "number");
    input1.setAttribute("class", "bg-skyblue");

    // 3. 요소.removeAttribute("속성명"): 속성 제거하기
    // class 속성 제거
    input1.removeAttribute("class");

    // 4. 요소.hasAttribute("속성명"): 속성 존재 여부 확인(T/F)

    // if문은 괄호 내 조건식이 true일 때 실행된다.
    // !: NOT / placeholder: 미리보기
    // placeholder 속성이 없을 경우
    if(!input1.hasAttribute("placeholder")) { 
        input1.setAttribute("placeholder", "placeholder 추가됨");
    } else { // placeholder 속성이 있을 경우
        input1.removeAttribute("placeholder");
    }
});

/* 요소 직접 접근 확인 */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    // [tip]
    // 브라우저 콘솔에서 특정 요소가 가지고 있는 
    // DOM 속성을 직접 확인하고 싶을 경우
    // -> 복수 형태로 요소를 얻어오는 
    // querySelectAll(), getElementsByClassName() 등을 이용
    // 단수 형태는 HTML 속성으로 보이는데 복수 형태는 DOM 속성으로 보임

    const inputs = document.querySelectorAll("#input2");
    const divs = document.querySelectorAll("#div2");

    console.log(inputs);
    console.log(divs);
    
    // id 얻어오기
    console.log(inputs[0].getAttribute("id"));
    console.log(inputs[0].id); // DOM방식(위와 같음)

    // name 얻어오기
    console.log("#input2의 name: ", inputs[0].getAttribute("name"));
    console.log("#input2의 name: ", inputs[0].name); // DOM방식
    console.log("#div2의 name: ", divs[0].name);

    // value 얻어오기
    console.log("#input2의 value: ", inputs[0].getAttribute("value"));
    console.log("#input2의 value: ", inputs[0].value); // DOM방식
    console.log("#div2의 value: ", divs[0].value);
});

/* classList 테스트 */
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector("#closeBtn");
const btnContainer = document.querySelector(".btn-container");

// 추가 버튼 클릭 시
addBtn.addEventListener("click", () => {
    // 4) 요소.classList.contains("클래스명")
    // -> "클래스명"을 포함하고 있으면 true, 포함되어 있지 않으면 false
    // btnContainer에게 hidden이라는 클래스가 포함되어 있는가 -> true
    console.log(btnContainer.classList.contains("hidden"));

    // .btn-container에 hidden 클래스가 포함되어 있을 경우
    // == 화면에 안 보이는 경우
    if(btnContainer.classList.contains("hidden")) {
        // 화면에 보이게 -> hidden remove
        // 2) 요소.classList.remove("클래스1"[, ...])
        // -> 클래스 제거
        btnContainer.classList.remove("hidden");

        // 추가 버튼 숨기기
        // 1) 요소.classList.add("클래스1"[, ...])
        // -> 클래스 추가
        addBtn.classList.add("hidden");
    }
});

// 종료 버튼 클릭 시
closeBtn.addEventListener("click", () => {
    // btnContainer 클래스가 hidden 클래스를 가지고 있지 않을 경우
    if(!btnContainer.classList.contains("hidden")) {
        // btnContainer에 hidden 추가
        btnContainer.classList.add("hidden");

        // 추가 버튼에 hidden 제거
        addBtn.classList.remove("hidden");
    }
});

/*  
- 요소.style.css 속성 방법은
  inline-style로 적용되기 때문에    
  HTML의 복잡도가 늘어나는 문제가 발생

  단, class를 이용한 css를 덮어씌울 목적인 경우 사용
  * 왜? css 선택자 우선순위 참고
  (1에 가까울수록 우선)
  1) !important
  2) inline-style
  3) id 선택자
  4) class 선택자
  5) tag 선택자  

- 클래스를 이용한 CSS 스타일 제어하는 방법이 제일 많이 사용됨
  -> HTML 복잡도가 낮아짐(깔끔해짐)
*/

addBtn.addEventListener("click", () => {
    const container = document.querySelector(".container-3");
    
    /* inline-style로 css 변경 */
    // container.style.backgroundColor = "pink";
    // container.style.border = "5px double red";
    // container.style.width = "300px";
    // container.style.height = "150px";

    /* class를 추가하여 css 변경 */
    container.classList.add("test");
});

/* red, yellow, green 버튼 클릭 시 */
const container3 = document.querySelector(".container-3");
const btns = document.querySelectorAll(".btn");

// 향상된 for문
btns.forEach((btn) => {
    // btn === btns에 하나씩 꺼낸 요소

    btn.addEventListener("click", () => {
        const color = btn.innerText; // 버튼에 작성된 내용(색상)

        // 기존에 클릭한 색상 클래스가 존재하는지 확인
        // -> 있으면 true, 없으면 false
        const classExist = container3.classList.contains(`bg-${color}`);

        // `bg-${color}` 다 지우기
        // if(btn.classList.contains("bg-red")) {
        //     btn.classList.remove("bg-red");
        // }

        // if(btn.classList.contains("bg-yellow")) {
        //     btn.classList.remove("bg-yellow");
        // }

        // if(btn.classList.contains("bg-green")) {
        //     btn.classList.remove("bg-green");
        // }

        // container-3가 가지고 있는 bg-로 시작하는 class 모두 제거
        // ==
        // container3의 클래스를 모두 지우고
        container3.removeAttribute("class");

        // container-3 클래스를 추가 
        container3.classList.add("container-3");

        // == !classExist
        if(classExist === false ) { 
            // 요소.classList.toggle("클래스명")
            // -> 클래스가 없으면 추가(add), 있으면 제거(remove)
            container3.classList.toggle(`bg-${color}`);
            // container3.classList.add(`bg-${color}`);
        }
    });
});

// 수정 버튼 클릭 시
const modifyBtn = document.querySelector("#modifyBtn");
modifyBtn.addEventListener("click", () => {

    // 클래스 bg-green <-> bg-red 변경하기(replace 이용)
    // green -> red
    if(modifyBtn.classList.contains("bg-green")) {
        modifyBtn.classList.replace("bg-green", "bg-red");
    } else {
        modifyBtn.classList.replace("bg-red", "bg-green");
    }
});



    // [태그에서 내용을 얻어오는 방법]
    // *** 요소마다 가지고 있는 속성이 다르다. ***
    // div는 없고 input은 가지고 있는 속성
    // input: input.innerText(X), input.value(O)
    // div: div.innerText(O)
    // input 속성      -> name 속성 有(checkbox, radio 등)
    // input 아닌 속성 -> name 속성 無