const initialState = {
  userInfo: {},
  pictures: [],
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state};

    default:
      return {...state};
  }
};

export default authReducer;
