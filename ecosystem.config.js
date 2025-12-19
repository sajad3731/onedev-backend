module.exports = {
  apps: [
    {
      name: "onedev-backend",
      script: "./dist/index.js",
      cwd: "./backend",
      instances: 1,
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      error_file: "./logs/backend-error.log",
      out_file: "./logs/backend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
    },
  ],
};
