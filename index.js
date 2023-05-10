const { exec } = require('child_process');
const path = require('path')
const fs = require('fs')

// 复制配置文件
const copyFile = (sourcePath=`${__dirname}/config`, targetPath=process.cwd()) => {
  const sourceFile = fs.readdirSync(sourcePath, { withFileTypes: true })
  sourceFile.forEach(file => {
    const newSourcePath = path.resolve(sourcePath, file.name)
    const newTargetPath = path.resolve(targetPath, file.name)
    fs.copyFileSync(newSourcePath, newTargetPath)
  })
}

// 修改 package.json 配置文件
const modifyPackage = (path=process.cwd()) => {
  const obj = JSON.parse(fs.readFileSync(`${path}/package.json`, 'utf8'))
  obj.dd = '命令'
  fs.writeFileSync(`${path}/package.json`, JSON.stringify(obj))
}



function init() {
  // exec('npm install eslint')

  // stylelint
  const style = {
    "stylelint": "15.2.0",
    "stylelint-config-standard": "30.0.1",
    "stylelint-config-standard-scss": "7.0.1",
    "stylelint-config-standard-vue": "1.0.0",
    "stylelint-order": "6.0.2",
    "postcss": "8.4.21",
    "postcss-html": "1.5.0",
  }
  const stylePack = Object.keys(style).reduce((a, b) => `${a} ${b}@${style[b]}`, '')

  // ESLint
  const eslint = {
    "eslint": "8.34.0",
    "eslint-config-standard": "17.0.0",
    "eslint-plugin-vue": "9.9.0",
    "vue-eslint-parser": "9.1.0",
  }
  const eslintPack = Object.keys(eslint).reduce((a, b) => `${a} ${b}@${eslint[b]}`, '')

  console.log('\x1B[35m正在初始化, 请等待...\x1B[0m')
  exec(`npm install --save-dev ${eslintPack} ${stylePack}`, {}, (error) => {
    if(error){
      console.error('\x1B[31m初始化失败!\x1B[0m')
    }else{
      console.log('\x1B[36m初始化成功!\x1B[0m')
    }
  })
  
  copyFile()
  // modifyPackage()
}

init()