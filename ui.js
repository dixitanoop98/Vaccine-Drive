class UI{
    constructor(){
        this.pincode=document.querySelector('#profile')
    }
    showCenter(data){
       // let size=data.sessions.length;
        let output='';
        data.sessions.forEach(function(center){
            output+=`
            <div class="card card-body mb-2">
    <div class="row"> 
        <div class="col md-6">
            <h5>${center.name}</h5>
        </div>
        <div class="col md-6">
            <span class="badge badge-primary">${center.vaccine}</span>
            <span class="badge badge-secondary">Dose 1 Available:${center.available_capacity_dose1}</span>
            <span class="badge badge-success">Dose 2 Available:${center.available_capacity_dose2}</span>
            <span class="badge badge-danger">Min Age:${center.min_age_limit}</span>
            <span class="badge badge-warning">Fee:${center.fee}</span>
        </div>
    </div> 

</div>
            `
        })
        this.pincode.innerHTML=output;
    }
}