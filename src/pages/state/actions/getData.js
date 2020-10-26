export const getUserData = (data) => {
    return {
      type: 'GET_DATA',
      payload: data,
    }
  }