let container = document.getElementById("container");

const toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

let getdata = document.getElementById('signup');
getdata.addEventListener('click', function(){
    console.log('signup called')
    let email = document.getElementById('email').value;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    var userData = {
        email: email,
        password1: password1,
        password2: password2,
    };
    console.log(userData);

    localStorage.setItem('userData', JSON.stringify(userData));

    window.location.replace('index.html');
});

let getsignin = document.getElementById('signin');
getsignin.addEventListener('click', function(){
    let email = document.getElementById('inemail').value;
    let password = document.getElementById('inpassword').value;

    var getUserData = localStorage.getItem('userData');
    let stringuserdata = JSON.parse(getUserData);

    console.log(stringuserdata.email);
    console.log(email);

    if (email == stringuserdata.email && password == stringuserdata.password1) {
        alert('Go to home page');
        window.location.replace('index.html')
    } else {
        alert('Dont have Account SignUp first');
        
    }
});






















// console.log('called')
  
  
  
//   let container = document.getElementById("container");

//     toggle = () => {
//       container.classList.toggle("sign-in");
//       container.classList.toggle("sign-up");
//     };

//     setTimeout(() => {
//       container.classList.add("sign-in");
//     }, 200);






// //     let data = [
// //   {
// //     "email": "alikhanaj00@gmail.com",
// //     "password1": "aaa",
// //     "password2": "aaa"
// //   },
// //   {
// //     "email": "al@gmail.com",
// //     "password1": "aaa",
// //     "password2": "aaa"
// //   }
// // ];



//     let getdata= document.getElementById('signup')
// getdata.addEventListener('click', function(){
//     console.log('singup called')
//     let email = document.getElementById('email').value
//     let password1 = document.getElementById('password1').value
//     let password2 = document.getElementById('password2').value
//     var userData = {
//     email: email,
//     password1: password1,
//     password2: password2,
// };
// console.log(userData)

// localStorage.setItem('userData', JSON.stringify(userData));

// window.location.replace('index.html')
// })




// let getsignin = document.getElementById('signin');
// getsignin.addEventListener('click',function(){
//     let email= document.getElementById('inemail').value
//     let password= document.getElementById('inpassword').value

//     var getUserData = localStorage.getItem('userData')

//     let stringuserdata = JSON.parse(getUserData);

//     console.log(stringuserdata.email)
//     console.log(email)

//     for( let i=0; i<stringuserdata.length; i++){
//         if (email==stringuserdata.email && password==stringuserdata.password1){
//             alert('go to home page')
//         }
//         else{
//             alert('go to sign up page')
//         }
//     }



// })



















    // if(!email || !password){
    //     alert('Not Valid User')
    //     return;
    // }


    // for(let stringuserdata, stringuserdata.length(),){

    // }









//     var signinData = {
//     email: email,
//     inpassword: inpassword
    
// }     
// console.log("user ")
// let getUserData = localStorage.getItem('userData')
// console.log(getUserData)

// if(localStorage.getItem('userData')){
//     window.location.replace("index.html");
// }
// else{
//     window.location.replace("index.html");
// }
// // console.log(signinData)
// // localStorage.setItem('signinData', JSON.stringify(signinData)); 

// // window.location.href = "index.html";

// })
  