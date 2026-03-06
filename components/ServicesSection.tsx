import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesSection() {
    return (
        <section className="px-4 py-16 w-full" id="xidmetlerimiz">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <div className="h-[2px] w-8 bg-primary"></div>
                            <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Xidmətlərimiz</h3>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight">Klinik Xidmətlərimiz</h2>
                        <p className="text-slate-500 dark:text-slate-100/70 text-base lg:text-lg">Həyatınızın hər mərhələsində qarşılaşdığınız çətinliklərdə sizə dəstək olmaq üçün geniş spektrli psixoloji xidmətlər təklif edirik.</p>
                    </div>
                    <Link href="/xidmetlerimiz" className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border-2 border-primary text-slate-900 dark:text-white font-bold hover:bg-primary/10 transition-colors">
                        Bütün Xidmətlər
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/xidmetler/${service.slug}`}
                            className="group flex flex-col p-5 lg:p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5 hover:border-primary/50 transition-colors active:scale-[0.98]"
                        >
                            <div className="size-12 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-primary mb-5 lg:mb-6 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                                <span className="material-symbols-outlined">{service.icon}</span>
                            </div>
                            <h4 className="text-base lg:text-lg font-bold mb-2">{service.title}</h4>
                            <p className="text-slate-500 dark:text-slate-100/70 text-sm mb-4 flex-1">{service.shortDesc}</p>
                            <span className="text-primary font-bold text-sm flex items-center gap-1">
                                Ətraflı <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
