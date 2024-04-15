import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
// import { MapComponentComponent } from "../../components/map-component/map-component.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class ContactComponent {
  correo: string = '@'

  test : Date = new Date();
    focus: any;
    focus1: any;
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


    ngOnInit() {}
}
