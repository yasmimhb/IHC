import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Para manipular a autenticação

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDCCry216l6SCmZW9G_-c0Z76gayVCFzFk",
  authDomain: "anime-51730.firebaseapp.com",
  projectId: "anime-51730",
  storageBucket: "anime-51730.firebasestorage.app",
  messagingSenderId: "260310671158",
  appId: "1:260310671158:web:e5f093b8eddc1de3fb5d97",
  measurementId: "G-BW8881ZK9W"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Agora, podemos obter as instâncias de Analytics e Auth
const analytics = getAnalytics(app);

// Exportando a instância do Firebase Auth
export const auth = getAuth(app);

// Exportando a instância do Firebase
export default app;
