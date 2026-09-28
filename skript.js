function sumAll(...args) {
    let total = 0;
    
    for (const num of args) {
        total += num;
    }
    
    return total;
}

console.log(sumAll(2, 5, 6, 7)); 
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 
