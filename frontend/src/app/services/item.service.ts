import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})

export class ItemService {
    private items: Item[] | any = [
        {
            id:1,
            name: 'Chicken Sandwich',
            price: 5.99,
            description: 'A delicious grilled chicken sandwich',
            meat: 'chicken',
            image: '../../assets/chicken_sandwich.png'
        },

        {
            id:2,
            name: 'Chicken Salad',
            price: 6.99,
            description: 'A delicious chicken salad with feta cheese',
            meat: 'chicken',
            image: '../../assets/chicken_salad.png'
        },

        {
            id:3,
            name: 'Chicken Soup',
            price: 4.99,
            description: 'A delicious chicken soup with vegetables',
            meat: 'chicken',
            image: '../../assets/chicken_soup.png'
        },

        {
            id:4,
            name: 'Beef Burger',
            price: 7.99,
            description: 'A hearty classic burger with fries',
            meat: 'beef',
            image: '../../assets/beef_burger.png'
        },

        {
            id:5,
            name: 'Ramen Noodles',
            price: 7.99,
            description: 'Japanese style ramen noodles with chicken',
            meat: 'chicken',
            image: '../../assets/chicken_ramen.png'
        },

        {
            id:6,
            name: 'Veggie Soup',
            price: 5.99,
            description: 'A delicious vegetable soup with tofu',
            meat: 'vegetarian',
            image: '../../assets/vegetarian_soup.png'
        },

        {
            id:7,
            name: 'Italian Salad',
            price: 2.99,
            description: 'Classic Italian salad',
            meat: 'vegetarian',
            image: '../../assets/vegetarian_salad.png'

        },

        {
            id:8,
            name: 'Steak',
            price: 6.99,
            description: 'Cooked to your liking',
            meat: 'beef',
            image: '../../assets/beef_steak.png'
        },

        {
            id:9,
            name: 'Falafel Wrap',
            price: 5.99,
            description: 'A delicious falafel wrap with fries',
            meat: 'vegetarian',
            image: '../../assets/vegetarian_wrap.png'
        },
    ];

    getItems(): Item[] | any {
        return this.items;
    }
}