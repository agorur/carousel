import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waterfalls',
  templateUrl: './waterfalls.component.html',
  styleUrls: ['./waterfalls.component.scss']
})
export class WaterfallsComponent implements OnInit {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPmYZeaAnVJHb2wImEgH6jECvPGv0C99hRFvu8wOu1QI7kwrj8A' },
      { name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq1R-5eLGqMskZsITgmz7R3b8ock6mcX24IieZ2tT0Zf5xPXg' },
      { name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XYtpSwSOIjf5xkEqaQD4CmUIzZQA1azoHj-mt_Q2HiMZ4rjx1Q'},
      { name: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1tY0tOyxddu0LzZchshNUVWPmkEpVav3aCoQEYf0VQees6Pbhg'}
    ]
  }

  ngOnInit() {
  }

}
