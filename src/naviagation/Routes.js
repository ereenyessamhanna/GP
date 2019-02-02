import React, { components } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import {
    Login,
    SignUp,
    AddSalary,
    Dashboard,
    Profile,
    AddExpense,
    AddPlan
} from '../screens';

//level 3
const DashboardStackNavigator = createStackNavigator({
    Dashboard: { screen: Dashboard },
    AddExpense: { screen: AddExpense },
    AddPlan: { screen: AddPlan }
}, {
        headerMode: 'none',
        initialRouteName: 'Dashboard',
    })
//level 2
const AuthStackNavigator = createStackNavigator({
    Login: { screen: Login },    
    SignUp: { screen: SignUp },    
    AddSalary: { screen: AddSalary }
}, {
        headerMode: 'none',
       initialRouteName: 'Login',
    })

const CustomDrawerNavigator = createDrawerNavigator({
    Dashboard: { screen: DashboardStackNavigator },
    Profile: { screen: Profile }
},
    {
        initialRouteName: 'Dashboard',
        headerMode: 'none'
    })
//level 1
const MainStackNavigator = createStackNavigator({
    Auth: { screen: AuthStackNavigator },
    Drawer: { screen: CustomDrawerNavigator }
},
    {
        initialRouteName: 'Auth',
        headerMode: 'none'
    }
);


const Container = createAppContainer(MainStackNavigator);

export { Container };