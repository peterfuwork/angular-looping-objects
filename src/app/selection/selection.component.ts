import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-selection",
  templateUrl: "./selection.component.html",
  styleUrls: ["./selection.component.scss"]
})
export class SelectionComponent implements OnInit {
  @Input() updateAddresses: any = [];
  @Output() updateAddressesChange = new EventEmitter();

  public displayAddress = [
    {
      addressline1: "1234 W LINE AVE",
      addressline2: "Building 5 Floor 6",
      city: "APPLEWOOD",
      state: "CA",
      zip: "91234"
    },
    {
      addressline1: "1234 E LINE ST",
      addressline2: "Building 2 Floor 2",
      city: "MAPLEWOOD",
      state: "CA",
      zip: "91234"
    },
    {
      addressline1: "1235 W LINE ST",
      addressline2: "Building 3 Floor 2",
      city: "HONEYWOOD",
      state: "CA",
      zip: "91242"
    }
  ];

  constructor() {}

  ngOnInit() {}

  returnZero() {
    return 0;
  }

  onSelectChange(event, eachAddress) {
    const checked = event.source.checked;
    const parseValue = JSON.parse(this.updateAddresses);

    console.log(eachAddress);

    parseValue.forEach(obj => {
      if (
        obj["AddressLine1"] == eachAddress.value["addressline1"] &&
        obj["AddressLine2"] == eachAddress.value["addressline2"] &&
        obj["CITY"] == eachAddress.value["city"] &&
        obj["STATE"] == eachAddress.value["state"] &&
        obj["ZIP"] == eachAddress.value["zip"]
      ) {
        obj["Selected"] = true;
      } else {
        obj["Selected"] = false;
      }
    });

    this.updateAddresses = JSON.stringify(parseValue);
    this.updateAddressesChange.emit(this.updateAddresses);
    console.log(event);
    console.log(eachAddress);
  }
}
