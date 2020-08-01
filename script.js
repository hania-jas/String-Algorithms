const input = document.getElementById('userWordInput');
const checkButton = document.getElementById('checkWord');
const displayReversed = document.getElementById('displayReversed');
const encodeButton = document.getElementById('encodeWord');
const displayEncoded = document.getElementById('displayEncoded');

const splitWordToLetters = () => {
    const inputValue = input.value;
    const charactersArr = inputValue.split('');
    console.log(charactersArr);
    console.log(inputValue);
    return [charactersArr, inputValue];
}

const checkIfWordIsPalindrome = () => {
    let returnedValuesFromSplitWordFunction = splitWordToLetters();
    const charactersArr = returnedValuesFromSplitWordFunction[0];
    const reversedCharacters = [];

    for (let i = charactersArr.length - 1; i >= 0; i--) {
        reversedCharacters.push(charactersArr[i]);
    }
    console.log('reversedCharacters', reversedCharacters)
    const reversedString = reversedCharacters.join('');
    console.log(reversedString);

    if (returnedValuesFromSplitWordFunction[1] === reversedString) {
        alert('PALINDROME!');
    } else {
        alert('TRY AGAIN');
    }
    displayReversed.innerHTML = `REVERSED:  ${reversedString}`;

}

const encodeFunction = () => {
    let returnedValuesFromSplitWordFunction = splitWordToLetters();
    const alphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];
    const charactersArr = returnedValuesFromSplitWordFunction[0];
    console.log(alphabet);
    let encodedArr = [];

    for (let i = 0; i < charactersArr.length; i++) {
        console.log(charactersArr[i]);
        for (let j = 0; j < alphabet.length; j++) {

            if (charactersArr[i] === alphabet[j]) {
                const tempVal = alphabet[j += 2];
                console.log('tempVal', tempVal);
                encodedArr.push(tempVal);
            }
        }
        if (charactersArr[i] === 'ź') {
            tempVal = 'a';
            encodedArr.push(tempVal);
        }
        if (charactersArr[i] === 'ż') {
            tempVal = 'ą';
            encodedArr.push(tempVal);
        }
        console.log('encodedArr', encodedArr);
    }

    const encodedString = encodedArr.join('');
    displayEncoded.innerHTML = `ENCODED PHRASE: ${encodedString}`;
}

checkButton.addEventListener('click', checkIfWordIsPalindrome);
encodeButton.addEventListener('click', encodeFunction);