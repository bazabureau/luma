"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function QebulPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        contactMethod: "",
        notes: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*Yeni Qeydiyyat*\n\n` +
            `*Ad:* ${formData.firstName}\n` +
            `*Soyad:* ${formData.lastName}\n` +
            `*Telefon:* ${formData.phone}\n` +
            (formData.email ? `*E-poçt:* ${formData.email}\n` : '') +
            (formData.service ? `*Xidmət:* ${formData.service}\n` : '') +
            (formData.date ? `*Tarix:* ${formData.date}\n` : '') +
            (formData.time ? `*Vaxt:* ${formData.time}\n` : '') +
            (formData.contactMethod ? `*Əlaqə Vasitəsi:* ${formData.contactMethod}\n` : '') +
            (formData.notes ? `*Əlavə Qeyd:* ${formData.notes}` : '');

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/994506032365?text=${encodedMessage}`, '_blank');
    };
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
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Qəbula Yazıl</h3>
                                <div className="h-[2px] w-8 bg-primary"></div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">Onlayn Qeydiyyat</h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Aşağıdakı formu doldurun, psixoloqumuz sizinlə 24 saat ərzində əlaqə saxlayacaq.
                            </p>
                        </div>
                    </section>

                    {/* Booking Form */}
                    <section className="px-4 py-8 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Form */}
                            <div className="lg:col-span-2 p-8 lg:p-10 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Ad</label>
                                            <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Adınız" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Soyad</label>
                                            <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Soyadınız" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Telefon Nömrəsi</label>
                                            <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="+994 -- --- -- --" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">E-poçt (Könüllü)</label>
                                            <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="email@nümunə.az" type="email" name="email" value={formData.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Xidmət Növü</label>
                                        <select className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" name="service" value={formData.service} onChange={handleChange}>
                                            <option value="">Seçin...</option>
                                            <option value="Klinik Xidmət">Klinik Xidmət</option>
                                            <option value="Fərdi Terapiya">Fərdi Terapiya</option>
                                            <option value="Cütlük Terapiyası">Cütlük Terapiyası</option>
                                            <option value="Ailə Terapiyası">Ailə Terapiyası</option>
                                            <option value="Uşaq Psixologiyası">Uşaq Psixologiyası</option>
                                            <option value="Qrup Terapiyası">Qrup Terapiyası</option>
                                            <option value="Yeniyetmə Terapiyası">Yeniyetmə Terapiyası</option>
                                            <option value="Psixoloji Diaqnostika">Psixoloji Diaqnostika</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Tarix</label>
                                            <input className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" type="date" name="date" value={formData.date} onChange={handleChange} />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Vaxt</label>
                                            <select className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" name="time" value={formData.time} onChange={handleChange}>
                                                <option value="">Seçin...</option>
                                                <option value="09:00">09:00</option>
                                                <option value="10:00">10:00</option>
                                                <option value="11:00">11:00</option>
                                                <option value="12:00">12:00</option>
                                                <option value="14:00">14:00</option>
                                                <option value="15:00">15:00</option>
                                                <option value="16:00">16:00</option>
                                                <option value="17:00">17:00</option>
                                                <option value="18:00">18:00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Əlaqə Vasitəsi</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[{ v: "call", l: "Zəng" }, { v: "whatsapp", l: "WhatsApp" }, { v: "email", l: "E-poçt" }].map((opt) => (
                                                <label key={opt.v} className="flex items-center gap-2 cursor-pointer bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-3 py-3 hover:border-primary/30 transition-colors">
                                                    <input className="text-primary focus:ring-primary" name="contactMethod" type="radio" value={opt.l} onChange={handleChange} checked={formData.contactMethod === opt.l} />
                                                    <span className="text-sm font-medium">{opt.l}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">Əlavə Qeyd (Könüllü)</label>
                                        <textarea className="w-full bg-background-light dark:bg-background-dark border border-slate-900/10 dark:border-slate-100/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-y" placeholder="Əlavə məlumat..." name="notes" value={formData.notes} onChange={handleChange}></textarea>
                                    </div>
                                    <button className="w-full bg-primary text-white font-bold py-3.5 rounded-lg mt-2 hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" type="submit">Qeydiyyatı Təsdiqlə</button>
                                </form>
                            </div>

                            {/* Side Info */}
                            <div className="flex flex-col gap-6">
                                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                                    <h3 className="text-lg font-bold mb-4">Nə gözləməlisiniz?</h3>
                                    <div className="flex flex-col gap-4">
                                        {[
                                            { icon: "check_circle", text: "24 saat ərzində təsdiq zəngi" },
                                            { icon: "check_circle", text: "İlk konsultasiya pulsuz" },
                                            { icon: "check_circle", text: "Tam məxfilik təminatı" },
                                            { icon: "check_circle", text: "Fərdi müalicə planı" },
                                        ].map((item) => (
                                            <div key={item.text} className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                                                <span className="text-sm">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                    <h3 className="text-lg font-bold mb-4">Əlaqə</h3>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-100/70">
                                            <span className="material-symbols-outlined text-primary text-xl">call</span>
                                            <span className="text-sm">+994 50 603 23 65</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-100/70">
                                            <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                            <span className="text-sm">info@lumen.az</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-100/70">
                                            <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                                            <span className="text-sm">B.e - Şənbə: 09:00 - 19:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
