export default function appendToEachArrayValue(array, appendString) {
  const result = [];

  // On utilise for...of pour extraire directement chaque valeur
  for (const value of array) {
    // On ajoute la nouvelle valeur transformée dans notre tableau de résultat
    result.push(appendString + value);
  }

  return result;
}