import { MENU_FOOTER } from "@/constants/menu-footer";
import { MenuFooterLink } from "@/types/menu-footer";
import Link from "next/link";
import { useState } from "react";

export const Footer = () => {
    const [menus, setMenus] = useState<MenuFooterLink[]>(MENU_FOOTER.home_links);

    return (
        <div className={`flex border-t-8 border-[#222222] p-4 py-16 min-h-[466px]`}>
            <div className={`flex w-[calc(100%_-_96px)] max-w-[calc(100%_-_496px)] mx-auto relative`}>
                <footer className="flex-grow">
                    <div className="h-full w-full">
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
        </div>
    );
};
