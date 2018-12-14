import { FormGroup } from "@angular/forms";
//import { UploadFileService } from "../../sevices/upload-file/uploadfile.service";

export class formMange {

    private form: FormGroup;
    private file;
    constructor() {
    }
    setForm(form) {
        this.form = form;
    }
    markAllFeildsTouched() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].markAsTouched()
        });
    }

    isFieldValid(ControlName) {
        return this.form.controls[ControlName].touched && this.form.controls[ControlName].invalid

    }

    get isFormValid() {
        this.markAllFeildsTouched()
        return this.form.valid;
    }
    get FormValue() {
        return this.form.value;
    }
    resetForm() {
        this.form.reset()
    }
    setFormErrors(errors) {
        Object.keys(errors).forEach(error => {
            if (this.form.controls[error]) {
                this.form.controls[error].setErrors({ 'incorrect': true })
            }
        })
    }
}