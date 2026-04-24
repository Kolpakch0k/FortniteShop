// Centralized item data for the Fortnite Shop
// TODO: Adjust prices, add or remove items as needed
// TODO: Replace placeholder image URLs with real item images

const PLACEHOLDER = 'https://via.placeholder.com/200x200/1a1a2e/8A2BE2?text=ITEM';

export const CATEGORIES = [
  { id: 'pickaxe',    name: 'Pickaxe',    icon: 'construct-outline', image: PLACEHOLDER},
  { id: 'skin',       name: 'Skin',       icon: 'shirt-outline',     image: PLACEHOLDER },
  { id: 'deltaplane', name: 'Deltaplane', icon: 'paper-plane-outline', image: PLACEHOLDER },
  { id: 'emote',      name: 'Emote',      icon: 'happy-outline',     image: PLACEHOLDER },
];

export const ITEMS = {
  pickaxe: [
    { id: 'p1', name: 'Minty Axe',            price: 1500,  rarity: 'Rare',    image: require('../assets/images/minty-axe.png') },
    { id: 'p2', name: 'FNCS Axe of Champions',price: 1500, rarity: 'Vaulted', image: require('../assets/images/fncs-axe.png') },
    { id: 'p3', name: 'Rockbreaker',          price: 1500, rarity: 'Rare',    image: require('../assets/images/xz-xz.png') },
    { id: 'p4', name: 'Lazer Axe',            price: 1500, rarity: 'Rare',    image: require('../assets/images/xz3-xz3.png') },
    { id: 'p5', name: 'Leviathan Axe',        price: 1200, rarity: 'Vaulted', image: require('../assets/images/xz4-xz4.png') },
    { id: 'p6', name: 'Psycho Buzz Axes',     price: 500,  rarity: 'Rare',    image: require('../assets/images/xz5-xz5.png') },
    { id: 'p7', name: 'Diamond Jack',         price: 1500, rarity: 'Rare',    image: require('../assets/images/xz6-xz6.png') },
    { id: 'p8', name: 'Snake Eyes Katana',    price: 1200, rarity: 'Vaulted', image: require('../assets/images/xz7-xz7.png')},
  ],
  skin: [
    { id: 's1',  name: 'Renegade Raider',       price: 2000, rarity: 'Vaulted', image: require('../assets/images/xz8-xz8.png') },
    { id: 's2',  name: 'Aerial Assault Trooper',price: 2000, rarity: 'Vaulted', image: require('../assets/images/xz9-xz9.png') },
    { id: 's3',  name: 'Double Helix',          price: 1500, rarity: 'Rare',    image: require('../assets/images/xz10-xz10.png') },
    { id: 's4',  name: 'Black Knight',          price: 1900, rarity: 'Vaulted', image: require('../assets/images/xz11-xz11.png') },
    { id: 's5',  name: 'GLOW',                price: 2000, rarity: 'Vaulted', image: require('../assets/images/xz12-xz12.png') },
    { id: 's6',  name: 'Honor Guard',           price: 1700, rarity: 'Rare',    image: require('../assets/images/xz13-xz13.png') },
    { id: 's7',  name: 'Travis Scott',          price: 1800, rarity: 'Vaulted', image: require('../assets/images/xz14-xz14.png') },
    { id: 's8',  name: 'Rue',                   price: 1600, rarity: 'Rare',    image: require('../assets/images/xz15-xz15.png') },
    { id: 's9',  name: 'Kratos',                price: 1500, rarity: 'Rare',    image: require('../assets/images/xz16-xz16.png') },
    { id: 's10', name: 'Astro Jack',            price: 1800, rarity: 'Vaulted', image: require('../assets/images/xz17-xz17.png') },
  ],
  deltaplane: [
    { id: 'd1', name: 'Mako Glider',         price: 800,  rarity: 'Vaulted', image: require('../assets/images/xz18-xz18.png')},
    { id: 'd2', name: 'Warthog Glider',      price: 1000, rarity: 'Rare',    image: require('../assets/images/xz19-xz19.png') },
    { id: 'd3', name: 'Heartspan Glider',    price: 1200, rarity: 'Rare',    image: require('../assets/images/xz20-xz20.png') },
    { id: 'd4', name: 'Rotor Glider',        price: 900,  rarity: 'Rare',    image: require('../assets/images/xz22-xz22.png') },
    { id: 'd5', name: 'Stealth Pivot Glider',price: 1300, rarity: 'Rare',    image: require('../assets/images/xz21-xz21.png') },
    { id: 'd6', name: 'Astroworld Cyclone',  price: 1500, rarity: 'Vaulted', image: require('../assets/images/xz23-xz23.png') },
  ],
  emote: [
    { id: 'e1', name: 'The Worm',       price: 500, rarity: 'Rare',    image: require('../assets/images/xz24-xz24.png') },
    { id: 'e2', name: 'Ride the Pony',  price: 500, rarity: 'Vaulted', image: require('../assets/images/xz25-xz25.png') },
    { id: 'e3', name: 'Orange Justice', price: 800, rarity: 'Vaulted', image: require('../assets/images/xz26-xz26.png') },
    { id: 'e4', name: 'Take the L',     price: 600, rarity: 'Rare',    image: require('../assets/images/xz27-xz27.png') },
    { id: 'e5', name: 'Floss',          price: 800, rarity: 'Vaulted', image: require('../assets/images/xz28-xz28.png') },
    { id: 'e6', name: 'Hot Marat',      price: 700, rarity: 'Rare',    image: require('../assets/images/xz29-xz29.png') },
    { id: 'e7', name: 'Go Mufasa',      price: 500, rarity: 'Rare',    image: require('../assets/images/xz30-xz30.png') },
    { id: 'e8', name: 'Head Banger',    price: 600, rarity: 'Rare',    image: require('../assets/images/xz31-xz31.png') },
  ],
};

export const getItemsByCategory = (categoryId) => ITEMS[categoryId] || [];
export const getCategoryById   = (categoryId) => CATEGORIES.find((c) => c.id === categoryId);
