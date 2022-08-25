import './bootstrap'

import Alpine from 'alpinejs'
import {fabric} from 'fabric'

window.Alpine = Alpine;

Alpine.start();

/*
* Canvas
*/

let options = {
    width: 2480,
    height: 3508,
    bgUrl: 'http://zapadev.certificate.generator/assets/images/certificate-image-001.png',
    fontFamily: 'Opinion Pro',
    padding: {
        top: 0,
        bottom: 0,
        left: 224,
        right: 0,
    },
    beforeText: 'This is to certify that',
    afterText: 'has completed a course in',
    afterStrongText: 'General English',
    contacts: 'Poltava, Ukraine\n+380661212649\nmasterclass.pl@gmail.com\nmasterclass.pl.ua',
    signatureUrl: 'http://zapadev.certificate.generator/assets/images/certificate-signature-demo.svg',
    logoUrl: 'http://zapadev.certificate.generator/assets/images/certificate-logo-demo.svg',
    director: {
        name: 'Oksana Zaparenko',
        position: 'Director',
    },
    getXCenter: function () {
        return (this.width - this.padding.left - this.padding.right) / 2 + this.padding.left
    },
    getRelativeHeight: function (y = 0) {
        return this.height * y / 100
    },
    getRelativeWidth: function (x = 0) {
        return this.width * x / 100
    }
}

//-----------------------------------

let canvas = new fabric.Canvas("canvas", {
    hoverCursor: 'pointer',
    selection: true,
    selectionBorderColor: 'green',
    backgroundColor: null,
    interactive: false
});

canvas.setBackgroundImage(options.bgUrl, canvas.renderAll.bind(canvas), {
    backgroundImageOpacity: 0.5,
    backgroundImageStretch: true
})

//-----------------------------------

let studentCanvasText = new fabric.Text('', {
    left: options.getXCenter(),
    top: options.getRelativeHeight(28),
    fontSize: 220,
    originX: 'center',
    fontFamily: options.fontFamily,
}),
beforeCanvasText = new fabric.Text( options.beforeText, {
    left: options.getXCenter(),
    top: options.getRelativeHeight(23),
    fontSize: 100,
    originX: 'center',
    fontFamily: options.fontFamily,
}),
afterCanvasText = new fabric.Text( options.afterText, {
    left: options.getXCenter(),
    top: options.getRelativeHeight(38),
    fontSize: 100,
    originX: 'center',
    fontFamily: options.fontFamily,
}),
afterStrongCanvasText = new fabric.Text( options.afterStrongText, {
    left: options.getXCenter(),
    top: options.getRelativeHeight(42),
    fontSize: 120,
    originX: 'center',
    fontFamily: options.fontFamily,
}),
contactsCanvasText = new fabric.Text( options.contacts, {
    left: options.getRelativeWidth(12),
    top: options.getRelativeHeight(92.5),
    fontSize: 40,
    originX: 'left',
    fontFamily: options.fontFamily,
})

fabric.Image.fromURL(options.logoUrl, (image) => {
    const oImage = image.set({
        left: options.getRelativeWidth(12),
        top: options.getRelativeHeight(87.5),
    });
    canvas.add(oImage);
});
fabric.Image.fromURL(options.signatureUrl, (image) => {
    const oImage = image.set({
        left: options.getRelativeWidth(60),
        top: options.getRelativeHeight(90),
    });
    canvas.add(oImage);
});


canvas.add(beforeCanvasText)
canvas.add(studentCanvasText).setActiveObject(studentCanvasText)
canvas.add(afterCanvasText)
canvas.add(afterStrongCanvasText)

canvas.add(contactsCanvasText)

//-----------------------------------
let studentInput = document.getElementById('student')
studentInput.addEventListener('input', () => {
    studentCanvasText.text = studentInput.value
    canvas.renderAll()
});

//-----------------------------------

const downloadBtn = document.getElementById('downloadBtn')

downloadBtn.addEventListener('click', function (e) {
    if(studentInput.value) {
        const image = canvas.toDataURL("image/png").replace("image/jpg", "image/octet-stream")
        let element = document.createElement('a'),
            filename = 'Certificate - ' + studentInput.value + '.jpg'
        element.setAttribute('href', image)
        element.setAttribute('download', filename)
        if (confirm("Save the certificate in the database?")) {

            // TODO Попробовать переделать AJAX а Fetch
            // fetch(flow.url, { method: "POST" })
            //     .then((res) => res.json())
            //     .then((json) => console.log(json))
            //     .catch((err) => console.error("error:", err));

            // $.ajax({
            //     url: flow.url,
            //     type: 'POST',
            //     data: {
            //         action: 'add_certificate',
            //         id: certIDInput.value ? certIDInput.value : flow.lastCertID + '/' + new Date().getFullYear().toString().substr(-2),
            //         name: nameInput.value,
            //         start: startInput.value,
            //         finish: finishInput.value,
            //         level: levelSelect.value,
            //         hours: hoursInput.value,
            //         location: locationInput.value,
            //         date: dateInput.value,
            //     },
            //     dataType: 'text',
            //
            //     success: function () {
            //         // TODO Fix update certificate ID on canvas after AJAX
            //
            //         certIDInput.value = Number(flow.lastCertID) + 1 + '/' + new Date().getFullYear().toString().substr(-2)
            //         drawImage()
            //         element.click()
            //     },
            //     error: function () {
            //
            //     }
            // });
        }
        element.click()
    } else {
        alert(`${options.name.label} field is empty. Please enter the student's name.`)
    }
})

