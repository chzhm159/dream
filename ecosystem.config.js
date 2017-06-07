module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [{
    "name": "dream_be",
    "script": "/home/czm/webroot/app.js",
    "instances": 0,
    "watch": true,
    "exec_mode": "cluster",
    "cwd": "/home/czm",
    "env": {
      "NODE_ENV": "development",
    },
    "env_production": {
      "NODE_ENV": "production"
    }
  }]
};
