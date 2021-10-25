const pwd = process.cwd()

module.exports = {
  //  临时文件存放地址
  tempFilePath: `${pwd}/server/temp`,
  logConfig: {
    flag: true,
    outDir: `${pwd}/server/log`,
    level: 'info'
  }
}
