module.exports = {
    apps: [
      {
        name: "app-insights-test",
        script: "index.js",
        instances: 1,
        exec_mode: "fork", // Corrected value
        autorestart: true,
        watch: true,
        max_memory_restart: "1G",
        env: {
          NODE_ENV: "development",
          PORT: 8080,
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 80,
        },
      },
    ],
  };
  