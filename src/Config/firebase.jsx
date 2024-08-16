import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyDSN2N_OGdo2JhyTBzwJAml0mjzL-_ybxY",
  authDomain: "ecommercestore-17f4e.firebaseapp.com",
  projectId: "ecommercestore-17f4e",
  storageBucket: "ecommercestore-17f4e.appspot.com",
  messagingSenderId: "339653426866",
  appId: "1:339653426866:web:4c82a6e195dd6e662553ab",
  measurementId: "G-LR7D3GNQ14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


async function register(userRegistration) {
    const {name,age,email,password} = userRegistration
    await createUserWithEmailAndPassword(auth,email, password);
    return addDoc(collection(db,"users"),{name,age,email})
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

async function addProduct(addProductDetail){
    const {title,description,price,category,image} = addProductDetail
    const storageRef = ref(storage, "products/" + image.name);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef)

    return addDoc(collection(db, "products"),{title,description,price,category,image:url})
}

async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
     const data = doc.data()
      data.id = doc.id
      products.push(data)
    });
    return products    
  }

  console.log(getProducts());
  


async function singleProduct(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}



export { register, login , addProduct, getProducts,singleProduct,auth,onAuthStateChanged,signOut };
