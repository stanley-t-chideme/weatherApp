/* eslint-disable prettier/prettier */
export function KelvinToCelsius(kelvin: number): string {
  return (kelvin - 273.15).toFixed(2);
}

export function KelvinToFahrenheit(kelvin: number): string {
  return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
}
