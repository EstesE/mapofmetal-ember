import Controller from '@ember/controller';
import { Map, Marker, Popup, TileLayer, ImageOverlay, LatLngBounds, Bounds } from 'leaflet';
import { action } from '@ember/object';

export default class Minecraft2Controller extends Controller {
    bounds = [[0,0], [1000, 1000]];
    center = [0,0];
    @action
    updateCenter(x) {
        // debugger;
        // var z = Map;
        // var t = TileLayer;
    }

    @action
    onLoad(x) {
        console.log(x);
        debugger;
        let m = Map;
        let i = ImageOverlay;
        let t = TileLayer;
        let l = LatLngBounds;
        let f = Bounds;
    }

    @action
    onError(e) {
        console.log('error');
        console.log(e);
    }
}
