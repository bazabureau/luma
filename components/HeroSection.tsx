export default function HeroSection() {
    return (
        <section className="px-4 py-8 lg:py-12 w-full">
            <div className="@container w-full">
                <div
                    className="relative flex min-h-[500px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl lg:rounded-2xl items-center justify-center p-8 lg:p-16 overflow-hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(17, 33, 33, 0.7), rgba(17, 33, 33, 0.7)), url('/images/hero-bg.png')",
                    }}
                >
                    <div className="flex flex-col gap-6 text-center max-w-3xl relative z-10 lg:text-left">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-tight lg:text-6xl">
                            Sevgi ən güclü işıqdır
                        </h1>
                        <h2 className="text-slate-100 text-lg font-medium leading-relaxed lg:text-xl">
                            İnsan ən çox anlayış gördüyü yerdə sağalmağa başlayır
                        </h2>
                    </div>
                    <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/20">
                        <h3 className="text-white text-xl font-bold mb-6">
                            Onlayn Qeydiyyat
                        </h3>
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                    Ad və Soyad
                                </label>
                                <input
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Adınız"
                                    type="text"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                    Telefon Nömrəsi
                                </label>
                                <input
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="+994 -- --- -- --"
                                    type="tel"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                    Müraciət Səbəbi (Könüllü)
                                </label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors">
                                    <option className="bg-slate-900">Seçin...</option>
                                    <option className="bg-slate-900">Fərdi Terapiya</option>
                                    <option className="bg-slate-900">Cütlük Terapiyası</option>
                                    <option className="bg-slate-900">Digər</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                    Əlaqə Vasitəsi
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <label className="flex items-center gap-2 cursor-pointer bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                                        <input
                                            className="text-primary focus:ring-primary bg-transparent border-white/30"
                                            name="contact"
                                            type="radio"
                                            value="call"
                                        />
                                        <span className="text-sm text-white">Zəng</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                                        <input
                                            className="text-primary focus:ring-primary bg-transparent border-white/30"
                                            name="contact"
                                            type="radio"
                                            value="whatsapp"
                                        />
                                        <span className="text-sm text-white">WhatsApp</span>
                                    </label>
                                </div>
                            </div>
                            <button
                                className="w-full bg-primary text-white font-bold py-3 rounded-lg mt-2 hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                                type="submit"
                            >
                                Göndər
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
