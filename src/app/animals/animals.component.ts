import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'http://static.boredpanda.com/blog/wp-content/uuuploads/perfect-timing-animal-pictures/amazing-animal-pictures-37.jpg' },
      { name: 'http://static.boredpanda.com/blog/wp-content/uuuploads/perfect-timing-animal-pictures/amazing-animal-pictures-44.jpg' },
      { name: 'http://static.boredpanda.com/blog/wp-content/uuuploads/perfect-timing-animal-pictures/amazing-animal-pictures-45.jpg'},
      { name: 'http://static.boredpanda.com/blog/wp-content/uuuploads/perfect-timing-animal-pictures/amazing-animal-pictures-7.jpg'},
      { name: 'http://static.boredpanda.com/blog/wp-content/uuuploads/perfect-timing-animal-pictures/amazing-animal-pictures-9.jpg'}
    ]
  }

  ngOnInit() {

    
  }

}
