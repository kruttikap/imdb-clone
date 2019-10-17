export const signin = (user)  => ({
        type: "SIGNIN",
        payload: user 
})

export const signout = () => ({type: "SIGNOUT"})

