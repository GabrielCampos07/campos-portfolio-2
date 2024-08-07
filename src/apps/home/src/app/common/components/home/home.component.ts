import { Component } from '@angular/core';
import { AssetUrlPipe } from '../../shared/pipes/asset-url.pipe';
import { PERSONAL_INFO, WORK_EXPERIENCE } from '../../constants/work-experience.contants';
import { NgFor } from '@angular/common';
import { ANGULAR_SKILLS, OTHER_SKILLS } from '../../constants/skills.contants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AssetUrlPipe, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public personalInfo = PERSONAL_INFO;
  public workExperience = WORK_EXPERIENCE;
  public angularSkills = ANGULAR_SKILLS;
  public otherSkills = OTHER_SKILLS;
}
