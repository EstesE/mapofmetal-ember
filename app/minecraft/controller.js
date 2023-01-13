import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MinecraftController extends Controller {
    @action
    clickLocation(coords) {
        console.log(`${coords.x},${coords.z}`);
    }
}
