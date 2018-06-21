function optionCheck(){
    var option = document.getElementById("senha").value;
    if(option == "MG"){
        document.getElementById("hiddenDiv").style.visibility ="visible";
    }
    if(option != "MG"){
        document.getElementById("hiddenDiv").style.visibility ="hidden";
    }
}