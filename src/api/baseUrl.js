export default function getBaseUri() {
  const isDevelopment = window.location.hostname === 'localhost';
  return isDevelopment ? 'http://localhost:3001/' : '/';
};
