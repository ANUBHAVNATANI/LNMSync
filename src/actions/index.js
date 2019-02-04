//actions list
/*1. ADD_USER
2. ADD_EVENTS
3. ADMIN_ADD    
4. STAR_ADD
5. SUGGEST_ADD
*/

export const addUser = googleResp => ({
    //code for checking that user is in the database or not
    //api call to the server to check if user in the database or not
    //code for adding a user in the store
    type: 'ADD_USER',
    googleResp
})

export const addEvents = eventList => ({
    type: 'ADD_EVENTS',
    eventList
})
//action to give user direct option to go to the admin site
export const adminAdd = adminStatus => ({
    type: 'ADMIN_ADD',
    adminStatus
})

export const starAdd = starEvnets => ({
    type: 'STAR_ADD',
    starEvents
})


export const suggestAdd = suggestEvents => ({
    type: 'SUGGEST_ADD',
    suggestEvents
})


export const visibilityFilters = {
    DAY_VIEW:'DAY_VIEW',
    WEEK_VIEW:'WEEK_VIEW',
    ALL_VIEW:'ALL_VIEW',
    INTEREST_VIEW:'INTEREST_VIEW',
    SUGGESTED_VIEW:'SUGGESTED_VIEW',
    CLUB_VIEW:'CLUB_VIEW'


}
