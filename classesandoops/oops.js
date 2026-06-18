const user = {
    username:'hitesh',
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`username: ${this.username}`);  //this use to tal about current contect, ie understand code that its talking about its own objects username ,otherwise it gives undefined
            console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);

//constructor

function User(username, loginCount, isloggedIn){
    this.username = username;   //focus on use of this function here
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    return this
}

const userOne = new User('amit', 12 , true)
const userTwo =  new User('hello', 11 , false)
console.log(userOne);  // the data is overwrite thats why we use 'new' keyword
console.log(userTwo);  
