import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const posts = [
    {
        slug: "depressiya-ile-mubarize",
        title: "Depressiya ilə mübarizə: ilk addımlar",
        excerpt: "Depressiya hiss etdikdə nə etmək lazımdır? Peşəkar yardım almaq nə vaxt vacibdir? Bu məqalədə depressiyanın əlamətlərini tanımaq və ilk addımları atmaq barədə danışırıq.",
        date: "15 Fevral 2024",
        category: "Psixi Sağlamlıq",
        readTime: "5 dəq",
        image: "/images/blog.png",
    },
    {
        slug: "usaq-qorxulari",
        title: "Uşaq qorxuları: valideynlər üçün bələdçi",
        excerpt: "Uşaqlarda qorxu hissinin yaranma səbəbləri, normal və patoloji qorxular arasındakı fərq, valideynlərin düzgün reaksiyası haqqında ətraflı məlumat.",
        date: "8 Fevral 2024",
        category: "Uşaq Psixologiyası",
        readTime: "7 dəq",
        image: "/images/blog.png",
    },
    {
        slug: "stress-idareetme",
        title: "Gündəlik stres idarəetmə texnikaları",
        excerpt: "İş yeri stresi, ailə münasibətlərindən yaranan gərginlik və sosial təzyiqlə mübarizə üçün praktik və sübuta əsaslanan texnikalar.",
        date: "1 Fevral 2024",
        category: "Özünəqayğı",
        readTime: "4 dəq",
        image: "/images/blog.png",
    },
    {
        slug: "cutluk-unsiyyeti",
        title: "Cütlük ünsiyyətini necə gücləndirmək olar?",
        excerpt: "Sağlam münasibətin əsası güclü ünsiyyətdir. Bu yazıda tərəfdaşınızla daha effektiv ünsiyyət qurmağın yollarını araşdırırıq.",
        date: "25 Yanvar 2024",
        category: "Münasibətlər",
        readTime: "6 dəq",
        image: "/images/blog.png",
    },
    {
        slug: "yeniyetme-sosial-media",
        title: "Yeniyetmələr və sosial media: valideyn nəzarəti",
        excerpt: "Sosial medianın yeniyetmələrin psixoloji sağlamlığına təsiri, ekran vaxtının idarə edilməsi və sağlam rəqəmsal vərdişlər haqqında tövsiyələr.",
        date: "18 Yanvar 2024",
        category: "Yeniyetmə Psixologiyası",
        readTime: "8 dəq",
        image: "/images/blog.png",
    },
    {
        slug: "mindfulness-meditasiya",
        title: "Mindfulness meditasiya: başlanğıc üçün",
        excerpt: "Mindfulness nədir, necə tətbiq edilir və gündəlik həyatda stres azaltmaq üçün sadə meditasiya texnikaları.",
        date: "10 Yanvar 2024",
        category: "Özünəqayğı",
        readTime: "5 dəq",
        image: "/images/blog.png",
    },
];

export default function BloqPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full grow flex-col">
                <Header />
                <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto">
                    <section className="px-4 py-12 lg:py-20 w-full">
                        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
                            <div className="flex items-center gap-3">
                                <div className="h-[2px] w-8 bg-primary"></div>
                                <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Bloq</h3>
                                <div className="h-[2px] w-8 bg-primary"></div>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">Faydalı Məqalələr</h1>
                            <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                                Psixoloji sağlamlıq, özünəqayğı və münasibətlər mövzusunda peşəkar məqalələr.
                            </p>
                        </div>
                    </section>

                    <section className="px-4 py-8 pb-16 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <Link key={post.slug} href="#" className="group flex flex-col rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-900/5 dark:border-slate-100/5 overflow-hidden hover:border-primary/30 transition-all active:scale-[0.98]">
                                    <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }}></div>
                                    <div className="flex flex-col gap-3 p-5 lg:p-6 flex-1">
                                        <div className="flex items-center gap-3 text-xs">
                                            <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">{post.category}</span>
                                            <span className="text-slate-500 dark:text-slate-100/70">{post.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-100/70 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                                        <div className="flex items-center justify-between pt-3 border-t border-slate-900/5 dark:border-slate-100/5 mt-auto">
                                            <span className="text-xs text-slate-500 dark:text-slate-100/70 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">schedule</span> {post.readTime}
                                            </span>
                                            <span className="text-primary font-bold text-sm flex items-center gap-1">
                                                Oxu <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
