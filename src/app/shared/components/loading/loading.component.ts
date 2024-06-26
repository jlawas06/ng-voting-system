import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nvs-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  @Input() show = false;
  @Input() message = '';
}
