import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AgeValidator } from './ValidatorFunction';

@Component({
  selector: 'app-learn-reactiveforms',
  templateUrl: './learn-reactiveforms.component.html',
  styleUrls: ['./learn-reactiveforms.component.css']
})
export class LearnReactiveformsComponent implements OnInit {

  formsModel:any;
  

  constructor(private fb:FormBuilder) 
  {
    this.createForm();
   }

   createForm()
   {
    //  this.formsModel=this.fb.group(
    //  {
    //    userName:[null, Validators.required],
    //    ssn:[null],
    //    passwordGroup:this.fb.group(
    //    {
    //      password:'',
    //      pconfirm:''
    //    }
    //    )
    //  })

  // this.formsModel=this.fb.group({
  //   dateRange:this.fb.group(
  //     {
  //         from:this.fb.control(''),
  //         to:this.fb.control('')
  //     }
  //   ),
  //   emails:this.fb.array(
  //     [
  //       new FormControl()
  //     ]
  //   )
    
  // })
  this.formsModel=this.fb.group({
    name:['', Validators.required],
    age:[0,AgeValidator()],
    // age:[0,[Validators.min(2),Validators.max(5)]],
    // email:['',Validators.email],
    // password:['',Validators.minLength(5)]
    })
   }
  OnSubmit()
   {
     console.log(this.formsModel.value)
   }
   addEmail()
   {
      this.formsModel.get('emails').push(
        new FormControl()
      )
   }
  ngOnInit(): void {
    this.onChanges()
  }

  onChanges()
  {
    this.formsModel.get('name').valueChanges
      .subscribe( (name: any)=> console.log(name))
    
   
    
  }

}
