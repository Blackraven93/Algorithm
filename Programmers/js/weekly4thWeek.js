// https://programmers.co.kr/learn/courses/30/lessons/84325?language=javascript
const table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"]
let languages = ["JAVA", "C++", "SQL"]
let preference = [7, 5, 5]

function solution(table, languages, preference) {
    let answer = '';
    let scores = []
    let finalScores = []
    let finalScoresRefine = []
    const job = []
    const newSplitArr = []
    table.map((element, index) => {
        job.push(element.split(" ")[0])
        newSplitArr.push(element.split(" "))
        // table을 각 직군별로 배열로 만듬
       })
    newSplitArr.forEach((element, index) => {
        languages.map((e, i) => {
            if (element.indexOf(e) > 0) {

                switch(element.indexOf(e)) {
                    case 1:
                        scores.push([element[0], e, 5])
                        break
                    case 2:
                        scores.push([element[0], e, 4])
                        break
                    case 3:
                        scores.push([element[0], e, 3])
                        break
                    case 4:
                        scores.push([element[0], e, 2])
                        break
                    case 5:
                        scores.push([element[0], e, 1])
                        break
                }
            }
        })

    })
    job.map((element, index) => {
        finalScores.push(0)
        scores.map((e, i) => {
            if (e[0] === element) {
                // 자 다시 정리
                // 지금 여기서 element 직업들 [si, contents, hardware ...]
                // e는 각 info 배열 ['Si', 'python', 2(점수)]
                // 그렇다면 각 직업별 최종점수를 확인해야함
                // 그러면 각 직업별로 인덱스를 맞추고
                // 그 인덱스 값에 점수를 주는데
                // e[2]에 preference를 곱해야한다
                // preference는 languages의 index과 일치하므로
                // languages.indexOf(e[1])
                finalScores[index] += e[2]*preference[languages.indexOf(e[1])]            
            } 
        })
    })
    finalScores.map((element, index) => {
        finalScoresRefine.push(0)
        if (isNaN(element)) {
            finalScoresRefine[index] = 0
        } else {
            finalScoresRefine[index] = finalScores[index]
        }
    })
    const highScore = Math.max.apply(null, finalScoresRefine)
    const answerArr = []
    finalScoresRefine.map((element, index) => {
        if (highScore === element) {
            answerArr.push(job[index])
        }
    })
    answer = answerArr.sort()[0]

    
    return answer;
}

console.log(solution(table, languages, preference))