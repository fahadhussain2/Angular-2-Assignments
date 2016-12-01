import {FormControl} from '@angular/forms';

export class CustomValidation{                          // class for custom validation
    static underscore(control: FormControl){
        if (control.value.indexOf('_')>=0)
        return null;

        return {underscorenotfound: true}
    }
}
