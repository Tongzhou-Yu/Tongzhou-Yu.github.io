let sliderSW
let sliderSWValue
let sliderRepeat
let sliderRepeatValue
let sliderDistance
let sliderDistanceValue
let sliderRotation
let sliderRotationValue
let sliderSpeed
let sliderSpeedValue
let sliderSize
let sliderSizeValue

function setup() {
	createCanvas(innerWidth, innerHeight)
	angleMode(DEGREES)
	rectMode(CENTER)
	colorMode(HSB, 255, 100, 100)
	// noLoop()

	// sliders
	createSliders()
}

function draw() {
	background(0)
	noFill()

	let sw = sliderSW.value()
	let repeat = sliderRepeat.value()

	sliderSWValue.html(sw)
	sliderRepeatValue.html(repeat)
	sliderDistanceValue.html(sliderDistance.value())
	sliderRotationValue.html(sliderRotation.value())
	sliderSpeedValue.html(sliderSpeed.value())
	sliderSizeValue.html(sliderSize.value())

	let angle = 360 / repeat

	translate(width / 2, height / 2)

	for (let i = 0; i < repeat; i++) {
		strokeWeight(sw)
		drawFlower()
		rotate(angle)
	}
}

function doubleClicked() {
	if (isLooping()) noLoop()
	else loop()
}

function drawFlower() {
	for (let i = 0; i <= 255; i += sliderDistance.value()) {
		push()

		let h = floor(
			map(sin((i * frameCount * sliderSpeed.value()) / 10000), -1, 1, 10, 255)
		)
		let s = floor(
			map(cos((i * frameCount * sliderSpeed.value()) / 10000), -1, 1, 10, 100)
		)
		let b = floor(
			map(sin((i * frameCount * sliderSpeed.value()) / 10000), -1, 1, 10, 100)
		)
		let a = map(i, 0, 255, 0.4, 0)

		if (i % 2 > 0) {
			stroke("hsba(" + h + ", " + s + "%, " + b + "%, " + a + ")")
			rotate(
				cos(frameCount / (10 - sliderSpeed.value()) + i) *
					sliderRotation.value()
			)
			rect(0, 0, i * 3, i * 3, i / 2)
		} else {
			stroke("hsba(" + h + ", " + s + "%, " + b + "%, " + a + ")")
			rotate(
				sin(frameCount / (21 - sliderSpeed.value()) + i) *
					sliderRotation.value()
			)
			rect(0, 0, i * sliderSize.value(), i * sliderSize.value(), i / 2)
		}

		pop()
	}
}

function addLabel(label, x, y) {
	let p = createP(label)
	p.style("font-size", "13px")
	p.style("color", "white")
	p.position(x, y)
}

function addSlider(min, max, value, step, x, y) {
	let s = createSlider(min, max, value, step)
	s.position(x, y)
	s.style("width", "200px")
	return s
}

function addSliderValue(x, y) {
	const sv = createElement("h1")
	sv.style("font-size", "16px")
	sv.style("color", "white")
	sv.position(x, y)
	return sv
}

function createSliders() {
	addLabel("STROKE W", 10, 0)
	sliderSW = addSlider(1, 100, 50, 1, 80, 10)
	sliderSWValue = addSliderValue(290, 0)

	addLabel("REPEAT", 10, 30)
	sliderRepeat = addSlider(1, 12, 6, 1, 80, 40)
	sliderRepeatValue = addSliderValue(290, 30)

	addLabel("DISTANCE", 10, 60)
	sliderDistance = addSlider(1, 100, 50, 1, 80, 70)
	sliderDistanceValue = addSliderValue(290, 60)

	addLabel("ROTATION", 10, 90)
	sliderRotation = addSlider(1, 180, 90, 1, 80, 100)
	sliderRotationValue = addSliderValue(290, 90)

	addLabel("SPEED", 10, 120)
	sliderSpeed = addSlider(1, 20, 10, 1, 80, 130)
	sliderSpeedValue = addSliderValue(290, 120)

	addLabel("SIZE", 10, 150)
	sliderSize = addSlider(1, 6, 3, 1, 80, 160)
	sliderSizeValue = addSliderValue(290, 150)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
