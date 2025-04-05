'use client';

import Image from 'next/image';
import MobileMenu from './mobile-menu';
import NavItems from '@/components/ui/NavItems';
import { useAuth } from '@/context/AuthContext';
import NavLink from '@/components/ui/NavLink'; // Import the new NavLink

export default function Header() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();

  return (
      <header className="fixed w-full z-30 top-0" style={{ backgroundColor: '#203355' }}>
        <div className="max-w-full mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              <NavLink
                  href="/"
                  className="flex grow justify-end flex-wrap items-center"
                  aria-label="Cruip"
              >
                <Image
                    src="/images/logo/logo.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="mr-2"
                />
                <h3 className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-white-100">
                  RACE OF FINANCE
                </h3>
              </NavLink>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center gap-x-5">
                {isLoading ? (
                    <li>Loading...</li>
                ) : (
                    <>
                      {NavItems.map((item, index) => (
                          <li key={index}>
                            {item.label !== 'ĐĂNG KÝ' && item.label !== 'ĐĂNG NHẬP' && (
                                <NavLink
                                    href={item.href}
                                    className="font-semibold text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out sm:mr-2"
                                >
                                  {item.label}
                                </NavLink>
                            )}
                          </li>
                      ))}

                      {isAuthenticated ? (
                          <li className="flex items-center">
                            <span className="text-white mr-4">Welcome, {user?.name}!</span>
                            <button
                                onClick={logout}
                                className="btn text-white rounded-2xl inline-block animate-pulse-scale drop-shadow-lg font-bold bg-[#2F6095] px-4 py-3"
                            >
                              Logout
                            </button>
                          </li>
                      ) : (
                          <>
                            {NavItems.map((item, index) => (
                                <li key={index}>
                                  {(item.label === 'ĐĂNG KÝ' || item.label === 'ĐĂNG NHẬP') && (
                                      <NavLink
                                          href={item.href}
                                          className="btn text-white rounded-2xl inline-block animate-pulse-scale drop-shadow-lg font-bold bg-[#2F6095] px-4 py-3"
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

            <MobileMenu />
          </div>
        </div>
      </header>
  );
}