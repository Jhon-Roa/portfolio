import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export function loadFBXModel(
  scene,
  fbxPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader()

    loader.load(
      fbxPath,
      (fbx) => {
        fbx.name = 'character'
        fbx.position.y = 0
        fbx.position.x = 0
        fbx.receiveShadow = receiveShadow
        fbx.castShadow = castShadow
        scene.add(fbx)

        fbx.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(fbx)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}