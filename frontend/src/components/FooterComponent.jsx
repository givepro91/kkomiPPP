import React, {Component} from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer mt-2 text-center">
                    <span className="text-muted">start react app 2021</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;