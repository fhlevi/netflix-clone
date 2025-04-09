import { MENU_FOOTER } from "@/constants/menu-footer";
import { MenuFooter } from "@/types/menu-footer";
import Link from "next/link";
import { useState } from "react";

export const LoginLayoutFooter = () => {
    const [menus, setMenus] = useState<MenuFooter>(MENU_FOOTER);

    return (
        <div className="flex z-10 bg-[rgb(22,_22,_22)] h-[307px]">
            <footer className="m-[7.5rem] my-[4.5rem] flex-grow">
                <div className="h-auto px-12 w-full max-w-[83.3333%-96px]">
                    <div className="text-base text-gray-400">
                        Questions? Call 007-803-321-8275 (Toll-Free)
                    </div>
                    <div className="grid grid-cols-4 grid-rows-2 mt-3 text-sm text-gray-400">
                        {menus.login_links.map((menu, index) => (
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
    );
};
