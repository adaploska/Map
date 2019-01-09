import React, { Component } from "react";
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

export default class WholeMaps extends Component {
 render(){
   return(
    <Map style={{ border: "1px solid red" }}
    center={[52.24038, 20.9731]}
    zoom={6}
    width={800}
    height={600}
    >
    <Marker anchor={[50.874, 4.6947]} payload={1} />

    <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>
  
   )
 }

}