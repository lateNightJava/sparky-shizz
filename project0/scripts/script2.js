const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');

const mouthTracker = async () => {
  const plane = await Scene.root.findFirst('plane0');
  plane.transform.scaleX = Reactive.add(Reactive.mul(FaceTracking.face(0).mouth.openness, 1.5), 1);
  plane.transform.scaleY = Reactive.add(Reactive.mul(FaceTracking.face(0).mouth.openness, 1.5), 1);
};

module.exports = mouthTracker;