import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AssetUrlPipe } from "../../../shared/pipes/asset-url.pipe";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [AssetUrlPipe, RouterModule],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
