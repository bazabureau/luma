import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-surface-dark text-slate-100 pt-12 lg:pt-16 pb-8 border-t border-slate-100/10 mt-12" id="elaqe">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3 text-primary">
                            <img src="/images/lumen-logo.png" alt="Lumen Logo" className="h-20 w-auto object-contain brightness-0 invert -ml-4" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Sevgi ən güclü işıqdır. İnsan ən çox anlayış gördüyü yerdə sağalmağa başlayır.
                        </p>
                        <div className="flex gap-3">
                            <a className="size-11 rounded-full bg-background-dark flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors text-slate-400 group" href="https://www.facebook.com/share/1C8LuxZ9mZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg className="w-5 h-5 fill-current group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a className="size-11 rounded-full bg-background-dark flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors text-slate-400 group" href="https://www.instagram.com/lumenpsixologiyamerkezi?igsh=MTQxOWhwMG42OTdiZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg className="w-5 h-5 fill-current group-hover:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold text-lg">Keçidlər</h4>
                        <div className="flex flex-col gap-3">
                            <Link className="text-slate-400 hover:text-primary transition-colors text-sm py-0.5" href="/haqqimizda">Haqqımızda</Link>
                            <Link className="text-slate-400 hover:text-primary transition-colors text-sm py-0.5" href="/xidmetlerimiz">Xidmətlərimiz</Link>
                            <Link className="text-slate-400 hover:text-primary transition-colors text-sm py-0.5" href="/mutexessisler">Mütəxəssislər</Link>
                            <Link className="text-slate-400 hover:text-primary transition-colors text-sm py-0.5" href="/bloq">Bloq</Link>
                            <Link className="text-slate-400 hover:text-primary transition-colors text-sm py-0.5" href="/suallar">Tez-tez Verilən Suallar</Link>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold text-lg">Əlaqə</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3 text-slate-400">
                                <span className="material-symbols-outlined text-primary text-xl shrink-0">location_on</span>
                                <span className="text-sm">Nizami küçəsi 123, Bakı, Azərbaycan</span>
                            </div>
                            <a href="tel:+994506032365" className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-primary">call</span>
                                <span className="text-sm">+994 50 603 23 65</span>
                            </a>
                            <div className="flex items-center gap-3 text-slate-400">
                                <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                                <span className="text-sm">B.e - Şənbə: 09:00 - 19:00</span>
                            </div>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-bold text-lg">Bülleten</h4>
                        <p className="text-slate-400 text-sm">Yeniliklər və faydalı məqalələr üçün abunə olun.</p>
                        <form className="flex flex-col gap-3">
                            <input className="bg-background-dark border border-slate-100/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary w-full" placeholder="E-poçt ünvanınız" type="email" />
                            <button className="bg-primary text-white font-bold text-sm py-3 rounded-lg hover:bg-primary/90 transition-colors w-full active:scale-[0.98]" type="submit">Abunə ol</button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-slate-100/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© 2024 Lumen Psixologiya Mərkəzi. Bütün hüquqlar qorunur.</p>
                    <div className="flex gap-6">
                        <a className="text-slate-500 hover:text-white text-sm transition-colors" href="#">Məxfilik Siyasəti</a>
                        <a className="text-slate-500 hover:text-white text-sm transition-colors" href="#">İstifadə Şərtləri</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
