// const otpKey = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const otpLength = 20;
// let OTP = '';
// for (let i = 0; i < otpLength; i++) {
//     OTP += otpKey[Math.floor(Math.random()* otpKey.length)];

// }

// console.log(OTP) 

const otpKey = '0123456789';
const otpLength = 20;
let OTP = '';
for (let i = 0; i < otpLength; i++) {
    OTP += otpKey[Math.floor(Math.random()* 4)];

}

console.log(OTP)