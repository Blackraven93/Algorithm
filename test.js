const fs = require('fs');
const readline = require('readline');

const processFile = (filename) => {
    const instream = fs.createReadStream(filename);
    const reader = readline.createInterface(instream, process.stdout);

    let count = 0;

    // 한 줄씩 읽어들인 후에 발생하는 이벤트
    reader.on('line', (line) => {
        console.log('한 줄 읽음 : ' + line);
        count += 1

        // 공백으로 구분
        const tokens = line.split(' ');
        if (tokens != undefined && tokens.length > 0) {
            console.log('#' + count + ' -> ' + tokens[0] + ' '+ tokens[1] );
        }
    })


    reader.on('close', (line) => {
        console.log('파일을 모두 읽음.');
    });
}

const filename = './dev/stdin'
processFile(filename);



// 1. readline의 첫번째 파라미터는 filename이다.
// 2. readline을 reader 변수에 넣는다면
// 3. reader.on('line' callback) callback의 인자는 읽어온 값이다.
// 4. reader.on('close') 실행 구문을 끝낸다 (콜백함수 전달 가능) 
// 5. 구문을 넣지 않더라도 한번은 실행된다