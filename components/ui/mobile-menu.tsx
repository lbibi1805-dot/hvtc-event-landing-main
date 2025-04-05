'use client';

import { useState, useRef, useEffect } from 'react';
import navItems from '@/components/ui/NavItems';
import { useAuth } from '@/context/AuthContext';
import NavLink from '@/components/ui/NavLink'; // Import the new NavLink

export default function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

    const trigger = useRef<HTMLButtonElement>(null);
    const mobileNav = useRef<HTMLDivElement>(null);

    const { isAuthenticated, user, logout, isLoading } = useAuth();

    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!mobileNav.current || !trigger.current) return;
            if (
                !mobileNavOpen ||
                mobileNav.current.contains(target as Node) ||
                trigger.current.contains(target as Node)
            )
                return;
            setMobileNavOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }: { keyCode: number }): void => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <div className="md:hidden">
            <button
                ref={trigger}
                className={`hamburger ${mobileNavOpen && 'active'}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                <span className="sr-only">Menu</span>
                <svg
                    className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect y="4" width="24" height="2" rx="1" />
                    <rect y="11" width="24" height="2" rx="1" />
                    <rect y="18" width="24" height="2" rx="1" />
                </svg>
            </button>

            <nav
                id="mobile-nav"
                ref={mobileNav}
                className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                style={
                    mobileNavOpen
                        ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
                        : { maxHeight: 0, opacity: 0.8 }
                }
            >
                <ul className="bg-gray-400 px-4 py-2">
                    {isLoading ? (
                        <li className="my-2 flex justify-center">
                            <div className="w-6 h-6 border-4 border-t-4 border-white border-opacity-50 border-t-[#203355] rounded-full animate-spin"></div>
                        </li>
                    ) : (
                        <>
                            {navItems.map((item, index) => (
                                <li key={index} className="my-2">
                                    {item.label !== 'ĐĂNG KÝ' && item.label !== 'ĐĂNG NHẬP' && (
                                        <NavLink
                                            onClick={() => setMobileNavOpen(false)}
                                            href={item.href}
                                            className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-[#203355] hover:bg-purple-700 transition duration-150 ease-in-out"
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}
                                </li>
                            ))}

                            {isAuthenticated ? (
                                <>
                                    <li className="my-2">
                                        <div className="pl-2 border border-white rounded-full p-2 flex items-center justify-center font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-[#203355] hover:bg-purple-700 transition duration-150 ease-in-out">
                                            Xin chào, <span className="text-white font-bold pr-2">{user?.name}</span>
                                        </div>
                                    </li>
                                    <li className="my-2">
                                        <button
                                            onClick={() => {
                                                logout();
                                                setMobileNavOpen(false);
                                            }}
                                            className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-[#203355] hover:bg-purple-700 transition duration-150 ease-in-out"
                                        >
                                            Đăng Xuất
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    {navItems.map((item, index) => (
                                        <li key={index} className="my-2">
                                            {(item.label === 'ĐĂNG KÝ' || item.label === 'ĐĂNG NHẬP') && (
                                                <NavLink
                                                    onClick={() => setMobileNavOpen(false)}
                                                    href={item.href}
                                                    className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-[#203355] hover:bg-purple-700 transition duration-150 ease-in-out"
                                                >
                                                    {item.label}
                                                </NavLink>
                                            )}
                                        </li>
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}