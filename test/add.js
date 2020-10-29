const test =require("ava")
const library=require("../library")

test('sum of 2 and 2 should return 4', t => {
    const actualResult=library.sum(2,2)
    const expectedResult=4
    t.is(actualResult,expectedResult)
}) 

test('sum of 0.1 and 0.2 should return 0.3', t => {
    const actualResult=library.sum(0.1,0.2)
    const expectedResult=0.3
    t.is(actualResult,expectedResult)
}) 