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
    const reversedCharacters = [];

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
    const encodedArr = [];

    for (let i = 0; i < charactersArr.length; i++) {

        if (charactersArr[i] !== 'ż' && charactersArr[i] !== 'ź') {
            let indexOfCharactersArrInAlphabet = alphabet.indexOf(charactersArr[i]);
            const tempVal = alphabet[indexOfCharactersArrInAlphabet += 2];
            encodedArr.push(tempVal);
        }

        if (charactersArr[i] === 'ź') {
            tempVal = alphabet[0];
            encodedArr.push(tempVal);
        }
        if (charactersArr[i] === 'ż') {
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
    const decodedArr = [];

    for (let i = 0; i < encodedArr.length; i++) {

        for (let j = alphabet.length; j > 0; j--) {
            if (encodedArr[i] === alphabet[j] && encodedArr[i] !== 'a' && encodedArr[i] !== 'ą') {
                const nextTempVal = alphabet[j -= 2];
                decodedArr.push(nextTempVal);
            }
        }
        if (encodedArr[i] === 'a') {
            nextTempVal = alphabet[30];
            decodedArr.push(nextTempVal);
        }
        if (encodedArr[i] === 'ą') {
            nextTempVal = alphabet[31];
            decodedArr.push(nextTempVal);
        }
    }
    const decodedString = decodedArr.join('');
    displayDecoded.value = decodedString;
}

checkButton.addEventListener('click', checkIfWordIsPalindrome);
encodeButton.addEventListener('click', encodeFunction);
decodeButton.addEventListener('click', decodeFunction);