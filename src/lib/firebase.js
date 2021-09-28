export const loginGoogle = () => {
  // ***FUNCION PARA EL INICIO DE SESION CON GOOGLE Y GUARDAR DATOS EN FIREBASE***
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      // This gives you a Google Access Token. You can use it to access the Google API.
      const user = result.user;
      console.log('user', user);
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      console.log('error', errorMessage);
    });
  return loginGoogle;
};

// ******FUNCION PARA LA VERIFICACION MEDIANTE UN CORREO CON FIREBASE******
export const userRegister = (email, password, userName) => {
  const userCreation = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.hash = '#/Confirmacion';
      userCredential.user.updateProfile({
        displayName: userName,
      }).then(() => {
        const btnUrl = {
          url: 'http://localhost:5000',
        };
        firebase.auth().currentUser.sendEmailVerification(btnUrl);
      });
    });
    // eslint-disable-next-line
    /* .then(function () {
      RegisterVerification();
      console.log(RegisterVerification);
    }); */
  // eslint-disable-next-line
 /* .catch((error) => {
    //  const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, 'tu');
    // ..
    });*/
  return userCreation;
};

export const loginUser = (emailLogin, passwordLogin) => {
  const validationUserLogin = firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      window.location.hash = '#/Home';
      console.log(user, 'usuario');
    });
  return validationUserLogin;
};
