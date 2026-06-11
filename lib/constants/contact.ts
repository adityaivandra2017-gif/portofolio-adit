export const CONTACT_SECTION = {
  title: "Hubungi Saya",
  subtitle:
    "Saya terbuka untuk peluang kerja, kolaborasi, maupun diskusi terkait pengembangan web dan aplikasi. Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.",
  contactHeading: "Informasi Kontak",
  closing: "Let's build something amazing together.",
  address: "Lubuk Basung, Agam, Sumatera Barat",
} as const;

export type ContactLink = {
  id: string;
  label: string;
  hint: string;
  href: string;
  icon: string;
  external?: boolean;
  /** Skala visual di dalam slot ikon seragam (default 1) */
  iconScale?: number;
};

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    id: "email",
    label: "Email",
    hint: "Klik untuk mengirim email",
    href: "mailto:adityaivandra2017@gmail.com",
    icon: "/images/png/gmail.png",
    iconScale: 1.34,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    hint: "Hubungi Saya via WhatsApp",
    href: "https://wa.me/628984885746",
    icon: "/images/png/wa.png",
    external: true,
    iconScale: 1.52,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    hint: "Lihat Profil Saya",
    href: "https://www.linkedin.com/in/aditya-ivandra-s-kom",
    icon: "/images/png/linkedin.png",
    external: true,
    iconScale: 0.99,
  },
] as const;

export const CONTACT_ADDRESS = {
  icon: "/images/png/lokasi.png",
  href: "https://www.google.com/maps/search/?api=1&query=Lubuk+Basung,+Agam,+Sumatera+Barat",
} as const;
