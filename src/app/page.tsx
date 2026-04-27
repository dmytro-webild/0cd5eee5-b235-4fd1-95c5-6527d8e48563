"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Zap, Phone } from "lucide-react";
import FaqBase from '@/components/sections/faq/FaqBase';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="medium"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Início", id: "hero" },
        { name: "Diferenciais", id: "features" },
        { name: "Depoimentos", id: "testimonials" },
        { name: "Contato", id: "contact-faq" },
      ]}
      brandName="SolarTec"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="SolarTec"
      description="Tecnologia fotovoltaica de elite com engenharia de precisão. Reduza custos com a sofisticação que seu patrimônio exige."
      buttons={[{ text: "Solicitar Estudo de Viabilidade Premium", href: "#contact" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxCir9mpTLw2euOMJPAgmKhsUf/uploaded-1777326025031-w0np4eg3.jpg"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["WEG Solar", "BYD Energy", "Canadian Solar", "SMA", "Enphase", "SolarEdge", "JinkoSolar"]}
      title="Parceiros Tecnológicos"
      description="Curadoria das tecnologias mais eficientes do mundo."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Elegância e Eficiência"
      title="Atendimento Concierge SolarTec"
      description="Do diagnóstico técnico à homologação final, oferecemos um ponto de contato único, garantindo que a sua experiência seja tão impecável quanto o desempenho da sua usina."
      subdescription="Sua residência não é apenas um imóvel, é um patrimônio que merece a mais refinada tecnologia energética do mercado."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxCir9mpTLw2euOMJPAgmKhsUf/uploaded-1777326792016-215mnzmn.jpg"
      mediaAnimation="slide-up"
      icon={Zap}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Estética Integrada", description: "Painéis desenhados para valorizar a arquitetura, sem fiações expostas ou poluição visual.", imageSrc: "http://img.b2bpic.net/free-photo/luxury-sunset-poolside-relaxation-with-stunning-landscape-view-generated-by-ai_188544-30833.jpg" },
        { title: "Monitoramento Real-time", description: "Aplicativo exclusivo que oferece controle total e autonomia energética na palma da sua mão.", imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-house-model_23-2150799745.jpg" },
        { title: "Eficiência Energética", description: "Sistemas curados com as células mais eficientes do mundo para proteção real contra inflação.", imageSrc: "http://img.b2bpic.net/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248309.jpg" }
      ]}
      title="Por que Escolher a SolarTec?"
      description="Tecnologia de elite, estética invisível e uma gestão energética totalmente personalizada."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="O que me impressionou na SolarTec não foi apenas a economia, mas o respeito pelo meu imóvel. A instalação foi impecável e o pós-venda é realmente diferenciado."
      rating={5}
      author="Cliente Residencial Premium"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe-with-shopping-bags_1157-31452.jpg", alt: "Cliente 1" },
        { src: "http://img.b2bpic.net/free-photo/portrait-young-man-sitting-cafe-spending-time-alone-coffee-shop-reading-digital-tablet-watching-video-listening-music-wireless-headphones-lifestyle-people-concept_1258-314619.jpg", alt: "Cliente 2" },
        { src: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg", alt: "Cliente 3" },
        { src: "http://img.b2bpic.net/free-photo/young-woman-cleaning-her-skin-bathroom-beautiful-healthy-woman-bathroom_1153-7637.jpg", alt: "Cliente 4" },
        { src: "http://img.b2bpic.net/free-photo/luxury-blond-female-white-dress-posing-studio_613910-10972.jpg", alt: "Cliente 5" }
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="process" data-section="process">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Diagnóstico Energético", price: "Passo 1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxCir9mpTLw2euOMJPAgmKhsUf/uploaded-1777325208842-8hx7vgtx.jpg" },
        { id: "2", name: "Engenharia Personalizada", price: "Passo 2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxCir9mpTLw2euOMJPAgmKhsUf/uploaded-1777325288286-p0e8wbql.jpg" },
        { id: "3", name: "Instalação de Elite", price: "Passo 3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxCir9mpTLw2euOMJPAgmKhsUf/uploaded-1777325489737-qf9k745h.jpg" },
        { id: "4", name: "Ativação e Suporte", price: "Passo 4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxCir9mpTLw2euOMJPAgmKhsUf/uploaded-1777325489737-o60t8jpz.jpg" },
      ]}
      title="Nosso Processo Turn-key"
      description="Cada passo é meticulosamente planejado para garantir excelência absoluta."
    />
  </div>

  <div id="contact-faq" data-section="contact-faq">
      <FaqBase
      title="Contato & Suporte"
      description="Estamos disponíveis para tirar suas dúvidas via WhatsApp."
      tag="Suporte"
      tagIcon={Phone}
      textboxLayout="default"
      useInvertedBackground={false}
      faqsAnimation="slide-up"
      faqs={[{ id: "contact-1", title: "WhatsApp", content: "Entre em contato através do número: 55 47 984195968" }]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Os painéis alteram a estética da minha casa?", content: "Não. Nosso design integrado garante que a arquitetura do seu imóvel seja valorizada." },
        { id: "f2", title: "Como funciona o monitoramento?", content: "Nosso app exclusivo permite que você acompanhe a geração em tempo real com transparência total." },
        { id: "f3", title: "A instalação gera sujeira ou transtorno?", content: "Nossa equipe utiliza protocolos de luxo com limpeza e organização rigorosas durante todo o processo." },
      ]}
      sideTitle="Dúvidas Sobre o Sistema Solar"
      sideDescription="Saiba por que a SolarTec é a escolha certa para o seu patrimônio."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="Consultoria Exclusiva"
      title="Pronto para a Independência?"
      description="Deixe seus dados para uma consultoria exclusiva com nossos especialistas."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxCir9mpTLw2euOMJPAgmKhsUf/uploaded-1777326465238-1mxhovzk.png"
      logoText="SolarTec"
      columns={[
        { title: "Empresa", items: [{ label: "Sobre Nós", href: "#about" }, { label: "Carreiras", href: "#" }, { label: "Imprensa", href: "#" }] },
        { title: "Soluções", items: [{ label: "Residencial", href: "#" }, { label: "Comercial", href: "#" }, { label: "Concierge", href: "#" }] },
        { title: "Suporte", items: [{ label: "Contato", href: "#contact" }, { label: "FAQ", href: "#faq" }, { label: "Privacidade", href: "#" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}