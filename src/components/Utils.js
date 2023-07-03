export function timeOut(speed) {
    return new Promise(resolve => setTimeout(resolve, speed));
}