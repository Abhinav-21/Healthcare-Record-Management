
 async function getDoc_ID(){
    const response = await fetch('http://localhost:8000/update');
    const Doc_ID = await response.json();
    document.getElementById("activateModal").disabled = false;
    if(Doc_ID.ID == false){
        $("#cnf").html("Error Occured !");
    }
    else{
        $("#cnfHead").html("Data stored with Doc_ID :");
        $("#cnf").html(Doc_ID.ID);
    }
    $("#activateModal").click();
    document.getElementById("activateModal").disabled = false;
}


$("#cancel").click(function(){
    location.reload();
});

$("#submit").click(function(){
    setTimeout(getDoc_ID,7000);
});


async function getData(){
    const response = await fetch('http://localhost:8000/data');
    const data = await response.json();

   if(data){
        $('#doc').html('Patient with Doc_ID : '+data.Doc_ID);
        $('#date').val(data.Data_Uploading_Date);
        $('#email').val(data.Email);
        $('#name').val(data.Name);
        $('#age').val(data.Age);
        $('#gender').val(data.Gender);
        $('#blood_group').val(data.Blood_Group);
        $('#height').val(data.Height);
        $('#weight').val(data.Weight);
        $('#smoke').val(data.Smoking);
        $('#drink').val(data.Drinking);
        $('#tobacco').val(data.Tobacco);
        $('#disease1').val(data.Disease_1);
        $('#disease2').val(data.Disease_2);
        $('#disease3').val(data.Disease_3);
        $('#disease4').val(data.Disease_4);
        $('#disease5').val(data.Disease_5);
        $('#disease6').val(data.Disease_6);
        $('#covid').val(data.Covid_Vaccination_Status);
        $('#other').attr('placeholder',data.Other_problems_or_symptoms);
   }else{
    alert("Error");
   }

}

if(window.location.href == "http://localhost:8000/view-data"){
    getData();
}
