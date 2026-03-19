// ============================================================
// SITE CONFIG — Edit this file to customize for any client
// ============================================================

import heroImage from "@/assets/hero-newborn.jpg";
import logoImage from "@/assets/logo.png";
import space1 from "@/assets/space-1.jpg";
import space2 from "@/assets/space-2.jpg";
import space3 from "@/assets/space-3.jpg";
import space4 from "@/assets/space-4.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/familia1.jpg";
import portfolio6 from "@/assets/corporativo1.jpg";
import portfolio7 from "@/assets/corporativo2.jpg";
import portfolio8 from "@/assets/smash-the-cake.jpg";
import portfolio9 from "@/assets/corporativo3.jpg";
import portfolio10 from "@/assets/smash-the-cake2.jpg";
import portfolio11 from "@/assets/familia2.jpg";
import marianaImage from "@/assets/mariana.jpg";
import studioSofaImage from "@/assets/studio-sofa.jpg";

export const siteConfig = {
  // Brand 
  name: "Studio Familiare",
  tagline: "Fotografias",
  logo: logoImage,
  hero: {
    image: heroImage,
    headline: "Eternizando os momentos mais preciosos da sua família",
    subheadline: "Fotografia com amor, sensibilidade e cuidado em Uberlândia - MG",
  },

  // About section
  about: {
    title: "Nossa Fotógrafa",
    name: "Mariana Siqueira",
    photo: marianaImage,
    bio: "Minha paixão pela fotografia nasceu aos 10 anos, durante meu tratamento contra o câncer, quando tive meu primeiro contato com uma câmera no hospital. Ali, descobri na fotografia uma forma de transformar dor em esperança e eternizar emoções. Hoje, minha missão é contar histórias reais com sensibilidade, carinho e cuidado.",
    quote: "Fotografar é transformar instantes em eternidade e permitir que o tempo nunca apague aquilo que o coração nunca esqueceria.",
  },

  // Background images
  backgrounds: {
    studioSofa: studioSofaImage,
  },

  // Services
  services: [
    { icon: "Baby", label: "Newborn", description: "Ensaios com bebês de até 28 dias" },
    { icon: "Heart", label: "Família", description: "Registros de conexão e amor" },
    { icon: "Flower2", label: "Gestante", description: "A beleza da espera" },
    { icon: "Briefcase", label: "Corporativo", description: "Fotos profissionais em estúdio" },
    { icon: "Camera", label: "Locação", description: "Espaço para fotógrafos" },
  ],

  // Gallery
  gallery: {
    title: "Nosso Trabalho",
    images: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8, portfolio9, portfolio10, portfolio11],
  },

  // Studio space
  space: {
    title: "Nosso Espaço",
    description: "Sala de espera e interior climatizados, cenário cama, sofá e fundos de diversas cores. Equipado com puffs, props, iluminação profissional e tudo para seu ensaio.",
    images: [space1, space2, space3, space4],
    address: "Av. Floriano Peixoto, 1767 - Sl 03, Uberlândia - MG",
  },

  // Links — the core of a link bio
  links: [
    {
      label: "Agende seu ensaio",
      url: "https://wa.me/5534999678000",
      icon: "MessageCircle",
      variant: "primary" as const,
    },
            {
      label: "Portfólio Ensaio Corporativo",
      url: "/pdfs/portfolio-fotos-corporativas.pdf",
      icon: "Images",
      variant: "secondary" as const,
    },
    {
      label: "Newborn Tradicional (até 28 dias)",
      url: "/pdfs/newborn-tradicional.pdf",
      icon: "Images",
      variant: "secondary" as const,
    },
        {
      label: "Newborn Afetivo",
      url: "/pdfs/newborn-natural.pdf",
      icon: "Images",
      variant: "secondary" as const,
    },
    {
      label: "Locação para Fotógrafos",
      url: "/pdfs/locacao-para-fotografos.pdf",
      icon: "Camera",
      variant: "secondary" as const,
    },
    {
      label: "Nosso Instagram",
      url: "https://instagram.com/studio.familiare",
      icon: "Instagram",
      variant: "secondary" as const,
    },
    {
      label: "Nossa Localização",
      url: "https://maps.google.com/?q=Av+Floriano+Peixoto+1767+Uberlândia",
      icon: "MapPin",
      variant: "secondary" as const,
    },
  ],

  // Social links
  social: {
    whatsapp: "https://wa.me/5534999678000",
    instagram: "https://instagram.com/studiofamiliare",
    email: "contato@studiofamiliare.com.br",
  },

  // SEO
  seo: {
    title: "Studio Familiare Fotografias | Newborn, Família e Gestante em Uberlândia",
    description: "Estúdio fotográfico especializado em ensaios newborn, família, gestante e corporativo em Uberlândia-MG. Agende seu ensaio!",
  },
};
