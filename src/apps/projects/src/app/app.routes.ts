import type { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () => import("./app.component").then((m) => m.AppComponent),
		children: [
			{
				path: "",
				redirectTo: "projects",
				pathMatch: "full",
			},
			{
				path: "projects",
				loadComponent: () =>
					import("./common/components/projects/projects.component").then(
						(m) => m.ProjectsComponent,
					),
			},
		],
	},
];
