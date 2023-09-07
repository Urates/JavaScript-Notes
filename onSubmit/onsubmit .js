function ValidationEvent(){
    var name=document.getElementById("name").value;
    var name=document.getElementById("email").value;
    var name=document.getElementById("contact").value;
    var emailReg= /^([w-.]+@([w-]+.)+[w-]{2,4})?$/; //regular expression for Email
    
    //conditions
    if (name !='' && email !='' && contact !=''){
        if (email.match(emailReg)){
            if (document.getElementById('male').checked || document.getElementById("female").checked){
                if (contact.length==10){
                    alert("All type of validation has been done on OnSubmit event.");
                    return true;
                } else {
                    alert("The No. must be at least 10 digits long!");
                    return false;
                }else {
                    alert("You must select gender......!");
                    return false;
                }else {
                    alert("All fields are required....!");
                    return false;
                }
                }
                }
                }
            }
