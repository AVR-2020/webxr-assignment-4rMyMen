console.log("Hello world!");

AFRAME.registerComponent('appear', {
    init: function () {
      var sceneEl = this.el
      var ingfo = sceneEl.querySelector('#ingfo')
      var mercury = sceneEl.querySelector('#mercury')
      var venus = sceneEl.querySelector('#venus')
      var earth = sceneEl.querySelector('#earth')
      var mars = sceneEl.querySelector('#mars')
      var jupiter = sceneEl.querySelector('#jupiter')
      var saturn = sceneEl.querySelector('#saturn')
      var uranus = sceneEl.querySelector('#uranus')
      var neptune = sceneEl.querySelector('#neptune')

    mercury.addEventListener('click', function () {
	    ingfo.object3D.visible = true
	    setTimeout( () => {ingfo.object3D.visible = false}, 8000)
    });

  	venus.addEventListener('click', function () {
	    ingfo.object3D.visible = true
	    setTimeout( () => {ingfo.object3D.visible = false}, 8000)
  	});

    earth.addEventListener('click', function () {
	    ingfo.object3D.visible = true
	    setTimeout( () => {ingfo.object3D.visible = false}, 8000)
	});

	mars.addEventListener('click', function () {
	    ingfo.object3D.visible = true
	    setTimeout( () => {ingfo.object3D.visible = false}, 8000)
	});

	jupiter.addEventListener('click', function () {
	    ingfo.object3D.visible = true
	    setTimeout( () => {ingfo.object3D.visible = false}, 8000)
	});

	saturn.addEventListener('click', function () {
	    ingfo.setAttribute('visible', 'true')
	    setTimeout( () => {ingfo.setAttribute('visible', 'false')}, 8000)
	});

	uranus.addEventListener('click', function () {
	    ingfo.object3D.visible = true
	    setTimeout( () => {ingfo.object3D.visible = false}, 8000)
	});

	neptune.addEventListener('click', function () {
	    ingfo.object3D.visible = true
	    setTimeout( () => {ingfo.object3D.visible = false}, 8000)
	});

  	}

});