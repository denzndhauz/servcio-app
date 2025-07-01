export default defineNuxtPlugin(async () => {
   const { initAuth } = useAuth()

   // Initialize authentication state when the app starts
   await initAuth()
})

// server/api/auth/[...].ts (Example API routes structure)
/*
This is an example of how your API routes might be structured.
You'll need to implement these on your backend.
 
POST /api/auth/login
Body: { email, password }
Response: { user, token, refreshToken? }
 
POST /api/auth/register  
Body: { name, email, password, passwordConfirmation? }
Response: { user, token, refreshToken? }
 
POST /api/auth/logout
Headers: Authorization: Bearer <token>
Response: { message }
 
GET /api/auth/me
Headers: Authorization: Bearer <token>
Response: { user }
 
POST /api/auth/refresh
Body: { refreshToken }
Response: { user, token, refreshToken? }
 
POST /api/auth/forgot-password
Body: { email }
Response: { message }
 
POST /api/auth/reset-password
Body: { token, password, password_confirmation }
Response: { message }
*/