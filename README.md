# ProofPing: Decentralized Proof of Attendance 🎟️
![ProofPing Logo](./src/proofping_frontend/public/images/proofping-logo.png)

Welcome to **ProofPing** — a simple yet powerful decentralized **Proof of Attendance** solution built on the **Internet Computer (ICP)**. ProofPing enables event organizers to securely record and verify participants' attendance on the blockchain.  

---

## 🚀 What is ProofPing?

**ProofPing** allows event organizers to generate **unique event codes**, while participants can claim attendance using those codes. All records are stored immutably on the **ICP blockchain**, ensuring transparency and reliability.

### **How it Works?**
1. **Create Event**: Generate a unique code for your event.  
2. **Claim Attendance**: Participants enter the code and their name.  
3. **Verify Attendance**: Attendance records are publicly accessible with timestamps.  

---

## 💡 Why ProofPing?

- **Tamper-Proof**: Attendance data is permanently stored on the blockchain.  
- **Simplicity**: Minimal setup with one backend function and a lightweight frontend.  
- **Global Accessibility**: Works for online or offline events anywhere in the world.  

---

## 🛠️ Getting Started Locally

### **Prerequisites**
Before you begin, make sure you have the following installed:

- [DFINITY SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install)  
- [Node.js](https://nodejs.org/) & npm  

Check your DFINITY installation:
```bash
dfx --version
```

Check your Node.js and npm installation:
```bash
node --version
npm --version
```

### **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/proofping.git
   ```

2. Navigate to the project directory:
   ```bash
   cd proofping
   ```

3. Install dependencies for both the frontend and backend:
   ```bash
   npm install
   cd src/proofping_frontend
   npm install
   ```

4. Start the DFINITY local network:
   ```bash
   dfx start --background
   ```

5. Deploy the canister to the local network:
   ```bash
   dfx deploy
   ```

---

## 🎨 Customization
Feel free to customize the project as needed:
- Modify the frontend in `src/proofping_frontend/`.
- Update backend logic in `src/proofping_backend/`.

---

##📊 Features
- Event Creation: Event owners can create unique event codes.
- Attendance Logging: Participants can mark their attendance by entering the event code.
---

## 🔧 Technical Details
- **Frontend**: Built using React.
- **Backend**: Powered by Motoko on the Internet Computer.
- **Blockchain**: Data stored securely on the ICP network.

---

## ⭐ Contribution
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of your changes.

---

## 🔗 Useful Links
- [Internet Computer Documentation](https://internetcomputer.org/docs/current/developer-docs/)  
- [Motoko Programming Language](https://internetcomputer.org/docs/current/motoko/main/motoko)  
- [React Documentation](https://react.dev/)  

---

## 🙏 Acknowledgments
Special thanks to the **DFINITY Foundation** for creating the Internet Computer platform.
