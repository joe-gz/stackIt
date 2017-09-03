const authenticatedUser = (req, userId) => {
  let authenticated = false
  console.log('USERRRR', req.session.user);
  console.log('PASSED IN USERRR', userId);
  if (req.session.user.id !== userId) {
    authenticated = true;
  }
  console.log(authenticated);
  return authenticated
};

const isSignedInUser = (req) => {
  let authenticated = false
  console.log(req.session.user);
  if (req.session.user.id) {
    authenticated = true;
  }
  console.log(authenticated);
  return authenticated
};

module.exports = {
  authenticatedUser: authenticatedUser,
  isSignedInUser: isSignedInUser
};
