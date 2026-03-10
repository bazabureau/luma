export interface ServiceData {
    slug: string;
    icon: string;
    title: string;
    shortDesc: string;
    heroDesc: string;
    sections: { heading: string; text: string }[];
    duration?: string; // made optional
    price?: string;    // made optional
    audience: string;
    methods: string[];
}

export const services: ServiceData[] = [
    {
        slug: "klinik-xidmet",
        icon: "health_and_safety",
        title: "Klinik Xidmət",
        shortDesc: "Psixiatrik və klinik psixoloji dəyərləndirmə, diaqnostika və müalicə.",
        heroDesc: "Klinik xidmət müxtəlif psixotik, nevrotik və şəxsiyyət pozuntularının dərin klinik dəyərləndirməsini və müalicəsini əhatə edir.",
        sections: [
            { heading: "Bu xidmət kimə uyğundur?", text: "Ağır depressiya, bipolyar pozuntu, şizofreniya spektri pozuntuları, panik atak və digər klinik səviyyədə psixoloji narahatlıqları olan şəxslər üçün." },
            { heading: "Necə işləyir?", text: "Klinik psixoloq və ya psixiatr tərəfindən hərtərəfli müayinə aparılır. Diaqnostikadan sonra uyğun müalicə planı və ya psixoterapiya istiqaməti təyin olunur." },
            { heading: "Müddət və tezlik", text: "Müayinə və sonrakı seansların tezliyi mütəxəssis tərəfindən fərdi təyin olunur." },
        ],
        audience: "Yetkinlər və Yeniyetmələr",
        methods: ["Klinik Müsahibə", "Psixiatrik Müayinə", "Psixometrik Testlər"],
    },
    {
        slug: "ferdi-terapiya",
        icon: "person",
        title: "Fərdi Terapiya",
        shortDesc: "Depressiya, təşviş, travma və şəxsi böhranların həllində peşəkar dəstək.",
        heroDesc: "Fərdi terapiya — emosional çətinliklərin aradan qaldırılması, şəxsi inkişaf və psixoloji sağlamlığın bərpası üçün bir-bir aparılan terapevtik seanslar.",
        sections: [
            { heading: "Bu xidmət kimə uyğundur?", text: "Depressiya, təşviş pozuntuları, travma sonrası stress, qəm, özünə inam problemi, həyat böhranları, iş stressi və digər emosional çətinliklərlə üzləşən hər kəs üçün uyğundur. Yaş həddi: 18+." },
            { heading: "Necə işləyir?", text: "İlk seansta mütəxəssis pasiyentin vəziyyətini qiymətləndirir və fərdi müalicə planı hazırlayır. Sonrakı seanslarda koqnitiv-davranış terapiyası (KDT), psixoanalitik yanaşma, humanist terapiya və ya EMDR kimi sübuta əsaslanan metodlardan istifadə edilir." },
            { heading: "Müddət və tezlik", text: "Hər seans 50 dəqiqə davam edir. Adətən həftədə 1 dəfə təyin olunur. Müalicə müddəti fərdi vəziyyətə görə 8-20 seans arasında dəyişə bilər." },
        ],
        audience: "Yetkinlər (18+)",
        methods: ["Koqnitiv-Davranış Terapiyası", "Psixoanalitik Yanaşma", "Humanist Terapiya", "EMDR"],
    },
    {
        slug: "cutluk-terapiyasi",
        icon: "diversity_1",
        title: "Cütlük Terapiyası",
        shortDesc: "Münasibət problemləri, ünsiyyət əskikliyi və münaqişələrin həlli üçün terapiya.",
        heroDesc: "Cütlük terapiyası — münasibətlərdəki problemləri həll etmək, ünsiyyəti gücləndir­mək və emosional bağı bərpa etmək üçün birlikdə aparılan terapevtik iş.",
        sections: [
            { heading: "Bu xidmət kimə uyğundur?", text: "Ünsiyyət problemləri, inam böhranı, emosional uzaqlaşma, münaqişə tezliyi, sədaqətsizlik sonrası bərpa və ya evlənmə öncəsi hazırlıq üçün müraciət edən cütlüklər üçün." },
            { heading: "Necə işləyir?", text: "Emotsional yönümlü terapiya (EFT) və Gottman metodu əsasında aparılır. Mütəxəssis hər iki tərəfin ehtiyaclarını dinləyir, münasibət dinamikasını analiz edir və sağlam ünsiyyət modelləri qurulmasına kömək edir." },
            { heading: "Müddət və tezlik", text: "Hər seans 75 dəqiqə davam edir. Aylıq 2-4 seans tövsiyə olunur. Müalicə kursu adətən 12-20 seans davam edir." },
        ],
        audience: "Cütlüklər",
        methods: ["Emotsional Yönümlü Terapiya (EFT)", "Gottman Metodu", "Ünsiyyət Təlimi"],
    },
    {
        slug: "aile-terapiyasi",
        icon: "family_restroom",
        title: "Ailə Terapiyası",
        shortDesc: "Ailə daxili dinamikaların yaxşılaşdırılması və böhranların idarə edilməsi.",
        heroDesc: "Ailə terapiyası — ailə üzvləri arasında münasibətləri gücləndir­mək, konflik­tləri həll etmək və sağlam ailə dinamikası yarat­maq üçün sistemik yanaşma.",
        sections: [
            { heading: "Bu xidmət kimə uyğundur?", text: "Ailədaxili münaqişələr, valideyn-övlad problemləri, boşanma prosesində dəstək, yeni ailə üzvünün inteqrasiyası, yaslanma və itkiyə uyğunlaşma ilə üzləşən ailələr üçün." },
            { heading: "Necə işləyir?", text: "Sistemik ailə terapiyası yanaşması ilə aparılır. Ailə üzvlərinin qarşılıqlı təsirini öyrənir, ünsiyyət modellərini xəritələyir və daha funksional dinamika qurmağa kömək edir." },
            { heading: "Müddət və tezlik", text: "Hər seans 90 dəqiqə davam edir. Adətən 2 həftədə 1 dəfə keçirilir. Kursun müddəti ailənin ehtiyaclarına uyğun təyin edilir." },
        ],
        audience: "Ailələr",
        methods: ["Sistemik Ailə Terapiyası", "Struktur Ailə Terapiyası", "Narrativ Terapiya"],
    },
    {
        slug: "usaq-psixologiyasi",
        icon: "child_care",
        title: "Uşaq Psixologiyası",
        shortDesc: "Davranış pozuntuları, öyrənmə çətinlikləri və uşaq inkişafı problemləri.",
        heroDesc: "Uşaq psixologiyası — uşaqların emosional, davranış və inkişaf çətinliklərinin aradan qaldırılması üçün yaşa uyğun terapevtik müdaxilələr.",
        sections: [
            { heading: "Bu xidmət kimə uyğundur?", text: "3-12 yaş arası uşaqlarda davranış problemləri, qorxu və narahatlıq, diqqət əskikliyi, öyrənmə çətinlikləri, sosial uyğunlaşma problemləri, valideyn itkisi və ya travma yaşayan uşaqlar üçün." },
            { heading: "Necə işləyir?", text: "Uşağın yaşına uyğun olaraq oyun terapiyası, sənət terapiyası və koqnitiv-davranış yanaşmaları tətbiq edilir. Valideynlər də prosesə cəlb edilir və evdə tətbiq ediləcək strategiyalar öyrədilir." },
            { heading: "Müddət və tezlik", text: "Hər seans 45 dəqiqə davam edir. Həftəlik seanslar tövsiyə olunur. İlk 2-3 seans qiymətləndirmə məqsədi daşıyır, sonra müalicə planı verilir." },
        ],
        audience: "Uşaqlar (3-12 yaş)",
        methods: ["Oyun Terapiyası", "Sənət Terapiyası", "Uşaq KDT", "Valideyn Təlimi"],
    },
    {
        slug: "qrup-terapiyasi",
        icon: "groups",
        title: "Qrup Terapiyası",
        shortDesc: "Bənzər problemlər yaşayan şəxslərlə dəstəkləyici mühitdə sağalma prosesi.",
        heroDesc: "Qrup terapiyası — bənzər çətinliklərlə üzləşən insanların bir-birinə dəstək olduğu, peşəkar rəhbərlik altın­da aparılan qrup seansları.",
        sections: [
            { heading: "Bu xidmət kimə uyğundur?", text: "Depressiya, sosial təşviş, yas, stres idarəetmə, özünəinam problemləri və ya keçmişdən qalan emosional yüklə mübarizə aparan hər kəs. Qrupda ünsiyyət bacarıqlarını gücləndirmək istəyənlər üçün d xüsusilə faydalıdır." },
            { heading: "Necə işləyir?", text: "6-10 nəfərlik qruplarla həftəlik keçirilir. Peşəkar terapevt qrup dinamikasını idarə edir. İştirakçılar öz təcrübələrini bölüşür, bir-birinə dəstək olur və yeni müqavimət bacarıqları öyrənir." },
            { heading: "Müddət və tezlik", text: "Hər seans 90 dəqiqə davam edir. Həftədə 1 dəfə keçirilir. Proqram adətən 8-12 həftəlik dövrələrdən ibarətdir." },
        ],
        audience: "Yetkinlər (18+), 6-10 nəfərlik qrup",
        methods: ["Qrup Dinamikası", "Yas Terapiyası", "Sosial Bacarıqlar Təlimi"],
    },
    {
        slug: "yeniyetme-terapiyasi",
        icon: "school",
        title: "Yeniyetmə Terapiyası",
        shortDesc: "Keçid dövrü çətinlikləri, özünə inam və gələcək planlaşdırılması üzrə dəstək.",
        heroDesc: "Yeniyetmə terapiyası — böyümə dövrünün çağırışları, kimlik formalaşması, emosional dalğalanmalar və sosial təzyiq ilə mübarizədə peşəkar dəstək.",
        sections: [
            { heading: "Bu xidmət kimə uyğundur?", text: "12-18 yaş arası yeniyetmələrdə özünəinam problemi, akademik stres, həmyaşıd təzyiqi, emosional dalğalanma, identitet axtarışı, sosial media asılılığı və ailə münaqişələri ilə üzləşənlər üçün." },
            { heading: "Necə işləyir?", text: "Yeniyetmənin yaşına və şəxsiyyətinə uyğun yanaşma seçilir. Koqnitiv-davranış terapiyası, sənət terapiyası və motivasiya müsahibəsi kimi metodlar tətbiq edilir. Valideynlərlə də ayrıca seanslar keçirilə bilər." },
            { heading: "Müddət və tezlik", text: "Hər seans 50 dəqiqə davam edir. Həftəlik seanslar tövsiyə olunur. Proqram müddəti yeniyetmənin ehtiyaclarına görə fərdi müəyyən olunur." },
        ],
        audience: "Yeniyetmələr (12-18 yaş)",
        methods: ["Yeniyetmə KDT", "Motivasiya Müsahibəsi", "Sənət Terapiyası", "Mindfulness"],
    },
    {
        slug: "psixoloji-diaqnostika",
        icon: "vital_signs",
        title: "Psixoloji Diaqnostika",
        shortDesc: "Klinik qiymətləndirmə, şəxsiyyət testləri və koqnitiv funksiyaların yoxlanılması.",
        heroDesc: "Psixoloji diaqnostika — beynəlxalq standartlara cavab verən testlər və klinik müsahibə vasitəsilə hərtərəfli psixoloji qiymətləndirmə.",
        sections: [
            { heading: "Bu xidmət kimə uyğundur?", text: "Emosional və ya davranış problemlərinin dəqiq diaqnozunu bilmək istəyənlər, koqnitiv funksiyaların qiymətləndirilməsi, şəxsiyyət profili, karyera yönləndirmə, məhkəmə prosesləri üçün psixoloji rəy lazım olanlar üçün." },
            { heading: "Necə işləyir?", text: "Klinik müsahibə, standartlaşdırılmış psixometrik testlər (MMPI, WAIS, Rorschach və s.) və müşahidə əsasında aparılır. Nəticə yazılı hesabat şəklində təqdim edilir." },
            { heading: "Müddət və tezlik", text: "Tam qiymətləndirmə 2-3 seans ərzində aparılır, hər seans 60-90 dəqiqə davam edir. Yazılı hesabat 5-7 iş günü ərzində hazır olur." },
        ],
        audience: "Bütün yaşlar",
        methods: ["MMPI-2", "WAIS-IV", "Beck Depressiya İnventarı", "Rorschach"],
    },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return services.find((s) => s.slug === slug);
}
