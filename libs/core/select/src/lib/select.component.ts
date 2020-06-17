import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef, EventEmitter,
  HostListener,
  Input, Output,
  QueryList,
  Renderer2
} from '@angular/core';
import { MenuItemComponent } from '@aflac/core/menu';
import { IMenuItem } from '@aflac/core/menu';

@Component({
  selector: 'aflac-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements AfterContentInit {

  private _open = false;
  private _selectedItem: IMenuItem;
  private _selectedValue: string = null;
  private _items: IMenuItem[] = [];

  @ContentChildren(MenuItemComponent)
  contentItems: QueryList<MenuItemComponent>;

  @Input()
  label = '';

  @Input()
  get items(): IMenuItem[] {
    return this._items;
  }

  set items(value: IMenuItem[]) {
    this._items = value;
    this._selectItem();
  }

  @Input()
  get selectedValue(): string {
    return this._selectedValue;
  }

  set selectedValue(value: string) {
    this._selectedValue = value;
    this._selectItem();
  }

  @Output()
  selectionChange: EventEmitter<IMenuItem> = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.toggleOpen();
  }

  @HostListener('document:click', ['$event.target'])
  onClickDocument(targetElement) {

    const needToClose = !this.elementRef.nativeElement.contains(targetElement) && this.isOpen;

    if (needToClose) {
      this.close();
    }
  }

  constructor(public elementRef: ElementRef, private _renderer: Renderer2) {
  }

  ngAfterContentInit() {

    this.contentItems.map((element: MenuItemComponent) => {
      this.items = [...this.items, {
        text: element.text,
        value: element.value,
        icon: element.icon
      }];
    });

    this._selectItem();
  }

  get isOpen() {
    return this._open;
  }

  get selectedItem() {
    return this._selectedItem;
  }

  private _selectItem() {

    /** Nothing to do here since we don't have any items. */
    if (!this.items.length) {
      return;
    }

    this._checkItemsValue();

    /** Pre Select an element if was a value specified in the property selectedValue
     * and there's no selected item by the user.
     */
    if (this.selectedValue) {
      this._setSelectedItem(this.selectedValue);
      return;
    }

    /** Select the first item if it's needed */
    this._selectedItem = this.items[0];
  }

  private _addOrRemoveClass() {
    this._renderer[this.isOpen ? 'addClass' : 'removeClass'](this.elementRef.nativeElement, 'open');
  }

  private _getItemFromValue(value: any): IMenuItem {
    return this.items.find(item => item.value.toString() === value.toString());
  }

  private _setSelectedItem(value: any) {

    const selectedItem = this._getItemFromValue(value);

    if (selectedItem) {
      this._selectedItem = selectedItem;
      this._selectedValue = value;
    }
  }

  toggleOpen() {
    this._openOrClose(!this._open);
  }

  open() {
    this._openOrClose(true);
  }

  close() {
    this._openOrClose(false);
  }

  handleItemClick(event: MouseEvent, item: IMenuItem) {

    event.preventDefault();
    event.stopImmediatePropagation();

    this.close();

    /**
     * If the item selected is the same as the current selection item
     * we avoid the trigger of the selectionChange event.
     */
    if (!this.selectedItem || item.value === this.selectedItem.value) {
      return;
    }

    this._setSelectedItem(item.value);

    this.selectionChange.emit(item);
  }

  private _openOrClose(openStatus: boolean) {
    this._open = openStatus;
    this._addOrRemoveClass();
  }

  /**
   * This method checks that all the menu items has a value
   * If not, an exception is thrown.
   */
  private _checkItemsValue() {
    this.items.map((menuItem: IMenuItem) => {
      if (menuItem.value === undefined) {
        throw new Error(`SelectItem: must have a value.`);
      }
    });
  }
}
