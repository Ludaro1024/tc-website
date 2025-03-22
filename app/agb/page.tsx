'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiShield } from "react-icons/fi";
import SocialLinks from "@/components/SocialLinks";

export default function AGB() {
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
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <FiArrowRight className="w-5 h-5 transform rotate-180" />
              <span className="hidden sm:inline">Zurück</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/10">
              <div className="flex items-center gap-1 mb-4">
                <FiShield className="w-12 h-12 text-white" />
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Allgemeine Geschäftsbedingungen (AGB)
                  </h1>
                  <p className="text-gray-400 mt-1">Stand: 22. März 2025 · Version 1.0</p>
                </div>
              </div>
              <p className="text-gray-300">
                Mit dem Beitrett des TimelessCity-Servers akzeptierst du die folgenden AGB. Diese gelten uneingeschränkt und können nicht umgangen werden. Sie definieren deine Rechte und Pflichten als Spieler.
              </p>
            </div>

            {/* Inhalt */}
            <div className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white">1. Haftung</h2>
                <p className="text-gray-300 mt-2">
                  TimelessCity übernimmt keine Haftung für Schäden oder Verluste, die durch die Nutzung unseres FiveM-Servers entstehen. Dies gilt insbesondere für:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                  <li>Spieler unter 18 Jahren – die Nutzung erfolgt auf eigene Verantwortung.</li>
                  <li>Verlorene Gegenstände oder Fortschritt im Falle eines temporären oder permanenten Bans.</li>
                  <li>Technische Probleme mit FiveM oder GTA – hierfür ist der FiveM-Support zuständig.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white">2. Strafen & Regelverstöße</h2>
                <p className="text-gray-300 mt-2">
                  Verstöße gegen die Serverregeln führen zu angemessenen Strafen, die von unserem Admin-Team festgelegt werden. Folgende Grundsätze gelten:
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                  <li>Entscheidungen des Admin-Teams können im Support angefochten werden.</li>
                  <li>Beleidigungen, Rassismus oder Diskriminierung führen zu permanentem Bann.</li>
                  <li>Werbung für andere Server oder externe Angebote ist verboten.</li>
                  <li>Hacking, Glitching oder Exploiting wird mit permanentem Bann geahndet.</li>
                  <li>Trolling wird je nach Schwere mit einer Verwarnung oder einem Bann bestraft.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white">3. Änderungen & Gültigkeit</h2>
                <p className="text-gray-300 mt-2">
                  Diese AGB können jederzeit geändert werden. Änderungen treten sofort in Kraft und werden im Discord oder auf der Website bekannt gegeben.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/10 bg-black/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-gray-400 text-sm">
                  Regelverstöße werden individuell sanktioniert. Bei Fragen wende dich an das Support-Team.
                </p>
                <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300">
                  <FiArrowRight className="transform rotate-180" />
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logotransparent.png"
                alt="Logo"
                width={80}
                height={80}
              />
              <div>
                <h3 className="text-xl font-bold">TimelessCity</h3>
                <p className="text-gray-400 text-sm">Next-Level Roleplay Experience</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Professionelles FiveM-Roleplay mit Fokus auf Immersion und Community
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
              <div className="text-gray-400 text-sm">
                Support: <Link href="mailto:timelesscityinfo@gmail.com" className="hover:text-white">timelesscityinfo@gmail.com</Link>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
