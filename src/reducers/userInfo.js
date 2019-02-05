const userInfo = (state = [] , action) => {
    switch (action.type){
        case 'ADD_USER':
            return [
                ...state,
                {
                    username: action.googleResp.username,
                    googleId: action.googleResp.googleId,
                    thumbnail: action.googleResp.thumbnail,
                    clubs: action.googleResp.clubs,
                    email: action.googleResp.email,
                    isRegistered: action.googleResp.isRegistered
                }
            ]
        case 'ADMIN_ADD':
            return [
                ...state,
                {
                    adminType:action.adminStatus.adminType,
                }
            ]
        default:
            return state
    }
}

export default userInfo;