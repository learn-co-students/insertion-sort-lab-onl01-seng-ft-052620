function findMinAndRemove(array){
    let min = Math.min(...array)
    let index = array.indexOf(min)
    array.splice(index, 1)
    return min
    }

function selectionSort(array){
    let len = array.length
    let sortedArray = []
    while (sortedArray.length < len){
        sortedArray.push(findMinAndRemove(array))
    }
    return sortedArray
    }
