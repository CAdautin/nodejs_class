const os = require('os');
const cpu = os.cpus()
// console.log(cpu)

const osType = os.type()
// console.log(osType)

const release = os.release()
// console.log(release)

const totalMem = os.totalmem()
// console.log(totalMem)

const freeMem = os.freemem()
console.log(freeMem)