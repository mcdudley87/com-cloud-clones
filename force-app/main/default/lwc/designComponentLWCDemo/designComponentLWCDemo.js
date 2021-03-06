import { LightningElement, api, track} from 'lwc';

export default class DesignComponentLWCDemo extends LightningElement {
    // tracking attributes values
    @track flag = false;
    @api showDetails = false;
    @api strName;
    @api empName;
    @api empDepartment;
    @api empLocation;
    @api empAge;
    @api empGender;
    @api backgroundColor;
    @api imageURL;
    @api webURL;
    @api descriptionURL;
    

    handleChange(event) {
        this.flag = event.target.checked;
    }
}