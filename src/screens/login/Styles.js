
import {
    StyleSheet,
} from 'react-native';
import { COLORS, FONTSIZE } from '../../styling';



export const Styles = StyleSheet.create({

    Imagebackground: {
        flex: 1,
        width: '100%',
     
        justifyContent:'center',
 
        alignItems:'center',
       
         // height: 590
         height: 900,
         marginBottom: 250,
         
     },



    mainContainer: {

        flex: 1,

        justifyContent:'center',

        alignItems:'center',
        
       

      
        

    },

   

     
    inputContanier: {
        justifyContent: 'center',

        alignItems: 'center',

        width: '110%',

       // height: 100,
    
       // position: 'absolute',
       
       // marginBottom: 190
      // marginBottom:50,
      marginBottom:80,
    },
       
   

    signUp: {

        fontSize: FONTSIZE.MEDIUM,

        color: COLORS.NavajoWhite,

        paddingTop: 15,

        borderColor: COLORS.NavajoWhite,

        borderBottomWidth: 1,

     
      // marginBottom: 70
      marginBottom:200
        

    },
 

})