import React from 'react';
import ReactDOM from 'react-dom';
import machine from '../img/machine.png';
import btn from '../img/btn.png';

class Alert extends React.Component {
    render() {
        return (
            <div className="alert">
                <div className="close" onClick={this.props.close}></div>
                <p>Today you gonna eat : {this.props.food}</p>
            </div>
        )
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {food: '', show: false, rotate: false};
        this.findLunch = this.findLunch.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    findLunch() {
        let typeArr = ['Squid Thick Soup', 'Oyster Omelet', 'Steamed Buns', 'Rice-meat Dumplings', 'Fry Shrimp Ball'];
        let number = Math.floor(Math.random() * ((typeArr.length - 1) - 0 + 1)) + 0;

        this.setState({rotate : true});

        let _this = this;
        setTimeout(function(){
            _this.setState({food: typeArr[number], show: true});
        }, 1000);
    }

    closeAlert(){
        this.setState({food: '', show: false, rotate : false});
    }

    render() {

        let rotate = this.state.rotate ? "rotate" : "";

        return (
            <div>
                <h1>Find Me Lunch</h1>
                <p>Please click the button on the machine</p>
                <div className="wrapper">
                    <img className="machine" src={machine} />
                        <img className={`btn ${rotate}`} onClick={this.findLunch} src={btn} />
                    {this.state.show ? <Alert food={this.state.food} close={this.closeAlert} /> : null}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Title/>, document.getElementById('app'));