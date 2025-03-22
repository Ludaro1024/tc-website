'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import {SiD, SiDiscord, SiTiktok} from "react-icons/si";
import { FiArrowRight, FiClock, FiUsers, FiMapPin, FiShield, FiMic, FiDownload, FiMessageSquare, FiBook } from "react-icons/fi";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/30 pointer-events-none" />

      <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.png"
              alt="TimelessCity Logo"
              width={40}
              height={40}
              className="animate-pulse"
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TimelessCity
              </span>
              <span className="px-2 py-1 text-xs bg-white/10 rounded-full border border-white/10">
                BETA
              </span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/regeln" className="hover:text-white transition-colors flex items-center gap-1">
              <FiBook className="w-5 h-5" />
              <span className="hidden sm:inline">Regeln</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold leading-tight"
              >
              Immersives Roleplay<br />
              <span className="bg-gradient-to-r from-white via-gray-400 to-gray-800 bg-clip-text text-transparent">auf Professionellem Niveau</span>
              </motion.h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Betrete eine lebendige Welt mit realistischen Charakteren, tiefgreifenden Storylines und modernster Technologie.
              </p>

              <div className="flex gap-4">
                <Link 
                  href="#so-nimmst-du-teil" 
                  className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center"
                >
                  <FiArrowRight className="mr-3" />
                  Jetzt beitreten
                </Link>
                <Link 
                  href="/regeln" 
                  className="px-8 py-4 border border-white/20 rounded-lg font-medium hover:border-white/40 transition-all"
                >
                  Regeln lesen
                </Link>
              </div>
            </div>

            <Carousel
              plugins={[Autoplay({ delay: 2500 })]}
              className="rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <CarouselContent>
                {[1, 2, 4, 5, 6, 7].map((slide) => (
                  <CarouselItem key={slide}>
                    <div className="aspect-video relative">
                      <Image
                        src={`/images/diashow/${slide}.png`}
                        alt={`Slide ${slide}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* USP Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-xl border border-white/10">
              <FiUsers className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-2xl font-semibold mb-4">Wer wir sind</h3>
              <p className="text-gray-300">
                Eine engagierte Community von Roleplay-Enthusiasten, die seit 2020 qualitativ hochwertige FiveM-Erlebnisse schafft. 
                Uns ist es wichtig, den Spielern ein einzigartiges Erlebnis zu bieten und das RP zu fördern.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-xl border border-white/10">
              <FiShield className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-2xl font-semibold mb-4">Was wir bieten</h3>
              <ul className="text-gray-300 list-disc pl-5 space-y-2">
                <li>Realismusnahe Wirtschaft</li>
                <li>Viele legale & illegale Aktivitäten</li>
                <li>Dynamische Fahrzeugeigenschaften</li>
                <li>Und vieles mehr</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 rounded-xl border border-white/10">
              <FiMic className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-2xl font-semibold mb-4">Voice System</h3>
              <p className="text-gray-300">
                Wir verwenden YACA-Voice (TeamSpeak) für realistisches, positionsbasiertes Voice-RP mit kristallklarer Audioqualität.
              </p>
            </div>
          </div>
        </section>
       

        {/* Features Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Warum wir?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Kombination aus technischer Exzellenz und tiefem Roleplay-Verständnis
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FiClock, title: "Zuverlässiger Support", text: "Engagiertes & erfahrenes Server-Team" },
              { "icon": FiMapPin, "title": "Dynamische Spielwelt", "text": "Ständig erweiternde Karten & einzigartige Custom-Features" },
              { "icon": FiShield, "title": "Sicherheit & Fairplay", "text": "Aktives Admin-Team, Anti-Cheat-Maßnahmen & durchdachte RP-Regeln" },
              { "icon": FiUsers, "title": "Wachsende Community", "text": "Täglich 30+ aktive Roleplay-Spieler" }
            ].map((item, i) => (
              <motion.div 
              key={i}
              className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all"
              >
              <item.icon className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        

  

        
      </main>

              {/* How to Join Section */}
              <section className="container mx-auto px-4 mb-24">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <section id="so-nimmst-du-teil">
            <h2 className="text-4xl font-bold mb-8 text-center">So nimmst du teil</h2>
                </section>
              
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-black/20 rounded-xl">
              <div className="mb-4 flex justify-center">
                <FiDownload className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. FiveM installieren</h3>
              <Link
                href="https://fivem.net"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
              >
                Download
                <FiArrowRight className="w-4 h-4" />
              </Link>
              </div>

              <div className="text-center p-6 bg-black/20 rounded-xl">
              <div className="mb-4 flex justify-center">
              <SiDiscord className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Discord beitreten</h3>
              <Link
                href="https://discord.gg/timelesscity"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-all"
              >
                Discord öffnen
                <FiArrowRight className="w-4 h-4" />
              </Link>
              </div>

              <div className="text-center p-6 bg-black/20 rounded-xl">
                <div className="mb-4 flex justify-center">
                <FiBook className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Fang an zu Spielen!</h3>
                <p className="text-gray-300 mb-4"></p>
                <Link
                  href="https://fivem.timelesscity.de"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition-all rounded-lg"
                >
                  Tritt dem Server Bei!
                 
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-24">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">Tritt unserer Community bei </h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Erhalte Support, verpasse keine Events und vernetze dich mit anderen Spielern.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Discord Card */}
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4 mb-6">
      <SiDiscord className="w-8 h-8 text-white" />
        <div className="text-left">
          <h3 className="text-2xl font-semibold">Discord Server</h3>
          <p className="text-gray-400">300+ Mitglieder</p>
        </div>
      </div>
      <Link
        href="https://discord.gg/timelesscity"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg transition-all"
      >
        Tritt Discord bei
      </Link>
    </motion.div>

    {/* TikTok Card */}
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4 mb-6">
      <SiTiktok className="w-8 h-8 text-white" />
        <div className="text-left">
          <h3 className="text-2xl font-semibold">TikTok</h3>
          <p className="text-gray-400">Folge uns für Updates!</p>
        </div>
      </div>
  
      <Link
        href="https://tiktok.com/@timeless.city"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-white/10 text-white rounded-lg border border-white/10 transition-all"
      >
  Folg uns auf TikTok
      </Link>
    </motion.div>
  </div>
</section>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logotransparent.png"
                alt="Logo"
                width={80}
                height={80}
                className=""
              />
              <div>
                <h3 className="text-xl font-bold">TimelessCity</h3>
                <p className="text-gray-400 text-sm">Next-Level Roleplay Experience</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Professionelles FiveM-Roleplay mit Fokus auf Community
            </p>
          </div>

          <div>
            <h4 className="text-white/90 font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/regeln" className="block text-gray-400 hover:text-white text-sm">
                Server-Regeln
              </Link>
              <Link href="/agb" className="block text-gray-400 hover:text-white text-sm">
                AGB
              </Link>
              <Link href="/impressum" className="block text-gray-400 hover:text-white text-sm">
                Impressum
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white/90 font-medium mb-4">Kontakt</h4>
            <div className="space-y-2">
                <div className="text-gray-400 text-sm mb-4">
                Support: <Link href="mailto:timelesscityinfo@gmail.com" className="hover:text-white">timelesscityinfo@gmail.com</Link>
                </div>
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>© 2024 TimelessCity. Alle Rechte vorbehalten.</div>
            <div className="flex gap-4">
              <Link href="/impressum" className="hover:text-white">Impressum</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
