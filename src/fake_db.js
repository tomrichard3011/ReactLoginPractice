const fs = require('fs')

let test_validate = (user, pass) => {
    const db = fs.readFileSync('db.txt', 'utf8') // open file
    return db.includes(`${user}:${pass}`) // check if the creds are there
}

let test_add_user = (user, pass) => {
    if (!test_validate(user, pass)){ // if user exists, dont add them
        fs.writeFileSync('db.txt', `${user}:${pass}\n`, {flag: 'a+'})
    }
}
