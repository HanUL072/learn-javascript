console.log('함수(Function)')

// 함수란?
// 특정 순서에 따라 작업을 실행하는 코드묶음(블럭)

// drawWater 함수 [
//   1. 빈 양동이 가져오기
//   2. 양동이 들고 우물로 이동
//   3. 우물에서 물 길어오기
//   4. 집으로 귀가하기
// ]

// drawWater 함수 부르기(call)
// drawWater 함수 부르기(call)
// drawWater 함수 부르기(call)


// ------------------------------------------------------------------------
// 함수 선언 (Function Declaration) 구문
function drawWater() {
  console.groupCollapsed('drawWater() 호출됨')
      console.log('1. 빈 양동이 가져오기')
      console.log('2. 양동이 들고 우물로 이동')
      console.log('3 우물에서 물 길어오기')
      console.log('4. 집으로 귀가하기')
  console.groupEnd()
}


// ------------------------------------------------------------------------
// 함수 사용 (Call Function)
// 재사용성 (Reusability)
drawWater() 

// Q. 함수이름() <- 이거 왜 붙이는 건가요?
// 동사형태
// 함수 "호출(실행)한다" 의미 - 약속된 규칙 
// 함수기능() 

// 함수 이름으로 기능을 유추해보세요.
// 직관적이고 쉬운 함수 이름이 잘 지어진 이름입니다!!!
//playMusic()
//stopMusic()
//pauseMusic()

// 적절하지 않은 함수 이름
// function return() {}
// function 2break() {}
// function cont inue() {}
// function cla--ss() {}
// function for() {}

// ------------------------------------------------------------------
// 함수 매개변수 (Function Parameters)

// 함수 밖에 있는 [ 전역 ]변수 (global scope ariables)
// 코드 실행 범위 어디서나 접근이 가능한 변수
let year = 4027

// 함수 선언
function writeDiary(year, month, date, location){
    // 함수이름 옆 () 안에 선언된 변수를 특별히 매개변수라 부른다.
    // console.log(year, month, date, location)
    
    // 함수 내부에 선언된 변수
    // 함수 안에서 사용
    // 지역 변수 (local scope variables)

    // 연도(year)
    // let year = 2025
    // 월(month)
    // let month = 6
    // 일(date)
    // let date = 10

    //year = 2026

    // let where = '롯데 타워'

    // 변수 + 문자 = 문장
    // 변수('문자') + 변수(문자) = 문자 연결
    console.log(year + '년 ' +  month + '월 ' + date +'일에 ' + location + ' 에 다녀온 일기를 쓴다.')
    
}

// 함수 호출(실행)
// 일기쓰기 (연도, 월, 일 장소)
writeDiary(2025, 6, 10, 'N 타워')
writeDiary(2025, 7, 1, '부산 광안리 해수욕장')
writeDiary(2025, 10, 30, '원주 디자인 뮤지엄')
