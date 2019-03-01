
import {
    StyleSheet,
} from 'react-native';
import { COLORS, FONTSIZE } from '../../styling';


export const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',

        justifyContent:'center' ,
    


    },

    inputContanier: {

        justifyContent: 'center',

        alignItems: 'center',

        width: '100%',

        //position: 'relative',
        marginBottom: 80
        

    },
    backButtonContainer: {

        position: 'absolute',

        top: 30,

        left: 20,

        width: 50,

        height: 50,

        justifyContent: 'center',

        alignItems: 'center'


    },
    backButton: {

        width: 10,

        height: 20

    },
    Imagebackground: {
        flex: 1,
        width: '100%',
     
        justifyContent:'center',
 
        alignItems:'center',
       
        
          height: 1000,
         // marginBottom: 20,
          
     },
    

   
})