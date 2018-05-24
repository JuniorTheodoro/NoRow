function optionCheck(){
    var option = document.getElementById("senha").value;
    if(option == "1"){
        document.getElementById("hiddenDiv").style.visibility ="visible";
    }
    if(option != "1"){
        document.getElementById("hiddenDiv").style.visibility ="hidden";
    }
}