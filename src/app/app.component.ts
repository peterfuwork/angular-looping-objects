import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "testing-app";

  public payload = [
    {
      id: "A001",
      type: "text",
      header: "Address",
      name: "Address-AddressLine1",
      value: "1234 something Ave"
    },
    {
      id: "A002",
      type: "text",
      header: "Address",
      name: "Address-AddressLine2",
      value: "Suite #444"
    },
    {
      id: "A003",
      type: "text",
      header: "Address",
      name: "Address-City",
      value: "myNumber1City"
    },
    {
      id: "A004",
      type: "text",
      header: "Address",
      name: "Address-State",
      value: "OS"
    },
    {
      id: "A005",
      type: "text",
      header: "Address",
      name: "Address-Zip",
      value: "12345"
    },
    {
      id: "123",
      type: "table",
      test: "this is a test",
      header: "AddressOptions",
      value:
        '[{"Selected": "false","AddressLine1": "1234 W Wonderful AVE","AddressLine2": "Building 5 Floor 6","SANO": "1234","SASD": "W","SASN": "LINE","SATH": "AVE","CITY": "APPLEWOOD","STATE": "CA","ZIP": "90000","LD1": "","LV1": "","LD2": "Building","LV2": "5","LD3": "Floor","LV3": "6", "Id": "1"},{"Selected": "false","AddressLine1": "1234 W Wonderful ST","AddressLine2": "Building 2 Floor 2","SANO": "1234","SASD": "E","SASN": "LINE","SATH": "ST","CITY": "MAPLEWOOD","STATE": "CA","ZIP": "90001","LD1": "","LV1": "","LD2": "Building","LV2": "2","LD3": "Floor","LV3": "2","Id": "2"},{"Selected": "false","AddressLine1": "1235 W Wonderful AVE","AddressLine2": "Building 3 Floor 2","SANO": "1235","SASD": "W","SASN": "LINE","SATH": "ST","CITY": "HONEYWOOD","STATE": "CA","ZIP": "90002","LD1": "","LV1": "","LD2": "Building","LV2": "3","LD3": "Floor","LV3": "2", "Id": "3"}]'
    }
  ];

  removeDashUppercaseFirstLetter(value) {
    const removeDashAddSpaceBeforeCap = value
      .substring(value.lastIndexOf("-") + 1)
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .trim();
    const upperCaseValue =
      removeDashAddSpaceBeforeCap.charAt(0).toUpperCase() +
      removeDashAddSpaceBeforeCap.slice(1);
    return upperCaseValue;
  }
}
