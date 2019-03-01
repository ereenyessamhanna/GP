
import {

    StyleSheet,

} from 'react-native';

import { COLORS, FONTSIZE } from '../../styling';





export const Styles = StyleSheet.create({



    mainContainer: {

        width: '100%',

        alignItems: 'center'
        

    },

    labelStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        

    },



    input: {

        width: '80%',

        color: COLORS.BLACK,

        fontSize: FONTSIZE.REGULAR,

        marginTop: 5

    },



    errorText: {

        paddingLeft: 5,

        width: '80%',

        color: COLORS.RED,

        fontSize: FONTSIZE.SMALL

    }

   

})