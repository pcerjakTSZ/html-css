let brojevi = [45, 2, 67, 12, 89, 33, 5, 77, 1, 20];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("Sortirani niz:", bubbleSort(brojevi));






function shift(str, pomak) {
    return str.replace(/[a-zA-Z]/g, c => {
        let start = c <= "Z" ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - start + pomak + 26) % 26 + start);
    });
}

let recenica = "Pozdrav Svijete 123!";
let enkr = shift(recenica, 3);
let dekr = shift(enkr, -3);

console.log(enkr);
console.log(dekr);









function podijeli(l) {
    if (l >= 1 && l <= 2) return [l];
    return [...podijeli(l/2), ...podijeli(l/2)];
}

let rez = podijeli(11);
console.log("Broj štapova:", rez.length);
console.log("Duljine:", rez);
