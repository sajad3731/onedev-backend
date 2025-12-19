module.exports = {
  apps: [
    {
      name: "onedev-backend",
      script: "./dist/index.js",
      
      // Cluster mode for load balancing (2025 best practice)
      instances: "max", // Use all CPU cores
      exec_mode: "cluster",
      
      // Environment variables
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      
      // Logging
      error_file: "./logs/error.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      
      // Auto-restart configuration
      autorestart: true,
      max_restarts: 10,
      min_uptime: "15s", // 2025 best practice: 15s minimum to avoid restart loops
      max_memory_restart: "500M",
      
      // Graceful shutdown (critical for zero-downtime)
      kill_timeout: 5000,
      listen_timeout: 3000,
      shutdown_with_message: true,
      
      // Watch disabled in production
      watch: false,
      
      // Source maps for better error tracking
      source_map_support: true,
      
      // Instance variables for cluster mode
      instance_var: "INSTANCE_ID",
      
      // Exponential backoff restart delay
      exp_backoff_restart_delay: 100,
    },
  ],
};