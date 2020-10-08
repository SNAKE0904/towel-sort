
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix==undefined || matrix==null){
        return []
    }
    let mass=[];
    for(let x = 0; x < matrix.length; x++){
        if(x%2!=0){
            for(let y = matrix[x].length-1; y>=0; y--){
                mass.push(matrix[x][y])
            }
        } else {
            for (let y = 0; y < matrix[x].length; y++) {
                mass.push(matrix[x][y])
            }
        }
    }
    return mass;
}
