let topx = 9
let leftx = 0
let topy = 9
let lefty = 0
let topz = 9
let leftz = 0
let topship = 0
let leftship = -10
let directionship = 0

// HT.Grid (2,2)

function loadposition() {
    $('#x-axis').css ('top', topx+'px');
    $('#x-axis').css ('left', leftx+'px')
    $('#y-axis').css ('top', topy+'px');
    $('#y-axis').css ('left', lefty+'px')
    $('#z-axis').css ('top', topz+'px');
    $('#z-axis').css ('left', leftz+'px')
    $('#ship1').css ('top', topship+'px');
    $('#ship1').css ('left', leftship+'px')
    $('#ship1').css ('transform', 'rotate('+directionship+'deg)')
}

$('#button1').on('click', moveminusx);

function moveminusx() {
    lefty = lefty-24;
    leftz = leftz-24;
    leftship = leftship-24;
    loadposition();
}

$('#button2').on('click', moveplusx);

function moveplusx() {
    lefty = lefty+24;
    leftz = leftz+24;
    leftship = leftship+24;
    loadposition();
}

$('#button3').on('click', moveminusy);

function moveminusy() {
    leftx = leftx-24*0.5;
    topx = topx-24*0.866;
    leftz = leftz-24*0.5;
    topz = topz-24*0.866;
    leftship = leftship-24*0.5;
    topship = topship-24*0.866;
    loadposition();
}

$('#button4').on('click', moveplusy);

function moveplusy() {
    leftx = leftx+(24*0.5);
    topx = topx+(24*0.866);
    leftz = leftz+(24*0.5);
    topz = topz+(24*0.866);
    leftship = leftship+(24*0.5);
    topship = topship+(24*0.866);
    loadposition();
}

$('#button6').on('click', moveminusz);

function moveminusz() {
    leftx = leftx+24*0.5;
    topx = topx-24*0.866;
    lefty = lefty+24*0.5;
    topy = topy-24*0.866;
    leftship = leftship+24*0.5;
    topship = topship-24*0.866;
    loadposition();
}

$('#button5').on('click', moveplusz);

function moveplusz() {
    leftx = leftx-(24*0.5);
    topx = topx+(24*0.866);
    lefty = lefty-(24*0.5);
    topy = topy+(24*0.866);
    leftship = leftship-(24*0.5);
    topship = topship+(24*0.866);
    loadposition();
}

$('#button7').on('click', rotateshipleft);

function rotateshipleft() {
    directionship = directionship-60;
    loadposition();
}

$('#button8').on('click', rotateshipright);

function rotateshipright() {
    directionship = directionship+60;
    loadposition();
}