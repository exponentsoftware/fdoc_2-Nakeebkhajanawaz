
/*Using the countries array create the following array of arrays. The country name, the first three letters of 
the country name and the length of the country name.*/


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
//print the contries name,first 3 letters ,contres length
function createArrayOfArrays(countries){
  for(i=0;i<countries.length;i++){
    console.log('['+countries[i]+' ,'+countries[i].substr(0,3)+' ,'+countries[i].length+']');
  } 
}
console.log(createArrayOfArrays(countries))



    
 
