module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   * 
   * 定义了两个 app一个是生产环境,一个是开发环境.
   * 服务器上启动的是必须通过 --only dream --env production 来启动,避免启动dev
   * pm2 start ~/webroot/server/ecosystem.config.js --only dream --env production
   * # 卸载之前的启动脚本,按照提示执行命令
   * pm2 unstartup
   * # 删除正在运行的app
   * pm2 delete xxx 
   * # 生产环境 仅仅启动 dream这个app
   * pm2 start ~/webroot/server/ecosystem.config.js --only dream --env production
   * # 重新生成启动脚本,按照提示执行命令
   * pm2 startup systemd -u czm --hp /home/czm
   * 
   */
  apps: [{
    "name": "dream",
    "script": "/home/czm/webroot/server/app.js",
    "instances": 0,
    "watch": true,
    "exec_mode": "cluster",
    "cwd": "/home/czm",
    "env": {
      "PORT": 3000,
      "NODE_ENV": "development",
    },
    "env_production": {
      "PORT": 3000,
      "NODE_ENV": "production"
    }
  }, {
    "name": "dev",
    "script": "/Users/czm/code/dreamServer/dream/src/app.js",
    "instances": 2,
    "watch": true,
    "exec_mode": "cluster",
    "cwd": "/Users/czm/code/dreamServer/dream/src/",
    "env": {
      "PORT": 3000,
      "NODE_ENV": "development",
    }
  }]
};
