export type ProjectType = "mobile" | "website";

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies: readonly string[];
  features: readonly string[];
  image: string;
  imageAlt: string;
  type: ProjectType;
  downloadUrl?: string;
  liveUrl?: string;
};

export const PROJECTS_SECTION = {
  title: "Proyek Saya",
  subtitle:
    "Kumpulan proyek yang saya kembangkan dari aplikasi mobile hingga sistem berbasis web.",
} as const;

export const PROJECTS: readonly Project[] = [
  {
    id: "disdikbud-agam",
    name: "DisdikbudAgam",
    shortDescription:
      "Aplikasi mobile untuk administrasi digital dan komunikasi langsung melalui live chat.",
    fullDescription:
      "Merancang aplikasi mobile untuk mendukung administrasi digital, serta komunikasi antara pengguna dengan sistem melalui fitur live chat.",
    technologies: ["React Native", "Firebase"],
    features: [
      "Pengajuan Surat",
      "Permohonan Surat",
      "Penerbitan Surat",
      "Live Chat",
    ],
    image: "/images/jpeg/gambar1.jpeg",
    imageAlt: "Tampilan dashboard aplikasi DisdikbudAgam",
    type: "mobile",
    downloadUrl:
      "https://drive.google.com/drive/folders/1adSfwWgJg7w9PFYMHNLZ8njv_eGzT6OC",
  },
  {
    id: "audit-digital-umkm",
    name: "Audit Digital UMKM",
    shortDescription:
      "Sistem audit digital berbasis web untuk pengujian dan penilaian kelayakan UMKM secara efektif.",
    fullDescription:
      "Sistem audit digital berbasis web untuk membantu pengujian dan penilaian kelayakan UMKM sehingga proses evaluasi dapat dilakukan secara efektif.",
    technologies: ["PHP Native", "MySQL"],
    features: [
      "Data UMKM",
      "Program Pembinaan",
      "Form Audit",
      "Laporan Audit",
    ],
    image: "/images/jpeg/gambar2.jpeg",
    imageAlt: "Tampilan dashboard sistem Audit Digital UMKM",
    type: "website",
    liveUrl: "https://audit-digital-umkm.freehosting.dev",
  },
  {
    id: "kharisma-motor-padang",
    name: "Kharisma Motor Padang",
    shortDescription:
      "Sistem inventory onderdil berbasis web dengan metode EOQ dan ROP untuk pengendalian stok dan perencanaan pemesanan.",
    fullDescription:
      "Sistem inventory onderdil berbasis web yang menerapkan metode EOQ dan ROP untuk pengendalian stok dan perencanaan pemesanan barang.",
    technologies: ["Laravel", "MySQL"],
    features: [
      "Data Onderdil",
      "Barang Masuk / Keluar",
      "Perhitungan EOQ / ROP",
      "Laporan",
    ],
    image: "/images/jpeg/gambar3.jpeg",
    imageAlt: "Tampilan dashboard sistem Kharisma Motor Padang",
    type: "website",
    liveUrl: "https://kharisma-motor-padang.great-site.net",
  },
] as const;
