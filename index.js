export const queueTime = (q, tillNum) => {
    if(tillNum === 1){
        return q.reduce((a,b) => a+b)
    }
    const tills = [];
    for(let i = 0; i<tillNum; i++){
        tills.push([])
    }
    let runningTotalPerTill, nextAvailableTill;  
    q.forEach(t => {
         runningTotalPerTill = tills.map(till => till.reduce((a,b) => a+b,0))
          
         nextAvailableTill = runningTotalPerTill.indexOf(Math.min(runningTotalPerTill))
         console.log('nat', nextAvailableTill)
        tills[nextAvailableTill].push(t)

    })
    return Math.max(runningTotalPerTill)
}