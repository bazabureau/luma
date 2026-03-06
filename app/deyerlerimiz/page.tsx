import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
    {
        icon: "verified",
        title: "Peşəkar Yanaşma",
        description:
            "Hər bir pasiyentə beynəlxalq standartlara və etik normalara uyğun yüksək səviyyəli yanaşma tətbiq edilir.",
        details:
            "Komandamız beynəlxalq psixologiya assosiasiyalarının standartlarına əməl edir. Bütün mütəxəssislərimiz müntəzəm olaraq superviziya seanslarında iştirak edir və peşəkar inkişaf proqramlarından keçir. Biz etik kodekslərə ciddi riayət edirik və hər bir müdaxilə sübuta əsaslanan metodlarla aparılır.",
    },
    {
        icon: "lock",
        title: "Məxfilik və Güvən",
        description:
            "Bizim üçün pasiyentin şəxsi məlumatlarının məxfiliyi və mərkəzimizdəki rahatlığı ən əsas şərtdir.",
        details:
            "Bütün seans məlumatları ciddi məxfilik qaydaları çərçivəsində qorunur. Pasiyent razılığı olmadan heç bir məlumat üçüncü tərəflə paylaşılmır. Rəqəmsal qeydlərimiz şifrələnmiş sistemlərdə saxlanılır və yalnız müvafiq mütəxəssis tərəfindən əlçatandır.",
    },
    {
        icon: "psychology",
        title: "Fərdi Proqramlar",
        description:
            "Hər bir şəxsin unikal ehtiyacları nəzərə alınaraq, spesifik olaraq hazırlanmış müalicə proqramları.",
        details:
            "Müalicəyə başlamazdan əvvəl hər pasiyent üçün hərtərəfli qiymətləndirmə aparılır. Bu qiymətləndirmə əsasında fərdi müalicə planı hazırlanır və müntəzəm olaraq yenidən nəzərdən keçirilir. Terapevtik metodlar pasiyentin ehtiyaclarına uyğun seçilir və lazım olduqda dəyişdirilir.",
    },
    {
        icon: "favorite",
        title: "Empatiya və Anlayış",
        description:
            "Hər bir insanın daxili dünyasını anlamaq və qeyri-mühakimə edici mühit yaratmaq bizim əsas dəyərimizdir.",
        details:
            "Terapevtik münasibət güvən və anlayış üzərində qurulur. Mütəxəssislərimiz hər pasiyentin unikal təcrübəsinə hörmətlə yanaşır və qeyri-mühakimə edici mühit yaradır. Bu yanaşma sağalma prosesinin əsasını təşkil edir.",
    },
    {
        icon: "auto_awesome",
        title: "Müasir Metodlar",
        description:
            "Ən son elmi araşdırmalara əsaslanan müasir terapevtik yanaşmalar tətbiq edilir.",
        details:
            "Koqnitiv-davranış terapiyası (KDT), EMDR, dialektik davranış terapiyası, sxem terapiyası və digər sübuta əsaslanan metodlardan istifadə edirik. Mütəxəssislərimiz yeni metodları öyrənmək üçün müntəzəm olaraq beynəlxalq təlimlərdə iştirak edir.",
    },
    {
        icon: "diversity_3",
        title: "İnklüzivlik",
        description:
            "Yaş, cins, mədəniyyət və arxa plandan asılı olmayaraq hər kəsə bərabər xidmət göstəririk.",
        details:
            "Mərkəzimiz hər kəsə açıqdır. Mədəni fərqliliklərə hörmətlə yanaşılır və müalicə planları pasiyentin mədəni kontekstinə uyğunlaşdırılır. Məqsədimiz hər bir insanın özünü qəbul edilmiş və dəyərli hiss etməsidir.",
    },
];

export default function DeyerlerimizPage() {
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
                                    Dəyərlərimiz
                                </h3>
                                <div className="h-[2px] w-8 bg-primary"></div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                Bizim Təməl Prinsiplərimiz
                            </h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Lumen Psixologiya Mərkəzi olaraq, fəaliyyətimizi əsaslandıran
                                dəyərlər bizim kim olduğumuzu və necə işlədiyimizi müəyyən edir.
                            </p>
                        </div>
                    </section>

                    {/* Values Grid */}
                    <section className="px-4 py-8 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {values.map((value) => (
                                <div
                                    key={value.title}
                                    className="flex flex-col gap-5 p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5 transition-transform hover:-translate-y-1"
                                >
                                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">
                                            {value.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold">{value.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-100/70 font-medium">
                                        {value.description}
                                    </p>
                                    <p className="text-slate-500 dark:text-slate-100/70 text-sm leading-relaxed">
                                        {value.details}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quote */}
                    <section className="px-4 py-16 w-full">
                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 lg:p-16 flex flex-col items-center text-center gap-6">
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-4xl">
                                    format_quote
                                </span>
                            </div>
                            <blockquote className="text-2xl lg:text-3xl font-black leading-tight max-w-3xl">
                                &ldquo;Sevgi ən güclü işıqdır. İnsan ən çox anlayış gördüyü
                                yerdə sağalmağa başlayır.&rdquo;
                            </blockquote>
                            <p className="text-primary font-bold">— Lumen Psixologiya Mərkəzi</p>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
