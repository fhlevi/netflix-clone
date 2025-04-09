import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
    const router = useRouter();

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/login');
    }

    return (
        <header className="topNav">
            <nav className="w-full">
                <div className="flex flex-row justify-between items-center py-6 px-12 w-full">
                    <Link href="/">
                        <img className="h-10 w-36" src="/assets/netflix-logo.svg" alt="" />
                    </Link>

                    <div className="navbar">
                        <form className="d-flex" role="search">
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <button className="bg-[#E50914] h-9 w-20 rounded-sm" onClick={clickHandler}>
                                <span>Sign In</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;