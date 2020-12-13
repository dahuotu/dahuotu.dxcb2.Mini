const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatDate = second => {
  var duration
  var days = Math.floor(second / 86400);
  var hours = Math.floor((second % 86400) / 3600);
  var minutes = Math.floor(((second % 86400) % 3600) / 60);
  var seconds = Math.floor(((second % 86400) % 3600) % 60);
  if (days > 0) duration = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
  else if (hours > 0) duration = hours + "小时" + minutes + "分" + seconds + "秒";
  else if (minutes > 0) duration = minutes + "分" + seconds + "秒";
  else if (seconds > 0) duration = seconds + "秒";
  return duration;
}

const addSecond = (second) => {
  var newdate = new Date();
  var newtimems = newdate.getTime() + (second * 1000);
  newdate.setTime(newtimems);
  //得到具体时间
  return newdate.toLocaleString();
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  addSecond: addSecond
}
