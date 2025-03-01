const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
// //1. Get array of all names

// const task1 = characters.map((it => it.name))
// console.log(task1)

// //2. Get array of all heights

// const task2 = characters.map((it => it.height))
// console.log(task2)

// //3. Get array of objects with just name and height properties

// const task3 = characters.map((it => (`${it.name} ${it.height}`)))
// console.log(task3)

// // 4. Get array of all first names

// const task4 = characters.map((it) => {
//     [first, ...rest] = it.name.split(' ')
//     return first
// })
// console.log(task4)

// // ***REDUCE***
// // 1. Get total mass of all characters

// const totalMass = characters.reduce((acc, rec) => acc + rec.mass, 0)
// console.log(totalMass)

// // 2. Get total height of all characters

// const totalHeight = characters.reduce((acc, rec) => acc + rec.height, 0)
// console.log(totalHeight)

// 3. Get total number of characters by eye color
// const totalChars2 = characters.reduce((acc, rec) => {
//     const color = rec.eye_color
//     if(acc[color]) {
//         acc[color]++
//     } else {
//         acc[color] = 1
//     }
//     return acc
// } ,{})

    const totalChars = characters.reduce((acc, rec) => {
        const color = rec.eye_color
        return acc[color] ? acc[color] + 1 : acc[color]
    }, {})
console.log(totalChars)
// console.log(totalChars2)


//4. Get total number of characters in all the character names

// const totalNameChars = characters.reduce((acc, rec) => acc + rec.name.length, 0)
// console.log(totalNameChars)

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?


