import React from "react";

interface Props {
    children: React.ReactNode;
}

export const HomeLayout: React.FC<Props> = ({ children }) => {
    return (
        <main className="bg-black text-white">
            {children}
        </main>
    )
}