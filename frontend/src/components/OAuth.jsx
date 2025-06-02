import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { FiMail } from 'react-icons/fi';
import { app } from "../firebase";

export default function OAuth() {
    const dispatch = useDispatch();
    const auth = getAuth(app);

    const handleGoogleClick = async () => {
        try {
            dispatch(signInStart());
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({
                prompt: 'select_account'
            });

            const result = await signInWithPopup(auth, provider);
            
            // Format the data for sign in
            const signInData = {
                email: result.user.email,
                password: result.user.uid
            };

            // Try to sign in first
            const signInResponse = await fetch('http://localhost:3000/backend/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(signInData),
                credentials: 'include',
            });

            const signInResult = await signInResponse.json();

            if (!signInResponse.ok) {
                // If sign in fails, try to sign up
                const signUpData = {
                    username: result.user.displayName?.split(' ')[0] || result.user.email?.split('@')[0],
                    email: result.user.email,
                    password: result.user.uid,
                    confirmPassword: result.user.uid
                };

                const signUpResponse = await fetch('http://localhost:3000/backend/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(signUpData),
                    credentials: 'include',
                });

                const signUpResult = await signUpResponse.json();

                if (!signUpResponse.ok) {
                    throw new Error(signUpResult.message || 'Failed to create account');
                }

                // After successful signup, automatically sign in
                const autoSignInResponse = await fetch('http://localhost:3000/backend/auth/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(signInData),
                    credentials: 'include',
                });

                const autoSignInResult = await autoSignInResponse.json();

                if (!autoSignInResponse.ok) {
                    throw new Error(autoSignInResult.message || 'Failed to sign in after signup');
                }

                dispatch(signInSuccess(autoSignInResult.userData));
            } else {
                dispatch(signInSuccess(signInResult.userData));
            }
        } catch (error) {
            console.error('OAuth error:', error);
            dispatch(signInFailure(error.message));
        }
    };

    return (
        <button
            type="button"
            onClick={handleGoogleClick}
            className="w-full flex justify-center items-center px-4 py-3 border border-purple-500/30 rounded-lg bg-gray-800/50 text-white hover:bg-gray-700/50 transition-all transform hover:scale-105"
        >
            <FiMail className="mr-2" />
            Continue with Google
        </button>
    );
}

