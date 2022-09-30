import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../order-details.service';


@Component({
  selector: 'app-menubuy',
  templateUrl: './menubuy.component.html',
  styleUrls: ['./menubuy.component.css']
})
export class MenubuyComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service:OrderDetailsService) { }

  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId){
      this.menuData = this.service.productDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
      console.log(this.menuData,'menuData>>');
    }
  }

}
