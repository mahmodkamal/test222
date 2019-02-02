import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/services/materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  material :Array<any> = [];
  constructor(private mService :MaterialsService) { }

  ngOnInit() {
    this.mService.getUserMaterial().subscribe(res=>{
      this.material = res;
      console.log(this.material);
    })
  }

}
