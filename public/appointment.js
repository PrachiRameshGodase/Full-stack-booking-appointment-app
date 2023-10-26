
// //on domContent loaded, get all previous bookings and show them on user interface;
// document.addEventListener("DOMContentLoaded", async () => {
//   showAllPreviousUsersOnScreen();

// })


// const showAllPreviousUsersOnScreen = async () => {
//   try {
//     //here we will send request for getting all previous bookings
//     const response = await axios.get('http://localhost:3000/previous-bookings');
//     console.log(response.data.appointments)

//     const appoinments = response.data.appointments;
//     console.log(appoinments)

//     appoinments.forEach(appoinment => {
//       document.getElementById('itemList').insertAdjacentHTML('beforeend',
//         `<li id=${appoinment.id}>
//       ${appoinment.name} - ${appoinment.email} - ${appoinment.phonenumber}

//       <button> Edit </button>
//       <button> Delete </button>

//       </li>`)
//     });


//   } catch (err) {
//     console.log(err)
//   }
// }



const form = document.getElementById("appointmentform")

//handler for form submit event
form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault()
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const obj = {
      name: name,
      email: email,
      phonenumber: phone
    }


    const response = await axios.post("http://localhost:3000/appointment", obj)

    console.log(response.data)
    const appointmentDetails = response.data.appointmentDetails

    showUserOnScreen()


  } catch (err) {
    console.log(err)
  }
})


// const showUserAppointmentOnScreen = async (appoinment) => {

//   try {

//     document.getElementById('itemList').insertAdjacentHTML('beforeend',
//       `<li id=${appoinment.id}>
//       ${appoinment.name} - ${appoinment.email} - ${appoinment.phonenumber}

//       <button> Edit </button>
//       <button> Delete </button>

//       </li>`)

//     //clear the input fields
//     clearInputFields()


//   } catch (err) {
//     console.log(err)
//   }

// }


const clearInputFields = () => {
  document.getElementById("name").value='';
  document.getElementById("email").value='';
  document.getElementById("phone").value='';

}
async function showUserOnScreen() {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML="";
  const response=await axios.get("http://localhost:3000/previous-bookings")
  
  const appointments=response.data.appointments;
  console.log(appointments)
  for(let i=0;i<appointments.length;i++){
  const appoinment=appointments[i];
console.log(appoinment.id)

console.log(appoinment.phonenumber)
  const li = document.createElement('li');
  li.id="li";
  const deletebtn = document.createElement('button')    //create delete button
  const editbtn = document.createElement('button')       //create edit button
  deletebtn.id = 'button1';
  deletebtn.innerText = 'Delete'; 
  
  //add eventListener with arrow
  deletebtn.onclick = async() => {
    const respone=await axios.delete(`http://localhost:3000/delete-booking/${appoinment.id}`)
    console.log(respone.data)
    itemList.removeChild(li);
  }
  

  editbtn.id = 'button2';
  editbtn.innerText = 'Edit'; 
  
  //add eventListener with arrow
  editbtn.onclick = async() => {
    const updatedData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phonenumber: document.getElementById('phone').value
  };

  const response = await axios.put(`http://localhost:3000/booking/${appoinment.id}`, updatedData);
  console.log(response.data);

    itemList.removeChild(li);
    //populating userdetails
    document.getElementById('name').value = appoinment.name;
    document.getElementById('email').value = appoinment.email;
    document.getElementById('phone').value = appoinment.phonenumber;
  }
  li.textContent = appoinment.name + '-' + appoinment.email + '-' + appoinment.phonenumber;
  li.appendChild(deletebtn) 
  li.appendChild(editbtn) 
  itemList.appendChild(li); 
}

clearInputFields()
}
//reload the all deatilsS
document.addEventListener("DOMContentLoaded",async()=>{
  showUserOnScreen();
  
})


