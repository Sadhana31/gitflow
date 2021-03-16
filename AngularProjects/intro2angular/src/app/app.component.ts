import { Component } from '@angular/core';

function log(target:any,name:any,descriptor:any)
{
   console.log(target, name, descriptor)
   const original = descriptor.value
   original()
   descriptor.value=function()
   {
     console.log("hello tripathiji")
   }

   return descriptor
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intro2Angular';
  
  constructor()
  {
    this.aSimpleMethod()
  }

  @log
  aSimpleMethod()
  {
    console.log("hello sadhana")
  }
}

