
function changeFontStyle1(){
    var text1 = document.getElementById('text_1');
    var selected1 = document.getElementById('font_dropdown_1').value;
    if(selected1 === "bold"){
        text1.style.fontWeight = "700"
        new Effect.BlindDown(text1, {duration:1});
    }else if (selected1 === 'italic'){
        text1.style.fontStyle = "italic"
        new Effect.BlindDown(text1, {duration:1});
    }else if (selected1 === 'regular'){
        text1.style.fontStyle = "normal";
        text1.style.fontWeight = "500";
        new Effect.BlindDown(text1, {duration:1});
    }else if (selected1 === "light"){
        text1.style.fontWeight = "300"
        new Effect.BlindDown(text1, {duration:1});
        
    }else if (selected1 === "black"){
        text1.style.fontWeight = "900"
        new Effect.BlindDown(text1, {duration:1});
    }else {
        text1.style.fontStyle = "normal";
        text1.style.fontWeight = "normal";
        new Effect.BlindDown(text1, {duration:1});
    }};



function changeFontStyle2(){
    var text2 = document.getElementById('text_2');
    var selected2 = document.getElementById('font_dropdown_2').value;
    if(selected2 === "bold"){
        text2.style.fontWeight = "700"
        new Effect.BlindDown(text2, {duration:1});
    }else if (selected2 === 'italic'){
        text2.style.fontStyle = "italic"
        new Effect.BlindDown(text2, {duration:1});
    }else if (selected2 === 'regular'){
        text2.style.fontStyle = "normal";
        text2.style.fontWeight = "500";
        new Effect.BlindDown(text2, {duration:1});
    }else if (selected2 === "light"){
        text2.style.fontWeight = "300"
        new Effect.BlindDown(text2, {duration:1});
        
    }else if (selected2 === "black"){
        text2.style.fontWeight = "900"
        new Effect.BlindDown(text2, {duration:1});
    }else {
        text2.style.fontStyle = "normal";
        text2.style.fontWeight = "normal";
        new Effect.BlindDown(text2, {duration:1});
    }};

    function changeFontStyle3(){
    var text3 = document.getElementById('text_3');
    var selected3 = document.getElementById('font_dropdown_3').value;
    if(selected3 === "bold"){
        text3.style.fontWeight = "700"
        new Effect.BlindDown(text3, {duration:1});
    }else if (selected3 === 'italic'){
        text3.style.fontStyle = "italic"
        new Effect.BlindDown(text3, {duration:1});
    }else if (selected3 === 'regular'){
        text3.style.fontStyle = "normal";
        text3.style.fontWeight = "500";
        new Effect.BlindDown(text3, {duration:1});
    }else if (selected3 === "light"){
        text3.style.fontWeight = "300"
        new Effect.BlindDown(text3, {duration:1});
        
    }else if (selected3 === "black"){
        text3.style.fontWeight = "900"
        new Effect.BlindDown(text3, {duration:1});
    }else {
        text3.style.fontStyle = "normal";
        text3.style.fontWeight = "normal";
        new Effect.BlindDown(text3, {duration:1});
    }};

    function changeFontStyle4(){
        var text4 = document.getElementById('text_4');
        var selected4 = document.getElementById('font_dropdown_4').value;
        if(selected4 === "bold"){
            text4.style.fontWeight = "600"
            new Effect.BlindDown(text4, {duration:1});
        }else if (selected4 === 'italic'){
            text4.style.fontStyle = "italic"
            new Effect.BlindDown(text4, {duration:1});
        }else if (selected4 === 'regular'){
            text4.style.fontStyle = "normal";
            text4.style.fontWeight = "500";
            new Effect.BlindDown(text4, {duration:1});
        }else if (selected4 === "light"){
            text4.style.fontWeight = "300"
            new Effect.BlindDown(text4, {duration:1});
            
        }else if (selected4 === "black"){
            text4.style.fontWeight = "700"
            new Effect.BlindDown(text4, {duration:1});
        }else {
            text4.style.fontStyle = "normal";
            text4.style.fontWeight = "normal";
            new Effect.BlindDown(text4, {duration:1});
        }};
    