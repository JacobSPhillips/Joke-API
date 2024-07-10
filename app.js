const button = document.querySelector('button')
const jokes = document.querySelector('#jokes')

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.innerText = jokeText;
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch {
        return "no jokes available."
    }
}

button.addEventListener('click', addNewJoke)
