function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username,email,password){
    //SetUsername(username) // this not give output
    SetUsername.call(this,username) // this give output


    this.email = email
    this.password = password
}

const chai = new createUser('chai','chai@fb.com','123')
console.log(chai);