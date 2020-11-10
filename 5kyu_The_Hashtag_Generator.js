// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
  const _str = str;
  const camel = _str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  const spaceOut = camel.replace(/\s*/g,"");

  if(spaceOut.length!==0){
    const result =`#${spaceOut}`; 
    if(result.length>140){
      return false;
    } else {
      return result;
    }
    return result
  } else {
    return false
  } 
}
//
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//

function generateHashtag (str) {
  if(!str || str.length < 1) return false;
  
  var r = '#' + str.split(' ').map(function(el) {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  }).join('');
  return r.length > 140?false:r;
}
//

function generateHashtag (str) { 
  var s = "#" + str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}).split(" ").join("");
  if(str && s.length <= 140){
    return s;
  } return false; 
}

//