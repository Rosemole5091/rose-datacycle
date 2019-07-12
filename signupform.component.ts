import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {
firstName;
  lastName;
  address;
  contact;
  email;
  userList;

  constructor() {
   this.userList = [{ firstName: 'Anil', lastName: 'Arun', address:'thrissur', contact: '3354353454', email: 'anilgmail.com'},
    { firstName: 'minu', lastName: 'jose', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { firstName: 'meera', lastName: 'Arun', address:'thrissur', contact: '4565654444', email: 'jose@gmail.com' },
    { firstName: 'neethu', lastName: 'Arun', address:'cohn', contact: '3354353454', email: 'anil@gmail.com' },
    { firstName: 'ajay', lastName: 'mithun', address:'thrissur', contact: '3354353454', email: 'jose@gmail.com' },
    { firstName: 'veena', lastName: 'Arun', address:'kozhikode', contact: '3354353454', email: 'anil@gmail.com '},
    { firstName: 'Anil', lastName: 'sasi', address:'thrissur', contact: '4565654444', email: 'jose@gmail.com' },
    { firstName: 'manu', lastName: 'Arun', address:'kannur', contact: '3354353454', email: 'anil@gmail.com' },
    { firstName: 'Anil', lastName: 'Ajun', address:'thrissur', contact: '4565654444', email: 'jose@gmail.com' },
    { firstName: 'sunil', lastName: 'arka', address:'palakad', contact: '3354353454', email: 'anil@gmail.com' }
    ]; 
    }

//addUser(){
 // for(var i=0;i<1000;i++) {
    //var x=this.createUser(i);
    //this.userList.push(x);
    
 // }
//}
//createUser(i){
  //var x=new User();
 // x.firstName=firstName[i];
 // return x;
//}

 addUser(){
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x =this.contact;
  try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) {
   message.innerHTML = "Input " + err;
 }
  this.userList.push({ firstName: this.firstName, lastName: this.lastName,address:this.address,contact:this.contact,email:this.email});
  console.log(this.userList);
  
}


//listUsers(){
// console.log(this.userList);
//}

}


