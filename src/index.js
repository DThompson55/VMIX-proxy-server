const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";

const options = {
  router: {
    'localhost:3000': 'http://localhost:8088',
  },
};

// create the proxy (without context)
const proxy = createProxyMiddleware(options);

app.use('/api', proxy);

// Start the Proxy
app.listen(PORT, HOST, () => {
   console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

