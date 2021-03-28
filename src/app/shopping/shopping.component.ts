import { Component, OnInit } from '@angular/core';
import { ShoppingIngredients } from '../shared/shopping_list.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  ingredients: ShoppingIngredients[] = [
    new ShoppingIngredients('test ingredient', 3),
    new ShoppingIngredients('test ingredient', 5),
  ];
  constructor() {}

  ngOnInit(): void {}
}
