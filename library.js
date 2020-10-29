exports.sum=(a,b)=>{
    if (typeof a =='string')
        return a+' '+b
    else
        return Number((a+b).toFixed(1))
}