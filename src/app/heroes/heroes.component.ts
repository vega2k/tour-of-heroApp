import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log(this.heroService);
  }

  ngOnInit() {
    console.log('ngOnInit() 메서드 호출');
    this.getHeroes();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() 메서드 호출');
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    /*this.heroes = this.heroService.getHeros();*/
    this.heroService.getHeros().subscribe(res => this.heroes = res);
  }
}
