import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ElaqePage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full grow flex-col">
                <Header />
                <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto">
                    {/* Page Hero */}
                    <section className="px-4 py-12 lg:py-20 w-full">
                        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
                            <div className="flex items-center gap-3">
                                <div className="h-[2px] w-8 bg-primary"></div>
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Əlaqə</h3>
                                <div className="h-[2px] w-8 bg-primary"></div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">Bizimlə Əlaqə Saxlayın</h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Suallarınız var? Bizimlə əlaqə saxlayın, sizə kömək etməkdən məmnun olarıq.
                            </p>
                        </div>
                    </section>

                    <section className="px-4 py-8 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {/* Contact Info */}
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                <div className="flex flex-col gap-6 p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                    <h3 className="text-xl font-bold">Əlaqə Məlumatları</h3>
                                    <div className="flex flex-col gap-5">
                                        {[
                                            { icon: "location_on", label: "Ünvan", value: "Nizami küçəsi 123, Bakı, Azərbaycan" },
                                            { icon: "call", label: "Telefon", value: "+994 50 123 45 67" },
                                            { icon: "mail", label: "E-poçt", value: "info@lumenpsixologiya.az" },
                                            { icon: "schedule", label: "İş Saatları", value: "B.e - Şənbə: 09:00 - 19:00" },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-start gap-4">
                                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                    <span className="material-symbols-outlined">{item.icon}</span>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-semibold text-sm">{item.label}</span>
                                                    <span className="text-slate-500 dark:text-slate-100/70 text-sm">{item.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                    <h3 className="text-lg font-bold">Sosial Şəbəkələr</h3>
                                    <div className="flex gap-3">
                                        {["share", "photo_camera", "mail"].map((icon) => (
                                            <a key={icon} href="#" className="size-12 rounded-xl bg-background-light dark:bg-background-dark flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-colors">
                                                <span className="material-symbols-outlined">{icon}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-3 p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                <h3 className="text-xl font-bold mb-6">Mesaj Göndərin</h3>
                                <form className="flex flex-col gap-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Ad</label>
                                            <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Adınız" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Soyad</label>
                                            <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Soyadınız" type="text" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">E-poçt</label>
                                        <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="email@nümunə.az" type="email" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Telefon</label>
                                        <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="+994 -- --- -- --" type="tel" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Mesajınız</label>
                                        <textarea className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors min-h-[140px] resize-y" placeholder="Mesajınızı buraya yazın..."></textarea>
                                    </div>
                                    <button className="w-full bg-primary text-slate-900 font-bold py-3.5 rounded-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" type="submit">Göndər</button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Map */}
                    <section className="px-4 py-12 w-full">
                        <div className="rounded-2xl overflow-hidden border border-slate-900/5 dark:border-slate-100/5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4!2d49.85!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzQ1LjgiTiA0OcKwNTEnMDIuNSJF!5e0!3m2!1saz!2saz" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" className="w-full"></iframe>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
