import type { AppLanguage } from "@/components/Header";

export type StaticPartnerHeading = {
  badge: string;
  title: string;
  description: string;
  visitWebsite: string;
};

export type StaticPartnerItem = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
};

export const partnersStaticHeading: Record<AppLanguage, StaticPartnerHeading> = {
  en: {
    badge: "Consortium",
    title: "Strategic Partners",
    description:
      "Working together with trusted partners across data, development, and digital education to deliver lasting impact.",
    visitWebsite: "Visit Website",
  },
  km: {
    badge: "សម្ព័ន្ធភាព",
    title: "ដៃគូយុទ្ធសាស្ត្រ",
    description:
      "ធ្វើការរួមគ្នាជាមួយដៃគូដែលអាចទុកចិត្តបានក្នុងវិស័យទិន្នន័យ ការអភិវឌ្ឍ និងការអប់រំឌីជីថល ដើម្បីបង្កើតផលប៉ះពាល់យូរអង្វែង។",
    visitWebsite: "ចូលមើលគេហទំព័រ",
  },
  bn: {
    badge: "Konsortium",
    title: "Rakan Strategik",
    description:
      "Bekerjasama dengan rakan yang dipercayai dalam bidang data, pembangunan dan pendidikan digital untuk memberi impak berkekalan.",
    visitWebsite: "Lawati Laman Web",
  },
  cn: {
    badge: "联盟",
    title: "战略合作伙伴",
    description:
      "与数据、发展和数字教育领域值得信赖的合作伙伴携手合作，创造持久影响。",
    visitWebsite: "访问网站",
  },
  id: {
    badge: "Konsorsium",
    title: "Mitra Strategis",
    description:
      "Bekerja sama dengan mitra tepercaya di bidang data, pembangunan, dan pendidikan digital untuk memberikan dampak jangka panjang.",
    visitWebsite: "Kunjungi Situs",
  },
  la: {
    badge: "ກຸ່ມຮ່ວມມື",
    title: "ພາກສ່ວນຍຸດທະສາດ",
    description:
      "ຮ່ວມມືກັບພາກສ່ວນທີ່ໄວ້ໃຈໄດ້ ໃນດ້ານຂໍ້ມູນ ການພັດທະນາ ແລະ ການສຶກສາດິຈິຕອນ ເພື່ອສ້າງຜົນກະທົບທີ່ຍືນຍາວ。",
    visitWebsite: "ເຂົ້າເບິ່ງເວັບໄຊ",
  },
  my: {
    badge: "Konsortium",
    title: "Rakan Strategik",
    description:
      "Bekerjasama dengan rakan yang dipercayai dalam bidang data, pembangunan dan pendidikan digital untuk memberi impak berkekalan.",
    visitWebsite: "Lawati Laman Web",
  },
  mm: {
    badge: "မဟာမိတ်အဖွဲ့",
    title: "မဟာဗျူဟာမြောက် မိတ်ဖက်များ",
    description:
      "ဒေတာ၊ ဖွံ့ဖြိုးတိုးတက်ရေးနှင့် ဒစ်ဂျစ်တယ်ပညာရေး ကဏ္ဍများတွင် ယုံကြည်စိတ်ချရသော မိတ်ဖက်များနှင့် လက်တွဲလုပ်ဆောင်ကာ ရေရှည်အကျိုးသက်ရောက်မှု ဖန်တီးသည်။",
    visitWebsite: "ဝဘ်ဆိုက်သို့ သွားရန်",
  },
  ph: {
    badge: "Konsorsyum",
    title: "Madiskarteng Kasosyo",
    description:
      "Nakikipagtulungan sa mga pinagkakatiwalaang kasosyo sa larangan ng datos, pag-unlad, at digital na edukasyon upang makalikha ng pangmatagalang epekto.",
    visitWebsite: "Bisitahin ang Website",
  },
  sg: {
    badge: "Consortium",
    title: "Strategic Partners",
    description:
      "Working together with trusted partners across data, development, and digital education to deliver lasting impact.",
    visitWebsite: "Visit Website",
  },
  tl: {
    badge: "Konsórsiu",
    title: "Parseiru Estratéjiku",
    description:
      "Servisu hamutuk ho parseiru sira ne'ebé konfiável iha área dadus, dezenvolvimentu no edukasaun dijitál atu fó impaktu ne'ebé dura.",
    visitWebsite: "Haree Website",
  },
  vn: {
    badge: "Liên minh",
    title: "Đối tác chiến lược",
    description:
      "Cùng hợp tác với các đối tác tin cậy trong lĩnh vực dữ liệu, phát triển và giáo dục số để tạo ra tác động bền vững.",
    visitWebsite: "Truy cập website",
  },
};

export const partnersStaticCards: Record<AppLanguage, StaticPartnerItem[]> = {
  en: [],
  km: [],

  bn: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“Kuasa Data untuk Memacu Inovasi & Pertumbuhan”",
      description:
        "Platform sains data kolaboratif yang memacu inovasi dan pertumbuhan melalui analitik lanjutan, perkongsian penyelidikan dan pembinaan kapasiti di seluruh rantau Mekong.",
      tags: ["Sains Data", "Penyelidikan Kolaboratif", "Inovasi"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "ADIC Analyzing Development Issues Centre",
      tagline: "“Ingat Akar Umbi Anda”",
      description:
        "Penyelesaian projek penyelidikan akar umbi dan pembangunan yang inklusif dari bawah ke atas.",
      tags: ["Penyelidikan Akar Umbi", "Penglibatan Pihak Berkepentingan", "Reka Bentuk Projek"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“Latihan Bakat Teknologi Inovatif”",
      description:
        "Latihan bakat teknologi inovatif dengan program berasaskan kemahiran bertaraf industri untuk ekonomi digital abad ke-21.",
      tags: ["Latihan Teknologi", "Kemahiran Digital", "Keusahawanan"],
      url: "https://www.dichi.academy/",
    },
  ],

  cn: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“以数据力量推动创新与增长”",
      description:
        "一个协作式数据科学平台，通过高级分析、研究合作和能力建设，推动湄公河地区的创新与增长。",
      tags: ["数据科学", "协作研究", "创新"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "ADIC 发展议题分析中心",
      tagline: "“铭记你的基层”",
      description:
        "自下而上的包容性基层研究与发展项目解决方案。",
      tags: ["基层研究", "利益相关方参与", "项目设计"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“创新科技人才培训”",
      description:
        "面向21世纪数字经济的创新科技人才培训，提供行业领先、以技能为导向的课程。",
      tags: ["科技培训", "数字技能", "创业精神"],
      url: "https://www.dichi.academy/",
    },
  ],

  id: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“Kekuatan Data untuk Mendorong Inovasi & Pertumbuhan”",
      description:
        "Platform sains data kolaboratif yang mendorong inovasi dan pertumbuhan melalui analitik lanjutan, kemitraan riset, dan penguatan kapasitas di kawasan Mekong.",
      tags: ["Sains Data", "Riset Kolaboratif", "Inovasi"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "Pusat ADIC Analisis Isu Pembangunan",
      tagline: "“Ingat Akar Rumput Anda”",
      description:
        "Solusi riset akar rumput dan proyek pembangunan yang inklusif dari bawah ke atas.",
      tags: ["Riset Akar Rumput", "Keterlibatan Pemangku Kepentingan", "Desain Proyek"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“Pelatihan Talenta Teknologi Inovatif”",
      description:
        "Pelatihan talenta teknologi inovatif dengan program berbasis keterampilan unggulan industri untuk ekonomi digital abad ke-21.",
      tags: ["Pelatihan Teknologi", "Keterampilan Digital", "Kewirausahaan"],
      url: "https://www.dichi.academy/",
    },
  ],

  la: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“ພະລັງຂອງຂໍ້ມູນເພື່ອຂັບເຄື່ອນນະວັດຕະກຳ ແລະ ການເຕີບໂຕ”",
      description:
        "ແພລດຟອມວິທະຍາສາດຂໍ້ມູນແບບຮ່ວມມື ທີ່ຊ່ວຍຂັບເຄື່ອນນະວັດຕະກຳ ແລະ ການເຕີບໂຕ。",
      tags: ["ວິທະຍາສາດຂໍ້ມູນ", "ວິຈັຍຮ່ວມມື", "ນະວັດຕະກຳ"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "ສູນ ADIC ວິເຄາະບັນຫາການພັດທະນາ",
      tagline: "“ຈື່ຈຳຮາກຖານຂອງທ່ານ”",
      description:
        "ແນວທາງແກ້ໄຂໂຄງການວິຈັຍຮາກຖານ ແລະ ການພັດທະນາແບບມີສ່ວນຮ່ວມ。",
      tags: ["ວິຈັຍຮາກຖານ", "ການມີສ່ວນຮ່ວມຜູ້ກ່ຽວຂ້ອງ", "ການອອກແບບໂຄງການ"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“ການຝຶກອົບຮົມບຸກຄະລາກອນເຕັກໂນໂລຢີແບບນະວັດຕະກຳ”",
      description:
        "ການຝຶກອົບຮົມບຸກຄະລາກອນເຕັກໂນໂລຢີ ດ້ວຍໂຄງການອີງໃສ່ທັກສະຕາມມາດຕະຖານອຸດສາຫະກຳ。",
      tags: ["ການຝຶກເຕັກໂນໂລຢີ", "ທັກສະດິຈິຕອນ", "ຜູ້ປະກອບການ"],
      url: "https://www.dichi.academy/",
    },
  ],

  my: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“Kuasa Data untuk Memacu Inovasi & Pertumbuhan”",
      description:
        "Platform sains data kolaboratif yang memacu inovasi dan pertumbuhan melalui analitik lanjutan, kerjasama penyelidikan dan pembangunan kapasiti di seluruh rantau Mekong.",
      tags: ["Sains Data", "Penyelidikan Kolaboratif", "Inovasi"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "Pusat ADIC Analisis Isu Pembangunan",
      tagline: "“Ingat Akar Umbi Anda”",
      description:
        "Penyelesaian penyelidikan akar umbi dan projek pembangunan yang inklusif dari bawah ke atas.",
      tags: ["Penyelidikan Akar Umbi", "Penglibatan Pihak Berkepentingan", "Reka Bentuk Projek"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“Latihan Bakat Teknologi Inovatif”",
      description:
        "Latihan bakat teknologi inovatif dengan program berasaskan kemahiran bertaraf industri untuk ekonomi digital abad ke-21.",
      tags: ["Latihan Teknologi", "Kemahiran Digital", "Keusahawanan"],
      url: "https://www.dichi.academy/",
    },
  ],

  mm: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“ဆန်းသစ်တီထွင်မှုနှင့် တိုးတက်မှုကို မောင်းနှင်သော ဒေတာ၏စွမ်းအား”",
      description:
        "ပူးပေါင်းဆောင်ရွက်မှု ဒေတာသိပ္ပံပလက်ဖောင်းတစ်ခုအဖြစ် ဆန်းသစ်တီထွင်မှုနှင့် တိုးတက်မှုကို မောင်းနှင်ပေးသည်။",
      tags: ["ဒေတာသိပ္ပံ", "ပူးပေါင်းသုတေသန", "ဆန်းသစ်တီထွင်မှု"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "ADIC ဖွံ့ဖြိုးရေးပြဿနာ ဆန်းစစ်ရေးစင်တာ",
      tagline: "“သင်၏ အခြေခံလူထုကို မမေ့ပါနှင့်”",
      description:
        "အောက်ခြေမှအပေါ်သို့ အားလုံးပါဝင်သော လူထုအခြေပြု သုတေသနနှင့် ဖွံ့ဖြိုးရေးစီမံကိန်း ဖြေရှင်းချက်များ။",
      tags: ["လူထုအခြေပြု သုတေသန", "သက်ဆိုင်သူ ပါဝင်မှု", "စီမံကိန်းဒီဇိုင်း"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“ဆန်းသစ်သော နည်းပညာစွမ်းရည် လေ့ကျင့်ရေး”",
      description:
        "၂၁ ရာစု ဒစ်ဂျစ်တယ်စီးပွားရေးအတွက် ကျွမ်းကျင်မှုအခြေပြု အစီအစဉ်များဖြင့် နည်းပညာစွမ်းရည်များကို လေ့ကျင့်ပေးသည်။",
      tags: ["နည်းပညာလေ့ကျင့်ရေး", "ဒစ်ဂျစ်တယ်ကျွမ်းကျင်မှု", "စီးပွားရေးစတင်မှု"],
      url: "https://www.dichi.academy/",
    },
  ],

  ph: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“Ang Lakas ng Datos sa Pagtutulak ng Inobasyon at Paglago”",
      description:
        "Isang kolaboratibong plataporma sa data science na nagpapalakas ng inobasyon at paglago.",
      tags: ["Data Science", "Kolaboratibong Pananaliksik", "Inobasyon"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "ADIC Sentro para sa Pagsusuri ng mga Isyu sa Pag-unlad",
      tagline: "“Alalahanin ang Iyong Pinagmulan”",
      description:
        "Mga inklusibong solusyon sa pananaliksik at mga proyektong pangkaunlaran mula sa komunidad pataas.",
      tags: ["Pananaliksik sa Komunidad", "Pakikilahok ng Stakeholder", "Disenyo ng Proyekto"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“Makabagong Pagsasanay sa Talentong Pang-teknolohiya”",
      description:
        "Makabagong pagsasanay sa talentong pang-teknolohiya gamit ang mga programang nakabatay sa kasanayan at pamantayan ng industriya.",
      tags: ["Pagsasanay sa Teknolohiya", "Digital na Kasanayan", "Entrepreneurship"],
      url: "https://www.dichi.academy/",
    },
  ],

  sg: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“The Power of Data to Drive Innovation & Growth”",
      description:
        "A collaborative data science platform powering innovation and growth through advanced analytics, research partnerships, and capacity building across the Mekong region.",
      tags: ["Data Science", "Collaborative Research", "Innovation"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "ADIC Analyzing Development Issues Centre",
      tagline: "“Remember Your Grassroots”",
      description:
        "Inclusive grassroots research and development project solutions from the bottom, up.",
      tags: ["Grassroots Research", "Stakeholder Engagement", "Project Design"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“Innovative Tech Talent Training”",
      description:
        "Innovative tech talent training with industry-leading, skill-based programs designed for the 21st-century digital economy.",
      tags: ["Tech Training", "Digital Skills", "Entrepreneurship"],
      url: "https://www.dichi.academy/",
    },
  ],

  tl: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“Poder Dadus atu Hakat Inovasaun no Kresimentu”",
      description:
        "Plataforma siénsia dadus kolaborativu ida ne'ebé suporta inovasaun no kresimentu iha rejiaun Mekong.",
      tags: ["Siénsia Dadus", "Peskiza Kolaborativu", "Inovasaun"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "Sentru ADIC ba Análize Kestaun Dezenvolvimentu",
      tagline: "“Labele Haluha Ita-nia Akar”",
      description:
        "Soluzaun inkluzivu ba peskiza base komunidade no projetu dezenvolvimentu husi kraik ba leten.",
      tags: ["Peskiza Komunitária", "Envolvimentu Stakeholder", "Dezenhu Projetu"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“Formasaun Talentu Teknolójia Inovativu”",
      description:
        "Formasaun talentu teknolójia inovativu ho programa bazeia ba kapasidade no padraun indústria.",
      tags: ["Formasaun Teknolójia", "Kapasidade Dijitál", "Empreendedorismu"],
      url: "https://www.dichi.academy/",
    },
  ],

  vn: [
    {
      id: 742,
      name: "Data CoLabX",
      tagline: "“Sức mạnh của dữ liệu thúc đẩy đổi mới và tăng trưởng”",
      description:
        "Một nền tảng khoa học dữ liệu hợp tác thúc đẩy đổi mới và tăng trưởng trên khắp khu vực Mekong.",
      tags: ["Khoa học dữ liệu", "Nghiên cứu hợp tác", "Đổi mới"],
      url: "https://www.datacolabx.org/",
    },
    {
      id: 743,
      name: "Trung tâm ADIC Phân tích các Vấn đề Phát triển",
      tagline: "“Hãy nhớ đến gốc rễ của bạn”",
      description:
        "Các giải pháp nghiên cứu cơ sở và dự án phát triển toàn diện từ dưới lên.",
      tags: ["Nghiên cứu cơ sở", "Sự tham gia của các bên liên quan", "Thiết kế dự án"],
      url: "https://www.adicentre.org/",
    },
    {
      id: 744,
      name: "Dichi Academy",
      tagline: "“Đào tạo nhân tài công nghệ đổi mới”",
      description:
        "Đào tạo nhân tài công nghệ sáng tạo với các chương trình định hướng kỹ năng hàng đầu ngành.",
      tags: ["Đào tạo công nghệ", "Kỹ năng số", "Khởi nghiệp"],
      url: "https://www.dichi.academy/",
    },
  ],
};