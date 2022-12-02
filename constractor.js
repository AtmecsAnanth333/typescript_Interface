var mobile = /** @class */ (function () {
    function mobile(mobileName, mobileModel) {
        this.mobileName = mobileName;
        this.mobileModel = mobileModel;
    }
    return mobile;
}());
var myMobile = new mobile("Redmi", 7);
console.log(myMobile.mobileName);
console.log(myMobile.mobileModel);
