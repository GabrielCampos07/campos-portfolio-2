import { Component } from '@angular/core';
import { AssetUrlPipe } from '../../shared/pipes/asset-url.pipe';
import { PERSONAL_INFO, WORK_EXPERIENCE } from '../../constant/work-experience';
import { NgFor } from '@angular/common';
import { ANGULAR_SKILLS, OTHER_SKILLS } from '../../constant/skills';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AssetUrlPipe, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  personalInfo = PERSONAL_INFO;
  workExperience = WORK_EXPERIENCE;
  angularSkills = ANGULAR_SKILLS;
  otherSkills = OTHER_SKILLS;
}
