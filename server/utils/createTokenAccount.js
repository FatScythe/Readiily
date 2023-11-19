const createTokenAccount = (account) => {
  return {
    name: account.name,
    email: account.email,
    userId: account._id,
    role: account.role,
    avatar: account.avatar,
  };
};

module.exports = createTokenAccount;
