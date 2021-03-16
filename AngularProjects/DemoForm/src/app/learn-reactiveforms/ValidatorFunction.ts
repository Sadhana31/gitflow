import { AbstractControl, ValidatorFn } from "@angular/forms";

export function AgeValidator():ValidatorFn
{
    return((control:AbstractControl):{[key:string]:boolean}=>{
       
        let value =control.value
        if(value!== undefined && (value<18 || value>40))
        {
            return {'invalidAge':true}
        }
        else
            return null as any;
    })
}
