import axios from "axios";

export const addUser = googleResp => ({
    //code for checking that user is in the database or not
    //api call to the server to check if user in the database or not
    axios.get("http://lnmiit-sync.herokuapp.com/api/get_user/19").then(resp => {
        
    }),
    
    //code for adding a user in the store
    type: 'ADD_USER',
    id: googleResp.googleId,
    username: googleResp.givenName+" "+googleResp.familyName,
    thumbnail: googleResp.imageUrl,
    clubs:[],
    batch:" ",
    email:googleResp.email,
    isRegisterd: ---

})

export const addInfo