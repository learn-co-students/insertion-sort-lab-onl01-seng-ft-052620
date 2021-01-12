function findMinAndRemove(array){
    let current_min =  array[0]
    let current_min_index = 0
    array.forEach((element, index) => {
        if(element < current_min){
            current_min = element 
            current_min_index = index
        }
    })
    array.splice(current_min_index, 1)
    return current_min
}

function selectionSort(array) {
    let newMin;
    let sorted = [];
    while (array.length != 0) {
      newMin = findMinAndRemove(array);
      sorted.push(newMin);
    }
    return sorted;
  }