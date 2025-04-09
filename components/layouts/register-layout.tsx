import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { MENU_FOOTER } from '@/constants/menus';
import { MenuFooterLink } from '@/types/menus';

interface Props {
    children: React.ReactNode;
}

export const RegisterLayout = ({ children }: Props) => {
    const [menus, setMenus] = useState<MenuFooterLink[]>(MENU_FOOTER.login_links);
    return (
        <div className="flex flex-col min-h-screen justify-between bg-white text-black">
            <header className="flex items-center justify-between px-14 py-4 border-b border-gray-200">
                <Image src="/assets/netflix-logo.svg" alt="Netflix Logo" width={170} height={40} />
                <Link href="/login" className="text-lg font-semibold">
                    Sign In
                </Link>
            </header>
            <main className="flex justify-center px-4 py-10">
                {children}
            </main>
            <footer className="bg-gray-100 text-gray-600 text-sm py-6 px-14">
                <p className="mb-4">Questions? Call 000-800-040-1843</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {menus.map((menu, index) => (
                    <span key={`register-footer-menu-${index}`}>{menu.label}</span>
                ))}
                </div>
                <select className="border border-gray-300 px-3 py-1 rounded">
                    <option value="en">English</option>
                    <option value="id">Bahasa Indonesia</option>
                </select>
            </footer>
        </div>
    );
};