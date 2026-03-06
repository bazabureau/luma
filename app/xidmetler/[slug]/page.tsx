import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full grow flex-col">
                <Header />
                <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto">
                    {/* Breadcrumb */}
                    <div className="px-4 pt-8 lg:pt-12">
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-100/70">
                            <Link href="/" className="hover:text-primary transition-colors">Ana Səhifə</Link>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <Link href="/xidmetlerimiz" className="hover:text-primary transition-colors">Xidmətlərimiz</Link>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-slate-900 dark:text-white font-medium">{service.title}</span>
                        </div>
                    </div>

                    {/* Hero */}
                    <section className="px-4 py-10 lg:py-16 w-full">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                                </div>
                                <h1 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight">{service.title}</h1>
                                <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">{service.heroDesc}</p>
                                <Link href="/qebul" className="flex w-fit items-center justify-center h-12 px-8 bg-primary text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]">
                                    Qəbula yazıl
                                </Link>
                            </div>
                            {/* Quick Info */}
                            <div className="w-full lg:w-80 shrink-0 p-6 lg:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                <h3 className="text-lg font-bold mb-5">Seans Məlumatları</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">schedule</span>
                                        <div><span className="text-xs text-slate-500 dark:text-slate-300 uppercase tracking-wider font-semibold">Müddət</span><p className="font-bold">{service.duration}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">payments</span>
                                        <div><span className="text-xs text-slate-500 dark:text-slate-300 uppercase tracking-wider font-semibold">Qiymət</span><p className="font-bold">{service.price}</p></div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary">group</span>
                                        <div><span className="text-xs text-slate-500 dark:text-slate-300 uppercase tracking-wider font-semibold">Hədəf qrup</span><p className="font-bold text-sm">{service.audience}</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Content Sections */}
                    <section className="px-4 py-8 w-full">
                        <div className="flex flex-col gap-8">
                            {service.sections.map((s) => (
                                <div key={s.heading} className="p-6 lg:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                    <h2 className="text-xl lg:text-2xl font-bold mb-4">{s.heading}</h2>
                                    <p className="text-slate-500 dark:text-slate-100/70 leading-relaxed">{s.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Methods */}
                    <section className="px-4 py-8 w-full">
                        <h2 className="text-2xl font-bold mb-6">İstifadə olunan metodlar</h2>
                        <div className="flex flex-wrap gap-3">
                            {service.methods.map((m) => (
                                <span key={m} className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm">{m}</span>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="px-4 py-12 w-full">
                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl lg:text-2xl font-black">İlk konsultasiya pulsuz!</h2>
                                <p className="text-slate-500 dark:text-slate-100/70">Bu xidmət sizə uyğundursa, elə indi qeydiyyatdan keçin.</p>
                            </div>
                            <Link href="/qebul" className="flex min-w-[160px] items-center justify-center h-12 px-8 bg-primary text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98] shrink-0">Qəbula yazıl</Link>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
