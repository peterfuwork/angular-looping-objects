import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-selection",
  templateUrl: "./selection.component.html",
  styleUrls: ["./selection.component.scss"]
})
export class SelectionComponent implements OnInit {
  @Input() updatePayload: any = [];
  @Output() updatePayloadChange = new EventEmitter();

  public displayAddress = [
    {
      id: 1,
      addressline1: "1234 W Wonderful AVE",
      addressline2: "Building 5 Floor 6",
      city: "APPLEWOOD",
      state: "CA",
      zip: "90000"
    },
    {
      id: 2,
      addressline1: "1234 E Wonderful ST",
      addressline2: "Building 2 Floor 2",
      city: "MAPLEWOOD",
      state: "CA",
      zip: "90001"
    },
    {
      id: 3,
      addressline1: "1235 W Wonderful AVE",
      addressline2: "Building 3 Floor 2",
      city: "HONEYWOOD",
      state: "CA",
      zip: "90002"
    }
  ];

  constructor() {}

  ngOnInit() {}

  returnZero() {
    return 0;
  }

  onSelectChange(event, eachAddress) {
    const checked = event.source.checked;
    let headerArr = ["AddressLine1", "AddressLine2", "CITY", "STATE", "ZIP"];
    let tempAddressObj = {};

    this.updatePayload.forEach(payloadObj => {
      if (payloadObj.type == "table") {
        const parseValue = JSON.parse(payloadObj.value);

        parseValue.forEach(obj => {
          if (obj["Id"] == eachAddress.value["id"]) {
            obj["Selected"] = true;

            headerArr.map(header => {
              tempAddressObj[header] = obj[header];
            });
          } else {
            obj["Selected"] = false;
          }
        });
        payloadObj.value = JSON.stringify(parseValue);
      }
    });

    this.updatePayload.forEach(payloadObj => {
      if (payloadObj.type == "text") {
        const smallCapName = payloadObj.name.toLowerCase();

        for (let address in tempAddressObj) {
          let smallCapAddress = address.toLowerCase();
          if (smallCapName.includes(smallCapAddress)) {
            payloadObj.value = tempAddressObj[address];
          }
        }
      }
    });

    this.updatePayloadChange.emit(this.updatePayload);
    console.log(event);
    console.log(eachAddress);
  }
}
