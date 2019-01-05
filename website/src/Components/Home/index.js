import React, { PureComponent } from 'react';
import Hero from './Hero';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <div className="content mt-xl--m">
                    <Hero />
                </div>
            </div>
        );
    }
}

export default Home;
