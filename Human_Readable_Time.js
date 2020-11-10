// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  // TODO
  const CYCLE = 60
  const hour = parseInt(seconds / (CYCLE ** 2));
  const min = parseInt(seconds / CYCLE % CYCLE);
  const sec = seconds % CYCLE;

  //   console.log(hour,min,sec);
  return `${hour < 9 ? `0${hour}`:`${hour}`}:${min <9 ? `0${min}` : `${min}`}:${sec <9 ? `0${sec}`: `${sec}`}`;
}

function humanReadable(seconds) {
  var pad = function (x) {
    return (x < 10) ? "0" + x : x;
  }
  return pad(parseInt(seconds / (60 * 60))) + ":" +
    pad(parseInt(seconds / 60 % 60)) + ":" +
    pad(seconds % 60)
}

function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function (val) {
    return val < 10 ? "0" + val : val;
  }

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function (v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

p=n=>`0${n}`.slice(-2),humanReadable=(s)=>(m=s/60|0,p(m/60|0)+':'+p(m%60)+':'+p(s%60))