import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('toggleMenu debería alternar sidebarOpen', () => {
    expect(component.sidebarOpen).toBeFalse();

    component.toggleMenu();
    expect(component.sidebarOpen).toBeTrue();

    component.toggleMenu();
    expect(component.sidebarOpen).toBeFalse();
  });

  it('fullPageScroll debería llamar scrollIntoView y cerrar sidebar si estaba abierto', () => {
    const mockElement = { scrollIntoView: jasmine.createSpy('scrollIntoView') };
    spyOn(document, 'getElementById').and.returnValue(mockElement as any);

    component.sidebarOpen = true;
    component.fullPageScroll('about');

    expect(document.getElementById).toHaveBeenCalledWith('about');
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(component.sidebarOpen).toBeFalse();
  });

  it('fullPageScroll no debería fallar si el elemento no existe', () => {
    spyOn(document, 'getElementById').and.returnValue(null);

    component.sidebarOpen = true;
    component.fullPageScroll('no-existe');

    expect(component.sidebarOpen).toBeFalse();
  });

  it('onClickedOutside debería cerrar sidebar si estaba abierto', () => {
    component.sidebarOpen = true;
    component.onClickedOutside(new Event('click'));
    expect(component.sidebarOpen).toBeFalse();
  });

  describe('onWindowScroll', () => {
    beforeEach(() => {
      // crear DOM falso
      const section1 = document.createElement('div');
      section1.classList.add('spy-section');
      section1.setAttribute('spyTarget', 'section1');
      Object.defineProperty(section1, 'offsetTop', { value: 100 });
      Object.defineProperty(section1, 'offsetTop', { value: 100 });

      const section2 = document.createElement('div');
      section2.classList.add('spy-section');
      section2.setAttribute('spyTarget', 'section2');
      Object.defineProperty(section2, 'offsetTop', { value: 400 });

      document.body.appendChild(section1);
      document.body.appendChild(section2);
    });

    afterEach(() => {
      document.querySelectorAll('.spy-section').forEach(el => el.remove());
    });

    it('debería cambiar currentSection según scrollY', () => {
      spyOnProperty(window, 'scrollY').and.returnValue(50);
      component.onWindowScroll();
      expect(component.currentSection).toBe('section1');
    });
  });
});
