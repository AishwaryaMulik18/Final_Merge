import { Component, OnInit } from '@angular/core';
import {HttpService} from '../quiz/quiz.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  userid:any;
  correct:number;
  answer:any=[];
  QuizId:number;
  count:number=0;
  scoredata:any;
  totalQuestions:number;
  constructor(private service:HttpService,private router:Router,private _Activatedroute:ActivatedRoute) {
    this._Activatedroute.params.subscribe(params=>
      this.QuizId = params.QuizId);
      console.log("Quizid-------"+this.QuizId);
       this.answer=this.router.getCurrentNavigation().extras.state.selectedOption;
      //  this.userid=this.router.getCurrentNavigation().extras.state.userid;
      this.count=this.router.getCurrentNavigation().extras.state.correctcount;
     
    }

  ngOnInit(): void {
    // clearInterval();
    this.service.deleteStatus(this.QuizId,sessionStorage.getItem('userid')).subscribe(() => alert('Delete successful'));

    this.service.getQuestions(this.QuizId).subscribe((result)=>{
      this.correct=0;
      this.totalQuestions = result.length;
      // this.answer.forEach((e,i) => {
      //   if(e[i].selectedOption == result[i].Answers)
      //   this.correct++;
      // });
      for(var i=0;i<result.length;i++){
        if(this.answer[i].selectedOption == result[i].Answers)
        this.correct++;
      }
      this.correct = this.correct+this.count;

      this.scoredata={
        quizid:this.QuizId,
        userid:sessionStorage.getItem('userid'),
        score:this.correct
      }
  
      this.service.saveScore(this.scoredata).subscribe(response => {
        console.log(response);
        console.log("score Submitted!");
        },
        error => {
          console.log(error);
          
        });

    });
    
  }

}

