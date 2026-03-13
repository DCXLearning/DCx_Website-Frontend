import type { AppLanguage } from "@/components/Header";
import academyImage from "@/assets/service-academy.png";

export type StaticAcademyHeading = {
    badge: string;
    title: string;
    description: string;
    trained: string;
    certified: string;
    readyTitle: string;
    readyDescription: string;
    viewPrograms: string;
    applyNow: string;
    durationLabel: string;
};

export type StaticAcademyProgram = {
    id: number;
    title: string;
    description: string;
    duration: string;
    image?: string;
};

export const academyStaticHeading: Record<AppLanguage, StaticAcademyHeading> = {
    en: {
        badge: "DCx Academy",
        title: "Building Digital Capacity",
        description:
            "Empowering the next generation of data scientists, engineers, and digital leaders across the Mekong region.",
        trained: "500+ Trained",
        certified: "Industry Certified",
        readyTitle: "Ready to Build Your Digital Future?",
        readyDescription:
            "Join our next cohort and gain the skills needed to drive digital transformation in your organization.",
        viewPrograms: "View Programs",
        applyNow: "Apply Now",
        durationLabel: "Duration",
    },
    km: {
        badge: "សាលា DCx",
        title: "ការកសាងសមត្ថភាពឌីជីថល",
        description:
            "ពង្រឹងសមត្ថភាពជំនាន់ថ្មីនៃអ្នកវិទ្យាសាស្ត្រទិន្នន័យ វិស្វករ និងមេដឹកនាំឌីជីថល នៅទូទាំងតំបន់មេគង្គ។",
        trained: "បណ្តុះបណ្តាល 500+ នាក់",
        certified: "មានវិញ្ញាបនបត្រឧស្សាហកម្ម",
        readyTitle: "ត្រៀមខ្លួនសម្រាប់អនាគតឌីជីថលរបស់អ្នកហើយឬនៅ?",
        readyDescription:
            "ចូលរួមជំនាន់សិក្សាបន្ទាប់របស់យើង ហើយទទួលបានជំនាញដែលចាំបាច់សម្រាប់ជំរុញការបម្លែងឌីជីថលនៅក្នុងស្ថាប័នរបស់អ្នក។",
        viewPrograms: "មើលកម្មវិធីសិក្សា",
        applyNow: "ដាក់ពាក្យឥឡូវនេះ",
        durationLabel: "រយៈពេល",
    },
    bn: {
        badge: "Akademi DCx",
        title: "Membina Kapasiti Digital",
        description:
            "Memperkasa generasi baharu saintis data, jurutera dan pemimpin digital di seluruh rantau Mekong.",
        trained: "500+ Dilatih",
        certified: "Diiktiraf Industri",
        readyTitle: "Sedia Membina Masa Depan Digital Anda?",
        readyDescription:
            "Sertai kohort seterusnya dan kuasai kemahiran yang diperlukan untuk memacu transformasi digital dalam organisasi anda.",
        viewPrograms: "Lihat Program",
        applyNow: "Mohon Sekarang",
        durationLabel: "Tempoh",
    },
    cn: {
        badge: "DCx 学院",
        title: "构建数字能力",
        description:
            "赋能湄公河地区新一代数据科学家、工程师和数字化领导者。",
        trained: "500+ 已培训",
        certified: "行业认证",
        readyTitle: "准备好打造你的数字未来了吗？",
        readyDescription:
            "加入我们的下一期课程，掌握推动组织数字化转型所需的技能。",
        viewPrograms: "查看课程",
        applyNow: "立即申请",
        durationLabel: "时长",
    },
    id: {
        badge: "Akademi DCx",
        title: "Membangun Kapasitas Digital",
        description:
            "Memberdayakan generasi baru ilmuwan data, insinyur, dan pemimpin digital di seluruh kawasan Mekong.",
        trained: "500+ Terlatih",
        certified: "Tersertifikasi Industri",
        readyTitle: "Siap Membangun Masa Depan Digital Anda?",
        readyDescription:
            "Bergabunglah dengan angkatan berikutnya dan kuasai keterampilan yang diperlukan untuk mendorong transformasi digital di organisasi Anda.",
        viewPrograms: "Lihat Program",
        applyNow: "Daftar Sekarang",
        durationLabel: "Durasi",
    },
    la: {
        badge: "ສະຖາບັນ DCx",
        title: "ການສ້າງສະມັດຖະນະດິຈິຕອນ",
        description:
            "ສົ່ງເສີມຄົນຮຸ່ນໃໝ່ຂອງນັກວິທະຍາສາດຂໍ້ມູນ ວິສະວະກອນ ແລະ ຜູ້ນຳດິຈິຕອນ ໃນພາກພື້ນແມ່ນ້ຳຂອງ。",
        trained: "ຝຶກອົບຮົມ 500+ ຄົນ",
        certified: "ຮັບຮອງມາດຕະຖານອຸດສາຫະກຳ",
        readyTitle: "ພ້ອມສ້າງອະນາຄົດດິຈິຕອນຂອງທ່ານບໍ?",
        readyDescription:
            "ເຂົ້າຮ່ວມລຸ້ນຮຽນຖັດໄປ ແລະ ຮັບທັກສະທີ່ຈຳເປັນເພື່ອຂັບເຄື່ອນການປ່ຽນຜ່ານດິຈິຕອນໃນອົງກອນຂອງທ່ານ。",
        viewPrograms: "ເບິ່ງຫຼັກສູດ",
        applyNow: "ສະໝັກດຽວນີ້",
        durationLabel: "ໄລຍະເວລາ",
    },
    my: {
        badge: "Akademi DCx",
        title: "Membina Kapasiti Digital",
        description:
            "Memperkasa generasi baharu saintis data, jurutera dan pemimpin digital di seluruh rantau Mekong.",
        trained: "500+ Dilatih",
        certified: "Diiktiraf Industri",
        readyTitle: "Sedia Membina Masa Depan Digital Anda?",
        readyDescription:
            "Sertai kohort seterusnya dan kuasai kemahiran yang diperlukan untuk memacu transformasi digital dalam organisasi anda.",
        viewPrograms: "Lihat Program",
        applyNow: "Mohon Sekarang",
        durationLabel: "Tempoh",
    },
    mm: {
        badge: "DCx အကယ်ဒမီ",
        title: "ဒစ်ဂျစ်တယ် စွမ်းရည်တည်ဆောက်ခြင်း",
        description:
            "မဲခေါင်ဒေသတစ်ဝန်းရှိ ဒေတာသိပ္ပံပညာရှင်များ၊ အင်ဂျင်နီယာများနှင့် ဒစ်ဂျစ်တယ်ခေါင်းဆောင်များ၏ မျိုးဆက်သစ်ကို မြှင့်တင်ပေးသည်။",
        trained: "500+ သင်တန်းဆင်း",
        certified: "စက်မှုလုပ်ငန်း အသိအမှတ်ပြု",
        readyTitle: "သင်၏ ဒစ်ဂျစ်တယ်အနာဂတ်ကို တည်ဆောက်ရန် အဆင်သင့်ဖြစ်ပြီလား?",
        readyDescription:
            "နောက်လာမည့်သင်တန်းအဖွဲ့တွင် ပါဝင်ပြီး သင့်အဖွဲ့အစည်း၏ ဒစ်ဂျစ်တယ်ပြောင်းလဲမှုကို မောင်းနှင်ရန် လိုအပ်သော ကျွမ်းကျင်မှုများကို ရယူပါ။",
        viewPrograms: "အစီအစဉ်များ ကြည့်ရန်",
        applyNow: "ယခု လျှောက်ထားရန်",
        durationLabel: "ကြာချိန်",
    },
    ph: {
        badge: "DCx Academy",
        title: "Pagbuo ng Digital Capacity",
        description:
            "Pinapalakas ang susunod na henerasyon ng mga data scientist, engineer, at digital leader sa buong rehiyon ng Mekong.",
        trained: "500+ Nasanay",
        certified: "Sertipikadong Pang-industriya",
        readyTitle: "Handa Ka Na Bang Buuin ang Iyong Digital na Kinabukasan?",
        readyDescription:
            "Sumali sa susunod naming pangkat at makuha ang mga kasanayang kailangan upang isulong ang digital transformation sa iyong organisasyon.",
        viewPrograms: "Tingnan ang mga Programa",
        applyNow: "Mag-apply Ngayon",
        durationLabel: "Tagal",
    },
    sg: {
        badge: "DCx Academy",
        title: "Building Digital Capacity",
        description:
            "Empowering the next generation of data scientists, engineers, and digital leaders across the Mekong region.",
        trained: "500+ Trained",
        certified: "Industry Certified",
        readyTitle: "Ready to Build Your Digital Future?",
        readyDescription:
            "Join our next cohort and gain the skills needed to drive digital transformation in your organization.",
        viewPrograms: "View Programs",
        applyNow: "Apply Now",
        durationLabel: "Duration",
    },
    tl: {
        badge: "Akademia DCx",
        title: "Harii Kapasidade Dijitál",
        description:
            "Hametin jerasaun foun husi sientista dadus, enjenyeiru no lider dijitál sira iha rejiaun Mekong tomak.",
        trained: "500+ Ema Treinadu",
        certified: "Sertifikadu Indústria",
        readyTitle: "Prontu atu Harii Ita-nia Futuru Dijitál?",
        readyDescription:
            "Tama ba kohorte tuirmai no aprende kapasidade sira ne'ebé presiza atu halo transformasaun dijitál iha ita-nia organizasaun.",
        viewPrograms: "Haree Programa",
        applyNow: "Halo Aplikasaun Agora",
        durationLabel: "Durasaun",
    },
    vn: {
        badge: "Học viện DCx",
        title: "Xây dựng năng lực số",
        description:
            "Trao quyền cho thế hệ mới của các nhà khoa học dữ liệu, kỹ sư và nhà lãnh đạo số trên khắp khu vực Mekong.",
        trained: "500+ Đã đào tạo",
        certified: "Chứng nhận ngành",
        readyTitle: "Sẵn sàng xây dựng tương lai số của bạn?",
        readyDescription:
            "Tham gia khóa học tiếp theo và trang bị những kỹ năng cần thiết để thúc đẩy chuyển đổi số trong tổ chức của bạn.",
        viewPrograms: "Xem chương trình",
        applyNow: "Đăng ký ngay",
        durationLabel: "Thời lượng",
    },
};

export const academyStaticPrograms: Record<AppLanguage, StaticAcademyProgram[]> = {
    en: [],
    km: [],
    bn: [
        {
            id: 756,
            title: "Sains Data & Analitik",
            description:
                "Kuasai analisis statistik, visualisasi data dan pemodelan ramalan",
            duration: "12 minggu",
            image: academyImage,
        },
        {
            id: 757,
            title: "Pembangunan Sistem Digital",
            description:
                "Pembangunan full-stack, reka bentuk pangkalan data dan seni bina awan",
            duration: "16 minggu",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI & Pembelajaran Mesin",
            description:
                "Pembelajaran mendalam, rangkaian neural dan automasi pintar",
            duration: "14 minggu",
            image: academyImage,
        },
        {
            id: 759,
            title: "Teknologi Blockchain",
            description:
                "Kontrak pintar, sistem teragih dan aplikasi terdesentralisasi",
            duration: "10 minggu",
            image: academyImage,
        },
    ],
    cn: [
        {
            id: 756,
            title: "数据科学与分析",
            description: "掌握统计分析、数据可视化和预测建模",
            duration: "12 周",
            image: academyImage,
        },
        {
            id: 757,
            title: "数字系统开发",
            description: "全栈开发、数据库设计和云架构",
            duration: "16 周",
            image: academyImage,
        },
        {
            id: 758,
            title: "人工智能与机器学习",
            description: "深度学习、神经网络和智能自动化",
            duration: "14 周",
            image: academyImage,
        },
        {
            id: 759,
            title: "区块链技术",
            description: "智能合约、分布式系统和去中心化应用",
            duration: "10 周",
            image: academyImage,
        },
    ],
    id: [
        {
            id: 756,
            title: "Sains Data & Analitik",
            description:
                "Kuasai analisis statistik, visualisasi data, dan pemodelan prediktif",
            duration: "12 minggu",
            image: academyImage,
        },
        {
            id: 757,
            title: "Pengembangan Sistem Digital",
            description:
                "Pengembangan full-stack, desain basis data, dan arsitektur cloud",
            duration: "16 minggu",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI & Machine Learning",
            description:
                "Deep learning, jaringan saraf, dan otomasi cerdas",
            duration: "14 minggu",
            image: academyImage,
        },
        {
            id: 759,
            title: "Teknologi Blockchain",
            description:
                "Kontrak pintar, sistem terdistribusi, dan aplikasi terdesentralisasi",
            duration: "10 minggu",
            image: academyImage,
        },
    ],
    la: [
        {
            id: 756,
            title: "ວິທະຍາສາດຂໍ້ມູນ ແລະ ການວິເຄາະ",
            description:
                "ຮຽນຮູ້ການວິເຄາະສະຖິຕິ ການສະແດງຂໍ້ມູນ ແລະ ການສ້າງແບບຈຳລອງຄາດຄະເນ",
            duration: "12 ອາທິດ",
            image: academyImage,
        },
        {
            id: 757,
            title: "ການພັດທະນາລະບົບດິຈິຕອນ",
            description:
                "ການພັດທະນາແບບ full-stack, ການອອກແບບຖານຂໍ້ມູນ ແລະ ສະຖາປັດຕະຍະກຳ cloud",
            duration: "16 ອາທິດ",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI ແລະ ການຮຽນຮູ້ຂອງເຄື່ອງ",
            description:
                "ການຮຽນຮູ້ເລິກ, ເຄືອຂ່າຍປະສາດ ແລະ ລະບົບອັດຕະໂນມັດອັດສະລິຍະ",
            duration: "14 ອາທິດ",
            image: academyImage,
        },
        {
            id: 759,
            title: "ເທັກໂນໂລຢີ Blockchain",
            description:
                "ສັນຍາອັດສະລິຍະ, ລະບົບແຈກຢາຍ ແລະ ແອັບພລິເຄຊັນກະຈາຍສູນ",
            duration: "10 ອາທິດ",
            image: academyImage,
        },
    ],
    my: [
        {
            id: 756,
            title: "Sains Data & Analitik",
            description:
                "Kuasai analisis statistik, visualisasi data dan pemodelan ramalan",
            duration: "12 minggu",
            image: academyImage,
        },
        {
            id: 757,
            title: "Pembangunan Sistem Digital",
            description:
                "Pembangunan full-stack, reka bentuk pangkalan data dan seni bina awan",
            duration: "16 minggu",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI & Pembelajaran Mesin",
            description:
                "Pembelajaran mendalam, rangkaian neural dan automasi pintar",
            duration: "14 minggu",
            image: academyImage,
        },
        {
            id: 759,
            title: "Teknologi Blockchain",
            description:
                "Kontrak pintar, sistem teragih dan aplikasi terdesentralisasi",
            duration: "10 minggu",
            image: academyImage,
        },
    ],
    mm: [
        {
            id: 756,
            title: "ဒေတာသိပ္ပံ နှင့် ခွဲခြမ်းစိတ်ဖြာမှု",
            description:
                "စာရင်းအင်းခွဲခြမ်းစိတ်ဖြာမှု၊ ဒေတာမြင်ကွင်းဖော်ပြမှု နှင့် ကြိုတင်ခန့်မှန်းမော်ဒယ်များကို လေ့လာပါ",
            duration: "12 ပတ်",
            image: academyImage,
        },
        {
            id: 757,
            title: "ဒစ်ဂျစ်တယ်စနစ် ဖွံ့ဖြိုးတိုးတက်ရေး",
            description:
                "Full-stack ဖွံ့ဖြိုးတိုးတက်ရေး၊ database ဒီဇိုင်း နှင့် cloud architecture",
            duration: "16 ပတ်",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI နှင့် စက်သင်ယူမှု",
            description:
                "Deep learning၊ neural networks နှင့် smart automation",
            duration: "14 ပတ်",
            image: academyImage,
        },
        {
            id: 759,
            title: "Blockchain နည်းပညာ",
            description:
                "Smart contracts၊ distributed systems နှင့် decentralized applications",
            duration: "10 ပတ်",
            image: academyImage,
        },
    ],
    ph: [
        {
            id: 756,
            title: "Data Science at Analytics",
            description:
                "Pag-aralan ang statistical analysis, data visualization, at predictive modeling",
            duration: "12 linggo",
            image: academyImage,
        },
        {
            id: 757,
            title: "Pagbuo ng Digital Systems",
            description:
                "Full-stack development, disenyo ng database, at cloud architecture",
            duration: "16 linggo",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI at Machine Learning",
            description:
                "Deep learning, neural networks, at intelligent automation",
            duration: "14 linggo",
            image: academyImage,
        },
        {
            id: 759,
            title: "Teknolohiyang Blockchain",
            description:
                "Smart contracts, distributed systems, at decentralized applications",
            duration: "10 linggo",
            image: academyImage,
        },
    ],
    sg: [
        {
            id: 756,
            title: "Data Science & Analytics",
            description:
                "Master statistical analysis, data visualization, and predictive modeling",
            duration: "12 weeks",
            image: academyImage,
        },
        {
            id: 757,
            title: "Digital Systems Development",
            description:
                "Full-stack development, database design, and cloud architecture",
            duration: "16 weeks",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI & Machine Learning",
            description:
                "Deep learning, neural networks, and intelligent automation",
            duration: "14 weeks",
            image: academyImage,
        },
        {
            id: 759,
            title: "Blockchain Technology",
            description:
                "Smart contracts, distributed systems, and decentralized applications",
            duration: "10 weeks",
            image: academyImage,
        },
    ],
    tl: [
        {
            id: 756,
            title: "Siénsia Dadus no Analítika",
            description:
                "Aprende análize estatístika, vizualizasaun dadus no modelu predizivu",
            duration: "12 semana",
            image: academyImage,
        },
        {
            id: 757,
            title: "Dezenvolvimentu Sistema Dijitál",
            description:
                "Dezenvolvimentu full-stack, dezenhu base de dados no arquitetura cloud",
            duration: "16 semana",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI no Machine Learning",
            description:
                "Deep learning, neural networks no automasaun inteligente",
            duration: "14 semana",
            image: academyImage,
        },
        {
            id: 759,
            title: "Teknolojia Blockchain",
            description:
                "Smart contracts, distributed systems no aplikasaun descentralizadu",
            duration: "10 semana",
            image: academyImage,
        },
    ],
    vn: [
        {
            id: 756,
            title: "Khoa học dữ liệu & Phân tích",
            description:
                "Làm chủ phân tích thống kê, trực quan hóa dữ liệu và mô hình dự báo",
            duration: "12 tuần",
            image: academyImage,
        },
        {
            id: 757,
            title: "Phát triển Hệ thống Số",
            description:
                "Phát triển full-stack, thiết kế cơ sở dữ liệu và kiến trúc đám mây",
            duration: "16 tuần",
            image: academyImage,
        },
        {
            id: 758,
            title: "AI & Machine Learning",
            description:
                "Học sâu, mạng nơ-ron và tự động hóa thông minh",
            duration: "14 tuần",
            image: academyImage,
        },
        {
            id: 759,
            title: "Công nghệ Blockchain",
            description:
                "Hợp đồng thông minh, hệ thống phân tán và ứng dụng phi tập trung",
            duration: "10 tuần",
            image: academyImage,
        },
    ],
};

export const academyHeroImage = academyImage;