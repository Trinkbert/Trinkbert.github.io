function wordlength() {return Math.floor((Math.random() * 3) + 3)};
function cointoss() {return Math.floor((Math.random() *2) +1)};
function c3avar() {return Math.floor((Math.random() *11) +0)};

let v1a = ['a', 'o', 'u', 'aa', 'uu', 'ai', 'au', 'iu', 'oi', 'ou', 'ui', 'uo'];
let v1b = ['e', 'i', 'y', 'ä', 'ö', 'ii', 'ää', 'ei', 'ie', 'yi', 'yö', 'äi', 'äy', 'öi', 'öy'];
let v2a = ['a', 'i', 'o', 'u'];
let v2b = ['i', 'y', 'ä', 'ö'];
let c1 = ['h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v'];
let c3a = ['h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v'];
let c3b = ['kk', 'll', 'mm', 'nn', 'pp', 'rr', 'ss', 'tt'];
// wenn C3 t und V2 i ist, wird C3 zu s

let c2a = ['h', 'l', 'n', 'r', 's']
// c3=k,t; c3avar==2||9

let c2b = ['h', 'l', 'm', 'r', 's']
// c3=p; c3avar==6

let c2c = ['k', 'n', 'p', 't']
// c3=s; c3avar==8

$('#button1').on ('click', () => {
    let length = wordlength();
    let a = cointoss();
    let c3afix = c3avar();
    console.log ('length: '+length);
    console.log ('a: '+a);
    if (a===1) {        
        var v1fin = v1a[Math.floor(Math.random()*v1a.length)];
    } else {
        var v1fin = v1b[Math.floor(Math.random()*v1b.length)];
    }
    let b = cointoss();
    console.log ('b: '+b);
    if (b === 1){
        var c3fin = c3a[c3afix];
    } else {
        var c3fin = c3b[Math.floor(Math.random()*c3b.length)];
    }if (a===1) {        
        var v2fin = v2a[Math.floor(Math.random()*v2a.length)];
    } else {
        var v2fin = v2b[Math.floor(Math.random()*v2b.length)];
    }
    if (length<=3) {
        var c1fin = '';
        var c2fin = '';
    } else {
        if (length<=4) {
            var c1fin = c1[Math.floor(Math.random()*c1.length)];
            var c2fin = '';
        } else {
            var c1fin = c1[Math.floor(Math.random()*c1.length)];
            if (b===1) {
                if (c3afix===2||9) {
                    c2fin = c2a[Math.floor(Math.random()*c2a.length)];
                }
                if (c3afix===6) {
                    c2fin = c2b[Math.floor(Math.random()*c2b.length)];
                }
                if (c3afix===8) {
                    c2fin = c2c[Math.floor(Math.random()*c2c.length)];
                }
            } else {
                var c2fin ='';
            }
        }
    }
    $('h1').empty();
    $('body').append ('<h1>'+c1fin+v1fin+c2fin+c3fin+v2fin+'</h1>');
    // document.body.innerHTML = v1fin;
})