export function setUserInfo(data) {
  return {
    type: 'SET_USER_INFO',
    payload: {
      ...data
    }
  };
}
