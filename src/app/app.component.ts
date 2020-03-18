import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "testing-app";

  public addresses = {
    id: "123",
    test: "this is a test",
    value:
      '[{"Selected": "false","AddressLine1": "1234 W LINE AVE","AddressLine2": "Building 5 Floor 6","SANO": "1234","SASD": "W","SASN": "LINE","SATH": "AVE","CITY": "APPLEWOOD","STATE": "CA","ZIP": "91234","LD1": "","LV1": "","LD2": "Building","LV2": "5","LD3": "Floor","LV3": "6"},{"Selected": "false","AddressLine1": "1234 E LINE ST","AddressLine2": "Building 2 Floor 2","SANO": "1234","SASD": "E","SASN": "LINE","SATH": "ST","CITY": "MAPLEWOOD","STATE": "CA","ZIP": "91234","LD1": "","LV1": "","LD2": "Building","LV2": "2","LD3": "Floor","LV3": "2"},{"Selected": "false","AddressLine1": "1235 W LINE ST","AddressLine2": "Building 3 Floor 2","SANO": "1235","SASD": "W","SASN": "LINE","SATH": "ST","CITY": "HONEYWOOD","STATE": "CA","ZIP": "91242","LD1": "","LV1": "","LD2": "Building","LV2": "3","LD3": "Floor","LV3": "2"}]'
  };
}
