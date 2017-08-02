import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'http://twistedsifter.files.wordpress.com/2014/02/giant-triangle-google-earth.jpg?w=1342&h=744' },
      { name: 'http://twistedsifter.files.wordpress.com/2014/02/swastika-shaped-building-coronado-california-google-earth-maps.jpg?w=1342&h=744' },
      { name: 'http://twistedsifter.files.wordpress.com/2014/02/side-profile-of-a-face-google-earth.jpg?w=1342&h=744'},
      { name: 'http://thethings2.imgix.net/wp-content/uploads/2017/03/2-marum-lava-lake-google-blog.png'},
      { name: 'https://www.gstatic.com/prettyearth/assets/full/2433.jpg'}
    ]
  }
  title = 'Coursel ';
}
