const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
];

function createArrayOfArrays(countries){
  for(i=0;i<countries.length;i++){
    console.log('['+countries[i]+' ,'+countries[i].substr(0,3)+' ,'+countries[i].length+']');
  } 
}
console.log(createArrayOfArrays(countries))



    
 