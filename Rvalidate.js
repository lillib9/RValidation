function formvalidation(){
    let name = document.getElementById("nameid");
    let pass = document.getElementById("passid");
    let mail = document.getElementById("mailid");
    let number = document.getElementById("numberid");
    let language = document.getElementById("languageid");
    if(name.value.length<6 || name.value.length>30)
    {
        alert("Name should contains alphabets and the length should not be less than 6 characters");
    }
    else if(pass.value.length<6 || pass.value.length>40)
    {
        alert("Password should not be less than 6 characters length")
    } 
    else if(!(mail.value.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)))
    {
        alert("please enter valid mail id")
    }
    else if(number.value.length!=10)
    {
        alert("phone number should contain 10 digits only")
    }
    else if(language.value=='language')
    {
        alert("language is not selected")
    }
    else{
        document.write("data entered successfully")
    }
    }