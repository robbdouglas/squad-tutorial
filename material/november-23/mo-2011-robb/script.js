import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";
import { modulo } from "./modulo.js";
import { reset } from "./reset.js";

// Hier fügst du event listener für die Buttons hinzu, um die Funktionen aufzurufen
document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("subtractBtn").addEventListener("click", subtract);
document.getElementById("multiplyBtn").addEventListener("click", multiply);
document.getElementById("divideBtn").addEventListener("click", divide);
document.getElementById("moduloBtn").addEventListener("click", modulo);
document.getElementById("resetBtn").addEventListener("click", reset);
