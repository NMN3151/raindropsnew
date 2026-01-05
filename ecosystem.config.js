module.exports = {
  apps: [
    {
      name: "raindrops",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000 -H 0.0.0.0",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        NODE_OPTIONS: "--max-old-space-size=1024"
      },
      max_restarts: 5,
      restart_delay: 5000
    }
  ]
};
