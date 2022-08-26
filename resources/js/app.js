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
    fontFamily: 'Opinion',
    padding: {
        top: 0,
        bottom: 0,
        left: 224,
        right: 0,
    },
    id: '2022/505',
    beforeText: 'This is to certify that',
    afterText: 'has completed a course in',
    afterStrongText: 'General English',
    list: {
        x: 15,
        y: 60,
        level: {
            label:'Level',
            value: 'A1',
        },
        period: {
            label: 'Course dates',
            start: '2021-05-05',
            finish: '2022-05-25',
        },
        time: {
            label: 'Number of hours',
            value: 0
        },
        location: {
            label: 'Place of Study',
            value: 'Poltava',
        },
        date: {
            label: 'Date of issue',
            value: '2001-05-25',
        },
    },
    contacts: 'Poltava, Ukraine\n+380661212649\nmasterclass.pl@gmail.com\nmasterclass.pl.ua',
    signatureUrl: 'http://zapadev.certificate.generator/assets/images/certificate-signature-demo.svg',
    logoUrl: 'http://zapadev.certificate.generator/assets/images/certificate-logo-demo.svg',
    director: {
        x: 83,
        y: 91,
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
    selection: false,
    selectionBorderColor: 'green',
    backgroundColor: null,
    interactive: false,
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
    fontWeight: 700,
    selectable: false,
}),
beforeCanvasText = new fabric.Text( options.beforeText, {
    left: options.getXCenter(),
    top: options.getRelativeHeight(23),
    fontSize: 100,
    originX: 'center',
    fontFamily: options.fontFamily,
    selectable: false,
}),
afterCanvasText = new fabric.Text( options.afterText, {
    left: options.getXCenter(),
    top: options.getRelativeHeight(38),
    fontSize: 100,
    originX: 'center',
    fontFamily: options.fontFamily,
    selectable: false,
}),
afterStrongCanvasText = new fabric.Text( options.afterStrongText, {
    left: options.getXCenter(),
    top: options.getRelativeHeight(42),
    fontSize: 120,
    originX: 'center',
    fontFamily: options.fontFamily,
    selectable: false,
}),
contactsCanvasText = new fabric.Text( options.contacts, {
    left: options.getRelativeWidth(15),
    top: options.getRelativeHeight(92.5),
    fontSize: 40,
    originX: 'left',
    fontFamily: options.fontFamily,
    selectable: false,
})


canvas.add(beforeCanvasText)
canvas.add(studentCanvasText).setActiveObject(studentCanvasText)
canvas.add(afterCanvasText)
canvas.add(afterStrongCanvasText)

canvas.add(contactsCanvasText)


// List
let list = new fabric.Group([
    new fabric.Group([
        new fabric.Text(options.list.period.label + ':', {
            fontSize: 70,
            fontFamily: options.fontFamily,
        }),
        new fabric.Text(options.list.period.start, {
            fontSize: 70,
            left: options.getRelativeWidth(22),
            fontFamily: options.fontFamily,
        }),
        new fabric.Text(options.list.period.finish, {
            fontSize: 70,
            left: options.getRelativeWidth(40),
            fontFamily: options.fontFamily,
        })], {
    }),
    new fabric.Group([
        new fabric.Text(options.list.level.label + ':', {
            fontSize: 70,
            fontFamily: options.fontFamily,
        }),
        new fabric.Text(options.list.level.value, {
            fontSize: 70,
            left: options.getRelativeWidth(22),
            fontFamily: options.fontFamily,
        })], {
        top: options.getRelativeHeight(3 ),
    }),
    new fabric.Group([
        new fabric.Text(options.list.time.label + ':', {
            fontSize: 70,
            fontFamily: options.fontFamily,
        }),
        new fabric.Text(options.list.time.value.toString(), {
            fontSize: 70,
            left: options.getRelativeWidth(22),
            fontFamily: options.fontFamily,
        })], {
        top: options.getRelativeHeight(6 ),
    }),
    new fabric.Group([
        new fabric.Text(options.list.location.label + ':', {
            fontSize: 70,
            fontFamily: options.fontFamily,
        }),
        new fabric.Text(options.list.location.value, {
            fontSize: 70,
            left: options.getRelativeWidth(22),
            fontFamily: options.fontFamily,
        })], {
        top: options.getRelativeHeight(9 ),
    }),
    new fabric.Group([
        new fabric.Text(options.list.date.label + ':', {
            fontSize: 70,
            fontFamily: options.fontFamily,
        }),
        new fabric.Text(options.list.date.value.toString(), {
            fontSize: 70,
            left: options.getRelativeWidth(22),
            fontFamily: options.fontFamily,
        })], {
        top: options.getRelativeHeight(12 ),
    })], {
    left: options.getRelativeWidth(options.list.x),
    top: options.getRelativeHeight(options.list.y),
    selectable: false,
})
canvas.add(list);


// Director
let director = new fabric.Group([
        new fabric.Text( options.director.name, {
            fontSize: 40,
            fontFamily: options.fontFamily,
            selectable: false,
            originX: 'right',
        }),
        new fabric.Text( options.director.position, {
            fontSize: 40,
            fontFamily: options.fontFamily,
            top: options.getRelativeHeight(2),
            selectable: false,
            originX: 'right',

        })
    ], {
    left: options.getRelativeWidth(options.director.x),
    top: options.getRelativeHeight(options.director.y),
    selectable: false,
})
canvas.add(director);


//----------

fabric.Image.fromURL(options.logoUrl, (image) => {
    const oImage = image.set({
        left: options.getRelativeWidth(15),
        top: options.getRelativeHeight(87.5),
        selectable: false,
    });
    canvas.add(oImage);
});
fabric.Image.fromURL(options.signatureUrl, (image) => {
    const oImage = image.set({
        left: options.getRelativeWidth(60),
        top: options.getRelativeHeight(90),
        selectable: false,
    });
    canvas.add(oImage);
});



//-----------------------------------
let studentInput = document.getElementById('student')
studentInput.addEventListener('input', () => {
    studentCanvasText.text = studentInput.value
    canvas.renderAll()
})

let locationInput = document.getElementById('location')
locationInput.addEventListener('input', () => {
    list.item(3).item(1).set({
        text: locationInput.value
    })
    canvas.renderAll()
})

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

