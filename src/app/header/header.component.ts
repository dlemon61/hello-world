import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() name: string;
  @Output() onNameChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  changeName(word : string){
    this.onNameChanged.emit(word);
  }

}
