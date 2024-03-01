export function KelvinToCelsius(kelvin: number): number {
    return (kelvin - 273.15).toFixed(2);
}

export function KelvinToFahrenheit(kelvin: number): number {
    return ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);
}