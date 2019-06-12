import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DonneeFakeDb } from './données/donnée.fakedb';
import { PrixFakeDb } from './données/prix.fakedb';
import { TypeFakeDb } from './données/type.fakedb';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Donnée
      donnees: DonneeFakeDb.donnees,
      // Prix
      'donnée-prix': PrixFakeDb.prixs,
      // Type
      'donnée-type': TypeFakeDb.types,
    };
  }
}
