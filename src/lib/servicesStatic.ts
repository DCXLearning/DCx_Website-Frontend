import type { AppLanguage } from "@/components/Header";

export type StaticServiceItem = {
    id: number;
    title: string;
    description: string;
    highlights: string[];
    link?: string;
};

const fallbackCardsEn: StaticServiceItem[] = [
    {
        id: 675,
        title: "Data Analytics & Research",
        description:
            "Delivering advanced analytics, policy research, and data-driven insights across the Mekong region, Southeast Asia, and globally.",
        highlights: [
            "Predictive Analytics",
            "Policy Research",
            "Data Visualization",
            "Impact Assessment",
            "Regional Studies",
        ],
    },
    {
        id: 676,
        title: "GIS & Remote Sensing",
        description:
            "Comprehensive geospatial solutions including satellite imagery analysis, spatial data infrastructure, drone mapping, and interactive web-based GIS platforms.",
        highlights: [
            "Satellite Imagery",
            "Spatial Analysis",
            "Drone Mapping",
            "GeoNode Platform",
            "Web GIS",
        ],
        link: "https://gis.analyticalx.org/#/",
    },
    {
        id: 677,
        title: "Digital System Design",
        description:
            "Full-stack digital transformation solutions for M&E, ERP, and MIS platforms that serve communities across borders.",
        highlights: [
            "System Architecture",
            "Cloud Solutions",
            "API Integration",
            "Cross-border Systems",
            "Partner Integration",
        ],
    },
    {
        id: 684,
        title: "Project Consulting",
        description:
            "Strategic consulting services for development projects spanning the Greater Mekong Sub-region and beyond.",
        highlights: [
            "Consortium Management",
            "Stakeholder Engagement",
            "Project Design",
            "M&E Frameworks",
            "Regional Coordination",
        ],
    },
    {
        id: 685,
        title: "DCx Academy",
        description:
            "Building regional capacity through comprehensive training programs in data science, digital systems, AI, and emerging technologies.",
        highlights: [
            "Data Science Training",
            "AI & ML Workshops",
            "Digital Skills",
            "Regional Certification",
            "Partner Programs",
        ],
    },
];

const fallbackCardsKm: StaticServiceItem[] = [
    {
        id: 675,
        title: "ការវិភាគទិន្នន័យ និងស្រាវជ្រាវ",
        description:
            "ផ្តល់សេវាកម្មវិភាគកម្រិតខ្ពស់ ស្រាវជ្រាវគោលនយោបាយ និងចំណេះដឹងផ្អែកលើទិន្នន័យ ក្នុងតំបន់មេគង្គ អាស៊ីអាគ្នេយ៍ និងអន្តរជាតិ។",
        highlights: [
            "វិភាគព្យាករណ៍",
            "ស្រាវជ្រាវគោលនយោបាយ",
            "ការមើលឃើញទិន្នន័យ",
            "វាយតម្លៃផលប៉ះពាល់",
            "សិក្សាតំបន់",
        ],
    },
    {
        id: 676,
        title: "GIS និងការចាប់សញ្ញាពីចម្ងាយ",
        description:
            "ដំណោះស្រាយភូមិសាស្ត្រឌីជីថលគ្រប់ជ្រុងជ្រោយ រួមមានការវិភាគរូបភាពផ្កាយរណប ហេដ្ឋារចនាសម្ព័ន្ធទិន្នន័យលំហ ការធ្វើផែនទីដោយដ្រូន និង Web GIS។",
        highlights: [
            "រូបភាពផ្កាយរណប",
            "វិភាគលំហ",
            "ការធ្វើផែនទីដោយដ្រូន",
            "វេទិកា GeoNode",
            "Web GIS",
        ],
        link: "https://gis.analyticalx.org/#/",
    },
    {
        id: 677,
        title: "ការរចនាប្រព័ន្ធឌីជីថល",
        description:
            "ដំណោះស្រាយបម្លែងឌីជីថលពេញលេញសម្រាប់វេទិកា M&E, ERP និង MIS ដែលអាចពង្រីកបាន និងគាំទ្រការងារឆ្លងព្រំដែន។",
        highlights: [
            "ស្ថាបត្យកម្មប្រព័ន្ធ",
            "ដំណោះស្រាយ Cloud",
            "ការភ្ជាប់ API",
            "ប្រព័ន្ធឆ្លងព្រំដែន",
            "ការភ្ជាប់ដៃគូ",
        ],
    },
    {
        id: 684,
        title: "ប្រឹក្សាគម្រោង",
        description:
            "សេវាប្រឹក្សាយុទ្ធសាស្ត្រសម្រាប់គម្រោងអភិវឌ្ឍន៍នៅអនុតំបន់មេគង្គ និងតំបន់ផ្សេងៗ។",
        highlights: [
            "ការគ្រប់គ្រងសម្ព័ន្ធភាព",
            "ការចូលរួមអ្នកពាក់ព័ន្ធ",
            "ការរចនាគម្រោង",
            "ក្របខណ្ឌ M&E",
            "ការសម្របសម្រួលតំបន់",
        ],
    },
    {
        id: 685,
        title: "សាលា DCx",
        description:
            "កសាងសមត្ថភាពតំបន់តាមរយៈកម្មវិធីបណ្តុះបណ្តាលគ្រប់ជ្រុងជ្រោយក្នុងវិទ្យាសាស្ត្រទិន្នន័យ ប្រព័ន្ធឌីជីថល AI និងបច្ចេកវិទ្យាថ្មីៗ។",
        highlights: [
            "បណ្តុះបណ្តាលវិទ្យាសាស្ត្រទិន្នន័យ",
            "សិក្ខាសាលា AI និង ML",
            "ជំនាញឌីជីថល",
            "វិញ្ញាបនបត្រតំបន់",
            "កម្មវិធីដៃគូ",
        ],
    },
];

export const servicesStaticHeading: Record<
    AppLanguage,
    { title: string; description: string }
> = {
    en: {
        title: "Our Core Services",
        description:
            "Data, digital, research and project consulting services across the Mekong region and Southeast Asia.",
    },
    km: {
        title: "សេវាកម្មស្នូលរបស់យើង",
        description:
            "សេវាកម្មទិន្នន័យ ឌីជីថល ស្រាវជ្រាវ និងប្រឹក្សាគម្រោង នៅទូទាំងតំបន់មេគង្គ និងអាស៊ីអាគ្នេយ៍។",
    },
    bn: {
        title: "Perkhidmatan Teras Kami",
        description:
            "Perkhidmatan data, digital, penyelidikan dan konsultasi projek di seluruh rantau Mekong dan Asia Tenggara.",
    },
    cn: {
        title: "我们的核心服务",
        description:
            "在湄公河地区和东南亚提供数据、数字、研究和项目咨询服务。",
    },
    id: {
        title: "Layanan Inti Kami",
        description:
            "Layanan data, digital, penelitian, dan konsultasi proyek di wilayah Mekong dan Asia Tenggara.",
    },
    la: {
        title: "ບໍລິການຫຼັກຂອງພວກເຮົາ",
        description:
            "ບໍລິການດ້ານຂໍ້ມູນ ດິຈິຕອນ ວິຈັຍ ແລະ ທີ່ປຶກສາໂຄງການ ໃນພາກພື້ນແມ່ນ້ຳຂອງ ແລະ ອາຊີຕາເວັນອອກສຽງໃຕ້。",
    },
    my: {
        title: "Perkhidmatan Teras Kami",
        description:
            "Perkhidmatan data, digital, penyelidikan dan konsultasi projek di rantau Mekong dan Asia Tenggara.",
    },
    mm: {
        title: "အဓိက ဝန်ဆောင်မှုများ",
        description:
            "မဲခေါင်ဒေသနှင့် အရှေ့တောင်အာရှတစ်ဝန်း ဒေတာ၊ ဒစ်ဂျစ်တယ်၊ သုတေသနနှင့် စီမံကိန်းအကြံပေး ဝန်ဆောင်မှုများ။",
    },
    ph: {
        title: "Mga Pangunahing Serbisyo",
        description:
            "Mga serbisyo sa data, digital, pananaliksik, at konsultasyon sa proyekto sa rehiyon ng Mekong at Timog-Silangang Asya.",
    },
    sg: {
        title: "Our Core Services",
        description:
            "Data, digital, research and project consulting services across the Mekong region and Southeast Asia.",
    },
    tl: {
        title: "Servisu Prinsipal",
        description:
            "Servisu ba dadus, dijitál, peskiza no konsultoria projetu iha rejiaun Mekong no Sudeste Aziátiku.",
    },
    vn: {
        title: "Dịch vụ cốt lõi",
        description:
            "Dịch vụ dữ liệu, số hóa, nghiên cứu và tư vấn dự án tại khu vực Mekong và Đông Nam Á.",
    },
};

export const servicesStaticCards: Record<AppLanguage, StaticServiceItem[]> = {
    en: fallbackCardsEn,
    km: fallbackCardsKm,

    bn: [
        {
            id: 675,
            title: "Analitik Data & Penyelidikan",
            description:
                "Menyediakan analitik lanjutan, penyelidikan dasar dan cerapan berasaskan data di seluruh rantau Mekong dan Asia Tenggara.",
            highlights: [
                "Analitik Ramalan",
                "Penyelidikan Dasar",
                "Visualisasi Data",
                "Penilaian Impak",
                "Kajian Serantau",
            ],
        },
        {
            id: 676,
            title: "GIS & Penderiaan Jauh",
            description:
                "Penyelesaian geospatial menyeluruh termasuk analisis imejan satelit, pemetaan dron dan platform GIS berasaskan web.",
            highlights: [
                "Imejan Satelit",
                "Analisis Spatial",
                "Pemetaan Dron",
                "Platform GeoNode",
                "Web GIS",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "Reka Bentuk Sistem Digital",
            description:
                "Penyelesaian transformasi digital penuh untuk platform M&E, ERP dan MIS yang boleh diskalakan.",
            highlights: [
                "Seni Bina Sistem",
                "Penyelesaian Awan",
                "Integrasi API",
                "Sistem Rentas Sempadan",
                "Integrasi Rakan",
            ],
        },
        {
            id: 684,
            title: "Konsultasi Projek",
            description:
                "Perkhidmatan konsultasi strategik untuk projek pembangunan di Sub-rantau Mekong Raya dan seterusnya.",
            highlights: [
                "Pengurusan Konsortium",
                "Libat Urus Pihak Berkepentingan",
                "Reka Bentuk Projek",
                "Rangka Kerja M&E",
                "Koordinasi Serantau",
            ],
        },
        {
            id: 685,
            title: "DCx Academy",
            description:
                "Membina kapasiti serantau melalui program latihan komprehensif dalam sains data, sistem digital dan AI.",
            highlights: [
                "Latihan Sains Data",
                "Bengkel AI & ML",
                "Kemahiran Digital",
                "Pensijilan Serantau",
                "Program Rakan",
            ],
        },
    ],

    cn: [
        {
            id: 675,
            title: "数据分析与研究",
            description: "在湄公河地区和东南亚提供先进分析、政策研究和数据驱动洞察。",
            highlights: ["预测分析", "政策研究", "数据可视化", "影响评估", "区域研究"],
        },
        {
            id: 676,
            title: "GIS 与遥感",
            description:
                "提供卫星影像分析、空间数据基础设施、无人机测绘和 Web GIS 平台等综合地理空间解决方案。",
            highlights: ["卫星影像", "空间分析", "无人机测绘", "GeoNode 平台", "Web GIS"],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "数字系统设计",
            description: "面向 M&E、ERP 和 MIS 平台的全栈数字化转型解决方案。",
            highlights: ["系统架构", "云解决方案", "API 集成", "跨境系统", "合作伙伴集成"],
        },
        {
            id: 684,
            title: "项目咨询",
            description: "为大湄公河次区域及更广区域的发展项目提供战略咨询服务。",
            highlights: ["联盟管理", "利益相关方参与", "项目设计", "M&E 框架", "区域协调"],
        },
        {
            id: 685,
            title: "DCx 学院",
            description:
                "通过综合培训项目提升区域能力，赋能东南亚专业人士掌握数据科学、数字系统和 AI 技能。",
            highlights: ["数据科学培训", "AI 与 ML 工作坊", "数字技能", "区域认证", "合作项目"],
        },
    ],

    id: [
        {
            id: 675,
            title: "Analitik Data & Riset",
            description:
                "Menyediakan analitik lanjutan, riset kebijakan, dan wawasan berbasis data di kawasan Mekong dan Asia Tenggara.",
            highlights: [
                "Analitik Prediktif",
                "Riset Kebijakan",
                "Visualisasi Data",
                "Penilaian Dampak",
                "Studi Regional",
            ],
        },
        {
            id: 676,
            title: "GIS & Penginderaan Jauh",
            description:
                "Solusi geospasial lengkap termasuk analisis citra satelit, pemetaan drone, dan platform GIS berbasis web.",
            highlights: [
                "Citra Satelit",
                "Analisis Spasial",
                "Pemetaan Drone",
                "Platform GeoNode",
                "Web GIS",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "Desain Sistem Digital",
            description:
                "Solusi transformasi digital full-stack untuk platform M&E, ERP, dan MIS yang skalabel.",
            highlights: [
                "Arsitektur Sistem",
                "Solusi Cloud",
                "Integrasi API",
                "Sistem Lintas Batas",
                "Integrasi Mitra",
            ],
        },
        {
            id: 684,
            title: "Konsultasi Proyek",
            description:
                "Layanan konsultasi strategis untuk proyek pembangunan di Sub-kawasan Mekong Raya dan sekitarnya.",
            highlights: [
                "Manajemen Konsorsium",
                "Keterlibatan Pemangku Kepentingan",
                "Desain Proyek",
                "Kerangka M&E",
                "Koordinasi Regional",
            ],
        },
        {
            id: 685,
            title: "Akademi DCx",
            description:
                "Membangun kapasitas regional melalui program pelatihan komprehensif dalam data science, sistem digital, dan AI.",
            highlights: [
                "Pelatihan Data Science",
                "Workshop AI & ML",
                "Keterampilan Digital",
                "Sertifikasi Regional",
                "Program Mitra",
            ],
        },
    ],

    la: [
        {
            id: 675,
            title: "ການວິເຄາະຂໍ້ມູນ ແລະ ການຄົ້ນຄວ້າ",
            description:
                "ໃຫ້ບໍລິການວິເຄາະຂໍ້ມູນຂັ້ນສູງ ການຄົ້ນຄວ້ານະໂຍບາຍ ແລະ ຂໍ້ມູນເພື່ອການຕັດສິນໃຈ ໃນພາກພື້ນແມ່ນ້ຳຂອງ ແລະ ອາຊີຕາເວັນອອກສຽງໃຕ້。",
            highlights: [
                "ການວິເຄາະຄາດຄະເນ",
                "ການຄົ້ນຄວ້ານະໂຍບາຍ",
                "ການສະແດງຂໍ້ມູນ",
                "ການປະເມີນຜົນກະທົບ",
                "ການສຶກສາພາກພື້ນ",
            ],
        },
        {
            id: 676,
            title: "GIS ແລະ ການຮັບຮູ້ຈາກໄລຍະໄກ",
            description:
                "ບໍລິການດ້ານພູມສາດດິຈິຕອນ ຮວມມີ ການວິເຄາະຮູບພາບດາວທຽມ ການວິເຄາະພື້ນທີ່ ແລະ ແຜນທີ່ດິຈິຕອນ。",
            highlights: [
                "ຮູບພາບດາວທຽມ",
                "ການວິເຄາະພື້ນທີ່",
                "ແຜນທີ່ໂດຣນ",
                "ແພລດຟອມ GeoNode",
                "GIS ຜ່ານເວັບ",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "ການອອກແບບລະບົບດິຈິຕອນ",
            description:
                "ພັດທະນາລະບົບດິຈິຕອນສຳລັບການຕິດຕາມ ການບໍລິຫານ ແລະ ລະບົບຂໍ້ມູນ。",
            highlights: [
                "ສະຖາປັດຕະຍະກຳລະບົບ",
                "ລະບົບ Cloud",
                "ການເຊື່ອມຕໍ່ API",
                "ລະບົບຂ້າມປະເທດ",
                "ການເຊື່ອມຕໍ່ພາກສ່ວນ",
            ],
        },
        {
            id: 684,
            title: "ການໃຫ້ຄຳປຶກສາໂຄງການ",
            description:
                "ໃຫ້ບໍລິການວາງແຜນ ແລະ ອອກແບບໂຄງການພັດທະນາ ໃນພາກພື້ນແມ່ນ້ຳຂອງ。",
            highlights: [
                "ການບໍລິຫານກຸ່ມຮ່ວມ",
                "ການມີສ່ວນຮ່ວມຜູ້ກ່ຽວຂ້ອງ",
                "ການອອກແບບໂຄງການ",
                "ກອບການຕິດຕາມ",
                "ການປະສານງານພາກພື້ນ",
            ],
        },
        {
            id: 685,
            title: "ສະຖາບັນ DCx",
            description:
                "ພັດທະນາທັກສະຜູ້ຊຳນານ ໃນວິຊາຂໍ້ມູນ ດິຈິຕອນ ແລະ AI。",
            highlights: [
                "ການຝຶກອົບຮົມຂໍ້ມູນ",
                "ການຝຶກ AI",
                "ທັກສະດິຈິຕອນ",
                "ໃບຢັ້ງຢືນພາກພື້ນ",
                "ໂຄງການຮ່ວມ",
            ],
        },
    ],

    my: [
        {
            id: 675,
            title: "Analitik Data & Penyelidikan",
            description:
                "Menyediakan analitik lanjutan, penyelidikan dasar dan cerapan berasaskan data di seluruh rantau Mekong dan Asia Tenggara.",
            highlights: [
                "Analitik Ramalan",
                "Penyelidikan Dasar",
                "Visualisasi Data",
                "Penilaian Impak",
                "Kajian Serantau",
            ],
        },
        {
            id: 676,
            title: "GIS & Penderiaan Jauh",
            description:
                "Penyelesaian geospatial menyeluruh termasuk analisis imejan satelit, infrastruktur data spatial, pemetaan dron dan platform GIS berasaskan web.",
            highlights: [
                "Imejan Satelit",
                "Analisis Spatial",
                "Pemetaan Dron",
                "Platform GeoNode",
                "GIS Web",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "Reka Bentuk Sistem Digital",
            description:
                "Penyelesaian transformasi digital menyeluruh untuk platform M&E, ERP dan MIS yang menyokong komuniti merentas sempadan.",
            highlights: [
                "Seni Bina Sistem",
                "Penyelesaian Awan",
                "Integrasi API",
                "Sistem Rentas Sempadan",
                "Integrasi Rakan Kongsi",
            ],
        },
        {
            id: 684,
            title: "Perundingan Projek",
            description:
                "Perkhidmatan perundingan strategik untuk projek pembangunan di subrantau Mekong dan seterusnya.",
            highlights: [
                "Pengurusan Konsortium",
                "Penglibatan Pihak Berkepentingan",
                "Reka Bentuk Projek",
                "Rangka Kerja M&E",
                "Penyelarasan Serantau",
            ],
        },
        {
            id: 685,
            title: "Akademi DCx",
            description:
                "Membangunkan kapasiti serantau melalui program latihan menyeluruh dalam sains data, sistem digital, AI dan teknologi baharu.",
            highlights: [
                "Latihan Sains Data",
                "Bengkel AI & ML",
                "Kemahiran Digital",
                "Pensijilan Serantau",
                "Program Rakan Kongsi",
            ],
        },
    ],

    mm: [
        {
            id: 675,
            title: "ဒေတာခွဲခြမ်းစိတ်ဖြာမှု နှင့် သုတေသန",
            description:
                "မဲခေါင်ဒေသ၊ အရှေ့တောင်အာရှနှင့် ကမ္ဘာတစ်ဝန်းတွင် အဆင့်မြင့် ဒေတာခွဲခြမ်းစိတ်ဖြာမှု၊ မူဝါဒသုတေသနနှင့် ဒေတာအခြေပြု အသိပညာများကို ပံ့ပိုးပေးသည်။",
            highlights: [
                "ကြိုတင်ခန့်မှန်းဆန်းစစ်မှု",
                "မူဝါဒသုတေသန",
                "ဒေတာမြင်ကွင်းဖော်ပြမှု",
                "အကျိုးသက်ရောက်မှု အကဲဖြတ်ခြင်း",
                "ဒေသဆိုင်ရာ လေ့လာမှုများ",
            ],
        },
        {
            id: 676,
            title: "GIS နှင့် အဝေးမှအာရုံခံခြင်း",
            description:
                "ဂြိုဟ်တုပုံရိပ် ခွဲခြမ်းစိတ်ဖြာမှု၊ နေရာဒေတာ အခြေခံအဆောက်အအုံ၊ ဒရုန်းမြေပုံဆွဲခြင်းနှင့် ဝက်ဘ်အခြေပြု GIS ပလက်ဖောင်းများ ပါဝင်သော ပထဝီဆိုင်ရာ ဒစ်ဂျစ်တယ်ဖြေရှင်းချက်များကို ပံ့ပိုးပေးသည်။",
            highlights: [
                "ဂြိုဟ်တုပုံရိပ်",
                "နေရာဒေတာ ခွဲခြမ်းစိတ်ဖြာမှု",
                "ဒရုန်းမြေပုံဆွဲခြင်း",
                "GeoNode ပလက်ဖောင်း",
                "ဝက်ဘ် GIS",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "ဒစ်ဂျစ်တယ်စနစ် ဒီဇိုင်း",
            description:
                "နယ်စပ်ဖြတ်ကျော် အသိုင်းအဝိုင်းများကို ဝန်ဆောင်မှုပေးနိုင်သော M&E၊ ERP နှင့် MIS ပလက်ဖောင်းများအတွက် အပြည့်အစုံ ဒစ်ဂျစ်တယ် ပြောင်းလဲမှုဖြေရှင်းချက်များ။",
            highlights: [
                "စနစ်ဗိသုကာ",
                "Cloud ဖြေရှင်းချက်များ",
                "API ပေါင်းစည်းမှု",
                "နယ်စပ်ဖြတ်ကျော် စနစ်များ",
                "မိတ်ဖက်ပေါင်းစည်းမှု",
            ],
        },
        {
            id: 684,
            title: "ပရောဂျက် အကြံပေးဝန်ဆောင်မှု",
            description:
                "မဲခေါင်ဒေသခွဲနှင့် အခြားဒေသများရှိ ဖွံ့ဖြိုးရေးစီမံကိန်းများအတွက် မဟာဗျူဟာဆိုင်ရာ အကြံပေးဝန်ဆောင်မှုများ။",
            highlights: [
                "ပူးပေါင်းအဖွဲ့ စီမံခန့်ခွဲမှု",
                "သက်ဆိုင်သူ ပူးပေါင်းပါဝင်မှု",
                "ပရောဂျက် ဒီဇိုင်း",
                "M&E မူဘောင်",
                "ဒေသဆိုင်ရာ ညှိနှိုင်းမှု",
            ],
        },
        {
            id: 685,
            title: "DCx အကယ်ဒမီ",
            description:
                "ဒေတာသိပ္ပံ၊ ဒစ်ဂျစ်တယ်စနစ်များ၊ AI နှင့် ပေါ်ထွန်းလာသော နည်းပညာများဆိုင်ရာ လေ့ကျင့်ရေးအစီအစဉ်များဖြင့် ဒေသဆိုင်ရာ စွမ်းရည်မြှင့်တင်ပေးသည်။",
            highlights: [
                "ဒေတာသိပ္ပံ သင်တန်း",
                "AI & ML အလုပ်ရုံ",
                "ဒစ်ဂျစ်တယ် ကျွမ်းကျင်မှု",
                "ဒေသဆိုင်ရာ အသိအမှတ်ပြုလက်မှတ်",
                "မိတ်ဖက်အစီအစဉ်များ",
            ],
        },
    ],

    ph: [
        {
            id: 675,
            title: "Pagsusuri ng Datos at Pananaliksik",
            description:
                "Nagbibigay ng masusing pagsusuri, pananaliksik sa polisiya, at mga pananaw na batay sa datos sa rehiyon ng Mekong, Timog-Silangang Asya, at sa buong mundo.",
            highlights: [
                "Prediktibong Pagsusuri",
                "Pananaliksik sa Polisiya",
                "Pagpapakita ng Datos",
                "Pagtatasa ng Epekto",
                "Pag-aaral sa Rehiyon",
            ],
        },
        {
            id: 676,
            title: "GIS at Remote Sensing",
            description:
                "Komprehensibong solusyong heospasyal kabilang ang pagsusuri ng satellite imagery, spatial data infrastructure, drone mapping, at mga web-based GIS platform.",
            highlights: [
                "Larawan mula sa Satellite",
                "Pagsusuring Espasyal",
                "Pagmamapa gamit ang Drone",
                "Platapormang GeoNode",
                "Web GIS",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "Disenyo ng Digital System",
            description:
                "Buong digital transformation solutions para sa mga platapormang M&E, ERP, at MIS na nagsisilbi sa mga komunidad sa iba’t ibang hangganan.",
            highlights: [
                "Arkitektura ng Sistema",
                "Mga Solusyong Cloud",
                "Pagsasama ng API",
                "Mga Sistemang Tawid-Hangganan",
                "Pagsasama ng Kasosyo",
            ],
        },
        {
            id: 684,
            title: "Konsultasyon sa Proyekto",
            description:
                "Mga serbisyong estratehikong konsultasyon para sa mga proyektong pangkaunlaran sa Greater Mekong Sub-region at iba pang lugar.",
            highlights: [
                "Pamamahala ng Consortium",
                "Pakikilahok ng mga Stakeholder",
                "Disenyo ng Proyekto",
                "Balangkas ng M&E",
                "Koordinasyong Rehiyonal",
            ],
        },
        {
            id: 685,
            title: "DCx Academy",
            description:
                "Nagpapalakas ng kapasidad sa rehiyon sa pamamagitan ng komprehensibong mga programa sa pagsasanay sa data science, digital systems, AI, at mga umuusbong na teknolohiya.",
            highlights: [
                "Pagsasanay sa Data Science",
                "Workshop sa AI at ML",
                "Digital na Kasanayan",
                "Sertipikasyong Rehiyonal",
                "Mga Programang Kasosyo",
            ],
        },
    ],

    sg: [
        {
            id: 675,
            title: "Data Analytics & Research",
            description:
                "Delivering advanced analytics, policy research, and data-driven insights across the Mekong region, Southeast Asia, and globally.",
            highlights: [
                "Predictive Analytics",
                "Policy Research",
                "Data Visualization",
                "Impact Assessment",
                "Regional Studies",
            ],
        },
        {
            id: 676,
            title: "GIS & Remote Sensing",
            description:
                "Comprehensive geospatial solutions including satellite imagery analysis, spatial data infrastructure, drone mapping, and interactive web-based GIS platforms.",
            highlights: [
                "Satellite Imagery",
                "Spatial Analysis",
                "Drone Mapping",
                "GeoNode Platform",
                "Web GIS",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "Digital System Design",
            description:
                "Full-stack digital transformation solutions for M&E, ERP, and MIS platforms that serve communities across borders.",
            highlights: [
                "System Architecture",
                "Cloud Solutions",
                "API Integration",
                "Cross-border Systems",
                "Partner Integration",
            ],
        },
        {
            id: 684,
            title: "Project Consulting",
            description:
                "Strategic consulting services for development projects spanning the Greater Mekong Sub-region and beyond.",
            highlights: [
                "Consortium Management",
                "Stakeholder Engagement",
                "Project Design",
                "M&E Frameworks",
                "Regional Coordination",
            ],
        },
        {
            id: 685,
            title: "DCx Academy",
            description:
                "Building regional capacity through comprehensive training programs in data science, digital systems, AI, and emerging technologies.",
            highlights: [
                "Data Science Training",
                "AI & ML Workshops",
                "Digital Skills",
                "Regional Certification",
                "Partner Programs",
            ],
        },
    ],

    tl: [
        {
            id: 675,
            title: "Analítika Dadus no Peskiza",
            description:
                "Fornese análize avansadu, peskiza ba polítika no informasaun bazeia ba dadus iha rejiaun Mekong, Sudeste Aziátiku no mundu tomak.",
            highlights: [
                "Analítika Predisiva",
                "Peskiza Polítika",
                "Vizualizasaun Dadus",
                "Avaliasaun Impaktu",
                "Estudu Rejional",
            ],
        },
        {
            id: 676,
            title: "GIS no Sensoriamentu Remotu",
            description:
                "Soluzaun jeoespasiál kompletu inklui análize imajen satélite, infraestrutura dadus espasiál, mapeamentu drone no plataforma GIS bazeia ba web.",
            highlights: [
                "Imajen Satélite",
                "Análize Espasiál",
                "Mapeamentu Drone",
                "Plataforma GeoNode",
                "GIS Web",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "Dezenhu Sistema Dijitál",
            description:
                "Soluzaun transformasaun dijitál kompletu ba plataforma M&E, ERP no MIS ne’ebé servisu ba komunidade sira iha fronteira oioin.",
            highlights: [
                "Arkitetura Sistema",
                "Soluzaun Cloud",
                "Integrasaun API",
                "Sistema Transfronteirisu",
                "Integrasaun Parseiru",
            ],
        },
        {
            id: 684,
            title: "Konsultoria Projetu",
            description:
                "Servisu konsultoria estratéjiku ba projetu dezenvolvimentu iha Sub-rejiaun Mekong no liu tan.",
            highlights: [
                "Jestaun Konsórsiu",
                "Envolvimentu Stakeholder",
                "Dezenhu Projetu",
                "Estrutura M&E",
                "Koordenasaun Rejional",
            ],
        },
        {
            id: 685,
            title: "Akademia DCx",
            description:
                "Harii kapasidade rejional liuhosi programa formasaun komprensivu iha siénsia dadus, sistema dijitál, AI no teknolójia emerjente sira.",
            highlights: [
                "Formasaun Siénsia Dadus",
                "Workshop AI no ML",
                "Kapasidade Dijitál",
                "Sertifikasaun Rejional",
                "Programa Parseiru",
            ],
        },
    ],

    vn: [
        {
            id: 675,
            title: "Phân tích dữ liệu & Nghiên cứu",
            description:
                "Cung cấp phân tích nâng cao, nghiên cứu chính sách và các hiểu biết dựa trên dữ liệu tại khu vực Mekong, Đông Nam Á và toàn cầu.",
            highlights: [
                "Phân tích dự báo",
                "Nghiên cứu chính sách",
                "Trực quan hóa dữ liệu",
                "Đánh giá tác động",
                "Nghiên cứu khu vực",
            ],
        },
        {
            id: 676,
            title: "GIS & Viễn thám",
            description:
                "Giải pháp không gian địa lý toàn diện bao gồm phân tích ảnh vệ tinh, hạ tầng dữ liệu không gian, lập bản đồ bằng drone và nền tảng GIS trên web.",
            highlights: [
                "Ảnh vệ tinh",
                "Phân tích không gian",
                "Lập bản đồ bằng drone",
                "Nền tảng GeoNode",
                "GIS trên web",
            ],
            link: "https://gis.analyticalx.org/#/",
        },
        {
            id: 677,
            title: "Thiết kế Hệ thống Số",
            description:
                "Giải pháp chuyển đổi số toàn diện cho các nền tảng M&E, ERP và MIS phục vụ cộng đồng xuyên biên giới.",
            highlights: [
                "Kiến trúc hệ thống",
                "Giải pháp đám mây",
                "Tích hợp API",
                "Hệ thống xuyên biên giới",
                "Tích hợp đối tác",
            ],
        },
        {
            id: 684,
            title: "Tư vấn Dự án",
            description:
                "Dịch vụ tư vấn chiến lược cho các dự án phát triển tại tiểu vùng Mekong mở rộng và các khu vực khác.",
            highlights: [
                "Quản lý liên danh",
                "Tham gia của các bên liên quan",
                "Thiết kế dự án",
                "Khung M&E",
                "Điều phối khu vực",
            ],
        },
        {
            id: 685,
            title: "Học viện DCx",
            description:
                "Xây dựng năng lực khu vực thông qua các chương trình đào tạo toàn diện về khoa học dữ liệu, hệ thống số, AI và công nghệ mới nổi.",
            highlights: [
                "Đào tạo khoa học dữ liệu",
                "Hội thảo AI & ML",
                "Kỹ năng số",
                "Chứng chỉ khu vực",
                "Chương trình đối tác",
            ],
        },
    ],
};