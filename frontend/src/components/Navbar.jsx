import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navbar = ({ user }) => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            alert('Error signing out');
        }
    };

    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
            <Link to="/" className="text-blue-600 text-xl font-bold tracking-tight hover:text-blue-800 transition">
                Consent<span className="font-light text-gray-500">App</span>
            </Link>
            <div className="flex items-center space-x-4">
                {user && (
                    <>
                        <span className="text-gray-700 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full">
                            {user.displayName ? user.displayName : user.email}
                        </span>
                        <button
                            onClick={handleSignOut}
                            className="text-sm px-4 py-1 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition font-semibold"
                        >
                            Sign Out
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;