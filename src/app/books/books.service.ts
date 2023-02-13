import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        img: 'https://www.britishbook.ua/upload/resize_cache/iblock/b5e/00tvje1em6ci4qlkxw3oue7hxc6p9rzg/295_448_174b5ed2089e1946312e2a80dcd26f146/kniga_the_seven_husbands_of_evelyn_hugo.jpg',
        price: 700,
      },
      {
        name: 'It Ends With Us',
        author: 'Colleen Hoover',
        img: 'https://www.britishbook.ua/upload/resize_cache/iblock/ffd/06rzwvp4301pjxbur7smhms81fptvhvg/230_350_174b5ed2089e1946312e2a80dcd26f146/kniga_it_ends_with_us.jpg',
        price: 800,
      },
      {
        name: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        img: 'https://www.britishbook.ua/upload/resize_cache/iblock/c8f/kxnjh2v1wpn3uokqx4qgnsnutsbjfafh/292_448_174b5ed2089e1946312e2a80dcd26f146/kniga_call_me_by_your_name_book_1_film_tie_in.jpg',
        price: 700,
      },
      {
        name: 'It Ends With Us',
        author: 'Colleen Hoover',
        img: 'https://www.britishbook.ua/upload/resize_cache/iblock/05d/7afop4vkqbunrnofurzcg81j7mssrffu/428_640_174b5ed2089e1946312e2a80dcd26f146/kniga_harry_potter_and_the_prisoner_of_azkaban.jpeg',
        price: 800,
      },
      {
        name: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        img: 'https://www.britishbook.ua/upload/resize_cache/iblock/ffe/j829f8bmdk76d4u7a9iw4a38ucyidncc/397_606_174b5ed2089e1946312e2a80dcd26f146/kniga_100_selected_stories_of_o_henry.jpg',
        price: 700,
      },
      {
        name: 'It Ends With Us',
        author: 'Colleen Hoover',
        img: 'https://www.britishbook.ua/upload/resize_cache/iblock/93e/3kxybi37pg4ri8e7b3f0jq7bkt0mzdm6/283_430_174b5ed2089e1946312e2a80dcd26f146/kniga_looking_for_alaska.jpg',
        price: 800,
      },
      {
        name: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        img: 'https://www.britishbook.ua/upload/resize_cache/iblock/c34/zytw3yozk8kdglhklc317mc793azb5ab/291_448_174b5ed2089e1946312e2a80dcd26f146/kniga_the_midnight_library.jpg',
        price: 700,
      },
      {
        name: 'Violet Bent Backwards Over the Grass',
        author: 'Lana Del Rey',
        img: 'https://www.britishbook.ua/upload/resize_cache/iblock/2ef/jtrsao5tyop8tqibrvbm0ekr5r4larwh/292_448_174b5ed2089e1946312e2a80dcd26f146/kniga_violet_bent_backwards_over_the_grass.jpg',
        price: 800,
      },
    ];
  }
}
