import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb(reqInfo?: RequestInfo): {} {
    const products = [
      { id: 10, name: 'Zero', price: 401,description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quae.' },
      { id: 11, name: 'Mr. Nice', price: 915,description: 'Perferendis, dolorem illum nesciunt tenetur quae dicta quia nostrum? Eum.' },
      { id: 12, name: 'Narco', price: 109,description: 'Amet quaerat delectus, vitae atque exercitationem voluptatem ratione repellat mollitia?' },
      { id: 13, name: 'Bombasto', price: 145,description: 'Officia et numquam dolorum aspernatur molestiae eius fugiat ipsum possimus!' },
      { id: 14, name: 'Celeritas', price: 218,description: 'Quis sunt quod modi. Adipisci eum eaque nobis iusto explicabo?' },
      { id: 15, name: 'Magneta', price: 441,description: 'Dolores natus dolore rem eaque unde quo earum doloribus ut?' },
      { id: 16, name: 'RubberMan', price: 861,description: 'Numquam placeat ipsa facilis nostrum quia voluptatem aperiam ex animi!' },
      { id: 17, name: 'Dynama', price: 281,description: 'Harum possimus illum mollitia odio maxime commodi magni dolorum laudantium?' },
      { id: 18, name: 'Dr IQ', price: 518,description: 'Ut, eos ullam! Iure dolorem in quaerat ratione odio? Illo?' },
      { id: 19, name: 'Magma', price: 142,description: 'Rem consectetur ea recusandae officiis! Cum voluptatem numquam suscipit vitae!' },
      { id: 20, name: 'Tornado', price: 415,description: 'ipsa facilis iunt tenetur qu ur ea recusandae offic atem numqu' },
    ];
    return { products };
  }
}









