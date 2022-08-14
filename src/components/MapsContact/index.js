import React from "react"
import { compose, withProps } from "recompose";
import {
    GoogleMap,
    Marker,
    withGoogleMap,
  } from "react-google-maps";

const MapsContact = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAHe6y1MxSEcRPFsrgwzoxelOIWZH36w0&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withGoogleMap
  )(props => (
    <GoogleMap
      defaultZoom={props.zoomMap || 12}
      defaultCenter={props.latLng}
      center={props.latLng}
      onClick={props.onClick || null}
    >
        <Marker
            position={props.latLng}
        />
    </GoogleMap>
));

export default MapsContact