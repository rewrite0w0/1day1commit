function domainName(url) {
  //your code here
  const split = url.split(".");
  const wwwChecker = split[0].includes("www") ? split[1] : split[0];
  //   const del = /(?:http(?:s?):)/g
  const httpChecker = wwwChecker.includes("http") ? split[0].slice(split[0].indexOf("//") + 2) : wwwChecker;

  return httpChecker;
}