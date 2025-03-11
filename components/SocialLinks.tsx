import Link from "next/link";
import { SiDiscord, SiTiktok, SiYoutube, SiTwitch } from "react-icons/si";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="flex space-x-6 mb-8 md:mb-0">
      {[
        { icon: SiDiscord, link: "https://discord.gg/timelesscity", label: "Discord" },
        { icon: SiTiktok, link: "https://www.tiktok.com/tag/timelesscity", label: "TikTok" },
        { icon: "/images/fivem.png", link: "https://fivem.timelesscity.de", label: "FiveM" },
      ].map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className="text-2xl text-gray-400 hover:text-white transition-colors"
          aria-label={item.label}
        >
          {typeof item.icon === "string" ? (
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className="hover:filter hover:brightness-0 hover:invert"
            />
          ) : (
            <item.icon />
          )}
        </Link>
      ))}
    </div>
  );
}