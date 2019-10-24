import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '', component: BookComponent,
    children:
      [
        // { path: '', redirectTo: 'job-posting', pathMatch: 'full' },
        // { path: 'job-posting', component: JobPostingComponent },
        // { path: 'questions', component: QuestionsComponent },
        // { path: 'question-categories', component: CategoriesComponent },
        // { path: 'assessments', component: AssessmentComponent },
        // { path: 'interview-panel', component: InterviewPanelComponent },
        // { path: 'onboarding-checklist', component: OnboardingChecklistComponent },
      ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class BookRoutingModule { }
