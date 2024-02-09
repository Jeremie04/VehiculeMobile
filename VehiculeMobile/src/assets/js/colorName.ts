// color-name.ts
import colorMap from 'color-name';

// Fonction pour convertir la valeur hexadécimale en valeurs RGB
function hexToRgb(hex: string): number[] {
    // Implémentation de la fonction
    return [
        parseInt(hex.substring(1, 3), 16),
        parseInt(hex.substring(3, 5), 16),
        parseInt(hex.substring(5, 7), 16)
      ];
  }
  
  // Fonction pour obtenir le nom de la couleur la plus proche à partir des valeurs RGB
  function getClosestColor(rgb: number[], colorMap: Record<string, number[]>): string | null {
    let minDistance = Infinity;
    let closestColor = null;
  
    for (const color in colorMap) {
      const distance = calculateDistance(rgb, colorMap[color]);
      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }
  
    return closestColor;
  }
  
  // Fonction pour calculer la distance entre deux couleurs RGB
  function calculateDistance(color1: number[], color2: number[]): number {
    return Math.sqrt(
      Math.pow(color1[0] - color2[0], 2) +
      Math.pow(color1[1] - color2[1], 2) +
      Math.pow(color1[2] - color2[2], 2)
    );
  }
  
  // Fonction pour obtenir le nom de la couleur à partir de la valeur hexadécimale
  function getColorName(hexColor: string): string | null {
    const rgbValues = hexToRgb(hexColor);
    const closestMatch = getClosestColor(rgbValues, colorMap);
    return closestMatch;
  }
  
  export { hexToRgb, getClosestColor, calculateDistance, getColorName };
  