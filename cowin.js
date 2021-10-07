
class Cowin{
    constructor(pincode,date)
    {
        this.pincode=pincode;
        this.date=date;
    }
    async getData(pin,dat)
    {
        const response=await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${dat}`);
        const responseData=await response.json();
        
        return responseData;
    }

}