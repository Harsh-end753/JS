const myDate=new Date();
// console.log(`toDateString : ${myDate.toDateString() }`);
// console.log(`toString : ${myDate.toString() }`);
// console.log(`toISOString : ${myDate.toISOString() }`);
// console.log(`toLocaleDateString : ${myDate.toLocaleDateString() }`);
// console.log(`toLocaleString : ${myDate.toLocaleString() }`);
// console.log(`toLocaleTimeString : ${myDate.toLocaleTimeString() }`);
// console.log(`toTimeString : ${myDate.toTimeString() }`);
// console.log(`toUTCString : ${myDate.toUTCString() }`);

console.log(myDate.toLocaleString('default',{
    timeZone:'IST',weekday:'long'
}))



