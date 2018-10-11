import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GlimpseService } from './glimpse.service';
import { filter, debounceTime, distinctUntilChanged} from "rxjs/operators"

@Component({
    selector: 'glimpse',
    templateUrl: 'glimpse.component.html',
    providers: [GlimpseService]
})

export class GlimpseComponent{
    searchControl = new FormControl();
    isLoading = false;
    
    users = [];
    
      constructor(private _glimpseService: GlimpseService){
      
      }
    
      ngOnInit(){
        this.searchControl.valueChanges
        .pipe( filter(text => text.length >= 6),
        debounceTime(1000), distinctUntilChanged())
        .subscribe(value =>{
          this.isLoading = true;
          this._glimpseService.getGlimpseData(value)
          .subscribe(data => {
            this.isLoading= false;
            this.users = data.results;
            console.log(data.results)
          })
        
      })
}
}