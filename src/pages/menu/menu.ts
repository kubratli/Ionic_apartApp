import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
export interface PageInterface{
  title:string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage { 
  rootPage='TabsPage';
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[]=[
   { title: 'Anasayfa', pageName: 'TabsPage', tabComponent: 'AnasayfaPage', index:0, icon: 'home'},
   { title: 'Odalar', pageName: 'TabsPage', tabComponent: 'OdalarPage', index:1, icon: 'md-arrow-dropdown-circle'},
   { title: 'Hizmetler', pageName: 'TabsPage', tabComponent: 'HizmetlerPage', index:2, icon: 'md-star'},
   { title: 'Hakkımızda', pageName: 'TabsPage', tabComponent: 'HakkimizdaPage', index:2, icon: 'md-information-circle'},
   { title: 'İletişim', pageName: 'TabsPage', tabComponent: 'IletisimPage', index:2, icon: 'md-contact'} 
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  
  openPage(page: PageInterface){
    let params={};

    if(page.index){
      params={ tabIndex: page.index};
    }

    if(this.nav.getActiveChildNav() && page.index != undefined){
     this.nav.getActiveChildNav().select(page.index);
    }
    else{
      this.nav.setRoot(page.pageName, params);
    }
 }

 isActive(page:PageInterface){
   let childNav=this.nav.getActiveChildNav();

   if(childNav){
     if(childNav.getSelected() && childNav.getSelected().root===page.tabComponent){
       return 'primary';
     }
     return 'dark';
   }

   if(this.nav.getActive() && this.nav.getActive().name === page.pageName)
     {      
        return'primary';
     }  }

}
