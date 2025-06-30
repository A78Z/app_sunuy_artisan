interface Location {
  region: string;
  departments: {
    name: string;
    communes: string[];
  }[];
}

export const locations: Location[] = [
  {
    region: "Dakar",
    departments: [
      {
        name: "Dakar",
        communes: ["Plateau", "Médina", "Grand Dakar", "Almadies", "Parcelles Assainies", "Yoff", "Ouakam", "Ngor"]
      },
      {
        name: "Pikine",
        communes: ["Pikine Est", "Pikine Nord", "Pikine Ouest", "Guédiawaye", "Thiaroye", "Keur Massar", "Malika", "Yeumbeul"]
      },
      {
        name: "Rufisque",
        communes: ["Rufisque Est", "Rufisque Ouest", "Rufisque Nord", "Bargny", "Diamniadio", "Sébikotane", "Sangalkam"]
      }
    ]
  },
  {
    region: "Thiès",
    departments: [
      {
        name: "Thiès",
        communes: ["Thiès Est", "Thiès Ouest", "Thiès Nord", "Pout", "Kayar", "Khombole", "Fandène"]
      },
      {
        name: "Mbour",
        communes: ["Mbour", "Saly Portudal", "Joal-Fadiouth", "Ngaparou", "Somone", "Popenguine", "Malicounda"]
      },
      {
        name: "Tivaouane",
        communes: ["Tivaouane", "Mékhé", "Pire Goureye", "Mérina Dakhar", "Pambal", "Notto Gouye Diama"]
      }
    ]
  },
  {
    region: "Saint-Louis",
    departments: [
      {
        name: "Saint-Louis",
        communes: ["Saint-Louis", "Mpal", "Fass Ngom", "Gandon", "Rao"]
      },
      {
        name: "Dagana",
        communes: ["Dagana", "Richard Toll", "Ross Béthio", "Rosso", "Gaé", "Ndombo Sandjiry"]
      },
      {
        name: "Podor",
        communes: ["Podor", "Ndioum", "Guédé", "Niandane", "Golléré", "Aéré Lao", "Pété"]
      }
    ]
  },
  {
    region: "Diourbel",
    departments: [
      {
        name: "Diourbel",
        communes: ["Diourbel", "Ndoulo", "Ngohe", "Tocky Gare", "Touba Mosquée"]
      },
      {
        name: "Bambey",
        communes: ["Bambey", "Lambaye", "Ngoye", "Baba Garage"]
      },
      {
        name: "Mbacké",
        communes: ["Mbacké", "Touba", "Taif", "Sadio"]
      }
    ]
  },
  {
    region: "Fatick",
    departments: [
      {
        name: "Fatick",
        communes: ["Fatick", "Dioffior", "Diakhao", "Fimela", "Niakhar"]
      },
      {
        name: "Foundiougne",
        communes: ["Foundiougne", "Sokone", "Karang", "Passy", "Djilor"]
      },
      {
        name: "Gossas",
        communes: ["Gossas", "Colobane", "Mbar", "Ouadiour"]
      }
    ]
  },
  {
    region: "Kaffrine",
    departments: [
      {
        name: "Kaffrine",
        communes: ["Kaffrine", "Nganda", "Diamagadio", "Kathiote"]
      },
      {
        name: "Birkelane",
        communes: ["Birkelane", "Keur Mboucki", "Diamal", "Mabo"]
      },
      {
        name: "Koungheul",
        communes: ["Koungheul", "Ida Mouride", "Lour Escale", "Saly Escale"]
      },
      {
        name: "Malem Hodar",
        communes: ["Malem Hodar", "Darou Minam", "Ndiobène Samba Lamo"]
      }
    ]
  },
  {
    region: "Kaolack",
    departments: [
      {
        name: "Kaolack",
        communes: ["Kaolack", "Kahone", "Ndoffane", "Gandiaye", "Sibassor"]
      },
      {
        name: "Guinguinéo",
        communes: ["Guinguinéo", "Mboss", "Ngathie Naoudé"]
      },
      {
        name: "Nioro du Rip",
        communes: ["Nioro du Rip", "Keur Madiabel", "Médina Sabakh", "Paoskoto"]
      }
    ]
  },
  {
    region: "Kédougou",
    departments: [
      {
        name: "Kédougou",
        communes: ["Kédougou", "Ninéfécha", "Fongolimbi", "Dimboli"]
      },
      {
        name: "Salémata",
        communes: ["Salémata", "Dakateli", "Kévoye", "Ethiolo"]
      },
      {
        name: "Saraya",
        communes: ["Saraya", "Bembou", "Médina Baffé", "Sabodala"]
      }
    ]
  },
  {
    region: "Kolda",
    departments: [
      {
        name: "Kolda",
        communes: ["Kolda", "Dialambéré", "Médina Yoro Foulah", "Salikégné"]
      },
      {
        name: "Médina Yoro Foulah",
        communes: ["Médina Yoro Foulah", "Pata", "Bignarabé", "Koulinto"]
      },
      {
        name: "Vélingara",
        communes: ["Vélingara", "Kounkané", "Diaobé-Kabendou", "Pakour"]
      }
    ]
  },
  {
    region: "Louga",
    departments: [
      {
        name: "Louga",
        communes: ["Louga", "Ndiagne", "Keur Momar Sarr", "Nguer Malal"]
      },
      {
        name: "Kébémer",
        communes: ["Kébémer", "Bandégne Ouolof", "Sagatta Gueth", "Ndande"]
      },
      {
        name: "Linguère",
        communes: ["Linguère", "Dahra", "Barkedji", "Yang-Yang"]
      }
    ]
  },
  {
    region: "Matam",
    departments: [
      {
        name: "Matam",
        communes: ["Matam", "Ourossogui", "Thilogne", "Nguidjilone"]
      },
      {
        name: "Kanel",
        communes: ["Kanel", "Semmé", "Ogo", "Orkadière"]
      },
      {
        name: "Ranérou",
        communes: ["Ranérou", "Vélingara", "Lougré Thioly"]
      }
    ]
  },
  {
    region: "Sédhiou",
    departments: [
      {
        name: "Sédhiou",
        communes: ["Sédhiou", "Diannah Malary", "Marsassoum", "Bambaly"]
      },
      {
        name: "Bounkiling",
        communes: ["Bounkiling", "Madina Wandifa", "Ndiamacouta", "Boghal"]
      },
      {
        name: "Goudomp",
        communes: ["Goudomp", "Samine", "Tanaff", "Karantaba"]
      }
    ]
  },
  {
    region: "Tambacounda",
    departments: [
      {
        name: "Tambacounda",
        communes: ["Tambacounda", "Koussanar", "Makacoulibantang", "Missirah"]
      },
      {
        name: "Bakel",
        communes: ["Bakel", "Diawara", "Kidira", "Gabou"]
      },
      {
        name: "Goudiry",
        communes: ["Goudiry", "Kothiary", "Bala", "Boynguel Bamba"]
      },
      {
        name: "Koumpentoum",
        communes: ["Koumpentoum", "Malem Niani", "Payar", "Kouthiaba Wolof"]
      }
    ]
  },
  {
    region: "Ziguinchor",
    departments: [
      {
        name: "Ziguinchor",
        communes: ["Ziguinchor", "Niaguis", "Boutoupa-Camaracounda", "Nyassia"]
      },
      {
        name: "Bignona",
        communes: ["Bignona", "Thionck Essyl", "Diouloulou", "Tenghory"]
      },
      {
        name: "Oussouye",
        communes: ["Oussouye", "Diembéring", "Santhiaba Manjack", "Mlomp"]
      }
    ]
  }
];