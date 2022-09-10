import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { EventService } from 'src/app/core/service/event.service';
import { ChatGroup } from 'src/app/shared/widget/chat-group/chat-group.model';
import { Chat } from '../models/chat.model';
import { LAYOUT_COLOR_LIGHT, LAYOUT_DETACHED, LAYOUT_VERTICAL, LAYOUT_WIDTH_FLUID, LEFT_SIDEBAR_THEME_LIGHT, LEFT_SIDEBAR_TYPE_DEFAULT, MENU_POSITION_FIXED, TOPBAR_THEME_DARK } from '../config/layout.model';
import { Task } from '../models/tasks.model';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})

export class RightSidebarComponent implements OnInit {

  // layout related config
  @Input() layoutType!: string;
  @Input() layoutColor!: string;
  @Input() layoutWidth!: string;
  @Input() menuPosition!: string;
  @Input() leftSidebarTheme!: string;
  @Input() leftSidebarType!: string;
  @Input() showSidebarUserInfo: boolean = false;
  @Input() topbarTheme!: string;
  hasTwoToneIcon: boolean = false;
  disableLeftBarSize: boolean = false;

  private isShowing: boolean = false;


  active: string = 'setting';

  rightSidebarClass = 'right-bar-enabled';

  constructor (
    private renderer: Renderer2,
    private eventService: EventService
  ) {
    // listen to event and open/hide the right sidebar
    // show
    this.eventService.subscribe('showRightSideBar', () => {
      this.show();
    });

    // hide
    this.eventService.subscribe('hideRightSideBar', () => {
      this.hide();
    });

  }


  ngOnInit(): void {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  ngOnChanges(): void {
    if (this.isShowing) {
      this.renderer.addClass(document.body, this.rightSidebarClass);
    } else {
      this.renderer.removeClass(document.body, this.rightSidebarClass);
    }
  }

  /**
* changes left sidebar type based on screen dimensions
*/
  updateDimensions(): void {
    if (window.innerWidth <= 991) {
      this.disableLeftBarSize = true;
    }
    else if (window.innerWidth > 991) {
      this.disableLeftBarSize = false;
    }
  }

  /**
   * Shows the sidebar
   */
  show(): void {
    this.isShowing = true;
    this.renderer.addClass(document.body, this.rightSidebarClass);
  }

  /**
   * Hide the sidebar
   */
  hide(): void {
    if (document.body.classList.contains(this.rightSidebarClass)) {
      this.renderer.removeClass(document.body, this.rightSidebarClass);
      this.isShowing = false;
    }
  }

  /**
 * Change the layout color
 * @param color color
*/
  changeLayoutColor(color: string): void {
    this.layoutColor = color;
    this.changeTopbarTheme(color);
    this.eventService.broadcast('changeLayoutColor', color);
  }

  /**
 * Change topbar theme
 * @param theme name
 */
  changeTopbarTheme(theme: string): void {
    this.topbarTheme = theme;
    this.eventService.broadcast('changeTopbarTheme', theme);
  }

  /**
 * toggles visibility of sidebar user info
 * @param show true/false
 */
  toggleTwoToneIcons(show: boolean): void {
    this.hasTwoToneIcon = show;
    this.eventService.broadcast('toggleTwoToneIcons', this.hasTwoToneIcon);
  }

}
