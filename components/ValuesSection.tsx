export default function ValuesSection() {
    return (
        <section
            className="px-4 py-16 w-full bg-surface-light dark:bg-surface-dark rounded-3xl my-8 border border-slate-900/5 dark:border-slate-100/5"
            id="deyerlerimiz"
        >
            <div className="flex flex-col gap-12">
                <div className="text-center flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm">
                            Dəyərlərimiz
                        </h3>
                        <div className="h-[2px] w-8 bg-primary"></div>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                        Bizim Təməl Prinsiplərimiz
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Value 1 */}
                    <div className="flex flex-col gap-4 p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-900/5 dark:border-slate-100/5 transition-transform hover:-translate-y-1">
                        <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">
                                verified
                            </span>
                        </div>
                        <h3 className="text-xl font-bold">Peşəkar yanaşmamız</h3>
                        <p className="text-slate-500 dark:text-slate-100/70 leading-relaxed">
                            Hər bir pasiyentə sevgi ilə yanaşaraq, içindəki işığı gücləndirmək və həyatına aydınlıq gətirməkdir
                        </p>
                    </div>
                    {/* Value 2 */}
                    <div className="flex flex-col gap-4 p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-900/5 dark:border-slate-100/5 transition-transform hover:-translate-y-1">
                        <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">lock</span>
                        </div>
                        <h3 className="text-xl font-bold">Məxfilik və Güvən</h3>
                        <p className="text-slate-500 dark:text-slate-100/70 leading-relaxed">
                            Bizim üçün pasiyentin şəxsi məlumatlarının məxfiliyi və
                            mərkəzimizdəki rahatlığı ən əsas şərtdir.
                        </p>
                    </div>
                    {/* Value 3 */}
                    <div className="flex flex-col gap-4 p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-slate-900/5 dark:border-slate-100/5 transition-transform hover:-translate-y-1">
                        <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">
                                psychology
                            </span>
                        </div>
                        <h3 className="text-xl font-bold">Fərdi Proqramlar</h3>
                        <p className="text-slate-500 dark:text-slate-100/70 leading-relaxed">
                            Hər bir şəxsin unikal ehtiyacları nəzərə alınaraq, spesifik
                            olaraq hazırlanmış müalicə proqramları.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
