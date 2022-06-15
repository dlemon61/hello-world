import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'My Top Five Movie Favorites';

movies: Movie[] = [
  {title: 'Beaches', genre: 'Drama', mainCharacter: 'Bette Midler', musicScore: 'Wind Beneath My Wings'},
  {title: 'West Side Story', genre: 'Musical', mainCharacter: 'Natalie Wood', musicScore: 'Tonight'},
  {title: 'Grease', genre: 'Musical', mainCharacter: 'Olivia Newton-John', musicScore: 'Hopelessly Devoted'},
  {title: 'Bad Boys', genre: 'Action', mainCharacter: 'Will Smith', musicScore: 'Shake Ya Tail Feathers'},
  {title: 'Jerry McGuire', genre: 'Drama', mainCharacter: 'Tom Cruise', musicScore: 'Free Falling'},
]

  constructor() { }

  ngOnInit(): void {
  }
  trackByFn(index: any, item: any){
    return item.title
  }
  
}

class Movie {
  title: string;
  genre: string;
  mainCharacter: string;
  musicScore: string;
}

