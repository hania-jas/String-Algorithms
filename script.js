const input = document.getElementById('userWordInput');
const checkButton = document.getElementById('checkWord');
const displayReversed = document.getElementById('displayReversed');
const encodeButton = document.getElementById('encodeWord');
const displayEncoded = document.getElementById('displayEncoded');
const decodeButton = document.getElementById('decodeWord');
const displayDecoded = document.getElementById('displayDecoded');

const alphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];

const splitWordToLetters = () => {
    const inputValue = input.value;
    const charactersArr = inputValue.split('');
    return {
        charactersArr,
        inputValue
    };
}

const checkIfWordIsPalindrome = () => {
    let returnedValuesFromSplitWordFunction = splitWordToLetters();
    const charactersArr = returnedValuesFromSplitWordFunction.charactersArr;
    let reversedCharacters = [];

    for (let i = charactersArr.length - 1; i >= 0; i--) {
        reversedCharacters.push(charactersArr[i]);
    }
    const reversedString = reversedCharacters.join('');

    if (returnedValuesFromSplitWordFunction.inputValue === reversedString) {
        alert('PALINDROME!');
    } else {
        alert('TRY AGAIN');
    }
    displayReversed.innerHTML = `REVERSED:  ${reversedString}`;

}

const encodeFunction = () => {
    let returnedValuesFromSplitWordFunction = splitWordToLetters();
    const charactersArr = returnedValuesFromSplitWordFunction.charactersArr;
    let encodedArr = [];

    for (let i = 0; i < charactersArr.length; i++) {

        if (charactersArr[i] !== alphabet[alphabet.length - 1] && charactersArr[i] !== alphabet[alphabet.length - 2]) {
            let indexOfCharactersArrInAlphabet = alphabet.indexOf(charactersArr[i]);
            const tempVal = alphabet[indexOfCharactersArrInAlphabet + 2];
            encodedArr.push(tempVal);

        }

        if (charactersArr[i] === alphabet[alphabet.length - 2]) {
            tempVal = alphabet[0];
            encodedArr.push(tempVal);
        }
        if (charactersArr[i] === alphabet[alphabet.length - 1]) {
            tempVal = alphabet[1];
            encodedArr.push(tempVal);
        }


    }

    const encodedString = encodedArr.join('');
    displayEncoded.value = encodedString;
    return encodedArr;
}

const decodeFunction = () => {
    const encodedArr = encodeFunction();
    let decodedArr = [];

    for (let i = 0; i < encodedArr.length; i++) {


        if (encodedArr[i] !== alphabet[0] && encodedArr[i] !== alphabet[1]) {
            let indexOfCharactersArrInAlphabet = alphabet.indexOf(encodedArr[i]);
            const nextTempVal = alphabet[indexOfCharactersArrInAlphabet - 2];
            decodedArr.push(nextTempVal);
        }
        if (encodedArr[i] === alphabet[0]) {
            nextTempVal = alphabet[alphabet.length - 2];
            decodedArr.push(nextTempVal);
        }
        if (encodedArr[i] === alphabet[1]) {
            nextTempVal = alphabet[alphabet.length - 1];
            decodedArr.push(nextTempVal);
        }
    }
    const decodedString = decodedArr.join('');
    displayDecoded.value = decodedString;
}

checkButton.addEventListener('click', checkIfWordIsPalindrome);
encodeButton.addEventListener('click', encodeFunction);
decodeButton.addEventListener('click', decodeFunction);