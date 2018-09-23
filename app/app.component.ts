import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Select";
  searchText = '';
  selectedTabIndex;
  showDropDown = false;
  dropdownList = [];
  ngOnInit() {
    this.dropdownList = [
      { id: 1, itemName: "India" },
      { id: 2, itemName: "Singapore" },
      { id: 3, itemName: "Australia" },
      { id: 4, itemName: "Canada" },
      { id: 5, itemName: "South Korea" },
      { id: 6, itemName: "Germany" },
      { id: 7, itemName: "France" },
      { id: 8, itemName: "Russia" },
      { id: 9, itemName: "Italy" },
      { id: 10, itemName: "Sweden" }
    ];
  }
  selected (val): void {
    this.selectedTabIndex = val.id;
    this.title = val.itemName;
    this.toggleDropDown();
  }
  toggleDropDown ():void {
    this.showDropDown = !this.showDropDown; 
  }
}
