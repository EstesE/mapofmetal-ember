import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { overviewerConfig } from './overviewerConfig';

export default class MinecraftMapComponent extends Component {
    @tracked coords = "";
    constructor() {
        super(...arguments);
        let component = this;
        this.lat = 42.681011;
        this.lng = -73.023123;
        this.zoom = 1;
        this.emberConfLocation = [42.698095, -73.049140]
        this.hotel = [42.691122, -73.049452]
        // this.center = [-196.4296875,190.8984375];
        this.center = [64,51,-96];
        this.controls = {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        },
        this.tilesets = [
            {
                "name": "Overviewer Render (lighting)",
                "zoomLevels": 9,
                "defaultZoom": 1,
                "maxZoom": 9,
                "path": "world-lighting",
                "base": "",
                "bgcolor": "#1a1a1a",
                "world": "world",
                "last_rendertime": 1671779332,
                "imgextension": "png",
                "isOverlay": false,
                "poititle": "Markers",
                "showlocationmarker": true,
                "center": [
                    64,
                    51,
                    -96
                ],
                "lastrenderversion": 2,
                "minZoom": 0,
                "spawn": [
                    64,
                    51,
                    -96
                ],
                "north_direction": 0
            }
        ];
        // debugger;
        // this.overviewerConfig = overviewer.default.overviewerConfig;
        // console.log(overviewerConfig);
        component.current_layer = {};
        component.collections = {
            /**
             * MapTypes that aren't overlays will end up in here.
             */
            'mapTypes':     {},
            /**
             * The mapType names are in here.
             */
            'mapTypeIds':   [],
            /**
             * This is the current infoWindow object, we keep track of it so that
             * there is only one open at a time.
             */
            'infoWindow':   null,
    
            /**
             * When switching regionsets, where should we zoom to?
             * Defaults to spawn.  Stored as map of maps: world names to layer names to [latlng, zoom]
             */
            'centers': {},
    
            'overlays': {},
    
            'worldViews': [],
    
            'haveSigns': false,
    
            /**
             * Hold the raw marker data for each tilest
             */
            'markerInfo': {},
    
            /**
             * holds a reference to the spawn marker.
             */
            'spawnMarker': null,
    
            /**
            * if a user visits a specific URL, this marker will point to the
            * coordinates in the hash
            */
            'locationMarker': null
        };
        component.overviewerConfig = overviewerConfig;
        component.getTileUrlGenerator = function(path, pathBase, pathExt) {
            return function(o) {
                var url = path;
                var zoom = o.z;
                var urlBase = ( pathBase ? pathBase : '' );
                if(o.x < 0 || o.x >= Math.pow(2, zoom) ||
                    o.y < 0 || o.y >= Math.pow(2, zoom)) {
                    url += '/blank';
                } else if(zoom === 0) {
                    url += '/base';
                } else {
                    for(var z = zoom - 1; z >= 0; --z) {
                        var x = Math.floor(o.x / Math.pow(2, z)) % 2;
                        var y = Math.floor(o.y / Math.pow(2, z)) % 2;
                        url += '/' + (x + 2 * y);
                    }
                }
                url = url + '.' + pathExt;
    
                // console.log(urlBase + url);
                let u = `${urlBase}${url}`;
                // world-lighting/0/
                // console.log(u);
                let part = u.substring(0, 17);
                console.log(part);
                switch (part) {
                    case 'world-lighting/0/':
                        return 'https://raw.githubusercontent.com/Mithrilhall/map-part-0/master/' + u.replace('world-lighting', '');
                        // break;
                    case 'world-lighting/1/':
                        return 'https://raw.githubusercontent.com/Mithrilhall/map-part-1/master/' + u.replace('world-lighting', '');
                        // break;
                    case 'world-lighting/2/':
                        return 'https://raw.githubusercontent.com/Mithrilhall/map-part-2/master/' + u.replace('world-lighting', '');
                        // break;
                    case 'world-lighting/3/':
                        return 'https://raw.githubusercontent.com/Mithrilhall/map-part-3/master/' + u.replace('world-lighting', '');
                        // break;
                    default:
                        return u;
                        //
                }
                // return(urlBase + url);
                return u;

            };
        }
        component.fromWorldToLatLng = function(x, y, z, tset) {
            var zoomLevels = tset.zoomLevels;
            var north_direction = tset.north_direction;
    
            // the width and height of all the highest-zoom tiles combined,
            // inverted
            var perPixel = 1.0 / (overviewerConfig.CONST.tileSize *
                    Math.pow(2, zoomLevels));
    
            if (north_direction == overviewerConfig.CONST.UPPERRIGHT){
                temp = x;
                x = -z+15;
                z = temp;
            } else if(north_direction == overviewerConfig.CONST.LOWERRIGHT){
                x = -x+15;
                z = -z+15;
            } else if(north_direction == overviewerConfig.CONST.LOWERLEFT){
                temp = x;
                x = z;
                z = -temp+15;
            }
    
            // This information about where the center column is may change with
            // a different drawing implementation -- check it again after any
            // drawing overhauls!
    
            // point (0, 0, 127) is at (0.5, 0.0) of tile (tiles/2 - 1, tiles/2)
            // so the Y coordinate is at 0.5, and the X is at 0.5 -
            // ((tileSize / 2) / (tileSize * 2^zoomLevels))
            // or equivalently, 0.5 - (1 / 2^(zoomLevels + 1))
            var lng = 0.5 - (1.0 / Math.pow(2, zoomLevels + 1));
            var lat = 0.5;
    
            // the following metrics mimic those in
            // chunk_render in src/iterate.c
    
            // each block on X axis adds 12px to x and subtracts 6px from y
            lng += 12 * x * perPixel;
            lat -= 6 * x * perPixel;
    
            // each block on Y axis adds 12px to x and adds 6px to y
            lng += 12 * z * perPixel;
            lat += 6 * z * perPixel;
    
            // each block down along Z adds 12px to y
            lat += 12 * (320 - y) * perPixel;
    
            // add on 12 px to the X coordinate to center our point
            lng += 12 * perPixel;
    
            return [-lat*overviewerConfig.CONST.tileSize, lng*overviewerConfig.CONST.tileSize]
        }
        component.fromLatLngToWorld = function(lat, lng, tset) {
            var zoomLevels = tset.zoomLevels;
            var north_direction = tset.north_direction;
    
            lat = -lat/overviewerConfig.CONST.tileSize;
            lng = lng/overviewerConfig.CONST.tileSize;
    
            // lat lng will always be between (0,0) -- top left corner
            //                                (-384, 384) -- bottom right corner
    
            // Initialize world x/y/z object to be returned
            var point = Array();
            point.x = 0;
            point.y = 64;
            point.z = 0;
    
            // the width and height of all the highest-zoom tiles combined,
            // inverted
            var perPixel = 1.0 / (overviewerConfig.CONST.tileSize *
                    Math.pow(2, zoomLevels));
    
            // Revert base positioning
            // See equivalent code in fromWorldToLatLng()
            lng -= 0.5 - (1.0 / Math.pow(2, zoomLevels + 1));
            lat -= 0.5;
    
            // I'll admit, I plugged this into Wolfram Alpha:
            //   a = (x * 12 * r) + (z * 12 * r), b = (z * 6 * r) - (x * 6 * r)
            // And I don't know the math behind solving for for X and Z given
            // A (lng) and B (lat).  But Wolfram Alpha did. :)  I'd welcome
            // suggestions for splitting this up into long form and documenting
            // it. -RF
            point.x = Math.floor((lng - 2 * lat) / (24 * perPixel));
            point.z = Math.floor((lng + 2 * lat) / (24 * perPixel));
    
            // Adjust for the fact that we we can't figure out what Y is given
            // only latitude and longitude, so assume Y=64. Since this is lowering
            // down from the height of a chunk, it depends on the chunk height as
            // so:
            point.x += 320-64;
            point.z -= 320-64;
    
            if(north_direction == overviewerConfig.CONST.UPPERRIGHT){
                temp = point.z;
                point.z = -point.x+15;
                point.x = temp;
            } else if(north_direction == overviewerConfig.CONST.LOWERRIGHT){
                point.x = -point.x+15;
                point.z = -point.z+15;
            } else if(north_direction == overviewerConfig.CONST.LOWERLEFT){
                temp = point.z;
                point.z = point.x;
                point.x = -temp+15;
            }
    
            return point;
        }
    }    

    @action
    updateCenter() {
        console.log('update');
    }

    @action
    error(e) {
        // console.log(e);
    }

    @action
    move() {
        console.log('moving');
    }

    @action
    mouseMove(ev) {
        console.log('mouseMove');
        console.log(ev.latlng);
        this.render(ev.latlng);
    }

    @action
    loadShit() {
        // debugger;
        let component = this;
        component.control = L.Control.extend({
            onChange: function(ev) {
                console.log('ev');
                console.log(ev);
                var selected_world = ev.target.value;


                // save current view for the current_world
                // let current_center = [component.map.getCenter(), component.map.getZoom()];
                let current_layer = component.current_layer[component.current_world] ||
                    Object.values(component.collections.mapTypes[component.current_world])[0];
                let layer_name = current_layer.tileSetConfig.path;
                // component.collections.centers[component.current_world][layer_name] = current_center;

                component.layerCtrl.remove();

                let selected_layer_name = component.collections.mapTypes[selected_world] && component.current_layer[selected_world] ?
                    component.current_layer[selected_world].tileSetConfig.path :
                    Object.keys(component.collections.mapTypes[selected_world])[0];

                component.map.addLayer(component.collections.mapTypes[selected_world][selected_layer_name]);
            }
        });

        console.log('L');
        console.log(L);
        component.map = L.map('mcmap', {crs: L.CRS.Simple});
        component.map.on('mousemove', (ev) => {
            // console.log(ev);
            // debugger;
            // component.coords = ev.containerPoint;
            let temp = component.fromLatLngToWorld(ev.latlng.lat, ev.latlng.lng, component.tilesets[0]);
            component.coords = `x: ${temp.x} z: ${temp.z}`;
            // console.log(component.coords);
        });

        component.worldCtrl = new component.control();

        overviewerConfig.worlds.forEach(function(world_name, idx) {
            component.collections.mapTypes[world_name] = {}
            component.collections.overlays[world_name] = {}
        });

        overviewerConfig.tilesets.forEach(function(obj, idx) {
            // debugger;
            var myLayer = new L.tileLayer('', {
                tileSize: overviewerConfig.CONST.tileSize,
                noWrap: true,
                maxZoom: obj.maxZoom,
                minZoom: obj.minZoom,
                errorTileUrl: obj.base + obj.path + "/blank." + obj.imgextension,
            });

            myLayer.getTileUrl = component.getTileUrlGenerator(obj.path, obj.base, obj.imgextension);

            // if (obj.isOverlay) {
            //     component.collections.overlays[obj.world][obj.path] = myLayer;
            // } else {
                component.collections.mapTypes[obj.world][obj.path] = myLayer;
            // }

            myLayer["tileSetConfig"] = obj;
            if (!component.collections.centers[obj.world]) {
                component.collections.centers[obj.world] = {};
            }

            // if (typeof(obj.center) == "object") {
                var latlng = component.fromWorldToLatLng(obj.center[0], obj.center[1], obj.center[2], obj);
                component.collections.centers[obj.world][obj.path] = [ latlng, obj.defaultZoom ];
            // } else {
            //     component.collections.centers[obj.world][obj.path] = [ [0, 0], obj.defaultZoom ];
            // }

        });

        component.layerCtrl = L.control.layers(
                component.collections.mapTypes[overviewerConfig.worlds[0]],
                component.collections.overlays[overviewerConfig.worlds[0]],
                {collapsed: false})
            .addTo(component.map);
        component.current_world = component.overviewerConfig.worlds[0];

        let default_layer_name = Object.keys(component.collections.mapTypes[component.current_world])[0];
        let center = component.collections.centers[component.current_world][default_layer_name];
        component.map.setView(center[0], center[1]);

        // if (!component.util.initHash()) {
            component.worldCtrl.onChange({target: {value: component.current_world}});
        // }

        // component.util.runReadyQueue();
        // component.util.isReady = true;
    }
}
