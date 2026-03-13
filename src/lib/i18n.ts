import type { AppLanguage } from "@/components/Header";

export const apiLangFromApp = (language: AppLanguage): "en" | "km" => {
  return language === "km" ? "km" : "en";
};

export const headerText: Record<
  AppLanguage,
  {
    company: string;
    subtitle: string;
    navServices: string;
    navAbout: string;
    navVision: string;
    navPresence: string;
    navAcademy: string;
    cta: string;
  }
> = {
  en: {
    company: "DCx Co., Ltd.",
    subtitle: "Data Science & Research Center",
    navServices: "Services",
    navAbout: "About",
    navVision: "Vision 2035",
    navPresence: "Regional Presence",
    navAcademy: "DCx Academy",
    cta: "Get in Touch",
  },
  km: {
    company: "DCx Co., Ltd.",
    subtitle: "មជ្ឈមណ្ឌលវិទ្យាសាស្ត្រ និងស្រាវជ្រាវទិន្នន័យ",
    navServices: "សេវាកម្ម",
    navAbout: "អំពីយើង",
    navVision: "ចក្ខុវិស័យ 2035",
    navPresence: "វត្តមានក្នុងតំបន់",
    navAcademy: "DCx Academy",
    cta: "ទាក់ទងមកយើង",
  },
  bn: {
    company: "DCx Co., Ltd.",
    subtitle: "Pusat Sains Data & Penyelidikan",
    navServices: "Perkhidmatan",
    navAbout: "Tentang",
    navVision: "Visi 2035",
    navPresence: "Kehadiran Serantau",
    navAcademy: "Akademi DCx",
    cta: "Hubungi Kami",
  },
  cn: {
    company: "DCx Co., Ltd.",
    subtitle: "数据科学与研究中心",
    navServices: "服务",
    navAbout: "关于我们",
    navVision: "2035愿景",
    navPresence: "区域布局",
    navAcademy: "DCx 学院",
    cta: "联系我们",
  },
  id: {
    company: "DCx Co., Ltd.",
    subtitle: "Pusat Sains Data & Riset",
    navServices: "Layanan",
    navAbout: "Tentang",
    navVision: "Visi 2035",
    navPresence: "Kehadiran Regional",
    navAcademy: "Akademi DCx",
    cta: "Hubungi Kami",
  },
  la: {
    company: "DCx Co., Ltd.",
    subtitle: "ສູນວິທະຍາສາດຂໍ້ມູນ ແລະ ການຄົ້ນຄວ້າ",
    navServices: "ບໍລິການ",
    navAbout: "ກ່ຽວກັບ",
    navVision: "ວິໄສທັດ 2035",
    navPresence: "ການມີຢູ່ໃນພາກພື້ນ",
    navAcademy: "DCx Academy",
    cta: "ຕິດຕໍ່ພວກເຮົາ",
  },
  my: {
    company: "DCx Co., Ltd.",
    subtitle: "Pusat Sains Data & Penyelidikan",
    navServices: "Perkhidmatan",
    navAbout: "Tentang",
    navVision: "Visi 2035",
    navPresence: "Kehadiran Serantau",
    navAcademy: "Akademi DCx",
    cta: "Hubungi Kami",
  },
  mm: {
    company: "DCx Co., Ltd.",
    subtitle: "ဒေတာသိပ္ပံနှင့် သုတေသနစင်တာ",
    navServices: "ဝန်ဆောင်မှုများ",
    navAbout: "အကြောင်းအရာ",
    navVision: "2035 မျှော်မှန်းချက်",
    navPresence: "ဒေသတွင်း တည်ရှိမှု",
    navAcademy: "DCx Academy",
    cta: "ဆက်သွယ်ရန်",
  },
  ph: {
    company: "DCx Co., Ltd.",
    subtitle: "Sentro ng Agham ng Datos at Pananaliksik",
    navServices: "Mga Serbisyo",
    navAbout: "Tungkol",
    navVision: "Bisyon 2035",
    navPresence: "Presensyang Rehiyonal",
    navAcademy: "DCx Academy",
    cta: "Makipag-ugnayan",
  },
  sg: {
    company: "DCx Co., Ltd.",
    subtitle: "Data Science & Research Centre",
    navServices: "Services",
    navAbout: "About",
    navVision: "Vision 2035",
    navPresence: "Regional Presence",
    navAcademy: "DCx Academy",
    cta: "Get in Touch",
  },
  tl: {
    company: "DCx Co., Ltd.",
    subtitle: "Sentru Sientífiku Dadus no Peskiza",
    navServices: "Servisu",
    navAbout: "Kona-ba",
    navVision: "Vizaun 2035",
    navPresence: "Prezensa Rejionál",
    navAcademy: "DCx Academy",
    cta: "Kontaktu Ami",
  },
  vn: {
    company: "DCx Co., Ltd.",
    subtitle: "Trung tâm Khoa học Dữ liệu & Nghiên cứu",
    navServices: "Dịch vụ",
    navAbout: "Giới thiệu",
    navVision: "Tầm nhìn 2035",
    navPresence: "Hiện diện khu vực",
    navAcademy: "Học viện DCx",
    cta: "Liên hệ",
  },
};

export const servicesText: Record<
  AppLanguage,
  {
    visitPortal: string;
  }
> = {
  en: { visitPortal: "Visit Portal" },
  km: { visitPortal: "ចូលទៅកាន់វិបផតថល" },
  bn: { visitPortal: "Lawati Portal" },
  cn: { visitPortal: "访问平台" },
  id: { visitPortal: "Kunjungi Portal" },
  la: { visitPortal: "ເຂົ້າເບິ່ງ Portal" },
  my: { visitPortal: "Lawati Portal" },
  mm: { visitPortal: "Portal သို့ဝင်ရန်" },
  ph: { visitPortal: "Bisitahin ang Portal" },
  sg: { visitPortal: "Visit Portal" },
  tl: { visitPortal: "Vizita Portal" },
  vn: { visitPortal: "Truy cập cổng" },
};