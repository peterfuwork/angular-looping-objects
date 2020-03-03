import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"]
})
export class FormsComponent implements OnInit {
  public selectFormSection: string = "";
  public currentData: object[] = [
    { type: "BMW", model: "M3", color: "pink" },
    { type: "Fiat", model: "500", color: "white" }
  ];
  constructor() {}

  ngOnInit() {}

  returnZero() {
    return 0;
  }

  public formInfo = [
    {
      header: "FORM",
      paramList: [
        {
          isForm: true,
          formType: {
            ID: "IGE52",
            TITLE: "Dear form",
            LINE: "this is a form",
            COMPLETED: false
          },
          formFields: {
            section_one: {
              PID: "84D1",
              YEAR: "1995",
              DATE: "06-11-1995",
              EMAIL: "test@test5FN.testing.com",
              SIZE: "B4",
              LD: "10-30-2015",
              CODE: "80015U",
              PROJECTID: "B19HND91-487SXND3",
              LIC: "22S0H92-2847930",
              CNO: "BS061196-002-123",
              NUM: 8,
              RATE: 4,
              DESCRIPTION: "Hi my name is Mr. test. You do not know me!",
              JOB: "CEO of the planet Saturn",
              SUP: "SUN",
              PHONE: "TT_1926_130X",
              "N/TID": "1902-NGS2-286KN-2LSJN0S9-2I4860",
              "FLO(NO)": "Secret"
            },
            section_two: {
              BIT: "0000-1111-2222-3333",
              TAX: "3957-TAXX",
              ADSS1: "2760 W Monster Rd.",
              ADSS2: "SUITE #9",
              CITY: "Monsterwood",
              STATE: "UV",
              ZIP: "000X1-000XX11",
              TEL: "01-YY2-4810XX",
              FRD: "James D.",
              FP: "Pluto",
              SHOP: "DWT at work",
              CAR_MODEL: "02-8000X-12DR",
              KK65: "K12"
            },
            section_three: {
              YEAR: "2015",
              MONTH: "MAR",
              DAT: "23",
              DAY: "SUN",
              START: true,
              MESSAGE: "Nice day to test out data.",
              AUTHOR_ID: "213B0WO",
              AUTHOR: "Dr. Mac"
            }
          }
        }
      ]
    }
  ];

  public ExpendAccordionSection(event, formDetailSection) {
    console.dir(event.target);
    if (event.target.nextSibling.classList.contains("active")) {
      //true
      this.selectFormSection = "";
    } else {
      //false
      this.selectFormSection = formDetailSection.key;
    }
  }
}
