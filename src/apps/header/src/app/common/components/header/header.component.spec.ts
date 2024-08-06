import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navbar with class navbar-expand-lg', () => {
    const navbar = fixture.debugElement.query(By.css('.navbar-expand-lg'));
    expect(navbar).toBeTruthy();
  });

  it('should have a brand link with text "Campos" and link to "home"', () => {
    const brandLink = fixture.debugElement.query(By.css('.navbar-brand'));
    expect(brandLink.nativeElement.textContent.trim()).toBe('Campos');
    expect(brandLink.attributes['routerLink']).toBe('home');
  });

  it('should have a Home link with text "Home" and correct icon', () => {
    const homeLink = fixture.debugElement.query(
      By.css('li a.nav-link[routerLink="home"]')
    );
    expect(homeLink).toBeTruthy();
    expect(homeLink.nativeElement.textContent.trim()).toContain('Home');
    const homeIcon = homeLink.query(By.css('i.fa-home'));
    expect(homeIcon).toBeTruthy();
  });

  it('should have a Projects link with text "Projects" and correct icon', () => {
    const projectsLink = fixture.debugElement.query(
      By.css('a[routerLink="projects"]')
    );
    expect(projectsLink).toBeTruthy();
    expect(projectsLink.nativeElement.textContent.trim()).toContain('Projects');
    const projectsIcon = projectsLink.query(By.css('i.fas.fa-tasks'));
    expect(projectsIcon).toBeTruthy();
  });

  it('should have a Contact link with text "Contact" and correct icon', () => {
    const contactLink = fixture.debugElement.query(
      By.css('a[routerLink="contact"]')
    );
    expect(contactLink).toBeTruthy();
    expect(contactLink.nativeElement.textContent.trim()).toContain('Contact');
    const contactIcon = contactLink.query(By.css('i.fas.fa-address-book'));
    expect(contactIcon).toBeTruthy();
  });
});
