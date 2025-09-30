-- 1

FOR (i = 0 ; i < l.niz ; i ++)
    FOR (j= i + 1 ; j < l.niz ; j++)
        IF (niz [i] > niz [j




-- 2

"prebacit u int zbrojit s 3 i vratit nazad tjt ukratkoo"

if ( S[nesto] >= 'a' %% S[nesto] =< 'z')
    S1[]+= INT S[nesto] + 3




-- 3



FUNKCIJA(LISTA)
    LISTA[0]= LISTA [0] / 2
        LISTA[1]++,
    IF ( 










DZ
napisati funcije za enkripciju i dekripciju 
po slj. pravilima: 
                samoglasnik > 3 mjesta
                suglasnik > 5
                svi ostali znakovi > 7
                razmak se ne mijenja


/*
samoglasnik - pomice za 3 mjesta
suglasnik - pomice za 5
ostalo - pomice za 7
 */

const samoglasnik = [97, 101, 105, 111, 117];
const suglasnik = [98, 99, 100, 102, 103, 104, 106, 107, 108, 109, 110, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122];

let string = "macka skace preko ograde 1234567890 !#$%&/()=?*";

function encrypt(string){
    let encrypted = {
        main: "",
        location: []
    };

    for (let i = 0; i < string.length; i++){
        let fromAscii = string[i].charCodeAt();

        if (samoglasnik.includes(fromAscii)) {
            encrypted.main += String.fromCharCode(fromAscii + 3);
            encrypted.location.push(i);
        }
        
        // suglasnik
        else if (suglasnik.includes(fromAscii)){
            encrypted.main += String.fromCharCode(fromAscii + 5);
        }

        else {
            encrypted.main += String.fromCharCode(fromAscii + 7);
        }

    }

    return encrypted
}

function decrypt(encrypted){
    let decrypted = "";
    string = encrypted.main;
    locations = encrypted.location;

    for (let i = 0; i < string.length; i++){
        let fromAscii = string[i].charCodeAt();

        if (locations.includes(i)) {
            decrypted += String.fromCharCode(fromAscii - 3);
            continue;
        }

        else if (suglasnik.includes(fromAscii - 5)){
            decrypted += String.fromCharCode(fromAscii - 5);
        }

        else {
            decrypted += String.fromCharCode(fromAscii - 7);
        }

    }

    return decrypted
}

let x = encrypt(string);
let y = decrypt(x);

console.log("Encrypted: ", x.main);
console.log("Decrypted: ", y)
