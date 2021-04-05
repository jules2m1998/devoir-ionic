import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.page.html',
  styleUrls: ['./add-edit-data.page.scss'],
})
export class AddEditDataPage implements OnInit {
  isEdit: boolean;
  type: string;
  title: string;
  subTitle: string;
  amount: string;
  id: any;
  constructor() { }

  ngOnInit() {
  }

}
