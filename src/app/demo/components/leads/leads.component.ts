import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './leads.component.html',
    selector: 'app-leads',
})
export class LeadsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('hello');
    }
}
