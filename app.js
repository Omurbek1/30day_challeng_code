const arr = [1, ['text', 1], null, [1, [43], 'haha', [45, { a: 'hello' }], 9]]

const filterArr = (param) => {
    let newArr = []

    //filter
    param.filter(elem=>Array.isArray(elem)?newArr=[...newArr,filterArr]:newArr.push(elem))
    return newArr
}
console.log(filterArr(arr));