export const authConfig = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: process.env.VITE_AUTH0_ISSUER_BASE_URL || "",
  audience: process.env.VITE_AUTH0_AUDIENCE || "",
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID || "",
  secret: process.env.AUTH0_CLIENT_SECRET || "",
}
