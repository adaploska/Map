import React, { Component } from "react";
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import * as firebase from 'firebase/app';
import 'firebase/app';

var data_list = [];

export default class WholeMaps extends Component {
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
    console.log(data_list)
    console.log(typeof (data_list));
    console.log(this.state.data)
    console.log(typeof (this.state.data))



  }

  clickhendler = () => {
    console.log('super')
    this.setState({
      hover: true,

    });

  }



  render() {

    return (
      <div>

        <button onClick={this.clickhendler}>wczytaj dane na mapę</button>
        <Map
          center={[52.24038, 20.9731]}
          zoom={6}
          width={800}
          height={600}

        >
          <Marker anchor={[52.4069, 16.9299]} payload={1} />
          <Overlay anchor={[52.4069, 16.9299]} offset={[120, 79]}>
            <img src='pigeon.jpg' width={240} height={158} alt='' />
          </Overlay>
          {this.state.data.map((item, index) => (

            <Marker
              key={index}
              anchor={[item.lat, item.lng]}
              content={item.content}
              payload={5}
              onClick={this.clickhendler}

            />
          ))}
          {this.state.data.map((item, index) => (
            <Overlay key={index} anchor={[item.lat, item.lng]} />
          ))}
          <img src="pigeon.jpg" width={240} height={158} alt="" />
        </Map>

      </div>




    )
  }
}