import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-motion',
  standalone: true,
  imports: [CommonModule,UserComponent],
  templateUrl: './motion.component.html',
  styleUrl: './motion.component.css'
})
export class MotionComponent {
  @Input() username=''; 
  @Output() addMoveEvent= new  EventEmitter<string>()

  games=[
    {id:1,text:'primer movimiento',mov:2342121},
    {id:2,text:'segundo movimiento',mov:2342121},
    {id:3,text:'tercer movimiento',mov:2342121}
  ]
  greet(){
    alert('Hola')
  }
  fav(gameName:string){
    this.addMoveEvent.emit(gameName);
  }

}
