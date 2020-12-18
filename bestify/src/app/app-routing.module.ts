import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserquizComponent } from './components/userDashBoard/userquiz/userquiz.component';
import { UsergameComponent } from './components/userDashBoard/usergame/usergame.component';
import { UserFavouriteComponent } from './components/userDashBoard/user-favourite/user-favourite.component';
import { PongComponent } from './components/game/pong/pong.component';
import { RockpapersissorsComponent } from './components/game/rockpapersissors/rockpapersissors.component';
import { CarComponent } from './components/game/car/car.component';
import { UserSidenavComponent } from './components/userDashBoard/user-sidenav/user-sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './service/auth-guard.service';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { DisplayQuizComponent } from './components/display-quiz/display-quiz.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: 'userprofile', component: UserSidenavComponent },
  { path: 'home',component:HomeComponent},
  { path: 'pong', component: PongComponent },
  { path: 'car', component: CarComponent },
  { path: 'rps', component: RockpapersissorsComponent },
  { path: 'userprofile/userQuiz', component: UserquizComponent },
  { path: 'userprofile/userGame', component: UsergameComponent },
  // { path: 'userprofile/userFavourite', component: UserFavouriteComponent,
  // canActivate: [AuthGuardService]},
  { path: 'userprofile/userFavourite', component: UserFavouriteComponent },
  {
    path:"Quiz/:QuizId/question/:id",component:QuizComponent
  },
  {
      path:"Quiz/category/:category/Quiz/:QuizId",component:QuestionsComponent
  },
  {
    path:"Quiz/category/:category",component:DisplayQuizComponent
  },
  {
    path:"result/:QuizId",component:ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
