export const queueTime = (q, tillNum) => {
    if (tillNum === 1) return q.reduce((a, b) => a + b,0)
//    let tills = new Array(tillNum).fill([])
   let tills = [] // comment out until line 7
    for (let i = 0; i < tillNum; i++) {
        tills.push([])
    }
    console.log(tillNum, tills)

    let runningTotalPerTill, nextAvailableTill;
    q.forEach(t => {
        runningTotalPerTill = tills.map(till => till.reduce((a, b) => a + b, 0))
        nextAvailableTill = runningTotalPerTill.indexOf(Math.min(...runningTotalPerTill))
        tills[nextAvailableTill].push(t)
        console.log(tills)
    })
    return Math.max(...tills.map(till => till.reduce((a, b) => a + b, 0)))
}