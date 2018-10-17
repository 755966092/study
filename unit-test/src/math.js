module.exports = {
    add(prev, curr) {
        return prev + curr
    },
    mul(prev, curr) {
        return prev * curr
    },
    conver(a, b) {
        if (a > b) {
            return a - b
        } else if (a < b) {
            return a + b
        } else {
            return a
        }
    }
}