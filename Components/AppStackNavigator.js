import {createStackNavigator} from 'react-navigation-stack';
import ChapterScreen from '../screens/ChapterScreen';
import Polynomials from '../screens/Polynomials';
import Trigonometry from '../screens/Trigonometry';
import WorkAndTime from '../screens/WorkAndTime';
import WorkAndTimeQuiz from '../screens/WorkAndTimeQuiz';

export const AppStackNavigator=createStackNavigator({
   ChapterScreen:{
        screen:ChapterScreen,
        navigationOptions:{
            headerShown:false,
        }
    },

    WorkAndTime:{
        screen:WorkAndTime,
        navigationOptions:{
            headerShown:false,
        }
    },

    Polynomials:{
        screen:Polynomials,
        navigationOptions:{
            headerShown:false,
        }
    },

    Trigonometry:{
        screen:Trigonometry,
        navigationOptions:{
            headerShown:false,
        }
    },
    WorkAndTimeQuiz:{
        screen:WorkAndTimeQuiz,
        navigationOptions:{
            headerShown:false,
        }
    },
},
{
    initialRouteName:'ChapterScreen'
}
)

