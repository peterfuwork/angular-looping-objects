import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-testing",
  templateUrl: "./testing.component.html",
  styleUrls: ["./testing.component.scss"]
})
export class TestingComponent implements OnInit {
  @Input() testingData: object[];
  constructor() {}

  ngOnInit() {}
}
