//& Bank Project

//* Create Data Base
let dataBase = [
]

//* ask user to choose
let askUser = prompt ("You want to Sign Up or to Log In or to change the password")


//* Users Class
class Users {
    constructor(fullName, email, age, password){
        this.fullName = fullName
        this.email = email
        this.age = age
        this.password = password
        this.balance = 3000
    }

}

//? Create users for testing
let imane  = new Users ("Imane El Ouannane","imane@gmail.com",20,"123@")
let zahira  = new Users ("Zahira Janahi","zahira@gmail.com",20,"456@")

dataBase.push(imane, zahira)
console.table(dataBase);





//* fullName validate function

const validFullName = (fullName) => {
    fullName = fullName.trim()
    if (fullName.length < 5) {
        return false
    }
    if (!(/[A-Za-z\s]/.test(fullName))) { //Do not register the Name if it contains numbers, an @, or similar special characters.
        return false;
    }
    fullName = fullName.toLowerCase() 
    fullName = fullName.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
    return fullName
}

//* email validate function
const validateEmail = (email) => {
    email = email.trim()
    if (email.length < 10) {
        return false
    }
    if (email.includes(' ')) {
        return false
    }
    if (!email.includes('@')) { // if the email doesn't include @
        return false
    }
    let ifEmailExist = dataBase.find(e => e.email == email)
    if (ifEmailExist) {
        return false
    }
    email = email.toLowerCase()
    return email
}

//* age validate function
const validateAge = (age) => {
    age = age.trim()
    if (age.includes(' ')) {
        return false
    }
    return parseInt(age)
}


//* password validate function
const validatePassWord = (password) => {
    password = password.trim()
    if (password.includes(' ')) {
        return false
    }
    if (password.length < 7) {
        return false
    }
    if (!/[@#\-\+\*\/]/.test(password)) {
        return false
    }
    return password
}


//? if the user choose sign up
const signUp = () => {
        //* full name prompt
        let fullName = prompt ("Enter your full name")
        fullName = validFullName(fullName)
        if (!fullName) {
            alert("Your Full Name is invalide TRY AGAIN")
            return
        }
        

        //* email prompt
        let email = prompt ("Enter your email")
        email = validateEmail(email)
        if (!email) {
            alert("Your email is invalide TRY AGAIN") 
            return
        }


        //* age prompt
        let age = prompt ("Enter your age")
        age = validateAge(age)
        if (!age) {
            alert("Your age is invalide TRY AGAIN") 
            return
        }


        //* password prompt
        let password = prompt ("Enter a valid password")
        password = validatePassWord(password)
        if (!password) {
            alert("Your password is invalide TRY AGAIN") 
            return   
        }

        //* cofirme password prompt
        let passwordConfirmed = prompt ("Confirme your password")
        if (password !== passwordConfirmed) {
            alert ("The passwords doesn't match TRY AGAIN")
            return
        }
        
        //* adding the user to USERS class
        let newUsers = new Users(fullName, email,age, password, passwordConfirmed)
    
        //* push the user to USERS dataBase
        dataBase.push(newUsers)
        alert("signed up successfuly")
        console.table(dataBase);
    }




    

//* show services if the user choose log in

//? withdraw Money function
const withdrawMoney = (user) => {
    let amount = parseInt (prompt ("Enter an amount"))
    if (amount < user.balance) {
        user.balance = user.balance - amount
        alert(`You have now ${user.balance}`)
        console.log(`The rest ${user.balance}`);
        console.table(dataBase);
    } else {
        alert('not accepted')
    }
}

//? deposit Money function
const depositMoney = (user) => {
    let amount = parseInt (prompt("Enter an amount"))
    if (amount <= 1000) {
        user.balance = user.balance + amount
        alert(`You have now ${user.balance}`)
        console.log(`You have now ${user.balance}`);
        console.table(dataBase);
    } else {
        alert('not accepted')
    }
}

const takeaLoan = () =>{

}


const invest = () =>{

}

const history = () =>{

}

const services = (user) =>{
    let offers = prompt ("You want to Logout, Withdraw money, Deposit money, Take a loan, Invest, history? CHOOSE ONE")
    switch (offers.toLowerCase()) {
        case "log out":
            alert("Logged out successfully")
            signUp()
            break;
        case "withdraw money":
            withdrawMoney(user);
            break;
        case "deposit money":
            depositMoney(user);
            break;
        case "take a loan":
            takeaLoan(user);
            break;
        case "invest":
            invest(user);
            break;
        case "history":
            history(user);
            break;
        default:
            break;
    }

}



//? if the user choose log in
const logIn = () => {
    let email = prompt ("Enter your email to Log In")
    let user = dataBase.find(e => e.email == email)
    if (user) {
        let userPassword = prompt ("Enter your password to Log In")
        let passwordExist = dataBase.find (e => e.password == userPassword)
        if (passwordExist) {
            alert ("Loged in successfuly")
            alert(`Welcome ${user.fullName} Your Bank account balance is ${user.balance} DH`)
            services(user)
        }else{
            alert("passsword incccorect")
        }
    }else{
        alert("the email you have been trying to login with doesn't exist in our dataBase")
    } 
}



//? if the user choose to change the password
const changePassword = () =>{
    let email = prompt ("Enter your email to change your password")
    let emailExistInDB = dataBase.find (e => e.email === email)
    if (emailExistInDB) {
        let newPassword = prompt ("Enter Your new password")

        // make sure that the new password match the rules
        newPassword = validatePassWord(newPassword)
        if (!newPassword) {
            alert("This password is invalide TRY AGAIN") 
            return   
        }
    
        // update the password in database
        emailExistInDB.password = newPassword
        alert("Password changed successfuly ")
        console.table(dataBase);
    } else {
        alert("this email doesn't exist in our dataBase")
    }
}





//* user choices
switch (askUser.toLowerCase()) {
    case "sign up":
        signUp();
        break;
    case "log in":
        logIn();
        break;
    case "change password":
        changePassword();
        break;
    default:
        alert("EXIT");
}








 