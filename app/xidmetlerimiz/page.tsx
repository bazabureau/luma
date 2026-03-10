import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
    {
        icon: "health_and_safety",
        title: "Klinik Xidmət",
        description:
            "Psixiatrik və klinik psixoloji dəyərləndirmə, diaqnostika və müalicə.",
        details:
            "Klinik xidmət müxtəlif psixotik, nevrotik və şəxsiyyət pozuntularının dərin klinik dəyərləndirməsini ehtiva edir.",
        audience: "Yetkinlər və Yeniyetmələr",
    },
    {
        icon: "person",
        title: "Fərdi Terapiya",
        description:
            "Depressiya, təşviş, travma və şəxsi böhranların həllində peşəkar dəstək.",
        details:
            "Fərdi terapiya seanslarımız 50 dəqiqə davam edir. Koqnitiv-davranış terapiyası (KDT), psixoanalitik yanaşma və humanist terapiya metodlarından istifadə edilir. Hər bir pasiyentə fərdi müalicə planı hazırlanır.",
        audience: "Yetkinlər (18+)",
    },
    {
        icon: "diversity_1",
        title: "Cütlük Terapiyası",
        description:
            "Münasibət problemləri, ünsiyyət əskikliyi və münaqişələrin həlli üçün terapiya.",
        details:
            "Cütlük terapiyası seanslarımız 75 dəqiqə davam edir. Emotsional yönümlü terapiya (EFT) və Gottman metodundan istifadə edilir. Hər iki tərəfin ehtiyacları nəzərə alınır.",
        audience: "Cütlüklər",
    },
    {
        icon: "family_restroom",
        title: "Ailə Terapiyası",
        description:
            "Ailə daxili dinamikaların yaxşılaşdırılması və böhranların idarə edilməsi.",
        details:
            "Ailə terapiyası sistemik yanaşma əsasında aparılır. Ailə üzvləri arasında ünsiyyəti yaxşılaşdırmaq, konfliktləri həll etmək və sağlam ailə dinamikası yaratmaq məqsədi daşıyır.",
        audience: "Ailələr",
    },
    {
        icon: "child_care",
        title: "Uşaq Psixologiyası",
        description:
            "Davranış pozuntuları, öyrənmə çətinlikləri və uşaq inkişafı problemləri.",
        details:
            "Uşaq psixologiyası seanslarında oyun terapiyası, sənət terapiyası və koqnitiv-davranış yanaşmaları tətbiq edilir. Valideynlərlə birgə iş aparılır.",
        audience: "Uşaqlar (3-12 yaş)",
    },
    {
        icon: "groups",
        title: "Qrup Terapiyası",
        description:
            "Bənzər problemlər yaşayan şəxslərlə dəstəkləyici mühitdə sağalma prosesi.",
        details:
            "Qrup terapiyası seansları 6-10 nəfərlik qruplarla həftəlik keçirilir. Sosial dəstək, qarşılıqlı öyrənmə və paylaşım əsasında sağalma prosesi həyata keçirilir.",
        audience: "Yetkinlər (18+)",
    },
    {
        icon: "school",
        title: "Yeniyetmə Terapiyası",
        description:
            "Keçid dövrü çətinlikləri, özünə inam və gələcək planlaşdırılması üzrə dəstək.",
        details:
            "12-18 yaş aralığındakı yeniyetmələr üçün xüsusi hazırlanmış proqram. Özünəinam, stress idarəetmə, karyera yönləndirmə və sosial bacarıqlar üzərində işlənilir.",
        audience: "Yeniyetmələr (12-18 yaş)",
    },
    {
        icon: "vital_signs",
        title: "Psixoloji Diaqnostika",
        description:
            "Klinik qiymətləndirmə, şəxsiyyət testləri və koqnitiv funksiyaların yoxlanılması.",
        details:
            "Beynəlxalq standartlara cavab verən psixometrik testlər və klinik müsahibə vasitəsilə hərtərəfli psixoloji qiymətləndirmə aparılır. Yazılı hesabat təqdim edilir.",
        audience: "Bütün yaşlar",
    },
];

export default function XidmetlerimizPage() {
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
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">
                                    Xidmətlərimiz
                                </h3>
                                <div className="h-[2px] w-8 bg-primary"></div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                Klinik Xidmətlərimiz
                            </h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Həyatınızın hər mərhələsində qarşılaşdığınız çətinliklərdə sizə
                                dəstək olmaq üçün geniş spektrli psixoloji xidmətlər təklif
                                edirik.
                            </p>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section className="px-4 py-8 w-full">
                        <div className="flex flex-col gap-8">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="group flex flex-col lg:flex-row gap-8 p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5 hover:border-primary/30 transition-colors"
                                >
                                    <div className="flex flex-col gap-4 lg:w-1/3">
                                        <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-3xl">
                                                {service.icon}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold">{service.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-100/70 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-4 lg:w-2/3">
                                        <p className="text-slate-500 dark:text-slate-100/70 leading-relaxed">
                                            {service.details}
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-2">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-lg">
                                                    group
                                                </span>
                                                <span className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                                                    {service.audience}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="px-4 py-16 w-full">
                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex flex-col gap-4 max-w-xl">
                                <h2 className="text-2xl lg:text-3xl font-black">
                                    Hansı xidmət sizə uyğundur?
                                </h2>
                                <p className="text-slate-500 dark:text-slate-100/70 text-lg">
                                    Pulsuz ilkin konsultasiya ilə sizin üçün ən uyğun müalicə
                                    planını birlikdə müəyyənləşdirək.
                                </p>
                            </div>
                            <a
                                href="/qebul"
                                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
                            >
                                Pulsuz Konsultasiya
                            </a>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
