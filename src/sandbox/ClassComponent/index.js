import React from 'react';

export class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: "false"};
    }

    popup = () => {
        this.setState({ show: "true"} )
        setInterval(
            () => this.setState({ show: "false"} ),
            3000
        );
    };

    render() {
        const { fnTitle, fnBody } = this.props;
        if (this.state.show === "true") {
            return (
                <div onMouseOver={this.popup}>
                    <h1>POPUP - {fnTitle}</h1>
                    <p>{fnBody}</p>
                    <div className="b-popup">
                        <div className="b-popup-content">
                            Text in Popup
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div onMouseOver={this.popup}>
                    <h1>NO POPUP - {fnTitle}</h1>
                    <p>{fnBody}</p>
                </div>
            )
        }
    }
}
