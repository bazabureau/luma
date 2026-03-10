import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-surface-dark text-slate-100 pt-12 lg:pt-16 pb-8 border-t border-slate-100/10 mt-12" id="elaqe">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3 text-primary">
                            <img src="/images/lumen-logo.png" alt="Lumen Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Sevgi ən güclü işıqdır. İnsan ən çox anlayış gördüyü yerdə sağalmağa başlayır.
                        </p>
                        <div className="flex gap-3">
                            <a className="size-11 rounded-full bg-background-dark flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors" href="#">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </a>
                            <a className="size-11 rounded-full bg-background-dark flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors" href="#">
                                <span className="material-symbols-outlined text-xl">mail</span>
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
                            <button className="bg-primary text-slate-900 font-bold text-sm py-3 rounded-lg hover:bg-primary/90 transition-colors w-full active:scale-[0.98]" type="submit">Abunə ol</button>
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
