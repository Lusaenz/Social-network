import { registration } from '../lib/view/templateRegistration.js';

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('error', errorMessage);
      // ...
    });
  return loginGoogle;
};
export const userRegister = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user,'usuario');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, 'tu');
    // ..
    });
  return userRegister;
};

export const RegisterVerification = () => {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
  // Email verification sent

    // ...

  });
  return RegisterVerification;
};
