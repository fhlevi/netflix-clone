import { useState } from 'react'

export const FormMembership = () => {
    const [email, setEmail] = useState('')

    return (
        <div className="space-y-6">
            <p className="text-lg font-medium">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-0.5">
                <input
                    type="text"
                    className="w-full min-w-[500px] min-h-[70px] text-black rounded-xs focus:outline-none focus:ring-2 focus:ring-red-500 max-w-lg bg-white p-4"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="flex flex-row items-center justify-center space-x-4 min-w-60 md:w-auto min-h-[70px] bg-[#E50914] text-white font-normal rounded-xs text-3xl hover:bg-red-700">
                    <span>Get Started</span>
                    <img src="/assets/arrow-right.png" className="w-" alt="arrow-right" />
                </button>
            </div>
        </div>
    )
}