import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicios-component',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule
  ],
  templateUrl: './serviciosComponent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponentComponent { }
