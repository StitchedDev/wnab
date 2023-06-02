import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
      scope: `openid profile read:current_user update:current_user_metadata`,
    },
  }),
});
