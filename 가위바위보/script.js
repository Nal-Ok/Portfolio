/*const: 변경하지 않을 데이터를 선언
let: 중복 선언 불가, 중복될 경우 오류남
var: 같은 변수명으로 중복 선언 가능, 출력 직전 마지막으로 쓴 값이 출력됨*/
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const message = document.getElementById('message');

/*document.gey(ElementById('아이디')*/

		const choices = ['바위', '가위', '보'];
/*addEventListener(type, listener);
공통 function이 아닐 때 화살표 함수 사용*/
		rockBtn.addEventListener('click',() => playGame('바위'));
		scissorsBtn.addEventListener('click',() => playGame('가위'));
		paperBtn.addEventListener('click',() => playGame('보'));

		function playGame(playerChoice){
			const computerChoice = choices[Math.floor(Math.random()*choices.length)];
/* choices 배열 내부에 들어있는 내용을 랜덤으로 생성하기 위해 Math.random() 함수의 결과에 choices.length를 곱하고, 소수점 이하를 버린다.
Math.floor() : 숫자의 소수 부분을 버리고, 정수 부분만 남기는 함수
Math.random(): 랜덤하게 소수점 출력*/
			if (playerChoice === computerChoice){
				message.textContent = '비겼습니다! 당신: ${playerChoice}, 컴퓨터: ${computerChoice}';
			}

			else if(
				(playerChoice === '바위' && computerChoice === '가위')||
				(playerChoice === '가위' && computerChoice === '보')||
				(playerChoice === '보' && computerChoice === '바위')
				)
			{
				message.textContent = '이겼습니다! 당신: ${playerChoice}, 컴퓨터: ${computerChoice}';
			}

			else {
				message.textContent = '졌습니다! 당신: ${playerChoice}, 컴퓨터: ${computerChoice}';
			}
		}
		/*요소.textContent = '내용'
		텍스트 추가*/