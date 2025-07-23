// Catálogo principal de Brainrots
export const catalogBrainrots = [
  {
    id: 1,
    name: "🌳👮‍♂️ Matteo",
    type: "Brainrot God (Bubblegum)",
    moneyPerSecond: "$620K/s",
    price: "R$ 9,00",
    emoji: "🌳👮‍♂️",
    rarityColor: "#FF6B35",
    description: "O mais poderoso Brainrot do jogo!",
    isTopSeller: true,
    topSellerRank: 1
  },
  {
    id: 2,
    name: "🦈🍬 Tralalero Tralala (Bubblegum)",
    type: "Brainrot God (Bubblegum)",
    moneyPerSecond: "$200K/s",
    price: "R$ 7,00",
    emoji: "🦈🍬",
    rarityColor: "#FF6B35",
    description: "Doce e poderoso como tubarão!",
    isTopSeller: true,
    topSellerRank: 2
  },
  {
    id: 3,
    name: "🦈💛 Tralalero Tralala (Gold)",
    type: "Brainrot God (Gold)",
    moneyPerSecond: "$62.5K/s",
    price: "R$ 4,00",
    emoji: "🦈💛",
    rarityColor: "#FFD700",
    description: "Versão dourada do tubarão!"
  },
  {
    id: 4,
    name: "🍊💪 Odin Din Din Dun",
    type: "Brainrot God",
    moneyPerSecond: "$75K/s",
    price: "R$ 4,00",
    emoji: "🍊💪",
    quantity: "x4 disponíveis",
    stockRemaining: 4,
    rarityColor: "#FF6B35",
    description: "Força laranja concentrada! (4 unidades)"
  },
  {
    id: 5,
    name: "🚂 Trenostruzzo Turbo 3000",
    type: "Brainrot God",
    moneyPerSecond: "$150K/s",
    price: "R$ 5,00",
    emoji: "🚂",
    quantity: "x2 disponíveis",
    stockRemaining: 2,
    rarityColor: "#FF6B35",
    description: "Velocidade turbo máxima! (2 unidades)"
  },
  {
    id: 6,
    name: "🐬 Orcalero Orcala",
    type: "Brainrot God (Gold)",
    moneyPerSecond: "$125K/s",
    price: "R$ 5,50",
    emoji: "🐬",
    rarityColor: "#FFD700",
    description: "Orca dourada dos mares!"
  },
  {
    id: 7,
    name: "☕ Espresso Signora",
    type: "Brainrot God",
    moneyPerSecond: "$210K/s",
    price: "R$ 6,50",
    emoji: "☕",
    rarityColor: "#FF6B35",
    description: "Energia caféica concentrada!",
    isTopSeller: true,
    topSellerRank: 3
  },
  {
    id: 8,
    name: "🐯🌴 Tigroligre Frutoni (Diamond)",
    type: "Diamond + Mutação",
    moneyPerSecond: "$390K/s",
    price: "R$ 6,50",
    emoji: "🐯🌴",
    rarityColor: "#00FFFF",
    description: "Tigre mutante diamante!"
  },
  {
    id: 9,
    name: "🐯🌴 Tigroligre Frutoni (Candy)",
    type: "Candy God",
    moneyPerSecond: "$280K/s",
    price: "R$ 5,50",
    emoji: "🐯🌴",
    rarityColor: "#FF69B4",
    description: "Tigre doce como candy!"
  }
];

// Função para obter os mais vendidos
export const getTopSellers = () => {
  return catalogBrainrots
    .filter(item => item.isTopSeller)
    .sort((a, b) => a.topSellerRank - b.topSellerRank);
};

// Mock data antigo para a galeria (mantido para compatibilidade)
export const brainrots = [
  {
    id: 1,
    name: "Matteo",
    rarity: "Brainrot God",
    moneyPerSecond: "$620K/s",
    price: "R$ 299,99",
    image: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Matteo",
    rarityColor: "#FF6B35",
    description: "O mais poderoso Brainrot do jogo!"
  },
  {
    id: 2,
    name: "Odin Din Din Dun",
    rarity: "Candy",
    moneyPerSecond: "$450K/s",
    price: "R$ 199,99",
    image: "https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Odin",
    rarityColor: "#FF69B4",
    description: "Doce como candy, forte como um deus!"
  },
  {
    id: 3,
    name: "Sigma Chad",
    rarity: "Bubblegum",
    moneyPerSecond: "$380K/s",
    price: "R$ 159,99",
    image: "https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Sigma",
    rarityColor: "#E74C3C",
    description: "Alpha mindset, sigma grindset!"
  },
  {
    id: 4,
    name: "Gigachad Ultra",
    rarity: "Brainrot God",
    moneyPerSecond: "$720K/s",
    price: "R$ 349,99",
    image: "https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Gigachad",
    rarityColor: "#FF6B35",
    description: "O chad definitivo do universo Brainrot!"
  },
  {
    id: 5,
    name: "Ohio Supreme",
    rarity: "Candy",
    moneyPerSecond: "$520K/s",
    price: "R$ 229,99",
    image: "https://via.placeholder.com/300x200/FFEAA7/000000?text=Ohio",
    rarityColor: "#FF69B4",
    description: "Direto de Ohio para dominar o game!"
  },
  {
    id: 6,
    name: "Skibidi Master",
    rarity: "Bubblegum",
    moneyPerSecond: "$290K/s",
    price: "R$ 129,99",
    image: "https://via.placeholder.com/300x200/DDA0DD/FFFFFF?text=Skibidi",
    rarityColor: "#E74C3C",
    description: "Skibidi bop bop, yes yes!"
  }
];

export const contactInfo = {
  discord: "LojabrainrotBR#1234",
  whatsapp: "+55 98 99186-9571",
  whatsappLink: "https://wa.me/5598991869571"
};