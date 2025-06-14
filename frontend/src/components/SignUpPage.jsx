import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        console.log('SignUp form submitted:', { username, email, password });
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created:', userCred.user);
            // Set displayName (username) in Firebase profile
            await updateProfile(userCred.user, { displayName: username });
            console.log('Username set:', username);
            navigate('/');
            console.log('Navigated to "/"');
        } catch (err) {
            setError(err.message);
            console.error('Signup error:', err);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-lg font-bold mb-4 text-center">Sign Up</h2>
                {error && <p className="text-red-500 text-center mb-2">{error}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3 bg-blue-50"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3 bg-blue-50"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border rounded w-full py-2 px-3 bg-blue-50"
                    />
                </div>
                <button type="submit" className="bg-blue-500 w-full text-white py-2 px-4 rounded">
                    Sign Up
                </button>
                <p className="mt-4 text-sm text-center">
                    Already have an account?
                    <Link
                        to="/login"
                        className="text-blue-500 ml-1 underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;