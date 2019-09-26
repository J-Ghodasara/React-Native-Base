import React from 'react';
import AppContainer from './app/navigation/Navigation';
import reducers from "./app/redux/reducers/Reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { HandleProgressBar } from "./app/components/ProgressBar";
import NavigationService from './app/navigation/NavigationService';
import NetworkAlert from './app/helper/NetworkAlert';
import NetworkUtil from './app/helper/NetworkUtil';
export const store = createStore(reducers);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HandleProgressBar />
                <AppContainer
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
                <NetworkAlert />

            </Provider>
        );
    }

    componentDidMount = () => {
        NetworkUtil.initializeNetwork()
    }
}