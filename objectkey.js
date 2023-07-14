const User ={
    Student1:{
        firstname: 'Richard',
        lastname: 'Udofia',
        age: 10
    },
    Student2: {
        firstname: 'Richard',
        lastname:  'Okon',
        age: 11
    },
    student3: {
        firstname: 'Isaiah',
        lastname:  'Udo',
        age: 9
    },
    student4: {
        firstname: 'Michael',
        lastname:  'Udofia',
        age: 7
    },
    student5: {
        firstname: 'Ubong',
        lastname:  'Okon',
        age: 5
    },
    student6: {
        firstname: 'Saviour',
        lastname:  'Bassey',
        age: 3
    }
}

// This is the closing of User

// const objkey = Object.keys(User).filter(key =>{
//     return User[key].lastname == 'Udofia'|| User[key].lastname == 'Okon';
// });
// console.log(objkey)

const objprofile = Object.values(User).filter(val =>{
    return val.lastname == 'Udofia' || val.lastname == 'Okon'
})

console.log(objprofile)