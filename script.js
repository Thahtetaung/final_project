<script>
function changeFontWeight(dropdownId , textId){
    var text = document.getElementById(textId);
    var selected = document.getElementById(dropdownId).value;

    text.style.fontStyle = "normal";
    text.style.fontWeight = "normal";
    
    if(selected === "bold"){
        text.style.fontWeight = "700"
        new Effect.SlideDown(text)
    }else if (selected === 'italic'){
        text.style.fontStyle = "italic"
    }else if (selected === 'regular'){
        text.style.fontStyle = "normal";
        text.style.fontWeight = "500";
    }else if (selected === "light"){
        text.style.fontWeight = "300"
    }else if (selected === "black"){
        text.style.fontWeight = "900"
    }else {
        text.style.fontStyle = "normal";
        text.style.fontWeight = "normal";
    }
}

</script>