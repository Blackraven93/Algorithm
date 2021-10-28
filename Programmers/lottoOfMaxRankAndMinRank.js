let lottos = [2, 4, 5, 11, 21, 44]
let win_nums = [31, 10, 45, 1, 6, 19]

// 원래는.. 6등은 맞아 근데 최고 등급 2등이 되어야함
function solution(lottos, win_nums) {
    let rating = 7
    let zeroScore = 0
    let answer = []
    let correctArr = []
    let minScore = 0
    let maxScore = 0
    win_nums.map((element, index) => {
        let winIndex = lottos.indexOf(element)
        winIndex >= 0 ? (correctArr.push(element)) : true
    })
    zeroScore = lottos.filter(element => 0 === element).length
    console.log(correctArr, zeroScore)
    if (zeroScore === 0) {
        correctArr.length === 0 ? (minScore = 6, maxScore = 6) : (minScore = rating - correctArr.length, maxScore = rating - correctArr.length)
        answer = [maxScore, minScore]
    } else {
        // 맞은게 없는 경우 : 맞은것도 있고 0도 있고
       correctArr.length === 0 ? (minScore = 6, maxScore = rating - zeroScore) : (minScore = rating - correctArr.length, maxScore = rating - (correctArr.length + zeroScore))
        answer = [maxScore, minScore]
    }
    return answer;
}
solution(lottos, win_nums)