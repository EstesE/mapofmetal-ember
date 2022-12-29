import Component from '@glimmer/component';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class OpenSeadragonComponent extends Component {
  @tracked showModal = null;
  @tracked myValue = false;

  constructor() {
    super(...arguments);
    set(this, 'genres', this.args.genres);
  }

  @action
  toggleModal(val) {
    // this.toggleProperty('isShowingModal');
    console.log(val);
    set(this, 'state', val);
    set(this, 'showModal', true);
    // This creates an element and appends it to the DOM.
    // var element = document.getElementById('youtube');
    // var node = document.createElement("iframe");
    // node.src = "https://www.youtube.com/embed/6S-n1Kw4HQU";
    // node.width = "420"
    // node.height = "345"
    // document.getElementById('youtube').appendChild(node);
  }

  @action
  nullAction() {

  }

  @action
  close() {
    set(this, 'showModal', false);
  }

  @action
  didRender() {    
    var loadScript = function(scriptUrl, genres) {
      return new Promise((res, rej) => {
        // if (!document.getElementById('openseadragon1')) {
          const script = document.createElement('script');
          script.setAttribute("id", "openseadragon1");
          script.src = scriptUrl;
          // debugger;
          document.body.appendChild(script);
          script.onload = function () {
            
            var source = {
              Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                // Url: "/map4a_files/",
                Url: "./map4b_files/",
                Format: "jpeg",
                Overlap: "2",
                TileSize: "256",
                Size: {
                  Width:  "7680",
                  Height: "4320"
                }
              }
            };
            
            var viewer = OpenSeadragon({
              id: "openseadragon1",
              prefixUrl: "//openseadragon.github.io/openseadragon/images/",
              tileSources: source,
              showNavigationControl: false,
              homeFillsViewer: false,
              visibilityRatio: 1.0,
              constrainDuringPan: true,
              minZoomLevel: 1,
              zoomPerClick: 1.0, // disabled
              zoomPerScroll: 1.4,
              springStiffness: 6.5,
              preserveImageSizeOnResize: false,
              overlays: genres // []
              // overlays: [
              //   {
              //       id: 'overlay1',
              //       x: 0.2,
              //       y: 0.2
              //   },
              //   {
              //     id: 'overlay2',
              //     x: 0.2,
              //     y: 0.2111
              //   }
              // ]
            });

            for(let i = 0; i < genres.length; i++) {
              new OpenSeadragon.MouseTracker({
                element: genres[i].id,
                clickHandler(e) {
                  let target = document.getElementById(e.eventSource.element.id);
                  console.log(target);
                }
              })
            }

            var db = viewer.viewport.getBounds();
            console.log(db);
            // debugger;
            var positionEl = document.querySelectorAll('.info .position')[0];
            var zoomEl = document.querySelectorAll('.info .zoom')[0];

            var updateZoom = function() {
              var zoom = viewer.viewport.getZoom(true);
              var imageZoom = viewer.viewport.viewportToImageZoom(zoom);

              zoomEl.innerHTML = `Zoom: ${(Math.round(zoom * 100) / 100)}<br/>Image Zoom: ${(Math.round(imageZoom * 100) / 100)}`;
            }

            viewer.addHandler('open', function() {
              var tiledImage = viewer.world.getItemAt(0); 
  
              var imageRect = new OpenSeadragon.Rect(0, 0, 1000, 1000); // Or whatever area you want to focus on
              
              var viewportRect = tiledImage.imageToViewportRectangle(imageRect);
              viewer.viewport.fitBounds(viewportRect, true);

              viewer.viewport.zoomTo(0.5, (0.7,0.23), true);
              viewer.viewport.applyConstraints();

              var tracker = new OpenSeadragon.MouseTracker({
                element: viewer.container,
                moveHandler: function(event) {
                  var webPoint = event.position;
                  var viewportPoint = viewer.viewport.pointFromPixel(webPoint);
                  var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);
                  var zoom = viewer.viewport.getZoom(true);
                  var imageZoom = viewer.viewport.viewportToImageZoom(zoom);

                  positionEl.innerHTML = `Web: ${webPoint.toString()}<br/>Viewport: ${viewportPoint.toString()}<br/>Image: ${imagePoint.toString()}`;
                  updateZoom();
                }
              });

              tracker.setTracking(true);
              viewer.addHandler('animation', updateZoom);
            });

            viewer.addHandler('canvas-click', function(event) {
              // The canvas-click event gives us a position in web coordinates.
              var webPoint = event.position;
          
              // Convert that to viewport coordinates, the lingua franca of OpenSeadragon coordinates.
              var viewportPoint = viewer.viewport.pointFromPixel(webPoint);
          
              // Convert from viewport coordinates to image coordinates.
              var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);
          
              // Show the results.
              console.log(webPoint.toString(), viewportPoint.toString(), imagePoint.toString());
            });

            // new OpenSeadragon.MouseTracker({
            //   element: 'overlay1',
            //   clickHandler: function(e) {
            //     console.log(e);
            //     // let target = document.getElementById(e.eventSource.element.id);
            //     let target = document.getElementById('xxx');
            //     debugger;
            //     console.log(target);
            //     // // var $target = $(e.originalEvent.target);
            //     // var $target = document.getElementById('overlay1');
            //     // if ($target.is('a')) {
            //     //     if ($target.attr('target') === '_blank') {
            //     //         window.open($target.attr('href'));
            //     //     } else {
            //     //         location.href = $target.attr('href');
            //     //     }
            //     // } else {
            //     //     $('#overlay1').toggleClass('selected');
            //     // }
            //   }
            // });
            // new OpenSeadragon.MouseTracker({
            //   element: 'overlay2',
            //   clickHandler: function(e) {
            //     console.log(e);
            //     // let target = document.getElementById(e.eventSource.element.id);
            //     let target = document.getElementById('overlay2');
            //     debugger;
            //     console.log(target);
            //   }
            // });
            // res();
          }
          script.onerror = function () {
            rej();
          }
        // } else {
        //   res();
        // }
      });
    }

    console.log('did render');
    loadScript('https://openseadragon.github.io/openseadragon/openseadragon.min.js', this.genres).then(() => {
      console.log('openseadragon script loaded');
    }).catch((e) => {
      console.error('script failed to load'); //eslint-disable-line
      console.error(e);                       //eslint-disable-line
    });
  }


}
