# Momentum
Momentum Using Javascript
## Javascript

* 웹에서 동적으로 보이게 하는 유일한 언어
* 브라우저는 자바스크립트로 돌아감 따라서 모든 컴퓨터는 자바스크립트가 있다는 의미
* 자바스크립트를 대체할 언어는 없다.(Ruby같은 언어와 다르게)

* 자바스크립트는 단지 언어이고, ECMAscript는 Specification임



### 바닐라 자바스크립트

*  단지 순수한 자바스크립트(raw javascript)





### 사용시 주의점

* html body 태그의 마지막에 추가 해주는 것이 좋다.
* let과 const와 var이라는 변수가 있다.
* let은 바뀔 수 있는 변수, const는 바뀔 수 없는 변수 이다. 
* 처음 변수를 쓸 때 const만 사용 let은 필수적일 때만 
* 리스트를 위해서는 [] , object를 위해서는 {}를 사용해야한다

```javascript
//list
const favorite=['Dali','Van','Picasso'];

console.log(favorite[1]);

//object
const Youngyun={
  name:"youngyun",
  age:24,
  male:true,  
};
console.log(Youngyun.name);
```

* String 을 쓸 때 해야하는 것

```javascript
//first
function sayhello(youngyun){
	console.log("Hello everyone I am "+youngyun);
}

sayhello("youngyun")



//second
function sayhello(youngyun){
	console.log("Hello everyone I am ",youngyun);
}

sayhello("youngyun")


//coolest one
function sayhello(youngyun){
	console.log(`Hello everyone I am ${youngyun}`);
}

sayhello("youngyun")


```



### DOM

* DOM(Document Object Module)

  자바스크립트는 html태그를 가져다가 개체로 만드는 작업을 한다.

  내 페이지에서 자바스크립트로 선택된 것은 객체가 된다.





### 단순 오늘 배운것 응용

```javascript
const title=document.querySelector('#title');

function handleClick(){
    if(title.style.color=="blue")
    {
        title.style.color='black';
    }else{
        title.style.color="blue";
    }
}

title.addEventListener("click",handleClick);
```

이벤트 핸들링에 대해 궁금하다면 https://developer.mozilla.org/ko/docs/Web/Events 를 참조하자



### `==` 와 `===` 의 차이

- `=`는 만약 `a=b`이라고 했을때, `b`를 `a`에 대입해서, 지금부터 `a`가 `b`이라고 약속하는 것이라고 합니다. 지금부터 너는 졸업생이야는 `you = "졸업생"`이라고 할 수 있습니다.
- `==`는 먄약 `a==b`이라고 했을때, `a`가 `b`과 '값'이 같은지를 판단해서 맞으면 true, 틀리면 false라고 합니다.
- `===`는 만약 `a===b`이라고 했을대, `a`가 `b`과 '값'과 '타입/형식?'이 정확하게 같은지를 판단해서 true/false를 표현합니다.

.
`===`를 좀더 자세히 설명하면
값이라는 의미는 `1`이라는 데이터는 역시 `1`이겠죠. ㅎㅎ
형식이라는 의미는 javascript가 똑똑(?)하게도 숫자`1`과 문자`"1"`을 1이라는 데이터로 인식할 수 있기때문에, 문자와 값의 형식조차 완벽히 같아야만 true라고 판단(리턴)하게되는것이죠.

예를들어
`1=="1"`은 true이지만,
`1==="1"`은 false입니다.

또,
`null`과 `undefined`는 값이 없다는 의미의 데이터 형이라고 합니다. `null`은 값이 없음을 명시적으로 표시한 것이고, `undefined`는 그냥 값이 없는 상태이기때문에, `==`로는 true가 뜨지만, `===`로는 false가 리턴됩니다.

아마도 이제 자바스크립트를 입문한사람들에게는 `null`과 `undefined`까지는 좀 어려운 개념인것같아요. 이부분은 `===`가 `==`보다 엄격하구나 정도로 생각하고 넘어가는걸 추천합니다. 나중에 가면 이래서 이런거구나 하는 구간이 나와요. :-)

실무 개발자들은 실무에서 코딩을 할때는 `==`보다는 `===`를 사용해야 한다고 강하게 추천합니다. 이유는 역시 조건문이나, 좀더 복잡한 상황의 프로그래밍에서 차이가 나온다고 하네요.


만약 풀 안되면 (unrelated history)이걸로 해결하자
git pull origin (branchname) --allow-unrelated-histories
