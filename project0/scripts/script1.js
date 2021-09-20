const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');

const headTracker = async () => {
  const plane = await Scene.root.findFirst('plane0');
  plane.transform.x = Reactive.mul(FaceTracking.face(0).cameraTransform.rotationY, 0.1);
  plane.transform.y = Reactive.mul(Reactive.add(FaceTracking.face(0).cameraTransform.rotationX, -.7), -0.1);
  plane.transform.z = Reactive.mul(FaceTracking.face(0).cameraTransform.rotationZ, 0.1);
};

module.exports = headTracker;
