import Link from "next/link";

export const LoginLayoutHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <header className="mx-[7.5rem] py-6 px-12 w-full">
                <div className="items-center w-full max-w-[83.3333%-96px]">
                    <Link href="/" className="flex items-center">
                        <img src="/assets/netflix-logo.svg" alt="Netflix Logo" className="h-10 w-36 relative text-[rgb(229,_9,_20)] z-10" />
                    </Link>
                </div>
            </header>
        </div>
    );
};
