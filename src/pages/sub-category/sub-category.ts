import { ProductDetailPage } from './../product-detail/product-detail';
import { DbserviceProvider } from './../../providers/dbservice/dbservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the SubCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-category',
  templateUrl: 'sub-category.html',
})
export class SubCategoryPage {

cat_id:any='';
  category_id:any;
  filter :any = {};
  prod_cat_list:any=[];
  prod_cat_list_id:any;
  state:any;
  loading:Loading;
  url:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service:DbserviceProvider,public loadingCtrl:LoadingController) {

    this.url=this.service.category_url;
    console.log(this.url);
  }

  ionViewDidLoad() {
    this.cat_id = this.navParams.get('id');
   
    console.log("id call========>",this.cat_id);
    console.log(this.category_id);
     this.get_subcategory('');

    console.log("sub cat call ==================================>");
    
    console.log(this.service);
    this.state= this.service.userStorageData.state;
    console.log(this.state);
    
    
  }
    get_subcategory(name)
    {
     
      this.presentLoading2();
      this.category_id=this.cat_id;
      console.log(this.category_id);
      console.log("id call 2========>",this.cat_id);
      this.filter.limit=0;
      this.filter.search=name;
      this.service.post_rqst({'filter':this.filter,'category_id':this.category_id},'app_master/childCategoryList')
    .subscribe((r)=>
    {
      console.log(r);
      this.loading.dismiss();
      this.prod_cat_list=r['category'];
      this.prod_cat_list_id=r['category']['id']
      console.log("this.prod_cat_list_id",this.prod_cat_list_id);
      console.log(this.prod_cat_list);


    })
    }
    get_subcategory1(id)
    {
             console.log(id);
              this.navCtrl.push(ProductDetailPage,{'id':id})

    }
    presentLoading2() 
    {
      this.loading = this.loadingCtrl.create({
        content: "",
        dismissOnPageChange: false
      });
      this.loading.present();
    }
}
