// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
  //your code here
  const split = url.split(".");
  const wwwChecker = split[0].includes("www") ? split[1] : split[0];
  //   const del = /(?:http(?:s?):)/g
  const httpChecker = wwwChecker.includes("http") ? split[0].slice(split[0].indexOf("//") + 2
  // , split[0].length
  ) : wwwChecker;

  return httpChecker;
}






function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

domainName = url => url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];