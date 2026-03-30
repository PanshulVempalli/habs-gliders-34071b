const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-primary text-lg tracking-wider mb-2">
          HABS GLIDERS — 34071B
        </p>
        <p className="text-muted-foreground text-sm">
          Haberdashers' Elstree Schools · VEX V5 Robotics · Push Back 2025–2026 Season
        </p>
        <p className="text-muted-foreground/50 text-xs mt-4">
          © {new Date().getFullYear()} HABS Gliders. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
