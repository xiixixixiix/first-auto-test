const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port:8089,//更改端口号
    open:true,//自动启动浏览器
  }
})
