import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-challenge-description',
  templateUrl: './challenge-description.component.html',
  styleUrls: ['./challenge-description.component.css']
})
export class ChallengeDescriptionComponent implements OnInit {
  testDescription: string = 'Given an array of integers, find the one that appears an odd number of times.\n' +
    '\n' +
    'There will always be only one integer that appears an odd number of times.\n' +
    '\n' +
    'Examples\n' +
    '[7] should return 7, because it occurs 1 time (which is odd).\n' +
    '[0] should return 0, because it occurs 1 time (which is odd).\n' +
    '[1,1,2] should return 2, because it occurs 1 time (which is odd).\n' +
    '[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).\n' +
    '[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).';

  constructor() {
  }

  ngOnInit(): void {

  }

}
