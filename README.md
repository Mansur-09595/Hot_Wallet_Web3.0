# Smart Contract & Web3 Client Project

## 📌 Project Overview
This repository contains a **smart contract** built with **Hardhat** and a **React-based frontend** powered by **Vite** to interact with the contract.

## 🚀 Technologies Used
### **Smart Contract (Backend) 🔗**
- Solidity
- Hardhat
- Ethers.js
- Waffle & Chai for testing
- Hardhat Gas Reporter
- Solidity Coverage

### **Client (Frontend) 💻**
- React.js
- Vite
- Tailwind CSS
- Ethers.js
- React Icons

---

## 🛠 Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Mansur-09595/smart-contract-web3.git
cd smart-contract-web3
```

### **2️⃣ Install Dependencies**
#### **Smart Contract (Backend)**
```bash
cd smart_contract
npm install
```

#### **Client (Frontend)**
```bash
cd client
npm install
```

---

## 📜 Smart Contract Usage
### **Compile the Contract**
```bash
npx hardhat compile
```

### **Deploy to Local Network**
```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### **Deploy to Testnet (Sepolia)**
```bash
npx hardhat run scripts/deploy.js --network sepolia
```
_(Ensure you have configured `hardhat.config.js` and have Sepolia ETH in your wallet)_

### **Run Tests**
```bash
npx hardhat test
```

### **Check Gas Usage**
```bash
npx hardhat test --gas
```

---

## 🎨 Frontend Usage
### **Start Development Server**
```bash
cd client
npm run dev
```

### **Build for Production**
```bash
npm run build
```

### **Lint Code**
```bash
npm run lint
```

---

## 🌍 Live Deployment
🌐 **Website:** [FlowPay](https://flowpay.fr/)

## 🎥 Demo
![FlowPay Demo](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2N4cDV0dXh5bG1tdnJkMGlybjZzamZveWh0bzl4N2cyN3oybmZoNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sCauLY2zz9Y8RNuRyx/giphy.gif)

---

## 🔗 Contact
👨‍💻 **Developer:** [Mansur Musaev](https://www.linkedin.com/in/mansur-musaev/)  
📩 **Email:** [mansurmusaev.work@gmail.com](mailto:mansurmusaev.work@gmail.com)  
📂 **GitHub:** [Mansur-09595](https://github.com/Mansur-09595)  

🚀 Happy Coding!

