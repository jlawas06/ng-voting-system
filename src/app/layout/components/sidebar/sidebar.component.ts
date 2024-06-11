import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nvs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  mobileMenuActive = false;
}
