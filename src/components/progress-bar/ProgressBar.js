import React, { Component } from 'react';
import { View, Animated } from "react-native";


class ProgressBar extends Component {
    state = {
        percent: this.props.percent,
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.inner,
                        { width: `${this.state.percent}%` }
                    ]}
                />
                <Animated.Text style={styles.label}>
                    {`${this.state.percent}%`}
                </Animated.Text>

            </View>

        );
    }
}
const styles =
{
    container:
    {
        width: '100%',
        hight: 40,
        padding: 3,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 4,
        justifyContent: 'center'
    },
    inner: {
        width: '100%',
        height: 30,
        borderRadius: 3,
        backgroundColor: '#007aff'


    },
    label: {
        fontSize: 18,
        color: 'white',
        position: 'absolute',
        // zindex:1,
        alignSelf: 'center'
    }
}

export { ProgressBar };