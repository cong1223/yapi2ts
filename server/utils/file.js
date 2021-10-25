const fs = require('fs');
const path = require('path');

function getUploadDirName(){
  const date = new Date();
  let month = Number.parseInt(date.getMonth()) + 1;
  month = month.toString().length > 1 ? month : `0${month}`;
  const dir = `${date.getFullYear()}${month}${date.getDate()}`;
  return dir;
}

// 创建目录必须一层一层创建
function mkdir(dirname) {
  if(fs.existsSync(dirname)){
    return true;
  } else {
    if (mkdir(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }

  }
}

function checkDirExist(p) {
  if (!fs.existsSync(p)) {
    mkdir(p)
  }
}

function getUploadFileExt(name) {
  let idx = name.lastIndexOf('.');
  return name.substring(idx);
}

function getUploadFileName(name) {
  let idx = name.lastIndexOf('.');
  return name.substring(0, idx);
}

module.exports = {
  getUploadDirName,
  checkDirExist,
  getUploadFileExt,
  getUploadFileName
}
