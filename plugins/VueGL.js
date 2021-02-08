import Vue from 'vue'
import {
  VglNamespace,
  VglObject3d,
  VglScene,
  VglCamera,
  VglRenderer,
  VglPerspectiveCamera,
  VglGroup,
  VglLight,
  VglDirectionalLight,
  VglAmbientLight,
  VglMaterial,
  VglPointsMaterial,
  VglGeometry,
  VglSphereGeometry,
  VglMeshStandardMaterial,
  VglMesh,
  VglPoints,
  VglLineBasicMaterial,
  VglLine,
  VglSprite,
  VglBoxGeometry,
  VglCircleGeometry,
  VglLineSegments,
  VglLineLoop,
  VglConeGeometry,
  VglAxesHelper,
  VglOrthographicCamera,
  VglCylinderGeometry,
  VglPlaneGeometry,
  VglDodecahedronGeometry,
  VglIcosahedronGeometry,
  VglOctahedronGeometry,
  VglRingGeometry,
  VglTetrahedronGeometry,
  VglTorusGeometry,
  VglTorusKnotGeometry,
  VglArrowHelper,
  VglBoxHelper,
  VglPointLight,
  VglSpotLight,
  VglTexture,
  VglExtrudeGeometry,
  VglTextGeometry,
  VglSpriteMaterial,
  VglGridHelper,
  VglShadowMaterial,
  VglCameraHelper,
  VglDirectionalLightHelper,
  VglPolarGridHelper,
  VglMeshBasicMaterial,
  VglMeshDepthMaterial,
  VglMeshLambertMaterial,
  VglLineDashedMaterial,
  VglMeshNormalMaterial,
  VglMeshPhongMaterial,
  VglMeshToonMaterial,
  VglMeshPhysicalMaterial,
  VglShaderMaterial,
  VglLatheGeometry,
  VglSpotLightHelper,
  VglHemisphereLight,
  VglRectAreaLight,
  VglShape,
  VglCurve,
  VglCurvePath,
  VglPath,
  VglShapeGeometry,
  VglPolyhedronGeometry,
} from 'vue-gl'

Vue.component('VglNamespace', VglNamespace)
Vue.component('VglObject3d', VglObject3d)
Vue.component('VglScene', VglScene)
Vue.component('VglCamera', VglCamera)
Vue.component('VglRenderer', VglRenderer)
Vue.component('VglPerspectiveCamera', VglPerspectiveCamera)
Vue.component('VglGroup', VglGroup)
Vue.component('VglLight', VglLight)
Vue.component('VglDirectionalLight', VglDirectionalLight)
Vue.component('VglAmbientLight', VglAmbientLight)
Vue.component('VglMaterial', VglMaterial)
Vue.component('VglPointsMaterial', VglPointsMaterial)
Vue.component('VglGeometry', VglGeometry)
Vue.component('VglSphereGeometry', VglSphereGeometry)
Vue.component('VglMeshStandardMaterial', VglMeshStandardMaterial)
Vue.component('VglMesh', VglMesh)
Vue.component('VglPoints', VglPoints)
Vue.component('VglLineBasicMaterial', VglLineBasicMaterial)
Vue.component('VglLine', VglLine)
Vue.component('VglSprite', VglSprite)
Vue.component('VglBoxGeometry', VglBoxGeometry)
Vue.component('VglCircleGeometry', VglCircleGeometry)
Vue.component('VglLineSegments', VglLineSegments)
Vue.component('VglLineLoop', VglLineLoop)
Vue.component('VglConeGeometry', VglConeGeometry)
Vue.component('VglAxesHelper', VglAxesHelper)
Vue.component('VglOrthographicCamera', VglOrthographicCamera)
Vue.component('VglCylinderGeometry', VglCylinderGeometry)
Vue.component('VglPlaneGeometry', VglPlaneGeometry)
Vue.component('VglDodecahedronGeometry', VglDodecahedronGeometry)
Vue.component('VglIcosahedronGeometry', VglIcosahedronGeometry)
Vue.component('VglOctahedronGeometry', VglOctahedronGeometry)
Vue.component('VglRingGeometry', VglRingGeometry)
Vue.component('VglTetrahedronGeometry', VglTetrahedronGeometry)
Vue.component('VglTorusGeometry', VglTorusGeometry)
Vue.component('VglTorusKnotGeometry', VglTorusKnotGeometry)
Vue.component('VglArrowHelper', VglArrowHelper)
Vue.component('VglBoxHelper', VglBoxHelper)
Vue.component('VglPointLight', VglPointLight)
Vue.component('VglSpotLight', VglSpotLight)
Vue.component('VglTexture', VglTexture)
Vue.component('VglExtrudeGeometry', VglExtrudeGeometry)
Vue.component('VglTextGeometry', VglTextGeometry)
Vue.component('VglSpriteMaterial', VglSpriteMaterial)
Vue.component('VglGridHelper', VglGridHelper)
Vue.component('VglShadowMaterial', VglShadowMaterial)
Vue.component('VglCameraHelper', VglCameraHelper)
Vue.component('VglDirectionalLightHelper', VglDirectionalLightHelper)
Vue.component('VglPolarGridHelper', VglPolarGridHelper)
Vue.component('VglMeshBasicMaterial', VglMeshBasicMaterial)
Vue.component('VglMeshDepthMaterial', VglMeshDepthMaterial)
Vue.component('VglMeshLambertMaterial', VglMeshLambertMaterial)
Vue.component('VglLineDashedMaterial', VglLineDashedMaterial)
Vue.component('VglMeshNormalMaterial', VglMeshNormalMaterial)
Vue.component('VglMeshPhongMaterial', VglMeshPhongMaterial)
Vue.component('VglMeshToonMaterial', VglMeshToonMaterial)
Vue.component('VglMeshPhysicalMaterial', VglMeshPhysicalMaterial)
Vue.component('VglShaderMaterial', VglShaderMaterial)
Vue.component('VglLatheGeometry', VglLatheGeometry)
Vue.component('VglSpotLightHelper', VglSpotLightHelper)
Vue.component('VglHemisphereLight', VglHemisphereLight)
Vue.component('VglRectAreaLight', VglRectAreaLight)
Vue.component('VglShape', VglShape)
Vue.component('VglCurve', VglCurve)
Vue.component('VglCurvePath', VglCurvePath)
Vue.component('VglPath', VglPath)
Vue.component('VglShapeGeometry', VglShapeGeometry)
Vue.component('VglPolyhedronGeometry', VglPolyhedronGeometry)
