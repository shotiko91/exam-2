//                                 ------------------------ HANGMAN -------------------------                           //                                     


// სიტყვების მასივი
let wordsArray = ['city', 'river', 'application', 'dog', 'calculator', 'coalition', 'imagination', 'Absurd', 'Khinkali', 'Galaxy', 'Guard', 'microwave', 'transplant'];
// მასივიდან ვიღებ შემთხვევით სიტყვას და ვინახავ ცვლადში
let guessWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
//  არჩეული სიტყვაში არსებული ასოების რაოდენობა გადავაქციე ტირეებად
let hiddenWord = "_".repeat(guessWord.length);
// დავაწესე  თუ რამდენი შეცდომის უფლება აქვს მოთამაშეს
let attempts = 10;
// ვინახავ გამოცნობილ ასოებს
let guessedLetters = [];

alert("Let's start the game");
alert(`The word has ${guessWord.length} letters`);

// ვქმნი ციკლს რომელმაც უნდა იმუშაოს მანამ სანამ მცდელობები არ ამოიწურება ან არ გამოვიცნობთ სიტყვას
while (attempts > 0 && hiddenWord !== guessWord) {

    // ვლოგავ ინფორმაციას ყოველ ჯერზე თუ რამდენი მცდელობა დამრჩა და რა ასოა გამოცნობილი
    console.log(`You have ${attempts} attempts left`);
    console.log(`The word is ${hiddenWord}`);

    // შეგვყავს ასობგერა
    let inputLetter = prompt('Guess a letter').toLowerCase();

    //ვამოწმებ რომ ნამდვილად ასო შეიყვანოს მომხმარებელმა
    if (!/[a-z]/.test(inputLetter)) {
        console.log('its not a letter')
        continue;
    }

    //თუ 1 ზე მეტი ასო ჩავწერეთ გვაფრთხილებს რომ არასწორად ვიქცევით და გვაგრძელებინებს
    if (inputLetter.length !== 1) {
        console.log('Please enter a single letter.');
        continue;
    }
    // აქ ვამოწმებ იგივე შეყვანილი ასობგერების უნიკალურობას, თუ უკვე შეყვანილი გვყავს გვაფრთხილებს და გვაგრძელებინებს თამაშს
    if (guessedLetters.includes(inputLetter)) {
        console.log('You already guessed that letter.');
        continue;
    }

    // შეყვანილ ასობგერას ვამატებთ ცარიელ მასივში
    guessedLetters.push(inputLetter);

    // ასობგერის გამოცნობის შემთხვევაში გვიწერს 'ყოჩაღს' და ციკლის მეშვეობით გამოცნობილი ასო გამოაქვს ტირეს ადგილას.
    if (guessWord.includes(inputLetter)) {
        console.log('Correct guess!');
        // ამ ციკლის მეშვეობით გამოსაცნობი სიტყვის დამალულ ასოს ანუ ტირეს გარდავქმნით გამოცნობილ ასოდ. 
        for (let i = 0; i < guessWord.length; i++) {
            if (guessWord[i] === inputLetter) {
                hiddenWord = hiddenWord.substring(0, i) + inputLetter + hiddenWord.substring(i + 1);
            }
        }

        //თუ შეყვანილი ასობგერა არ არის სიტყვის ნაწილი მაშინ გვიწერს რომ ვერ გამოვიცანით ასო და გვაკლებს 1 მცდელობას
    } else {
        console.log('Incorrect guess.');
        attempts--;
    }
}

//გამოგვაქვს საბოლოო შედეგი
if (hiddenWord === guessWord) {
    console.log(`Congratulations! You guessed the word: ${guessWord}`);
} else {
    console.log(`you lost! The word was: ${guessWord}`);
}
