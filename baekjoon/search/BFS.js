const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

let visited = Array.from({ length: 9 }, element => element = false);
let order = []
let answer = []

const BFS = (graph, start, visited) => {
    order.push(start)
    visited[start] = true
    while (Array.isArray(order) && order.length !== 0) {
        console.log(order)
        let value = order.shift()
        answer.push(value)
        for (const n of graph[value]) {
            if (!visited[n]) {
                order.push(n)
                visited[n] = true
            }
        }
    }
}

BFS(graph, 1, visited)