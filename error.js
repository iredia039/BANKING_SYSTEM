let arr = [1,2];

try {
    console.log(arr[10]);

} catch (error) {
    console.log('no index 10');
    
}


function index(arr, ind) {
    
    try {
        return arr[10]
    } catch (error) {
        console.log('no');
        
    }

}

console.log(index([1,2,3], 10));
