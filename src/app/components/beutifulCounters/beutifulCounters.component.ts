import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-beutiful-counters',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './beutifulCounters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeutifulCountersComponent implements OnInit {

  ngOnInit(): void {
    // Instancia de CountUp para el primer contador
    const countOptions1 = {
      startVal: 0,
      duration: 2,
  };
  const countUp1 = new CountUp('state1', 50, countOptions1);
  if (!countUp1.error) {
      countUp1.start();
  } else {
      console.error(countUp1.error);
  }

  // Instancia de CountUp para el segundo contador
  const countOptions2 = {
      startVal: 0,
      duration: 2,
  };
  const countUp2 = new CountUp('state2', 40, countOptions2);
  if (!countUp2.error) {
      countUp2.start();
  } else {
      console.error(countUp2.error);
  }

  // Instancia de CountUp para el tercer contador
  const countOptions3 = {
      startVal: 0,
      duration: 2,
  };
  const countUp3 = new CountUp('state3', 25, countOptions3);
  if (!countUp3.error) {
      countUp3.start();
  } else {
      console.error(countUp3.error);
  }

   // Instancia de CountUp para el cuarto contador
   const countOptions4 = {
      startVal: 0,
      duration: 2,
  };
  const countUp4 = new CountUp('state4', 6, countOptions4);
  if (!countUp4.error) {
      countUp4.start();
  } else {
      console.error(countUp4.error);
  }
  }

}
