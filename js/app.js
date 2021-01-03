console.log("Hello world!");

var API_URL = "https://api.le-systeme-solaire.net/rest/bodies/"
var info = {"recently":"","status":"error","mass":0,"volume":0,"gravity":0,"density":0, "equaRadius":0}

function get_data(name){
	var request = new XMLHttpRequest()

	if(info.recently!=name){
		request.open('GET', API_URL+name, true)
		request.onload = function () {

		  var data = JSON.parse(this.response)

		  if (request.status==200) {
		  	info["recently"] = data.englishName
		  	info["status"] = "successful"
		  	info["mass"] = data.mass.massValue+" X10^"+data.mass.massExponent
			info["volume"] = data.vol.volValue+" X10^"+data.vol.volExponent
			info["density"] = data.density
			info["gravity"] = data.gravity
			info["equaRadius"] = data.equaRadius
		  }
		}
		request.send()
	}
}

function set_data(name){
	if (info.status=="successful") {
		nama.setAttribute('value',name)
		massa.setAttribute('value',"Mass: "+info.mass+" kg")
		volum.setAttribute('value',"Volume: "+info.volume+" km3")
		densy.setAttribute('value', "Density: "+info.density+" kg/m3")
		gravy.setAttribute('value',"Gravity: "+info.gravity+" m/s2")
		erad.setAttribute('value', "Equator Radius: "+info.equaRadius+" km")
	}
} 

AFRAME.registerComponent('appear', {
    init: function () {
      var sceneEl = this.el
      var ingfo = sceneEl.querySelector('#ingfo')
      var nama = sceneEl.querySelector('#nama')
      var massa = sceneEl.querySelector('#massa')
      var volum = sceneEl.querySelector('#volum')
      var densy = sceneEl.querySelector('#densy')
	  var gravy = sceneEl.querySelector('#gravy')
	  var erad	= sceneEl.querySelector('#erad')
	  var grotate = sceneEl.querySelector('#grotate')
      var mercury = sceneEl.querySelector('#mercury')
      var venus = sceneEl.querySelector('#venus')
      var earth = sceneEl.querySelector('#earth')
      var mars = sceneEl.querySelector('#mars')
      var jupiter = sceneEl.querySelector('#jupiter')
      var saturn = sceneEl.querySelector('#saturn')
      var uranus = sceneEl.querySelector('#uranus')
	  var neptune = sceneEl.querySelector('#neptune') 

    mercury.addEventListener('click', function () {
		var name = "Mercury"
		get_data(name)
      	setTimeout( () => {set_data(name)}, 500)
		ingfo.object3D.visible = true
		grotate.pause()
		setTimeout( () => {ingfo.object3D.visible = false}, 8000)
		setTimeout( () => {grotate.play()}, 8000)
		console.log(set_data.name)
    });

  	venus.addEventListener('click', function () {
		var name = "Venus"
		get_data(name)
      	setTimeout( () => {set_data(name)}, 500)
		ingfo.object3D.visible = true
		grotate.pause()
		setTimeout( () => {ingfo.object3D.visible = false}, 8000)
		setTimeout( () => {grotate.play()}, 8000)
		console.log(set_data.name)
  	});

    earth.addEventListener('click', function () {
		var name = "Earth"
		get_data(name)
      	setTimeout( () => {set_data(name)}, 500)
		ingfo.object3D.visible = true
		grotate.pause()
		setTimeout( () => {ingfo.object3D.visible = false}, 8000)
		setTimeout( () => {grotate.play()}, 8000)
		console.log(set_data.name)
	});

	mars.addEventListener('click', function () {
		var name = "Mars"
		get_data(name)
      	setTimeout( () => {set_data(name)}, 500)
		ingfo.object3D.visible = true
		grotate.pause()
		setTimeout( () => {ingfo.object3D.visible = false}, 8000)
		setTimeout( () => {grotate.play()}, 8000)
		console.log(set_data.name)
	});

	jupiter.addEventListener('click', function () {
		var name = "Jupiter"
		get_data(name)
      	setTimeout( () => {set_data(name)}, 500)
		ingfo.object3D.visible = true
		grotate.pause()
		setTimeout( () => {ingfo.object3D.visible = false}, 8000)
		setTimeout( () => {grotate.play()}, 8000)
		console.log(set_data.name)
	});

	saturn.addEventListener('click', function () {
		var name = "Saturn"
		get_data(name)
      	setTimeout( () => {set_data(name)}, 500)
		ingfo.object3D.visible = true
		grotate.pause()
		setTimeout( () => {ingfo.object3D.visible = false}, 8000)
		setTimeout( () => {grotate.play()}, 8000)
		console.log(set_data.name)
	});

	uranus.addEventListener('click', function () {
		var name = "Uranus"
		get_data(name)
      	setTimeout( () => {set_data(name)}, 500)
		ingfo.object3D.visible = true
		grotate.pause()
		setTimeout( () => {ingfo.object3D.visible = false}, 8000)
		setTimeout( () => {grotate.play()}, 8000)
		console.log(set_data.name)
	});

	neptune.addEventListener('click', function () {
		var name = "Neptune"
		get_data(name)
      	setTimeout( () => {set_data(name)}, 500)
		ingfo.object3D.visible = true
		grotate.pause()
		setTimeout( () => {ingfo.object3D.visible = false}, 8000)
		setTimeout( () => {grotate.play()}, 8000)
		console.log(set_data.name)
	});

  	}

});