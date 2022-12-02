class mobile{

    mobileName: string;
    mobileModel: number;
    
    constructor(mobileName: string,mobileModel: number){
        this.mobileName=mobileName;
        this.mobileModel=mobileModel;
    }

}
const myMobile=new mobile("Redmi",7);
console.log(myMobile.mobileName);
console.log(myMobile.mobileModel);

