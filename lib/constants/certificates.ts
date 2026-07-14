export const CERTIFICATES_SECTION = {
  title: "Sertifikat",
  subtitle:
    "Kumpulan sertifikat dan penghargaan yang saya peroleh selama perjalanan belajar dan berkarir.",
} as const;

export const CERTIFICATE_PROVIDER = {
  name: "Huawei ICT Academy",
  logo: "/images/png/HuaweiICT.png",
  logoAlt: "Logo Huawei ICT Academy",
  logoLightBg: true,
} as const;

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: number;
  description: readonly string[];
  image: string;
  imageAlt: string;
};

export const CERTIFICATES: readonly Certificate[] = [
  {
    id: "algorithm-and-program-design",
    title: "Algorithm and Program Design",
    issuer: CERTIFICATE_PROVIDER.name,
    year: 2025,
    description: [
      "Mempelajari konsep dasar pemrograman dan perancangan algoritma.",
      "Menerapkan teknik pemecahan masalah menggunakan flowchart dan pseudocode.",
      "Mengembangkan kemampuan berpikir logis dalam pengembangan perangkat lunak.",
      "Berhasil menyelesaikan program pelatihan beserta ujian akhir.",
    ],
    image: "/images/png/Algorithm and Program Design.png",
    imageAlt: "Sertifikat Algorithm and Program Design",
  },
  {
    id: "python-programming-basics",
    title: "Python Programming Basics",
    issuer: CERTIFICATE_PROVIDER.name,
    year: 2025,
    description: [
      "Mempelajari sintaks Python, variabel, tipe data, operator, dan struktur kontrol.",
      "Mengembangkan program Python sederhana menggunakan fungsi dan perulangan.",
      "Berlatih menyelesaikan berbagai permasalahan pemrograman menggunakan Python.",
      "Berhasil menyelesaikan program pelatihan beserta ujian akhir.",
    ],
    image: "/images/png/Python Programming Basics.png",
    imageAlt: "Sertifikat Python Programming Basics",
  },
  {
    id: "hcip-datacom-core-technology",
    title: "HCIP-Datacom Core Technology",
    issuer: CERTIFICATE_PROVIDER.name,
    year: 2025,
    description: [
      "Mempelajari arsitektur jaringan perusahaan dan konsep dasar jaringan IP.",
      "Mempelajari routing, switching, VLAN, dan berbagai protokol jaringan.",
      "Memahami dasar implementasi serta troubleshooting jaringan.",
      "Berhasil menyelesaikan program pelatihan beserta ujian akhir.",
    ],
    image: "/images/png/HCIP-Datacom Core Technology V1.0 Course.png",
    imageAlt: "Sertifikat HCIP-Datacom Core Technology",
  },
] as const;
