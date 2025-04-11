'use client';

import Image from 'next/image';
import MobileMenu from './mobile-menu';
import NavItems from '@/components/ui/NavItems';
import { useAuth } from '@/context/AuthContext';
import NavLink from '@/components/ui/NavLink';

export default function Header() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();

  return (
    <header className="fixed w-full z-30 top-0 shadow-lg bg-gradient-to-r from-[#203355] to-[#2F6095]">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 flex items-center">
            <NavLink href="/" className="flex items-center" aria-label="Cruip">
              <Image
                src="/images/logo/logo.png"
                width={40}
                height={40}
                alt="Logo"
                className="mr-2"
              />
              <h3 className="text-lg md:text-2xl font-bold text-white">
                RACE OF FINANCE
              </h3>
            </NavLink>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="ml-16 flex grow justify-between items-center w-full gap-x-4 md:gap-x-6">
              {/* Left-aligned nav items */}
              <div className="flex items-center gap-x-4 md:gap-x-6">
                {isLoading ? (
                  <li className="text-white">Loading...</li>
                ) : (
                  <>
                    {NavItems.filter(
                      (item) =>
                        item.label !== 'ĐĂNG KÝ' && item.label !== 'ĐĂNG NHẬP'
                    ).map((item, index) => (
                      <li key={index}>
                        <NavLink
                          href={item.href}
                          className="font-medium text-white hover:text-gray-300 px-2 md:px-4 py-1 md:py-2 transition duration-200 ease-in-out whitespace-nowrap"
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </>
                )}
              </div>

              {/* Right-aligned login/logout */}
              <div className="flex items-center gap-x-4 md:gap-x-6">
                {isAuthenticated ? (
                  <li className="flex items-center">
                    <span className="text-white mr-2 md:mr-4 text-sm md:text-base">
                      Welcome, {user?.name}!
                    </span>
                    <button
                      onClick={logout}
                      className="text-white hover:text-gray-300 transition duration-200 ease-in-out"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    {NavItems.filter(
                      (item) =>
                        item.label === 'ĐĂNG KÝ' || item.label === 'ĐĂNG NHẬP'
                    ).map((item, index) => (
                      <li key={index}>
                        <NavLink
                          href={item.href}
                          className="text-white hover:text-gray-300 transition duration-200 ease-in-out"
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </>
                )}
              </div>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
