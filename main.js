let name = document.getElementById("name");
let id = document.getElementById("id");
let dept = document.getElementById("dept");
let cgpa = document.getElementById("cgpa");
let btn = document.getElementById("btn");


btn.addEventListener("click",function(e){
    e.preventDefault();
    if(name.value == false){
        alert("Insert Your  NAME please.");
    }else if( id.value == false){
        alert("Insert Your ID.");
    }else if( dept.value == false){
        alert("Insert Your  DEPT.");
    }else if( cgpa.value == false){
        alert("Insert Your CGPA.");
    }else{
        let tbody = document.getElementById("tbody");
        let tr =document.createElement('tr');

        // For adding Name 
        let td= document.createElement('td');
        td.innerHTML=name.value;
        tr.appendChild(td);


          // For adding ID 
          let td1= document.createElement('td');
          td1.innerHTML=id.value;
          tr.appendChild(td1);

           // For addin dept 
           let td2= document.createElement('td');
           td2.innerHTML=dept.value;
           tr.appendChild(td2);

            // For adding cgpa 
            let td3= document.createElement('td');
            td3.innerHTML=cgpa.value;
            tr.appendChild(td3);







        tbody.appendChild(tr);
        alert("Student Data Added. ");

    }
});
