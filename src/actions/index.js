//actions list
//1. ADD_USER


export const addUser = googleResp => ({
    //code for checking that user is in the database or not
    //api call to the server to check if user in the database or not
    //code for adding a user in the store
    type: 'ADD_USER',
    id: googleResp.googleId,
    username: googleResp.givenName+" "+googleResp.familyName,
    thumbnail: googleResp.imageUrl,
    clubs:googleResp.clubs,
    email:googleResp.email,
    isRegisterd:googleResp.isRegisterd 

})
