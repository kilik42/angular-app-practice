import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService: DataService) {


  }

  ngOnInit() {
     this.name = 'john doe';
     this.age = 30;
     this.email="test@test.com";
     this.address = {
       street: '50 main st',
       city: 'Boston',
       state: 'MA'
     }
     this.hobbies = ['write code', 'watch movies', 'listen to music'];
     this.dataService.getPosts().subscribe((posts)=>{
       this.posts = posts;
     });
  }

  onClick(){
    console.log('hello');
     this.name="marvin evins";
     this.hobbies.push('new hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    console.log(hobby);
    for (let i = 0;i< this.hobbies.length; i++){
      if(this.hobbies[i]== hobby){
        this.hobbies.splice(i);

      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
    
  }

}


interface Address{
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
