import React from 'react'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Geojsondata from './Data/GeojsonData.json'
function Mapi() {
    for(let i=0; i<(Geojsondata.features.length);i++){
    console.log(Geojsondata.features[i].properties.NAME_1)}

    const onEachState=(state, layer)=>{
        console.log(state)
        const stateName= state.properties.NAME_1
        layer.bindPopup(`${stateName}`);
        layer.options.fillColor='Red'

    }
    return (
        <div>
            
            <Map center={[28.63576, 77.22445]} zoom={4} scrollWheelZoom={false} style={{ height: '75vh', width: '100%'}}>
            
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={Geojsondata.features} style={{ height: '75vh', width: '100%'}} onEachFeature={onEachState}/>
            </Map>
        </div>
    )
}

export default Mapi
