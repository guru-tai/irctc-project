const regex=/^[A-Z]+[a-z]+\d+@+\D+\.*\D{2,3}$/;
const str='Guruswami2018@gmail.com';
console.log(regex.test(str));