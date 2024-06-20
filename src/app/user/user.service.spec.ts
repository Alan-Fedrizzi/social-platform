import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    // antes de cada teste, vamos criar a new instance of the service
    TestBed.configureTestingModule({});
    // como é um service, tem que ser inject
    service = TestBed.inject(UserService);
  });

  // testa se o service foi criado
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // testa o getUsers
  it('should get users', () => {
    // como retorna um Observable, vamos subscribe
    service.getUsers().subscribe((users) => {
      expect(users.length).toBeGreaterThan(0);
    });
  });
});
