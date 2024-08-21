import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/signInPage'); 
    };

    const handleCreateAccount = () => {
        navigate('/createAccountPage'); 
    };

    return (
        <>
            <Header />
            <h2>Home Page</h2>
            <body>Create an account or sign in</body>

            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleCreateAccount}>Create An Account</button>
        </>
    )
}

export default HomePage;