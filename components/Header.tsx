"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-solid border-slate-900/10 dark:border-slate-100/10 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm">
            <div className="flex items-center justify-between whitespace-nowrap px-5 py-4 lg:px-10 max-w-[1200px] mx-auto w-full">
                <Link href="/" className="flex items-center gap-3 min-w-0" onClick={() => setMenuOpen(false)}>
                    <div className="size-8 text-primary shrink-0">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-lg lg:text-xl font-bold leading-tight tracking-tight truncate">Lumen Psixologiya Mərkəzi</h2>
                </Link>
                <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                    <nav className="flex items-center gap-8">
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/">Ana Səhifə</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/haqqimizda">
                            Haqqımızda
                        </Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/xidmetlerimiz">Xidmətlərimiz</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/deyerlerimiz">Dəyərlərimiz</Link>
                        <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/elaqe">Əlaqə</Link>
                    </nav>
                    <Link href="/qebul" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-slate-900 text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors">
                        <span className="truncate">Qəbula yazıl</span>
                    </Link>
                </div>
                <button
                    className="lg:hidden flex items-center justify-center size-11 rounded-lg hover:bg-slate-900/5 dark:hover:bg-slate-100/5 transition-colors -mr-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menyu"
                    aria-expanded={menuOpen}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {menuOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col px-5 pb-6 pt-2 border-t border-slate-900/5 dark:border-slate-100/5">
                    {[
                        { href: "/", label: "Ana Səhifə", icon: "home" },
                        { href: "/haqqimizda", label: "Haqqımızda", icon: "info" },
                        { href: "/xidmetlerimiz", label: "Xidmətlərimiz", icon: "medical_services" },
                        { href: "/deyerlerimiz", label: "Dəyərlərimiz", icon: "favorite" },
                        { href: "/mutexessisler", label: "Mütəxəssislər", icon: "group" },
                        { href: "/bloq", label: "Bloq", icon: "article" },
                        { href: "/suallar", label: "Tez-tez Verilən Suallar", icon: "help" },
                        { href: "/elaqe", label: "Əlaqə", icon: "mail" },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 py-3.5 text-base font-semibold hover:text-primary transition-colors border-b border-slate-900/5 dark:border-slate-100/5 last:border-b-0 active:bg-slate-900/5 dark:active:bg-slate-100/5 rounded-lg px-2 -mx-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined text-xl text-primary">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/qebul"
                        className="flex items-center justify-center h-12 mt-4 bg-primary text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Qəbula yazıl
                    </Link>
                </nav>
            </div>
        </header>
    );
}
