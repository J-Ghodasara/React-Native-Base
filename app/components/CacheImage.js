import React from 'react';
const {
    CachedImage,
} = require('react-native-cached-image');


export default class CacheImage extends React.PureComponent {

    state = {
    }
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <CachedImage
                style={this.props.style}
                defaultSource={this.props.placeholderSource}
                source={this.props.source}
                activityIndicatorProps={this.props.loadingStyle}
                fallbackSource={this.props.placeholderSource}
            />
        )
    }
}

