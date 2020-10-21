// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript


// function rgb(r, g, b){
//   // complete this function  
//   r>255?r=255:r;
//   g>255?g=255:g;
//   b>255?b=255:b;

//   r<0?r=0:r;
//   g<0?g=0:g;
//   b<0?b=0:b;


//   const R16 = r.toString(16).toUpperCase();
//   const G16 = g.toString(16).toUpperCase();
//   const B16 = b.toString(16).toUpperCase();
  
//   return `${R16 < 10 ? `0${R16}`:`${R16}`}${G16 < 10 ? `0${G16}`:`${G16}`}${B16 < 10 ? `0${B16}`:`${B16}`}`;
// }

function rgb(r, g, b){
  // complete this function  
  r>255?r=255:r;
  g>255?g=255:g;
  b>255?b=255:b;

  r<0?r=0:r;
  g<0?g=0:g;
  b<0?b=0:b;


  const R16 = r.toString(16).toUpperCase();
  const G16 = g.toString(16).toUpperCase();
  const B16 = b.toString(16).toUpperCase();
  
  

  return `${R16.length==1 ? `0${R16}`:`${R16}`}${G16.length==1 ? `0${G16}`:`${G16}`}${B16.length==1 ? `0${B16}`:`${B16}`}`;
}


function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}