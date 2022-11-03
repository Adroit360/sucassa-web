import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';

@Component({
    templateUrl: './leads.component.html',
    selector: 'app-leads',
})
export class LeadsComponent implements OnInit {
    items!: MenuItem[];

    products!: Product[];

    contacts!: any[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    displayModal = false;

    addContactModal = false;

    selectedCountry: any = null;

    countries: any = [];

    statuses: any[] = [];

    selectedStatus!: any;

    contactNote = '';

    contactId!: string;

    invalidNote = false;

    loading: boolean = false;

    title = '';

    titles: any[] = [];

    /**Form data */
    firstName = '';
    lastName = '';
    otherNames = '';
    email = '';
    country = '';
    referral = '';
    phoneNumber = '';
    dataLoading = false;

    constructor(
        private productService: ProductService,
        public layoutService: LayoutService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.productService
            .getProductsSmall()
            .then((data) => (this.products = data));

        this.onAllGetContacts();

        this.statuses = [
            { label: 'Done', value: 'done' },
            { label: 'On Hold', value: 'on-hold' },
            { label: 'Rejected', value: 'rejected' },
            { label: 'Pending', value: 'pending' },
        ];

        this.titles = [
            { label: 'Mr', value: 'Mr' },
            { label: 'Miss', value: 'Miss' },
            { label: 'Mrs', value: 'Mrs' },
        ];

        this.http
            .get('https://restcountries.com/v3.1/all')
            .subscribe((res: any) => {
                const result = res;
                result.forEach((element: any) => {
                    if (element.idd['suffixes']) {
                        this.countries.push({
                            name: element.name.common,
                            country: `${element.flag} ${
                                element.idd['root'] + element.idd['suffixes'][0]
                            }`,
                        });
                    }
                });
                this.selectedCountry = this.countries[0];
            });

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' },
        ];
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    showContactDetails(id: string, status: string) {
        this.displayModal = true;
        this.selectedStatus = this.statuses.filter(
            (item) => status === item.value
        )[0];
        this.contactId = id;
    }

    onAllGetContacts() {
        this.dataLoading = true;
        this.http
            .get('https://sucasa-api.herokuapp.com/api/contacts')
            .subscribe((res: any) => {
                this.contacts = res.contact;
                this.dataLoading = false;
            });
    }

    onAddContact() {
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phoneNumber,
            country: this.selectedCountry.name,
            otherName: this.otherNames,
            referral: this.referral,
            email: this.email,
            title: this.title,
        };

        this.loading = true;
        this.http
            .post(' https://sucasa-api.herokuapp.com/api/contacts', data)
            .subscribe((res: any) => {
                if (res.success) {
                    this.addContactModal = false;
                    this.loading = false;
                    this.onAllGetContacts();
                }
            });
    }

    onUpdateContactDetails() {
        if (!this.contactNote) {
            this.invalidNote = true;
            return;
        }
        const data = {
            status: this.selectedStatus.value.replace('-', ' '),
            note: this.contactNote,
        };
        this.loading = true;
        this.http
            .put(
                `https://sucasa-api.herokuapp.com/api/notes/${this.contactId}`,
                data
            )
            .subscribe((res: any) => {
                if (res.success) {
                    this.displayModal = false;
                    this.contactNote = '';
                    this.invalidNote = false;
                    this.loading = false;
                    this.onAllGetContacts();
                }
            });
    }
}
