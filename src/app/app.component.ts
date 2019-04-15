import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  name = 'Angular';

  searchValue = '';
  alldata: any = [];
  sortName = null;
  sortValue = null;


  listOfData = [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York'
      },
      {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London'
      },
      {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No'
      },

      {
          key: '3',
          name: 'Polo',
          age: 32,
          address: 'Paris'
      },

      {
          key: '4',
          name: 'Jane',
          age: 23,
          address: 'Moscow'
      },

      {
          key: '5',
          name: 'Keni',
          age: 79,
          address: 'Pretoriak'
      },

      {
          key: '6',
          name: 'Jackson',
          age: 90,
          address: 'Hong Kong'
      },

      {
          key: '7',
          name: 'Bomboaa',
          age: 34,
          address: 'Abuja'
      },

      {
          key: '8',
          name: 'Okello',
          age: 43,
          address: 'Abuja'
      },

      {
          key: '9',
          name: 'Paul',
          age: 12,
          address: 'Nairobi.'
      },

      {
          key: '10',
          name: 'Jemi',
          age: 67,
          address: 'Kampala. 131'
      },

      {
          key: '11',
          name: 'Kyle',
          age: 33,
          address: 'Jinja 133 '
      },

      {
          key: '12',
          name: 'Panther',
          age: 44,
          address: 'Soroti 3'
      },

      {
          key: '14',
          name: 'Ben',
          age: 55,
          address: 'Kisumu'
      }
  ];

ngOnInit() {

  this.alldata = [...this.listOfData];
}

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();

  }

  search(): void {

    if (this.sortName) {
      const data = this.listOfData.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
      this.alldata = [...data];
    } else {
      this.alldata = this.listOfData;
    }

  }




}
