export type ProjectType = "mobile" | "website";

export type DemoLoginLabel = "Email" | "Username";

export type DemoAccount = {
  role: string;
  loginLabel?: DemoLoginLabel;
  login?: string;
  password?: string;
  note?: string;
};

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
  demoAccounts?: readonly DemoAccount[];
};

export const PROJECTS_SECTION = {
  title: "Proyek Saya",
  subtitle:
    "Kumpulan proyek yang saya kembangkan dari aplikasi mobile hingga sistem berbasis web.",
} as const;

export const PROJECTS: readonly Project[] = [
  {
    id: "taskflow",
    name: "TaskFlow – Sistem Manajemen Proyek",
    shortDescription:
      "Aplikasi manajemen proyek berbasis web untuk mengatur proyek, tugas, kemajuan, dan kolaborasi tim secara efisien.",
    fullDescription:
      "TaskFlow adalah aplikasi manajemen proyek berbasis web yang dirancang untuk membantu tim mengatur proyek, mengelola tugas, memantau kemajuan, dan berkolaborasi secara efisien melalui antarmuka yang modern dan responsif.",
    technologies: [
      "Vue.js",
      "Tailwind CSS",
      "Laravel",
      "PostgreSQL",
      "Cloudinary",
    ],
    features: [
      "Manajemen Proyek",
      "Manajemen Tugas",
      "Autentikasi Pengguna",
      "Dashboard Analitik",
      "Prioritas & Tenggat Waktu",
    ],
    image: "/images/png/tf_dashboard.png",
    imageAlt: "Tampilan dashboard aplikasi TaskFlow",
    type: "website",
    liveUrl: "https://task-flow-frontend-peach-chi.vercel.app",
    demoAccounts: [
      {
        role: "Admin",
        loginLabel: "Email",
        login: "admin@gmail.com",
        password: "123456",
        note:
          "Untuk mencoba peran Pengguna, buka menu Pengguna pada navigasi Admin lalu tambahkan akun baru dengan role Admin atau Pengguna.",
      },
    ],
  },
  {
    id: "disdikbud-agam",
    name: "DisdikbudAgam",
    shortDescription:
      "Aplikasi mobile untuk administrasi digital dan komunikasi langsung melalui live chat.",
    fullDescription:
      "Merancang aplikasi mobile untuk mendukung administrasi digital, serta komunikasi antara pengguna dengan sistem melalui fitur live chat.",
    technologies: ["React Native", "Firebase", "Cloudinary"],
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
    demoAccounts: [
      {
        role: "Admin",
        loginLabel: "Email",
        login: "admin@gmail.com",
        password: "admin12345",
      },
      {
        role: "Masyarakat",
        note: "Daftar terlebih dahulu, lalu dapat login ke aplikasi.",
      },
    ],
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
    demoAccounts: [
      {
        role: "Admin",
        loginLabel: "Username",
        login: "admin",
        password: "123456",
      },
      {
        role: "Auditor",
        loginLabel: "Username",
        login: "auditor",
        password: "123456",
      },
    ],
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
    demoAccounts: [
      {
        role: "Admin",
        loginLabel: "Email",
        login: "admin@gmail.com",
        password: "123456",
      },
      {
        role: "Pimpinan",
        loginLabel: "Email",
        login: "pimpinan@gmail.com",
        password: "123456",
      },
    ],
  },
] as const;
