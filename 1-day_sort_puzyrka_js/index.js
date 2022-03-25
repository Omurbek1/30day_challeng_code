const array = [45, 67, 45, 34, 34, 456, -8, 98, 0, 667, 34535353, - 8989687, 3534];


numberSor(array)


// const sorted = numberSort(
//     Array(1000).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000))
// console.log(numberSort)



function numberSor(array) {

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            const buff = array[i]
            array[i] = array[i + 1]
            array[i + 1] = buff
        }
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            const buff = array[i]
            array[i] = array[i + 1]
            array[i + 1] = buff
        }
    }

    //     // method2


    console.log(array)
}