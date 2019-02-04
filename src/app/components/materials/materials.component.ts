import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/services/materials.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  material :Array<any> = [];
  Usermaterial :Array<any> = [];
  category :Array<any>=[];
  user :any;
  userId :number;
  catname :any= [];
  constructor(private mService :MaterialsService,private authSer :AuthService) { }

  ngOnInit() {
    this.user = this.authSer.getUserFromLocaleStorge();
    console.log(this.user.user.id);
    this.userId = this.user.user.id;
    this.mService.getUserMaterial().subscribe(res=>{
      this.material = res;
      console.log(this.material);
    })
    this.mService.getUserMaterials(this.user.user.id).subscribe(res=>{
      this.Usermaterial = res;
      console.log(this.Usermaterial);
    });
   
  }

}
