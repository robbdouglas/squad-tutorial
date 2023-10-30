const citeElement = document.querySelector("cite");

//2
const parentElements = []; // Ein Array, um Elternelemente zu speichern
let currentElement = citeElement; // Starte mit dem 'cite'-Element

while (currentElement.parentElement) {
  const parentName = currentElement.parentElement.nodeName.toLowerCase();

  parentElements.unshift(parentName); // Füge den Namen des Elternelements am Anfang des Arrays hinzu
  currentElement = currentElement.parentElement; // Aktualisiere das aktuelle Element auf seinen Elternteil
}

//3

const parentElementHierarchy = parentElements.join(" > ");
console.log(parentElementHierarchy); // Gibt die Hierarchie der Elternelemente auf der Konsole aus
