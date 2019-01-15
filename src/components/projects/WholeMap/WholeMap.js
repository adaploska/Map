
import React, { Component } from "react";
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import * as firebase from 'firebase/app';
import 'firebase/app';
var data_list = [];
export default class WholeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            data: data_list
        };
    }
    componentDidMount() {
        firebase
            .database()
            .ref("places")
            .once("value")
            .then(snapshot => {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();
                    data_list.push(childData);
                });
            });
    }
    clickhendler = () => {
        this.setState({
            hover: true,
        });

    }
    ShowCardHendler = (elem) => {
        console.log('super');
        this.setState({
            hover: true,
            text: elem
        });
    }


    render() {

        return (
            <div>

                <Map
                    center={[52.24038, 20.9731]}
                    zoom={6}
                    height={520}>
                    <button onClick={this.clickhendler} className="btn waves-effect pink ligten-1">wczytaj dane na mapę</button>
                    {this.state.data.map((item, index) => (

                        <Marker
                            key={index}
                            anchor={[item.lat, item.lng]}
                            content={item.content}
                            payload={5}
                            onClick={() => this.ShowCardHendler(item["content"])}

                        />
                    ))}
                    {this.state.data.map((item, index) => (
                        <Overlay key={index} anchor={[item.lat, item.lng]} />
                    ))}
                    <img src="pigeon.jpg" width={240} height={158} alt="" />
                </Map>
                {/* <div>{this.state.text}</div> */}
            </div>




        )
    }
}
export { data_list };