import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.emailAuthProvider = app.auth.EmailAuthProvider;
    /* Firebase APIs */

    this.auth = app.auth();
  }

  // *** Auth API ***

  // eslint-disable-next-line max-len
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // eslint-disable-next-line max-len
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSendSignInLinkToEmail = (email) => this.auth.sendSignInLinkToEmail(email, {
    url: window.location.href,
    handleCodeInApp: true
  });

  isSignInWithEmailLink = () => this.auth.isSignInWithEmailLink(window.location.href)

  doSignInWithEmailLink = (email) => this.auth.signInWithEmailLink(email, window.location.href)

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification(null);

  // Return null or user object
  getCurrentUser = () => this.auth.currentUser;

  // doPasswordUpdate = (password) =>
  //   this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback = () => {}) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();

            if (dbUser) {
              next({
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                provider: authUser.providerData[0].providerId,
                ...dbUser,
              });
            }
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  reauthenticate = (currentPassword) => {
    const user = this.auth.currentUser;
    const cred = this.emailAuthProvider.credential(user.email, currentPassword);

    return user.reauthenticateAndRetrieveDataWithCredential(cred);
  };

  // *** Change email/password API ***

  // Email
  sendMessage = (message, email) => {
    const refMsg = this.db.ref("contact_as");
    const newMessage = refMsg.push();
    return newMessage.set({
      email,
      message,
    });
  };
}

export default Firebase;
