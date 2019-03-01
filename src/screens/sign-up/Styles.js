
import {
    StyleSheet,
} from 'react-native';
import { COLORS, FONTSIZE } from '../../styling';


export const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',

        justifyContent:'center'   ,
        marginBottom: 50
    },

    inputContanier: {

        justifyContent: 'center',

        alignItems: 'center',

        width: '100%',
        marginBottom:100

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
   


    addSalary: {
        fontSize: FONTSIZE.MEDIUM,

        color: COLORS.Green4,

        paddingTop: 15,

        borderColor: COLORS.YellowGreen,

        borderBottomWidth: 1,
        marginBottom: 120

    },

Imagebackground: {
    flex: 1,
    width: '100%',
 
    justifyContent:'center',

    alignItems:'center',
   
      height: 900,
      marginBottom: 250,
      
      

      
}
 
})