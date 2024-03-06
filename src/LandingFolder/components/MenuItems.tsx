//describe the structure of an item inside the dropdown menu
export interface DropdownItem {
  label: string;
  description: string;
  route: string;
}
//Describes the structure of a menu item,
export interface MenuItem {
  label: string;
  dropdownItems: DropdownItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Städning",
    dropdownItems: [
      {
        label: "Fönsterputs",
        description:
          "Miljövänliga metoder för kristallklara fönster och planeten",
        route: "",
      },
      {
        label: "Diamanttvätt",
        description: "Miljövänlig glans med ansvar och innovation",
        route: "",
      },
      {
        label: "Basic städning",
        description: "Enkelhet med omtanke för miljön och hälsa",
        route: "",
      },
      {
        label: "Toppstädning",
        description: "Kvalitet och omsorg med miljöhänsyn i fokus",
        route: "",
      },
      {
        label: "Flyttstädning",
        description: "Miljövänlig service för smidig och ren övergång",
        route: "",
      },
    ],
  },
  {
    label: "Vivid Clean",
    dropdownItems: [
      {
        label: "Om oss",
        description:
          "Ledande, engagerade och dedikerade - vår historia driver vår framtid. Läs mer om oss",
        route: "/AboutUs",
      },
      {
        label: "Kontakta oss",
        description:
          "För frågor och samarbeten, nå oss enkelt via vårt kontaktformulär",
        route: "/Contact",
      },
      {
        label: "FAQ",
        description: "Vanliga frågor redan besvarade",
        route: "",
      },
    ],
  },
  {
    label: "För Företag",
    dropdownItems: [
      {
        label: "Kontorsstädning",
        description: "Renare miljö med omtanke om planeten och arbetsplatsen",
        route: "",
      },
      {
        label: "Lösningar",
        description: "Skräddarsydda lösningar för företagskunder",
        route: "",
      },
      {
        label: "Städning som löneförmån",
        description: "Främjar välbefinnande med omtanke om miljön",
        route: "",
      },
    ],
  },
  {
    label: "Konto",
    dropdownItems: [
      {
        label: "Logga in",
        description: "Hantera din användarprofil",
        route: "",
      },
      {
        label: "Inställningar",
        description: "Anpassa dina kontoinställningar",
        route: "",
      },
      {
        label: "Logga ut",
        description:
          "Logga ut från ditt konto",
        route: "",
      },
      {
        label: "Medarbetar Portal",
        description:
          "Logga in genom medarbetarportalen",
        route: "",
      },
      {
        label: "Skapa nytt konto",
        description:
          "Skapa konto för smidig tillgång till städtjänster och erbjudanden",
        route: "",
      },
      {
        label: "Personalsida",
        description:
          "Sida för personalen att kunna se sina bokningar",
        route: "",
      },
    ],
  },
];
