// import { InMemoryDbService } from 'angular-in-memory-web-api';

// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//     const heroes = [
//       { id: 11, name: 'Mr. Nice' },
//       { id: 12, name: 'Narco' },
//       { id: 13, name: 'Bombasto' },
//       { id: 14, name: 'Celeritas' },
//       { id: 15, name: 'Magneta' },
//       { id: 16, name: 'RubberMan' },
//       { id: 17, name: 'Dynama' },
//       { id: 18, name: 'Dr IQ' },
//       { id: 19, name: 'Magma' },
//       { id: 20, name: 'Tornado' }
//     ];
//     return {heroes};
//   }
// }

import { InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const heroes = [
        { id:11, name: 'Mr. Nice', age:20},
        { id:12, name: 'Narco' , age:25},
        { id:13, name: 'Bombasto' , age:25},
        { id:14, name: 'Celeritas', age:30},
        { id:15, name: 'Magneta', age:40},
        { id:16, name: 'RubberMan', age:65},
        { id:17, name: 'Dynama', age:52},
        { id:18, name: 'Dr IQ', age:22},
        { id:19, name: 'Magma', age:15},
        { id:20, name: 'Tornado', age:62}

      ];
      return {heroes};
    }
  }