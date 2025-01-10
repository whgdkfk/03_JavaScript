const boxes = document.querySelectorAll(".box");
const colorInputs = document.querySelectorAll(".color-input");

// 제일 앞 [0]
// colorInputs[0].addEventListener("keyup", function(){
//     boxes[0].style.backgroundColor = colorInputs[0].value;
// });

// colorInputs[1].addEventListener("keyup", function(){
//     boxes[1].style.backgroundColor = colorInputs[1].value;
// });

// colorInputs[2].addEventListener("keyup", function(){
//     boxes[2].style.backgroundColor = colorInputs[2].value;
// });

// colorInputs[3].addEventListener("keyup", function(){
//     boxes[3].style.backgroundColor = colorInputs[3].value;
// });

// colorInputs[4].addEventListener("keyup", function(){
//     boxes[4].style.backgroundColor = colorInputs[4].value;
// });

// i == 0 ~ 4
for(let i=0; i<boxes.length; i++) {
    colorInputs[i].addEventListener("keyup", function(){
        boxes[i].style.backgroundColor = colorInputs[i].value;
        });
}

// radio 버튼 + change 이벤트
// * change 이벤트: input에 작성된 값 또는 체크박스/라디오 체크 여부가 변했을 때

const radioBtns = document.querySelectorAll("[name = opacity-btn]");

for(let i=0; i<radioBtns.length; i++) {
    // 라디오버튼의 값이 변했을 때를 감지
    radioBtns[i].addEventListener("change", function(e){
        // e: 이벤트 객체(이벤트 관련 정보가 담겨있음)
        // console.log(e);

        // radio 버튼은 체크 X -> 체크 O
        // change 이벤트가 감지된다.

        // e.target: 이벤트가 발생한 요소

        // 체크된 라디오 버튼의 value를 얻어오기 
        console.log(e.target.value);

        // 모든 .box 요소의 opacity 값으로 체크된 값 대입

        /* 향상된 for문
           - 배열에 저장된 모든 요소를 순차 접근하는 용도의 for문
           - 순차 접근 상황이 빈번히 발생하여 작성법을 간단하게 변화시킴

           [for of 구문]
           for(let 변수명 of 배열명) { ['a', 'b', 'c']
                변수명; // a
                변수명; // b
                변수명; // c
           }

           - for문이 반복될 때마다 배열 내 요소를 0번부터 하나씩 꺼내서
             of 앞에 변수에 대입하는 for문
         */

        for(let box of boxes) {
            // for문이 반복될 때마다
            // boxes[0] ~ boxes[4]까지
            // 1개씩 차례대로 box 변수에 대입

            box.style.opacity = e.target.value;
        }
        
    });
}