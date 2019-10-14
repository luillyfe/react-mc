const getUsers = state => state.user && state.user.users;
const getUser = state => state.user.current;

export { getUsers, getUser };
