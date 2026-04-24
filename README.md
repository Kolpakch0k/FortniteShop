# 🎮 Fortnite Shop App (Expo + Firebase)

A dark-themed Expo app with a black & purple aesthetic, featuring a 2-tab navigation (Shop / Profile), Firebase email+password authentication with persistence, and a stylized item shop.

## 📂 Project Structure
```
FortniteShopApp/
├── App.js
├── app.json
├── babel.config.js
├── package.json
├── firebase/
│   └── config.js
├── data/
│   └── items.js
├── theme/
│   └── colors.js
├── navigation/
│   ├── RootNavigator.js
│   ├── ShopStack.js
│   └── ProfileStack.js
├── components/
│   ├── CategoryCard.js
│   ├── ItemCard.js
│   └── GradientButton.js
└── screens/
    ├── shop/
    │   ├── ShopHomeScreen.js
    │   └── CategoryListScreen.js
    └── profile/
        ├── AuthScreen.js
        └── ProfileScreen.js
```

## 🚀 Step-by-step Setup

### 1. Install Node.js (LTS) and Expo CLI
```bash
npm install -g expo-cli
```

### 2. Unzip the project & install dependencies
```bash
cd FortniteShopApp
npm install
```

Or using npx (recommended for Expo SDK 51):
```bash
npx expo install expo-status-bar expo-linear-gradient react-native-safe-area-context react-native-screens react-native-gesture-handler @react-native-async-storage/async-storage
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack firebase @expo/vector-icons
```

### 3. Firebase Setup
1. Go to https://console.firebase.google.com/
2. Create a new project.
3. Add a **Web App** to the project and copy the config object.
4. Open `firebase/config.js` and replace the placeholder values (apiKey, authDomain, projectId, etc.).
5. In Firebase Console → **Authentication** → **Sign-in method** → enable **Email/Password**.

### 4. Run the app
```bash
npx expo start
```
- Press `i` for iOS simulator
- Press `a` for Android emulator  
- Press `w` for Web

## 🛠️ TODOs
Search the codebase for `// TODO:` — you'll find places to:
- Replace placeholder image URLs (categories, items, avatar)
- Insert your Firebase credentials
- Adjust prices or add new items in `data/items.js`

## ✅ Spec Checklist
- [x] Bottom Tab Navigator with exactly 2 tabs (Shop, Profile)
- [x] Shop home with 2×2 category grid (Pickaxe, Skin, Deltaplane, Emote)
- [x] Category list with FlatList, purple-bordered image, name, V-Bucks price, Vaulted/Rare badge
- [x] Pricing within specified ranges for each category
- [x] Firebase Auth (sign in / register / sign out), persistent via AsyncStorage
- [x] onAuthStateChanged with cleanup in useEffect (no memory leaks)
- [x] Dark theme (#0D0D12) + purple accents (#8A2BE2 / #9B30FF) + gold V-Bucks (#FFD700)
- [x] 2px purple border + glow on every item image placeholder
- [x] Cross-platform (iOS / Android / Web)
