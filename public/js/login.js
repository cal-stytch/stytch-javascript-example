import { Products } from "https://www.unpkg.com/@stytch/vanilla-js@0.9.5/dist/index.esm.js";
import { stytch } from "./app.js";

const styles = {
  container: {
    width: "100%",
  },
  buttons: {
    primary: {
      backgroundColor: "#4A37BE",
      borderColor: "#4A37BE",
    },
  },
};

const REDIRECT_URL = "http://localhost:3000/authenticate";
const config = {
  products: [Products.emailMagicLinks, Products.oauth],
  emailMagicLinksOptions: {
    loginRedirectURL: REDIRECT_URL,
    loginExpirationMinutes: 60,
    signupRedirectURL: REDIRECT_URL,
    signupExpirationMinutes: 60,
  },
  oauthOptions: {
    providers: [{ type: "google" }],
    loginRedirectURL: REDIRECT_URL,
    signupRedirectURL: REDIRECT_URL,
  },
};
stytch.mountLogin({
  elementId: "#stytch-sdk",
  styles,
  config,
});
