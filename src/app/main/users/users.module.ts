import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {UsersComponent} from './users.component';
import {MatAutocompleteModule, MatBadgeModule,
    MatBottomSheetModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule,
    MatExpansionModule, MatFormFieldModule,
    MatGridListModule, MatIconModule,
    MatInputModule, MatListModule,
    MatMenuModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule,
    MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';


@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,

        TranslateModule,
        FuseSharedModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatMomentDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,

    ],
    exports: [UsersComponent]
})
export class UsersModule {
}
