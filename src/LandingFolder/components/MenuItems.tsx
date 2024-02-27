import React from "react";

export interface DropdownItem {
  label: string;
  description: string;
}

export interface MenuItem {
  label: string;
  dropdownItems: DropdownItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Städning",
    dropdownItems: [
      { label: "Fönsterputs", description: "Miljövänliga metoder för kristallklara fönster och planeten." },
      { label: "Diamanttvätt", description: "Miljövänlig glans med ansvar och innovation." },
      { label: "Basic städning", description: "Enkelhet med omtanke för miljön och hälsa." },
      { label: "Toppstädning", description: "Kvalitet och omsorg med miljöhänsyn i fokus." },
      { label: "Flyttstädning", description: "Miljövänlig service för smidig och ren övergång" },
    ],
  },
  {
    label: "Vivid Clean",
    dropdownItems: [
      { label: "Om oss", description: "Ledande, engagerade och dedikerade - vår historia driver vår framtid. Läs mer om oss" },
      { label: "Kontakta oss", description: "För frågor och samarbeten, nå oss enkelt via vårt kontaktformulär" },
      { label: "FAQ", description: "Vanliga frågor redan besvarade" },
    ],
  },
  {
    label: "För Företag",
    dropdownItems: [
      { label: "Kontorsstädning", description: "Renare miljö med omtanke om planeten och arbetsplatsen." },
      { label: "Lösningar", description: "Skräddarsydda lösningar för företagskunder" },
      { label: "Städning som löneförmån", description: "Främjar välbefinnande med omtanke om miljön" },
    ],
  },
  {
    label: "Logga in",
    dropdownItems: [
      { label: "Min Profil", description: "Hantera din användarprofil" },
      { label: "Inställningar", description: "Anpassa dina kontoinställningar" },
      { label: "Skapa nytt konto", description: "Skapa konto för smidig tillgång till städtjänster och erbjudanden" },
    ],
  },
];