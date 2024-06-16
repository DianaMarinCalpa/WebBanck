import { Component } from '@angular/core';
import { MotionComponent } from '../motion/motion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,MotionComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
games=[{id:1,text:'dadasdasdad'},{id:2,text:'dadasdasdad'},{id:3,text:'dadasddaswasdad'}]
favGame='';
getFavorite(gameName:string){
  this.favGame=gameName;
}

}
