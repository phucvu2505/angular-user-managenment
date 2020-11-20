import { LoginAuthComponent } from './login-auth.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('LoginComponent', () => {
  let component: LoginAuthComponent;
  let fixture: ComponentFixture<LoginAuthComponent>;

  // tslint:disable-next-line: deprecation
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
