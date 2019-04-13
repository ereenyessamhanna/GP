
import * as firebase from 'firebase';
//import firebase from 'firebase';
import React from 'react';
import 'babel-polyfill';
//import { Expense } from '../model/Expense';

//var exp = new Expense();

class Firebase {
    //let Expense = new Expense(); 
    loginFunction( email , password,callBack ){

    firebase.auth().signInWithEmailAndPassword(email, password).then(res=>{
        callBack(null,res)
    }).catch(error=>{
        callBack(error,null)
    })
    
    }
      
    signUp(email, password,callBack) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
            console.log('then callled',res)
            callBack(null,res)
        }).catch((error) => {
            callBack(error,null)
        });
    }

   // let exp = new Expense(){};
    
    addExpense( title, cost ,other , callback)
    {
        
        var user = firebase.auth().currentUser;
        var uId ;
        if (user != null)
        {
            uId=user.uid;
        }
        firebase.database().ref('expense').child(uId).push().set(
            {
                extitle : title ,
                excost : cost,
                exother : other
                
          }).then(() => {
            callback( title , cost ,other,null)
        }).catch(error => {
            console.log('error', error)
            callback(null, error)
        });

    }

}

export const firebaseMethods = new Firebase();