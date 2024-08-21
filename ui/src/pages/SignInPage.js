import React from "react";
// import Button from '../components/Button'

// const handleSignIn = () => {
//     if 
// };

export const SignInPage = () => {
    return (
        <>
            <h2>Sign In</h2>

            <form>
                <div>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default SignInPage;