import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string): any 
  {
   if(value.length==0 || filterString=='')
   {
     return value;
   }
  }
  
}


