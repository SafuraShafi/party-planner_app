import React from "react";
// import Button from '../components/Button'

export const CreateAccountPage = () => {
    return (
        <>
            <h2>Create Account</h2>

            <form>
                <div>
                    <label>
                        First Name:
                        <input type="text" name="firstName" />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                </div>
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
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default CreateAccountPage;