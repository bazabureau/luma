import Header from "@/components/Header";
import Footer from "@/components/Footer";

const team = [
    {
        name: "Mina Əliyeva",
        role: "Klinik Psixoloq",
        image: "/images/mina.jpg",
        bio: "Mina Əliyeva psixologiya sahəsində fundamental akademik baza və uzunillik praktik təcrübəni birləşdirən mütəxəssisdir. 10 ildən artıq peşəkar fəaliyyəti müddətində uşaqlar, yeniyetmələr və böyüklərlə yüksək həssaslıq, fərdi yanaşma və peşəkar etika çərçivəsində çalışaraq, onların psixoloji rifahının yaxşılaşdırılması və daxili potensialının inkişaf etdirilməsi istiqamətində mühüm töhfələr vermişdir.",
    },
];

const stats = [
    { value: "2000+", label: "Xoşbəxt Pasiyent" },
    { value: "15+", label: "İllik Təcrübə" },
    { value: "98%", label: "Məmnuniyyət Dərəcəsi" },
    { value: "6", label: "Peşəkar Mütəxəssis" },
];

export default function HaqqimizdaPage() {
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
                                    Haqqımızda
                                </h3>
                                <div className="h-[2px] w-8 bg-primary"></div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                Bizim fəlsəfəmiz və klinik yanaşmamız
                            </h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Lumen Psixologiya Mərkəzi fərdlərin, cütlüklərin və ailələrin
                                psixoloji sağlamlığını bərpa etmək və həyat keyfiyyətini
                                artırmaq üçün yaradılmışdır.
                            </p>
                        </div>
                    </section>

                    {/* Mission & Vision */}
                    <section className="px-4 py-12 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-6 p-8 lg:p-10 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">
                                        visibility
                                    </span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-black">
                                    Baxışımız
                                </h2>
                                <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                    Azərbaycan cəmiyyətində psixoloji sağlamlığa olan münasibəti
                                    dəyişdirmək və hər kəsin yüksək keyfiyyətli psixoloji yardıma
                                    çıxışını təmin etmək. Biz inanırıq ki, ruhi sağlamlıq fiziki
                                    sağlamlıq qədər vacibdir.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6 p-8 lg:p-10 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5">
                                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">
                                        flag
                                    </span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-black">
                                    Missiyamız
                                </h2>
                                <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                    Sübuta əsaslanan terapevtik metodlardan istifadə edərək,
                                    təhlükəsiz və dəstəkləyici bir mühitdə hər bir insanın
                                    potensialını üzə çıxarmaq. Biz peşəkarlıq, məxfilik və
                                    empatiya ilə fəaliyyət göstəririk.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Stats */}
                    <section className="px-4 py-12 w-full">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-primary/5 border border-primary/10"
                                >
                                    <span className="text-4xl lg:text-5xl font-black text-primary">
                                        {stat.value}
                                    </span>
                                    <span className="text-slate-500 dark:text-slate-100/70 text-sm font-semibold text-center">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* About Detailed */}
                    <section className="px-4 py-12 w-full">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-[2px] w-8 bg-primary"></div>
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm">
                                        Tariximiz
                                    </h3>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                                    Necə başladıq
                                </h2>
                                <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                    Lumen Psixologiya Mərkəzi 2019-cu ildə Bakının mərkəzində
                                    kiçik bir ofisdə fəaliyyətə başlamışdır. İlk gündən məqsədimiz
                                    Azərbaycanda psixoloji xidmətlərə olan ehtiyacı ödəmək və
                                    cəmiyyətdə psixi sağlamlıq mövzusunda maarifləndirmə aparmaq
                                    olmuşdur.
                                </p>
                                <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                    Bu gün 6 nəfərlik peşəkar komandamızla 2000-dən çox
                                    insanın həyatına müsbət dəyişiklik gətirmişik. Klinik
                                    yanaşmamız beynəlxalq standartlara söykənir və daim
                                    yenilənir.
                                </p>
                            </div>
                            <div className="flex-1 w-full grid grid-cols-2 gap-4">
                                <div
                                    className="bg-cover bg-center rounded-xl aspect-[4/5] mt-8"
                                    style={{ backgroundImage: "url('/images/about1.png')" }}
                                ></div>
                                <div
                                    className="bg-cover bg-center rounded-xl aspect-[4/5]"
                                    style={{ backgroundImage: "url('/images/about2.png')" }}
                                ></div>
                            </div>
                        </div>
                    </section>

                    {/* Team */}
                    <section className="px-4 py-16 w-full">
                        <div className="flex flex-col gap-12">
                            <div className="text-center flex flex-col items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-[2px] w-8 bg-primary"></div>
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm">
                                        Komandamız
                                    </h3>
                                    <div className="h-[2px] w-8 bg-primary"></div>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                                    Peşəkar Psixoloqumuz
                                </h2>
                                <p className="text-slate-500 dark:text-slate-100/70 text-lg max-w-2xl">
                                    Komandamız beynəlxalq sertifikatlara sahib, təcrübəli
                                    mütəxəssislərdən ibarətdir.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {team.map((member) => (
                                    <div
                                        key={member.name}
                                        className="flex flex-col items-center gap-6 p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5 transition-transform hover:-translate-y-1"
                                    >
                                        <div
                                            className="size-32 rounded-full bg-cover bg-center bg-no-repeat border-4 border-primary/20"
                                            style={{ backgroundImage: `url('${member.image}')` }}
                                        ></div>
                                        <div className="text-center flex flex-col gap-2">
                                            <h3 className="text-xl font-bold">{member.name}</h3>
                                            <p className="text-primary font-semibold text-sm">
                                                {member.role}
                                            </p>
                                            <p className="text-slate-500 dark:text-slate-100/70 text-sm leading-relaxed mt-2">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="px-4 py-12 w-full">
                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex flex-col gap-4 max-w-xl">
                                <h2 className="text-2xl lg:text-3xl font-black">
                                    Bizimlə əlaqə saxlayın
                                </h2>
                                <p className="text-slate-500 dark:text-slate-100/70 text-lg">
                                    İlk konsultasiya pulsuz! Peşəkar psixoloqumuzla tanış
                                    olun.
                                </p>
                            </div>
                            <a
                                href="/qebul"
                                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]"
                            >
                                Qəbula yazıl
                            </a>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
