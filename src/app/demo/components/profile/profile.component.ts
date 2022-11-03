import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    items!: MenuItem[];

    activeMenu!: MenuItem;

    cardMenu: MenuItem[] = [];

    contact!: any;

    contactId!: string;

    loading = false;

    name: string = '';

    constructor(private http: HttpClient, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.items = [{ label: 'Notes', icon: 'pi pi-fw pi-book' }];
        this.activeMenu = this.items[0];

        this.cardMenu = [
            {
                label: 'Save',
                icon: 'pi pi-fw pi-check',
            },
            {
                label: 'Update',
                icon: 'pi pi-fw pi-refresh',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash',
            },
        ];

        this.contactId = this.route.snapshot.params['id'];

        this.onGetContact(this.contactId);
    }

    onGetContact(id: string) {
        this.loading = true;
        this.http
            .get(`https://sucasa-api.herokuapp.com/api/contact/${id}`)
            .subscribe((response: any) => {
                const contact = response.contact;
                this.contact = contact;
                this.loading = false;
                this.name = `${contact.firstName || ''} ${
                    contact.lastName || ''
                } ${contact.otherNames || ''}`;
            });
    }
}
