const input = document.getElementById('userWordInput');
const checkButton = document.getElementById('checkWord');
const displayReversed = document.getElementById('displayReversed');

const checkIfWordIsPalindrome = () => {
    const inputValue = input.value;
    const charactersArr = inputValue.split('');
    console.log(charactersArr);
    console.log(inputValue);
    const reversedCharacters = [];

    for (let i = charactersArr.length - 1; i >= 0; i--) {
        reversedCharacters.push(charactersArr[i]);
    }
    console.log('reversedCharacters', reversedCharacters)
    const reversedString = reversedCharacters.join('');
    console.log(reversedString);

    if (inputValue === reversedString) {
        alert('PALINDROME!');

    } else {
        alert('TRY AGAIN');
    }
    displayReversed.innerHTML = `REVERSED:  ${reversedString}`;

}

checkButton.addEventListener('click', checkIfWordIsPalindrome);