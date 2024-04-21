export function generarClaves(){
    const base = Date.now().toString(36)
    const numeroAleatorio = Math.random().toString(36).substring(2)
    return base + numeroAleatorio
}