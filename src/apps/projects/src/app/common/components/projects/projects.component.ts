import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { COMPANIES, PROJECTS } from "../../constants/project.constants";
import type { Company } from "../../interfaces/company.interface";
import type { Project } from "../../interfaces/project.interface";
import { AssetUrlPipe } from "../../shared/pipes/asset-url.pipe";

@Component({
	selector: "app-projects",
	standalone: true,
	imports: [AssetUrlPipe, NgFor, FormsModule],
	templateUrl: "./projects.component.html",
	styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
	public companies: Company[] = COMPANIES;
	public projects: Project[] = PROJECTS;

	public filteredCompanies: Company[] = this.companies;
	public filteredProjects: Project[] = this.projects;

	public companyFilter = "";
	public projectFilter = "";

	filterProjects(): void {
		this.filteredCompanies = this.companies.filter((company) =>
			company.name.toLowerCase().includes(this.companyFilter.toLowerCase()),
		);

		if (this.projectFilter) {
			this.filteredProjects = this.projects.filter((project) =>
				project.title.toLowerCase().includes(this.projectFilter.toLowerCase()),
			);
		} else {
			this.filteredProjects = this.projects;
		}
	}

	getCompanyProjects(companyId: number): Project[] {
		return this.filteredProjects.filter(
			(project) => project.companyId === companyId,
		);
	}
}
