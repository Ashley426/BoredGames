const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')

jokebtn.addEventListener('click', generateJoke)

// savebtn.addEventListener('click', saveJoke)

// saveJoke()
generateJoke()

// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }
//     const res = fetch ('https://icanhazdadjoke.com',
//     config)

//     const data = await res.json()

//     jokeEl.innerHTML = data.joke

//     }

function generateJoke(){
const config = {
    headers:{
        'Accept': 'application/json'
    }
}

    fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
}

// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }
    
//         fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then((data) => {
            
//         })
//     }