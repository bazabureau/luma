"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
    { q: "İlk qəbul necə keçir?", a: "İlk qəbulda mütəxəssis sizinlə tanış olur, müraciət səbəbinizi dinləyir və vəziyyəti qiymətləndirir. Bu seans adətən 50-60 dəqiqə davam edir. Sonunda fərdi müalicə planı təklif edilir. İlk konsultasiya pulsuzdur." },
    { q: "Seanslar nə qədər davam edir?", a: "Fərdi terapiya seansları 50 dəqiqə, cütlük terapiyası 75 dəqiqə, ailə terapiyası 90 dəqiqə davam edir. Psixoloji diaqnostika seansları isə 60-90 dəqiqə çəkə bilər." },
    { q: "Neçə seansa ehtiyac var?", a: "Bu, hər bir fərdin vəziyyətindən asılıdır. Bəzi problemlər 6-8 seans ərzində həll oluna bilər, digərləri isə daha uzunmüddətli müdaxilə tələb edə bilər. Mütəxəssis ilk seanslarda müddəti sizinlə birlikdə müəyyən edəcək." },
    { q: "Məxfilik təmin olunurmu?", a: "Bəli, tam məxfilik təmin olunur. Bütün seans məlumatları ciddi məxfilik qaydaları çərçivəsində qorunur. Pasiyent razılığı olmadan heç bir məlumat üçüncü tərəflə paylaşılmır. Bu, peşə etikamızın ən əsas prinsipidir." },
    { q: "Onlayn seanslar mümkündür?", a: "Bəli, Google Meet və Zoom platformaları vasitəsilə onlayn seanslar keçirmək mümkündür. Onlayn seanslar üzbəüz seanslarla eyni effektivliyə malikdir və coğrafi məhdudiyyəti aradan qaldırır." },
    { q: "Qiymətlər necədir?", a: "Fərdi terapiya — 80 AZN, cütlük terapiyası — 120 AZN, ailə terapiyası — 150 AZN, uşaq psixologiyası — 70 AZN, qrup terapiyası — 40 AZN. Psixoloji diaqnostika — 200 AZN. İlk konsultasiya pulsuzdur." },
    { q: "Uşağım üçün necə qəbul ala bilərəm?", a: "Uşaq psixologiyası xidməti üçün əvvəlcə valideynlərdən biri ilə qısa müsahibə aparılır. Sonra uşaqla yaşına uyğun qiymətləndirmə seansı keçirilir. 3-12 yaş arası uşaqlar xidmətdən yararlana bilər." },
    { q: "Sığorta qəbul edirsiniz?", a: "Hazırda biz birbaşa sığorta şirkətləri ilə işləmirik, lakin seans sonunda sizə rəsmi qəbz təqdim edirik ki, sığorta şirkətinizə müraciət edə biləsiniz. Bir çox şirkətlər psixoloji xidmət xərclərini əhatə edir." },
];

export default function SuallarPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full grow flex-col">
                <Header />
                <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto">
                    <section className="px-4 py-12 lg:py-20 w-full">
                        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
                            <div className="flex items-center gap-3">
                                <div className="h-[2px] w-8 bg-primary"></div>
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">FAQ</h3>
                                <div className="h-[2px] w-8 bg-primary"></div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">Tez-tez Verilən Suallar</h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Ən çox soruşulan suallara cavablar. Əlavə sualınız varsa, bizimlə əlaqə saxlayın.
                            </p>
                        </div>
                    </section>

                    <section className="px-4 py-8 pb-16 w-full max-w-3xl mx-auto">
                        <div className="flex flex-col gap-3">
                            {faqs.map((faq, i) => (
                                <div key={i} className="rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5 overflow-hidden">
                                    <button
                                        className="w-full flex items-center justify-between p-5 lg:p-6 text-left gap-4 min-h-[56px] active:bg-slate-900/5 dark:active:bg-slate-100/5 transition-colors"
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        aria-expanded={openIndex === i}
                                    >
                                        <span className="font-bold text-base lg:text-lg pr-2">{faq.q}</span>
                                        <span className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>expand_more</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                        <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-slate-500 dark:text-slate-100/70 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="px-4 py-12 w-full max-w-3xl mx-auto">
                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                            <span className="material-symbols-outlined text-primary text-4xl">help</span>
                            <h2 className="text-xl font-bold">Sualınız cavablanmadı?</h2>
                            <p className="text-slate-500 dark:text-slate-100/70 text-sm">Bizimlə əlaqə saxlayın, sizə kömək etməkdən məmnun olarıq.</p>
                            <a href="/elaqe" className="flex items-center justify-center h-11 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors mt-2">Əlaqə Saxla</a>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
