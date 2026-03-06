export default function AboutSection() {
    return (
        <section className="px-4 py-16 w-full" id="haqqimizda">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm">
                            Haqqımızda
                        </h3>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                        Bizim fəlsəfəmiz və klinik yanaşmamız
                    </h2>
                    <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                        Lumen Psixologiya Mərkəzi fərdlərin, cütlüklərin və ailələrin
                        psixoloji sağlamlığını bərpa etmək və həyat keyfiyyətini artırmaq
                        üçün yaradılmışdır. Biz inanırıq ki, hər kəsin daxilində sağalma
                        və böyümə potensialı var. Bizim vəzifəmiz bu potensialı üzə
                        çıxarmaq üçün təhlükəsiz və dəstəkləyici bir mühit təmin
                        etməkdir.
                    </p>
                    <p className="text-slate-500 dark:text-slate-100/70 text-lg leading-relaxed">
                        Klinik komandamız beynəlxalq standartlara cavab verən, sübuta
                        əsaslanan terapevtik metodlardan istifadə edərək, hər bir
                        pasiyentə fərdi yanaşma tətbiq edir.
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
    );
}
