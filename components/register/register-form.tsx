'use client'

import { useState } from 'react';

interface RegisterFormProps {
    onSubmit: (props: {
        email: string, 
        password: string
    }) => void;
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
    const [email, setEmail] = useState('Netflix@gmail.com')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ email, password });
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
            <p className="text-sm mb-1">Step 1 of 3</p>
            <h1 className="text-2xl font-semibold mb-2">
                Create a password to start your membership
            </h1>
            <p className="text-gray-700 mb-6">
                Just a few more steps and you’re done!<br />
                We hate paperwork, too.
            </p>

            <input
                type="email"
                value={email}
                className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
                disabled
            />

            <div className="relative mb-4">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Add Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-3 pr-10"
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-sm text-gray-600"
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>

            <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded text-lg"
            >
                Next
            </button>
        </form>
    )
}
