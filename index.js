function findMinAndRemove(array) {
    let l = array.length
    let min = array[0]
    let minIndex

    for (let i = 0; i < l; i++) {
        if (array[i] < min) {
            min = array[i]
            minIndex = i
        }
    }

    //array.splice(index, howmany, item1, ....., itemX)
    array.splice(minIndex, 1)
    return min
}

function selectionSort(array) {
    let sortedArr = []
    let newMin;
    while (array.length != 0) {
        newMin = findMinAndRemove(array)
        sortedArr.push(newMin)
    }
    return sortedArr

}
