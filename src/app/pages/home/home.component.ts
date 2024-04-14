import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbModule, NgbDateStruct, NgbCarouselModule, NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import {  Renderer2, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import emailjs from '@emailjs/browser';
import { BeutifulCountersComponent } from '../../components/beutifulCounters/beutifulCounters.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    BeutifulCountersComponent

  ],
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {


    constructor(private renderer: Renderer2) {}


    private fb = inject(FormBuilder);

    public myForm: FormGroup = this.fb.group({
            name: [''],
            info: [''],
            message: ['']
        });


    sendEmail() {
        emailjs
            .send('service_5odvkub', 'template_tdrs38g', {
                from_name: this.myForm.value.name,
                to_name: "Carlos",
                message: this.myForm.value.message,
                info: this.myForm.value.info,
            }, {
                publicKey: 'YdtcJEmGXBJlSJWHQ',
            })
            .then(
                (response) => {
                console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                console.log('FAILED...', err);
                },
            );
    }





    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
    }
 }
