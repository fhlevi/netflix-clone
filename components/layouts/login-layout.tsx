import Link from "next/link";
import { useState } from "react";
import { MENU_FOOTER } from "@/constants/menus";
import { MenuFooterLink } from "@/types/menus";
interface Props {
    children: React.ReactNode;
}

export const LoginLayout = ({ children }: Props) => {
    const [menus, setMenus] = useState<MenuFooterLink[]>(MENU_FOOTER.login_links);

    return (
        <main className="relative h-auto bg-black bg-opacity-60 flex flex-col">
            <div className="flex justify-between items-center">
                <header className="mx-[7.5rem] py-6 px-12 w-full">
                    <div className="items-center w-full max-w-[83.3333%-96px]">
                        <Link href="/" className="flex items-center">
                            <img src="/assets/netflix-logo.svg" alt="Netflix Logo" className="h-10 w-36 relative text-[rgb(229,_9,_20)] z-10" />
                        </Link>
                    </div>
                </header>
            </div>
            <div className="absolute inset-0 bg-[url('/assets/netflix-bg.jpg')] bg-cover bg-center opacity-40" />
            <div className="relative z-10 flex justify-center items-center h-[47.32rem] pb-12">
                <div className="bg-[rgba(0,_0,_0,_0.7)] bg-opacity-50 py-12 px-16 rounded-md w-full h-full max-w-md text-white">
                    {children}
                </div>
            </div>
            <div className="flex z-10 bg-[rgb(22,_22,_22)] h-[307px]">
                <footer className="m-[7.5rem] my-[4.5rem] flex-grow">
                    <div className="h-auto px-12 w-full max-w-[83.3333%-96px]">
                        <div className="text-base text-gray-400">
                            Questions? Call 007-803-321-8275 (Toll-Free)
                        </div>
                        <div className="grid grid-cols-4 grid-rows-2 mt-3 text-sm text-gray-400">
                            {menus.map((menu, index) => (
                                <Link 
                                    href={menu.href} 
                                    key={`login-menu-${index}`} 
                                    className="mt-4 mb-1.5 underline"
                                >
                                    {menu.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
};