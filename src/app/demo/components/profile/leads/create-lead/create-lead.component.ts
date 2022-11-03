import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-create-lead',
    templateUrl: './create-lead.component.html',
    styleUrls: ['./create-lead.component.scss'],
})
export class CreateLeadComponent implements OnInit {
    items!: MenuItem[];

    activeMenu!: MenuItem;

    cardMenu: MenuItem[] = [];

    contact!: any;

    contactId!: string;

    loading = false;

    name: string = '';

    selectedCountry: any = null;

    countries: any = [];

    /**Form data */
    firstName = '';
    lastName = '';
    otherNames = '';
    email = '';
    country = '';
    referral = '';
    phoneNumber = '';
    dataLoading = false;

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

    onCreateLead() {
        return;
    }
}
