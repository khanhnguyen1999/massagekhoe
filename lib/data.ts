import {
  Flower2,
  HandHeart,
  Leaf,
  Sparkles,
  Bath,
  Waves,
  Citrus,
  BedDouble,
  PhoneCall,
  MapPinned
} from "lucide-react";

export const locales = ["vi", "en"] as const;

export const siteConfig = {
  name: "Massage Khỏe Việt",
  description:
    "Massage Khỏe Việt cung cấp massage trị liệu, sauna, tắm thảo dược và chăm sóc thư giãn cao cấp tại Bình Thạnh và Phú Nhuận, TP. Hồ Chí Minh.",
  url: "https://massagekhoeviet.vn",
  directCallDisplay: "028 73092368",
  directCallHref: "tel:02873092368",
  keywords: [
    "massage khỏe việt",
    "massage khoẻ việt",
    "vietnamese massage",
    "massage bình thạnh",
    "massage phú nhuận",
    "herbal massage",
    "wellness spa",
    "japanese massage",
    "sauna massage"
  ]
};

export function getLocalePath(locale: SupportedLocale, path = "") {
  const normalizedPath = path.startsWith("/") || path === "" ? path : `/${path}`;
  return locale === "vi" ? `${siteConfig.url}${normalizedPath || "/"}` : `${siteConfig.url}/en${normalizedPath}`;
}

export const branches = [
  {
    name: "Massage Khỏe Việt",
    address: "39 Nguyễn Thượng Hiền, Phường 5, Bình Thạnh, Hồ Chí Minh City",
    phone: "0287 309 6689",
    mapEmbed:
      "https://www.google.com/maps?q=39%20Nguy%E1%BB%85n%20Th%C6%B0%E1%BB%A3ng%20Hi%E1%BB%81n%20B%C3%ACnh%20Th%E1%BA%A1nh&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=39+Nguyen+Thuong+Hien+Binh+Thanh+Ho+Chi+Minh"
  },
  {
    name: "Massage Khỏe Việt",
    address: "170 Đào Duy Anh, Phường 9, Phú Nhuận, Hồ Chí Minh City",
    phone: "0287 309 2368",
    mapEmbed:
      "https://www.google.com/maps?q=170%20%C4%90%C3%A0o%20Duy%20Anh%20Ph%C3%BA%20Nhu%E1%BA%ADn&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=170+Dao+Duy+Anh+Phu+Nhuan+Ho+Chi+Minh"
  }
];

export type SupportedLocale = (typeof locales)[number];

type LocalizedText = {
  vi: string;
  en: string;
};

type LocalizedPackage = {
  key: string;
  duration: LocalizedText;
  price: string;
  subtitle: LocalizedText;
  items: LocalizedText[];
};

const localizedServicePackages: LocalizedPackage[] = [
  {
    key: "package1",
    duration: {
      vi: "70 phút",
      en: "70 Minutes"
    },
    price: "199,000 VND",
    subtitle: {
      vi: "Liệu trình 7 bước",
      en: "7-step therapy"
    },
    items: [
      {
        vi: "Xông ướt (steam bath)",
        en: "Steam bath"
      },
      {
        vi: "Xông khô (sauna)",
        en: "Sauna"
      },
      {
        vi: "Ngâm chân muối sống",
        en: "Natural salt foot soak"
      },
      {
        vi: "Tắm nước nóng, lạnh",
        en: "Hot and cold bath"
      },
      {
        vi: "Gói thảo dược thiên nhiên",
        en: "Natural herbal compress"
      },
      {
        vi: "Massage body",
        en: "Body massage"
      },
      {
        vi: "Ăn uống thực dưỡng",
        en: "Healthy refreshments"
      }
    ]
  },
  {
    key: "package2",
    duration: {
      vi: "90 phút",
      en: "90 Minutes"
    },
    price: "299,000 VND",
    subtitle: {
      vi: "Liệu trình 12 bước",
      en: "12-step therapy"
    },
    items: [
      {
        vi: "Xông ướt (steam bath)",
        en: "Steam bath"
      },
      {
        vi: "Xông khô (sauna)",
        en: "Sauna"
      },
      {
        vi: "Ngâm chân muối sống",
        en: "Natural salt foot soak"
      },
      {
        vi: "Tắm bồn thủy lực thuốc Bắc",
        en: "Traditional herbal hydrotherapy bath"
      },
      {
        vi: "Gói thảo dược thiên nhiên",
        en: "Natural herbal compress"
      },
      {
        vi: "Tắm lại nước nóng, lạnh",
        en: "Hot and cold rinse"
      },
      {
        vi: "Đắp mặt nạ dưa leo",
        en: "Cucumber facial mask"
      },
      {
        vi: "Gội đầu",
        en: "Hair wash"
      },
      {
        vi: "Massage đá kiểu Nhật",
        en: "Japanese-style stone massage"
      },
      {
        vi: "Cạo gió giác hơi",
        en: "Gua Sha and cupping therapy"
      },
      {
        vi: "Massage body",
        en: "Body massage"
      },
      {
        vi: "Ăn uống thực dưỡng",
        en: "Healthy refreshments"
      }
    ]
  },
  {
    key: "package3",
    duration: {
      vi: "120 phút",
      en: "120 Minutes"
    },
    price: "399,000 VND",
    subtitle: {
      vi: "Liệu trình tổng hợp",
      en: "Comprehensive therapy"
    },
    items: [
      {
        vi: "Xông ướt (steam bath)",
        en: "Steam bath"
      },
      {
        vi: "Xông khô (sauna)",
        en: "Sauna"
      },
      {
        vi: "Ngâm chân muối sống",
        en: "Natural salt foot soak"
      },
      {
        vi: "Tắm bồn thủy lực thuốc Bắc",
        en: "Traditional herbal hydrotherapy bath"
      },
      {
        vi: "Tắm lại nước nóng, lạnh",
        en: "Hot and cold rinse"
      },
      {
        vi: "Gói thảo dược thiên nhiên",
        en: "Natural herbal compress"
      },
      {
        vi: "Đắp mặt nạ dưa leo",
        en: "Cucumber facial mask"
      },
      {
        vi: "Gội đầu",
        en: "Hair wash"
      },
      {
        vi: "Massage đá kiểu Nhật",
        en: "Japanese-style stone massage"
      },
      {
        vi: "Cạo gió giác hơi",
        en: "Gua Sha and cupping therapy"
      },
      {
        vi: "Massage body",
        en: "Body massage"
      },
      {
        vi: "Ăn uống thực dưỡng",
        en: "Healthy refreshments"
      },
      {
        vi: "Quý khách được nghỉ ngơi tại phòng thư giãn cho đến hết giờ làm việc",
        en: "Relax in the lounge until closing time"
      }
    ]
  }
];

export function getServicePackages(locale: SupportedLocale) {
  return localizedServicePackages.map((item) => ({
    key: item.key,
    price: item.price,
    duration: item.duration[locale],
    subtitle: item.subtitle[locale],
    items: item.items.map((feature) => feature[locale])
  }));
}

export const storeGallery = [
  {
    title: {
      vi: "Khu đón tiếp thư giãn",
      en: "Relaxing reception area"
    },
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: {
      vi: "Không gian trị liệu ấm áp",
      en: "Warm treatment space"
    },
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: {
      vi: "Khu thư giãn xanh mát",
      en: "Green and calming lounge"
    },
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
  }
];

export const features = [
  { icon: HandHeart, key: "traditional" },
  { icon: Leaf, key: "herbal" },
  { icon: Sparkles, key: "japanese" },
  { icon: Flower2, key: "professional" }
];

export const gallery = [
  {
    key: "massage",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
  },
  {
    key: "sauna",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80"
  },
  {
    key: "bath",
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80"
  },
  {
    key: "facial",
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80"
  },
  {
    key: "lounge",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  }
];

export const timeline = [
  { year: "2018", key: "start" },
  { year: "2020", key: "herbs" },
  { year: "2023", key: "expansion" },
  { year: "Today", key: "today" }
];

export const footerIcons = { PhoneCall, MapPinned, Bath, Waves, Citrus, BedDouble };
