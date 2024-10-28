

function swapcase(input){
  return input.split(' ').map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  })
}
const input="you can't make a cloudy day a sunny day, but you can embrace it and decide it's going to be a good day after all.";
const res=swapcase(input)
console.log(res);
