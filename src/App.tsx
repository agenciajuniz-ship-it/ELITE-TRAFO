/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Truck, 
  Settings, 
  Factory, 
  Cpu, 
  Layers, 
  MessageCircle, 
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Sun,
  Car
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);
  const differentialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animation
    const heroCtx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      gsap.from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });
      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'back.out(1.7)'
      });
    }, heroRef);

    // Bento Grid Animation
    const bentoCtx = gsap.context(() => {
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: bentoRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, bentoRef);

    // Differentials Animation
    const diffCtx = gsap.context(() => {
      gsap.from('.diff-item', {
        scrollTrigger: {
          trigger: differentialsRef.current,
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, differentialsRef);

    return () => {
      heroCtx.revert();
      bentoCtx.revert();
      diffCtx.revert();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="text-accent w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">
              ELITE<span className="text-accent">TRAFO</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal/80">
            <button onClick={() => scrollToSection('especificacoes')} className="hover:text-accent transition-colors">Especificações</button>
            <button onClick={() => scrollToSection('aplicacoes')} className="hover:text-accent transition-colors">Aplicações</button>
            <button onClick={() => scrollToSection('diferenciais')} className="hover:text-accent transition-colors">Diferenciais</button>
          </nav>

          <a 
            href="https://wa.me/554791846886?text=Olá, gostaria de um orçamento técnico para transformadores de baixa tensão para minha indústria."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20ba5a] transition-all shadow-lg shadow-green-500/10 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Orçamento Rápido
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative pt-24 pb-12 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://cdn.awsli.com.br/600x700/2613/2613668/produto/263043877/tranformardor-interno-isolado-perspectiva-min-khsbc3vchq.jpg" 
            alt="Fábrica Industrial" 
            className="w-full h-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-accent/20">
            <Settings className="w-3 h-3" />
            Engenharia de Alta Performance
          </div>
          <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-6 max-w-4xl mx-auto">
            Transformadores Trifásicos 220v/380 todos a pronta entrega para <span className="text-accent">Todo Brasil</span>
          </h1>
          <p className="hero-sub text-base md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Transformadores trifásicos industriais a seco de baixa tensão, de 5 kVA a 500 kVA, disponíveis em 220V, 380V ou sob medida, ideais para atender com eficiência e segurança as necessidades da sua indústria.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/554791846886?text=Olá, gostaria de um orçamento técnico para transformadores de baixa tensão para minha indústria."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#20ba5a] transition-all shadow-xl shadow-green-500/20 flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Consultoria Técnica
            </a>
            <button 
              onClick={() => scrollToSection('especificacoes')}
              className="bg-white text-primary border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all"
            >
              Ver Especificações
            </button>
          </div>
        </div>
      </section>

      {/* BENTO GRID TÉCNICO */}
      <section id="especificacoes" ref={bentoRef} className="pt-0 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-1">Especificações Técnicas</h2>
            <p className="text-charcoal/60 max-w-xl">Equipamentos projetados sob as mais rigorosas normas NBR, garantindo segurança e durabilidade.</p>
            <div className="mt-2 mb-0 flex justify-center">
              <div className="relative group max-w-2xl w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://cdn.awsli.com.br/600x700/2613/2613668/produto/263043877/tranformardor-interno-isolado-perspectiva-min-khsbc3vchq.jpg" 
                  alt="Transformador Elite Trafo" 
                  className="relative rounded-2xl shadow-2xl border border-slate-200 w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="mt-4 mb-4 border-t border-slate-100 pt-4">
              <p className="text-charcoal/80 font-semibold mb-3 text-center md:text-left text-sm md:text-base">
                Equipamentos projetados sob as mais rigorosas normas NBR, garantindo segurança e durabilidade.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <Zap className="w-4 h-4 text-accent" />
                  Baixa Perda
                </h4>
                <p className="text-sm text-charcoal/60">Núcleos de silício de alta qualidade para máxima eficiência energética.</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Normas NBR
                </h4>
                <p className="text-sm text-charcoal/60">Total conformidade com as normas técnicas brasileiras de segurança.</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <Settings className="w-4 h-4 text-accent" />
                  Isolamento Classe H
                </h4>
                <p className="text-sm text-charcoal/60">Suporta temperaturas elevadas garantindo a vida útil do equipamento em ambientes severos.</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <Factory className="w-4 h-4 text-accent" />
                  Aplicações Industriais
                </h4>
                <p className="text-sm text-charcoal/60">Soluções versáteis para os setores mais exigentes da economia.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-0">
            <div className="bento-item bento-card flex flex-col md:flex-row items-center gap-6 md:gap-8 group">
              <div className="flex-1">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Tensões de Operação</h3>
                <p className="text-charcoal/60 mb-6">Ampla gama de tensões para atender qualquer necessidade industrial, com regulação precisa.</p>
                <div className="flex flex-wrap gap-3">
                  {['220V', '380V', '440V', '480V'].map(v => (
                    <span key={v} className="px-4 py-2 bg-surface rounded-lg font-mono font-bold text-primary border border-slate-200">{v}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <img 
                  src="https://cdn.awsli.com.br/600x700/2613/2613668/produto/263043877/tranformardor-interno-isolado-perspectiva-min-khsbc3vchq.jpg" 
                  alt="Transformer Detail" 
                  className="rounded-xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APLICAÇÕES */}
      <section id="aplicacoes" ref={applicationsRef} className="m-0 p-0 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center m-0 p-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary m-0 p-0">Aplicações Industriais</h2>
            <p className="text-charcoal/60 m-0 p-0">Soluções de energia para os setores mais exigentes da indústria.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Cpu, title: 'Painéis Elétricos', desc: 'Alimentação segura para sistemas de controle e comando.' },
              { icon: Factory, title: 'Linhas de Produção', desc: 'Estabilidade de tensão para maquinário pesado e contínuo.' },
              { icon: Sun, title: 'Energia Fotovoltaica', desc: 'Integração eficiente para sistemas de geração solar industrial.' },
              { icon: Car, title: 'Mobilidade Elétrica', desc: 'Transformadores para carregadores de bateria.' }
            ].map((app, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-accent/30 transition-all group">
                <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <app.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{app.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" ref={differentialsRef} className="py-12 md:py-20 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">Por que escolher a <span className="text-accent">Elite Trafo?</span></h2>
            <div className="space-y-6 md:space-y-8">
              {[
                { title: 'Departamento Comercial em Joinville', desc: 'Presença comercial online no maior polo industrial de SC. Nossa fábrica está localizada em Curitiba-PR.', icon: MapPin },
                { title: 'Transformadores de Baixa Tensão', desc: 'Transformadores elevadores e rebaixadores de tensão desenvolvidos especificamente para sua planta industrial.', icon: Settings },
                { title: 'Pronta Entrega Garantida', desc: 'Temos todas as potências a pronta entrega para atender sua indústria com agilidade.', icon: Truck }
              ].map((item, i) => (
                <div key={i} className="diff-item flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full"></div>
            <img 
              src="https://cdn.awsli.com.br/600x700/2613/2613668/produto/263043877/tranformardor-interno-isolado-perspectiva-min-khsbc3vchq.jpg" 
              alt="Engenheiro trabalhando" 
              className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-white pt-12 md:pt-20 pb-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Zap className="text-accent w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-primary">
                  ELITE<span className="text-accent">TRAFO</span>
                </span>
              </div>
              <p className="text-charcoal/60 max-w-sm mb-8">
                Líder em soluções de transformação de energia para o setor industrial. 
                Tecnologia, eficiência e compromisso com o resultado da sua fábrica.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/554791846886" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Phone className="w-5 h-5" /></a>
                <a href="mailto:contato@elitetrafo.com.br" className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
                <a href="https://www.google.com/maps/search/?api=1&query=R.+Blumenau,+64+-+América,+Joinville+-+SC,+89204-248" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"><MapPin className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-sm text-charcoal/60">
                <li><a href="#" className="hover:text-accent transition-colors">Transformadores 220V/380V</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Transformadores Industriais</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-6">Contato Direto</h4>
              <ul className="space-y-4 text-sm text-charcoal/60">
                <li className="flex items-center gap-2">
                  <a href="https://wa.me/554791846886" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Phone className="w-4 h-4 text-accent" /> (47) 9184-6886
                  </a>
                </li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> contato@elitetrafo.com.br</li>
                <li className="flex items-start gap-2">
                  <a href="https://www.google.com/maps/search/?api=1&query=R.+Blumenau,+64+-+América,+Joinville+-+SC,+89204-248" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-accent transition-colors">
                    <MapPin className="w-4 h-4 text-accent mt-1" /> R. Blumenau, 64 - América, Joinville - SC, 89204-248
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-charcoal/40 uppercase tracking-widest font-bold text-center md:text-left">
            <p>© 2025 Elite Trafo. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent">Privacidade</a>
              <a href="#" className="hover:text-accent">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/554791846886?text=Olá, gostaria de um orçamento técnico para transformadores de baixa tensão para minha indústria."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-charcoal px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Falar com Especialista
        </span>
      </a>
    </div>
  );
}
