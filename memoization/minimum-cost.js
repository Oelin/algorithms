// On a staircase, the ith step has some non-negative cost assigned to it. Once you pay the cost, 
// you can either climb one or two steps. Find the minimum cost needed to reach the top of a given
// stair case

function min_cost(steps) {
    if (steps.length == 0) return 0xffffffff
    if (steps.length == 1) return array[0]
    return steps[0] + Math.min(climb_cost(steps.slice(1)), climb_cost(steps.slice(2)))
}
