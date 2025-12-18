import { useState, useEffect } from 'react'; // "React" retiré car inutile avec les nouvelles versions
import { 
  Code2, 
  // BarChart3 retiré
  // PenTool retiré
  Mail, 
  Linkedin, 
  Download, 
  ChevronRight, 
  Database, 
  LineChart, 
  Layout, 
  Send,
  Menu,
  X,
  Smartphone
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Gestion du scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détection de la section active
      const sections = ['home', 'about', 'services', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CORRECTION ICI : Ajout de ": string" pour dire à TypeScript que l'ID est du texte
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer group" onClick={() => scrollTo('home')}>
            Julien<span className="text-teal-400">.Garcia</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Expertise', 'Expérience', 'Projets', 'Contact'].map((item, idx) => {
              const ids = ['services', 'experience', 'projects', 'contact'];
              // CORRECTION ICI : On utilise activeSection pour surligner le menu actif
              const isActive = activeSection === ids[idx];
              return (
                <button 
                  key={idx}
                  onClick={() => scrollTo(ids[idx])}
                  className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-teal-400' : 'hover:text-teal-400'}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-400 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              );
            })}
            <a 
              href="/CV_Julien_Garcia_2025.pdf" 
              download="CV_Julien_Garcia_2025.pdf"
              className="bg-teal-500 hover:bg-teal-600 text-slate-950 px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={16} />
              CV 2025
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-xl">
             {['Expertise', 'Expérience', 'Projets', 'Contact'].map((item, idx) => {
              const ids = ['services', 'experience', 'projects', 'contact'];
              return (
                <button 
                  key={idx}
                  onClick={() => scrollTo(ids[idx])}
                  className="text-left text-lg font-medium text-slate-300 hover:text-teal-400"
                >
                  {item}
                </button>
              );
            })}
             <a 
              href="/CV_Julien_Garcia_2025.pdf"
              download="CV_Julien_Garcia_2025.pdf" 
              className="text-left text-lg font-medium text-teal-400 hover:text-teal-300 flex items-center gap-2 mt-4"
            >
              Télécharger mon CV <Download size={18} />
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-block px-3 py-1 mb-6 border border-teal-500/30 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            Disponible pour missions Freelance
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Data Analyst & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
              Digital Strategist
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Je transforme vos données brutes en stratégies marketing performantes. 
            Double compétence technique et business pour accélérer votre croissance.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button onClick={() => scrollTo('contact')} className="w-full md:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-600 text-slate-900 rounded-full font-bold transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2">
              Discuter de votre projet <ChevronRight size={18} />
            </button>
            <button onClick={() => scrollTo('experience')} className="w-full md:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-full font-bold transition-all flex items-center justify-center gap-2">
              Voir mon parcours
            </button>
          </div>
        </div>
      </section>

      {/* Stats / Quick Info */}
      <div className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 flex flex-wrap justify-center md:justify-around gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-1">Master x2</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Data & Gestion Projet</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">+5 ans</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Expérience Digital</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">Full Stack</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Marketing & Tech</div>
          </div>
        </div>
      </div>

      {/* Services / Compétences */}
      <section id="services" className="py-20 md:py-32 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mes Domaines d'Intervention</h2>
            <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all hover:transform hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Data & Analytics</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Analyse approfondie de vos KPIs pour piloter la performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'Tableau', 'Power BI', 'Google Analytics'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all hover:transform hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Marketing & CRM</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Stratégies d'acquisition et de fidélisation automatisées.
              </p>
              <div className="flex flex-wrap gap-2">
                {['HubSpot', 'Google Ads', 'Meta Business', 'SEO', 'Automation'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all hover:transform hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Web Design & Dev</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Création d'interfaces modernes et performantes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'HTML/CSS', 'WordPress', 'Figma', 'UI/UX'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Parcours Professionnel</h2>
              <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
            </div>
            <a 
              href="/CV_Julien_Garcia_2025.pdf" 
              download="CV_Julien_Garcia_2025.pdf"
              className="mt-4 md:mt-0 text-teal-400 hover:text-teal-300 flex items-center gap-2 text-sm font-semibold"
            >
              Télécharger le CV complet <Download size={16} />
            </a>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-teal-500 group-hover:border-teal-500 text-slate-500 group-hover:text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Database size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-all shadow-lg">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-lg text-white">Ogury</h3>
                  <span className="text-xs font-mono text-teal-400">2024 - 2025</span>
                </div>
                <div className="text-sm font-semibold text-slate-400 mb-3">Customer Success Manager</div>
                <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">
                  <li>Pilotage de la performance et analyse des KPIs.</li>
                  <li>Développement d'un prompt IA (-2h de travail/semaine).</li>
                  <li>Reporting stratégique pour Publicis.</li>
                </ul>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-indigo-500 group-hover:border-indigo-500 text-slate-500 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Mail size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all shadow-lg">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-lg text-white">La Poste</h3>
                  <span className="text-xs font-mono text-indigo-400">2023 - 2024</span>
                </div>
                <div className="text-sm font-semibold text-slate-400 mb-3">Chef de projet Marketing Inbound</div>
                <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">
                  <li>Pilotage de la stratégie Marketing Automation (HubSpot).</li>
                  <li>Définition de la stratégie SEO et tableaux de bord.</li>
                  <li>Création d'un intranet de formation interne.</li>
                </ul>
              </div>
            </div>

             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-pink-500 group-hover:border-pink-500 text-slate-500 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Layout size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-pink-500/30 transition-all shadow-lg">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-lg text-white">L'olivier Assurance</h3>
                  <span className="text-xs font-mono text-pink-400">2021 - 2022</span>
                </div>
                <div className="text-sm font-semibold text-slate-400 mb-3">Chargé de communication</div>
                <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">
                  <li>Optimisation UX du site web et SEO.</li>
                  <li>Pilotage de projets 360° et refonte charte graphique.</li>
                  <li>Animation réseaux sociaux et reporting performance.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects (Mockup based on skills) */}
      <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Types</h2>
            <p className="text-slate-400">Exemples de missions réalisables pour mes clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all hover:border-teal-500">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-slate-900 flex items-center justify-center">
                    <LineChart size={48} className="text-teal-500/50 group-hover:scale-110 transition-transform duration-500"/>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">Dashboard BI Automatisé</h3>
                <p className="text-sm text-slate-400 mb-4">Création d'un tableau de bord PowerBI connecté à un CRM pour suivre le ROI des campagnes en temps réel.</p>
                <span className="text-xs font-mono text-teal-500">#DataViz #SQL #PowerBI</span>
              </div>
            </div>

             <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all hover:border-indigo-500">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900 flex items-center justify-center">
                    <Smartphone size={48} className="text-indigo-500/50 group-hover:scale-110 transition-transform duration-500"/>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Site Web Vitrine & SEO</h3>
                <p className="text-sm text-slate-400 mb-4">Conception d'un site sur WordPress/React avec stratégie SEO complète pour une PME locale.</p>
                <span className="text-xs font-mono text-indigo-500">#React #SEO #UX</span>
              </div>
            </div>

             <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all hover:border-pink-500">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 to-slate-900 flex items-center justify-center">
                    <Mail size={48} className="text-pink-500/50 group-hover:scale-110 transition-transform duration-500"/>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">Workflow Marketing Automation</h3>
                <p className="text-sm text-slate-400 mb-4">Mise en place de scénarios HubSpot pour le lead nurturing et segmentation de la base de données.</p>
                <span className="text-xs font-mono text-pink-500">#HubSpot #Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl font-bold mb-4">Parlons de votre projet</h2>
                <p className="text-slate-400 mb-8">
                  Besoin d'optimiser votre data ou de lancer une nouvelle stratégie digitale ? Je suis disponible pour échanger.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-900 transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Email</div>
                      <a href="mailto:juliengarcia9214@gmail.com" className="font-medium hover:text-teal-400">juliengarcia9214@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-900 transition-all">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Téléphone</div>
                      <a href="tel:+33647670126" className="font-medium hover:text-teal-400">06 47 67 01 26</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-900 transition-all">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Social</div>
                      <a 
                        href="https://www.linkedin.com/in/garcia-julien/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium hover:text-teal-400"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                 <form 
                   action="https://formspree.io/f/YOUR_FORM_ID" 
                   method="POST" 
                   className="space-y-4"
                 >
                   <div>
                     <label className="block text-sm font-medium text-slate-400 mb-1">Nom complet</label>
                     <input 
                       type="text" 
                       name="name" 
                       className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" 
                       placeholder="Votre nom" 
                       required 
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                     <input 
                       type="email" 
                       name="email" 
                       className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" 
                       placeholder="votre@email.com" 
                       required 
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                     <textarea 
                       rows={4} 
                       name="message" 
                       className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" 
                       placeholder="Comment puis-je vous aider ?" 
                       required
                     ></textarea>
                   </div>
                   <button 
                     type="submit" 
                     className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                   >
                     Envoyer <Send size={18} />
                   </button>
                 </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© 2025 Julien Garcia. Tous droits réservés.</p>
          <p className="mt-2 text-xs">Conçu et développé en React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;