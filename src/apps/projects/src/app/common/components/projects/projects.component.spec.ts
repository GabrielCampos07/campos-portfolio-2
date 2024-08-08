import { type ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { AssetUrlPipe } from "../../shared/pipes/asset-url.pipe";
import { ProjectsComponent } from "./projects.component";

describe("ProjectsComponent", () => {
	let component: ProjectsComponent;
	let fixture: ComponentFixture<ProjectsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProjectsComponent, FormsModule, AssetUrlPipe],
		}).compileComponents();

		fixture = TestBed.createComponent(ProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should filter projects by company name", () => {
		component.companyFilter = "Cebrace";
		component.filterProjects();
		fixture.detectChanges();

		const filteredCompanyNames = component.filteredCompanies.map(
			(company) => company.name,
		);
		expect(filteredCompanyNames).toEqual(["Cebrace"]);
	});

	it("should filter projects by project title", () => {
		component.projectFilter = "SISDOC";
		component.filterProjects();
		fixture.detectChanges();

		const filteredProjectTitles = component.filteredProjects.map(
			(project) => project.title,
		);
		expect(filteredProjectTitles).toContain("SISDOC");
	});

	it("should display the correct number of company logos", () => {
		const logos = fixture.debugElement.queryAll(By.css(".company-logo"));
		expect(logos.length).toBe(component.companies.length);
	});

	it("should display the correct project titles for a company", () => {
		component.companyFilter = "Cebrace";
		component.filterProjects();
		fixture.detectChanges();

		const cebraceProjects = component.getCompanyProjects(1);
		const displayedProjects = fixture.debugElement.queryAll(
			By.css(".card-title"),
		);

		displayedProjects.forEach((debugElement, index) => {
			expect(debugElement.nativeElement.textContent).toContain(
				cebraceProjects[index].title,
			);
		});
	});

	it("should update the project list when the project filter changes", () => {
		const initialProjectCount = component.filteredProjects.length;

		component.projectFilter = "SISDOC";
		component.filterProjects();
		fixture.detectChanges();

		expect(component.filteredProjects.length).toBeLessThan(initialProjectCount);
		expect(component.filteredProjects.length).toBe(1);
	});
});
