import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyA-prIG60DVfeAclDy_ajmVt2msW-xn68k",
  authDomain: "unid-dashboard-r-1672021883115.firebaseapp.com",
  projectId: "unid-dashboard-r-1672021883115",
  storageBucket: "unid-dashboard-r-1672021883115.appspot.com",
  messagingSenderId: "1040497448214",
  appId: "1:1040497448214:web:b40792eb77047b3d47ec37",
  measurementId: "G-SW607BPZCY",
};

const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
export const storage = getStorage(app);

/**
 * Esta función sube un archivo a firebase storage
 * @param {File} file función recibe el archivo a subir
 * @returns Retorna una url del archivo subido
 */

export const uploadFile = async (file) => {
  const storageRef = ref(storage, `/profile-images/${v4()}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};
