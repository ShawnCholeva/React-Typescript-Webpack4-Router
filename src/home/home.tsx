import React, { Component } from 'react';

import styles from './home.less';
import testImage from '../images/test2.png';

class Home extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>Home</h1>
                <img src={testImage} />
            </div>
        );
    }
}

export default Home;