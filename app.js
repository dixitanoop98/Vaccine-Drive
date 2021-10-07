const cowin=new Cowin;
const ui=new UI;


const pincode=document.querySelector('#searchUser');
const date=document.querySelector('#date');
const submitPincode=document.querySelector('#submit-pincode');
submitPincode.addEventListener('click',()=>{
    let d=`${date.value.slice(8,11)}-${date.value.slice(5,7)}-${date.value.slice(0,4)}`;
    cowin.getData(pincode.value,d)
    .then((data)=>{
        if(data.error){
            //show alert of Invalid pincode
            console.log(data.error);
        }
        else if(data.sessions.length===0){
            console.log("Cannot Check for this date! Please Select in this week only");
        }
        else if(data.sessions){
            //console.log(data.sessions);
            ui.showCenter(data);
        }
        
    })
    .catch((e)=>{
        console.log("Something Went Wrong! Try Again!");
        console.log(e.error);
    })
})
