'use client'

import { FormMembership } from "./form-membership"

export default function HeroSection() {
    return (
        <div className="relative bg-black text-white min-h-[46.69rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"></div>
            <div className="relative z-20 flex flex-col items-center text-center px-4 py-16 space-y-6 justify-center flex-grow">
                <h1 className="text-4xl md:text-6xl font-bold">Unlimited movies, TV <br />shows and more.</h1>
                <h2 className="text-xl md:text-2xl font-medium">Watch anywhere. Cancel anytime.</h2>
                <FormMembership />
            </div>
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/netflix-bg.jpg"
                alt="Netflix Background"
            />
        </div>
    )
}
