import { getApps, initializeApp } from "firebase/app";

import firebaseConfig from "./config";

const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);

export default app;
