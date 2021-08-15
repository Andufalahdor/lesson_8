// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// — При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// — Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// — При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *,
// причому на ту кількість яка довжина слова
// — Якщо textarea порожня виводити повыдолення про заповнення поля

let badWords: string[] = [];

document.querySelector('.add-btn').addEventListener('click', () => {
    let textInput = document.querySelector('.text-input') as HTMLInputElement;
    let errorBox = document.querySelector('.error-box') as HTMLDivElement
    if (textInput.value.length != 0 ) {
    let list = document.querySelector('.bad-words') as HTMLDivElement;
    badWords.push(textInput.value);
    textInput.value = '';
    list.innerText = `Bad words: ${badWords.join(', ')}`;
    errorBox.innerText = '';
    } else {
        errorBox.innerText = 'Заполните поле textinput'
    }
})

document.querySelector('.reset-btn').addEventListener('click', () => {
    let list = document.querySelector('.bad-words') as HTMLDivElement;
    list.innerText = `Bad words: `;
    badWords = [];
})

document.querySelector('.cenzor-btn').addEventListener('click', () => {
    let textArea = document.querySelector('.text-area') as HTMLTextAreaElement;
    let errorBox = document.querySelector('.error-box') as HTMLDivElement
    if (textArea.value.length != 0) {
        errorBox.innerText = ''
        badWords.forEach((elem) => {
            textArea.value = textArea.value.replace(new RegExp(elem,'ig'), starGenerator(elem.length));
        })
    } else {
        errorBox.innerText = 'Заполните поле textarea'
    }
})

function starGenerator(number: number): string {
    let star: string = '';
    for (let i = 0; i < number; i++) {
        star += '*'
    }
    return star;
}