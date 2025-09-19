import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { ScrollSpyService } from 'ng-spy';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let spyService: jasmine.SpyObj<ScrollSpyService>;

  beforeEach(async () => {
    const spyServiceSpy = jasmine.createSpyObj('ScrollSpyService', ['spy']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ScrollSpyService, useValue: spyServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    spyService = TestBed.inject(
      ScrollSpyService
    ) as jasmine.SpyObj<ScrollSpyService>;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit and ngOnDestroy', () => {
    it('should subscribe to window scroll event on init and call onScroll', () => {
      spyOn(component, 'onScroll');
      component.ngOnInit();
      window.dispatchEvent(new Event('scroll'));
      expect(component.onScroll).toHaveBeenCalled();
    });

    it('should unsubscribe from window scroll event on destroy', () => {
      component.ngOnInit();
      spyOn(component['windowScroll$'], 'unsubscribe');
      component.ngOnDestroy();
      expect(component['windowScroll$'].unsubscribe).toHaveBeenCalled();
    });
  });

  describe('ngAfterViewInit', () => {
    it('should call spyService.spy', () => {
      component.ngAfterViewInit();
      expect(spyService.spy).toHaveBeenCalledWith({ thresholdBottom: 50 });
    });
  });

  describe('onScroll', () => {
    it('should set fixedHeader to true when scrollTop is 100 or more', () => {
      document.documentElement.scrollTop = 150;
      component.onScroll();
      expect(component.fixedHeader).toBe(false);
    });

    it('should set fixedHeader to false when scrollTop is less than 100', () => {
      document.documentElement.scrollTop = 50;
      component.onScroll();
      expect(component.fixedHeader).toBe(false);
    });
    
  });
});
