import {Component, OnInit} from '@angular/core';
import {ChallengeService} from "./challenge.service";
import {Challenge} from "./challenge";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  private challenges: Challenge[];

  constructor(private challengeService: ChallengeService) {
  }

  ngOnInit(): void {
    this.challengeService.getChallenges().subscribe((data: Challenge[]) => {
      this.challenges = data;
      console.log(data);
    })
  }

}
