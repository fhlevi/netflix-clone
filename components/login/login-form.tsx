'use client';

import { useState } from 'react';
import { HelperLinks } from './helper-links';
import Link from 'next/link';

interface Props {
    onLogin: (email: string, password: string) => void;
    error?: string | null;
}

export const LoginForm = ({ onLogin, error }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <input
                type="email"
                placeholder="Email or phone number"
                className="border border-gray-600 p-3 rounded text-white h-14"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                className="border border-gray-600 p-3 rounded text-white h-14"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="bg-red-600 py-2 rounded font-semibold hover:bg-red-700">
                Sign In
            </button>
            <div className="text-base text-gray-400 text-center">
                OR
            </div>
            <button type="submit" className="bg-[rgba(128,_128,_128,_0.4)] py-2 rounded font-semibold hover:opacity-80">
                Use a Sign-In Code
            </button>
            <Link href="#" className="underline text-white text-center">Forgot password?</Link>
            <HelperLinks />
        </form>
    );
};
