import Header from "@/components/Header";
import Footer from "@/components/Footer";

const specialists = [
    {
        name: "Dr. Leyla Həsənova",
        role: "Klinik Psixoloq, Baş Mütəxəssis",
        image: "/images/team-female.png",
        bio: "15 illik təcrübə. Koqnitiv-davranış terapiyası və travma müalicəsi üzrə ixtisaslaşıb. Bakı Dövlət Universitetinin Psixologiya fakültəsini bitirib, Böyük Britaniyada ixtisas artırıb.",
        specialties: ["Fərdi Terapiya", "Travma Müalicəsi", "EMDR", "KDT"],
        education: "BSU Psixologiya, King's College London MA",
    },
    {
        name: "Dr. Elvin Məmmədov",
        role: "Psixoterapevt",
        image: "/images/team-male.png",
        bio: "10 illik təcrübə. Ailə və cütlük terapiyası, yeniyetmə psixologiyası sahəsində mütəxəssis. Gottman metodu üzrə sertifikatlı terapevt.",
        specialties: ["Cütlük Terapiyası", "Ailə Terapiyası", "Yeniyetmə Terapiyası"],
        education: "ADPU Psixologiya, İstanbul Universitetit MA",
    },
    {
        name: "Aynur Əliyeva",
        role: "Uşaq Psixoloqu",
        image: "/images/team-female.png",
        bio: "8 illik təcrübə. Uşaq inkişafı, oyun terapiyası və davranış problemləri üzrə ixtisaslaşıb. Play Therapy International sertifikatı.",
        specialties: ["Uşaq Psixologiyası", "Oyun Terapiyası", "Sənət Terapiyası"],
        education: "BSU Psixologiya, Play Therapy International",
    },
    {
        name: "Rəşad Hüseynov",
        role: "Klinik Psixoloq",
        image: "/images/team-male.png",
        bio: "12 illik təcrübə. Qrup terapiyası və sosial bacarıqlar təlimi üzrə mütəxəssis. Depressiya və təşviş pozuntuları sahəsində dərin biliyə malikdir.",
        specialties: ["Qrup Terapiyası", "Fərdi Terapiya", "Psixoloji Diaqnostika"],
        education: "ADPU Klinik Psixologiya MA",
    },
    {
        name: "Nigar İsmayılova",
        role: "Psixoloji Məsləhətçi",
        image: "/images/team-female.png",
        bio: "6 illik təcrübə. Stres idarəetmə, karyera məsləhəti və şəxsi inkişaf proqramları üzrə mütəxəssis.",
        specialties: ["Stres İdarəetmə", "Karyera Məsləhəti", "Mindfulness"],
        education: "BSU Psixologiya BA, Sertifikatlı Mindfulness Təlimçi",
    },
    {
        name: "Tural Əhmədov",
        role: "Neyro­psixoloq",
        image: "/images/team-male.png",
        bio: "9 illik təcrübə. Koqnitiv funksiyaların qiymətləndirilməsi və neyropsixoloji reabilitasiya üzrə mütəxəssis.",
        specialties: ["Psixoloji Diaqnostika", "Neyropsixologiya", "Koqnitiv Reabilitasiya"],
        education: "Moskva Dövlət Universitetin Neyropsixologiya PhD",
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
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">Peşəkar Mütəxəssislərimiz</h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Komandamız beynəlxalq sertifikatlara sahib, təcrübəli psixoloqlardan və psixoterapevtlərdən ibarətdir.
                            </p>
                        </div>
                    </section>

                    <section className="px-4 py-8 pb-16 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {specialists.map((s) => (
                                <div key={s.name} className="flex flex-col p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5 transition-transform hover:-translate-y-1">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="size-20 rounded-full bg-cover bg-center border-3 border-primary/20 shrink-0" style={{ backgroundImage: `url('${s.image}')` }}></div>
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
