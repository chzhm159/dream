module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [{
    "name": "dream_be",
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
    },
    "env_production": {
      "PORT": 3000,
      "NODE_ENV": "production"
    }
  }]
};
