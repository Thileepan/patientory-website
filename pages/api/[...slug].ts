import { createProxyMiddleware } from 'http-proxy-middleware';

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const apiProxy = createProxyMiddleware({
    target: 'https://patientory.com/',
    changeOrigin: true,
    pathRewrite: { [`^/api`]: '' },
    secure: false,
});

export default apiProxy;