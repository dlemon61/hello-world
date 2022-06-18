import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Top 5 Favorite Movies';
  num: number = 0;
  showMe: boolean;
  toDate: Date = new Date();


movies: Movie[] = [
  {title: 'Beaches', genre: 'Drama', mainCharacter: 'Bette Midler', musicScore: 'Wind Beneath My Wings', premierDate: '12-21-1988', premierTime: '18:00:00 EST'},
  {title: 'West Side Story', genre: 'Musical', mainCharacter: 'Natalie Wood', musicScore: 'Tonight', premierDate: '10-18-1961', premierTime: '18:00:00 EST'},
  {title: 'Grease', genre: 'Musical', mainCharacter: 'Olivia Newton-John', musicScore: 'Hopelessly Devoted', premierDate: '06-16-1978', premierTime: '18:00:00 EST'},
  {title: 'Bad Boys II', genre: 'Action', mainCharacter: 'Will Smith', musicScore: 'Shake Ya Tail Feathers', premierDate: '07-18-2003', premierTime: '18:00:00 EST'},
  {title: 'Jerry McGuire', genre: 'Drama', mainCharacter: 'Tom Cruise', musicScore: 'Free Falling', premierDate: '12-13-1996', premierTime: '18:00:00 EST'},
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
  premierDate: string;
  premierTime: string;
  }

