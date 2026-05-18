import Header from "@/components/Header";
import Footer from "@/components/Footer";

const specialists = [
    {
        name: "Mina Əliyeva",
        role: "Klinik Psixoloq",
        image: "/images/mina.jpg",
        bio: "Mina Əliyeva psixologiya sahəsində fundamental akademik baza və uzunillik praktik təcrübəni birləşdirən mütəxəssisdir. 10 ildən artıq peşəkar fəaliyyəti müddətində uşaqlar, yeniyetmələr və böyüklərlə yüksək həssaslıq, fərdi yanaşma və peşəkar etika çərçivəsində çalışaraq, onların psixoloji rifahının yaxşılaşdırılması və daxili potensialının inkişaf etdirilməsi istiqamətində mühüm töhfələr vermişdir.",
        specialties: ["Uşaq", "Yeniyetmə", "Böyüklər", "Klinik Psixologiya"],
        education: "Bakı Dövlət Universiteti (Bakalavr) | Azərbaycan Dövlət Pedaqoji Universiteti (Magistr)",
    },
    {
        name: "Nailə Nuruzadə",
        role: "Defektoloq / Loqoped",
        image: "/images/naile.jpg",
        bio: "Nailə Nuruzadə uşaqların nitq, ünsiyyət və inkişaf sahəsində fərdi dəstəyin göstərilməsi istiqamətində çalışan gənc və məsuliyyətli mütəxəssisdir. Azərbaycan Dövlət Pedaqoji Universitetinin məzunu olaraq korreksiyaedici təlim ixtisası üzrə təhsil almışdır. Peşə fəaliyyəti dövründə müxtəlif inkişaf xüsusiyyətlərinə malik uşaqlarla çalışaraq onların nitq bacarıqlarının, diqqət və sosial ünsiyyət qabiliyyətlərinin inkişafına dəstək olmuşdur. Hər bir uşağa fərdi yanaşmanı əsas prinsip hesab edir və terapiya prosesində müasir metodlardan istifadə edir. Müxtəlif seminar, təlim və beynəlxalq konfranslarda iştirak etmiş, öz bilik və bacarıqlarını davamlı şəkildə inkişaf etdirmişdir. Məqsədi uşaqların potensialını üzə çıxarmaq və onların cəmiyyətə daha rahat uyğunlaşmasına dəstək olmaqdır.",
        specialties: ["Uşaq", "Nitq inkişafı", "Defektologiya", "Loqopediya"],
        education: "Azərbaycan Dövlət Pedaqoji Universiteti – Korreksiyaedici təlim ixtisası",
    },
];

export default function MutexessislerPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full grow flex-col">
                <Header />
                <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto">
                    <section className="px-4 py-12 lg:py-20 w-full">
                        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
                            <div className="flex items-center gap-3">
                                <div className="h-[2px] w-8 bg-primary"></div>
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Komandamız</h3>
                                <div className="h-[2px] w-8 bg-primary"></div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">Mütəxəssislərimiz</h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Komandamız beynəlxalq sertifikatlara sahib, təcrübəli psixoloqlardan, psixoterapevtlərdən və korreksiyaedici təlim mütəxəssislərindən ibarətdir.
                            </p>
                        </div>
                    </section>

                    <section className="px-4 py-8 pb-16 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {specialists.map((s) => (
                                <div key={s.name} className="flex flex-col p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5 transition-transform hover:-translate-y-1">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="size-20 rounded-full bg-cover bg-center bg-no-repeat border-3 border-primary/20 shrink-0" style={{ backgroundImage: `url('${s.image}')` }}></div>
                                        <div>
                                            <h3 className="text-lg font-bold">{s.name}</h3>
                                            <p className="text-primary font-semibold text-sm">{s.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-100/70 text-sm leading-relaxed mb-4">{s.bio}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {s.specialties.map((sp) => (
                                            <span key={sp} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{sp}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-900/5 dark:border-slate-100/5">
                                        <span className="material-symbols-outlined text-primary text-lg">school</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-100/70">{s.education}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
