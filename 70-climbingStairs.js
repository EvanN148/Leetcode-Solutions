var climbStairs = function(n) {
    let l = n - 1, o = n - 2 , t = 1, combos = 1
    for (let i = l; i >= n / 2; i--) {
        let combosAtL = [i, o, t].map((val) => {
            let result = 1
            for (let b = val; b > 1; b--) {
                result *= b
            }
            return result
        })
        let calc = combosAtL[0] / (combosAtL[1] * combosAtL[2])
        combos += calc
        o -= 2
        t += 1
    }
    return combos
};

console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))

// Examples: 

// n = 4: 
// 1 + 1 + 1 + 1  
// 1 + 2 + 1 
// 1 + 1 + 2
// 2 + 1 + 1 
// 2 + 2 


// n = 5: 
// 1 + 1 + 1 + 1 + 1 
// 1 + 2 + 1 + 1 4! / 3! x 2!
// 1 + 1 + 2 + 1
// 1 + 1 + 1 + 2 
// 2 + 1 + 1 + 1 
// 2 + 1 + 2
// 2 + 2 + 1
// 1 + 2 + 2

// n = 6: 
// 1 + 1 + 1 + 1 + 1 + 1 
// 1 + 2 + 1 + 1 + 1 
// 1 + 1 + 2 + 1 + 1
// 1 + 1 + 1 + 2 + 1
// 1 + 1 + 1 + 1 + 2
// 2 + 1 + 1 + 1 + 1 
// 1 + 1 + 2 + 2 
// 1 + 2 + 1 + 2
// 1 + 2 + 2 + 1 
// 2 + 2 + 1 + 1 
// 2 + 1 + 2 + 1
// 2 + 1 + 1 + 2 
// 2 + 2 + 2 
//...13?





