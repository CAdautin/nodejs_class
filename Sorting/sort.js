//  ASCENDING ORDER
const numbers = ['Cyril', 'Adautin', 'Effiong', 'Zion', 'Harry', 'Paul', 'Idara']
 numbers.sort((a,b)=>{
    if(a > b)return 1;
    if(a < b) return -1
    return 0
 });
 console.log(numbers)


 //DESCENDING ORDER
//  const numbers = [8, 13, 7, 12, 16, 53, -2]
//  numbers.sort((a,b)=>{
//     if(a > b)return -1;
//     if(a < b) return 1
//     return 0
//  });
//  console.log(numbers)


// const names = ['Cyril', 'Adautin', 'Effiong', 'Zion', 'Harry', 'Paul', 'Idara'];
// names.sort((a,b)=> a - b)

// console.log(names)