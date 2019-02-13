export const saveUser = (emailUser, userId) => {
  
    firebase.database().ref(`users/${userId}`).set({
      email : emailUser,
      id : userId
    });
};