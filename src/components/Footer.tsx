import { siteConfig } from "@/config/siteConfig";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-center border-t border-border">
      <div className="max-w-md mx-auto">
        <img
          src={siteConfig.logo}
          alt={siteConfig.name}
          className="w-28 mx-auto mb-4 opacity-60"
        />
        <p className="text-xs text-muted-foreground font-body flex items-center justify-center gap-1">
          Feito com <Heart className="w-3 h-3 text-warm-gold fill-warm-gold" /> {siteConfig.name}
        </p>
        <p className="text-xs text-muted-foreground/50 mt-2 font-body">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
