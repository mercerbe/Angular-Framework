import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  languages:string[];
  posts:Post[];

  constructor(private dataService: DataService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'John Doe';
    this.email = 'test@gmail.com';
    this.age = 30;
    this.address = {
      street: '50 main street',
      city: 'Charlotte',
      state: 'NC'
    };
    this.languages = ['javascript', 'css', 'html', 'python'];
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    console.log("button clicked!");
    this.languages.push('New Language');
  }

  addLanguage(language){
    console.log(language);
    this.languages.unshift(language);
    return false;
  }

  deleteLanguage(language){
    console.log(language);
    for(let i = 0; i < this.languages.length; i++){
      if(this.languages[i] == language){
        this.languages.splice(i, 1);
      }
    }
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  tite:string,
  body:string,
  userId:number
}
