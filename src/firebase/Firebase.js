
import * as firebase from 'firebase';
//import firebase from 'firebase';
import React from 'react';
import 'babel-polyfill';



class Firebase {
    loginFunction( email , password,callBack ){

    firebase.auth().signInWithEmailAndPassword(email, password).then(res=>{
        callBack(null,res)
    }).catch(error=>{
        callBack(error,null)
    })
    
    }
      

}

export const firebaseMethods = new Firebase();