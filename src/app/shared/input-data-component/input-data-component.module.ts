import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { InputDataComponentComponent } from "./input-data-component.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        MaterialModule,
        FormsModule,
        CommonModule
    ],
    declarations: [InputDataComponentComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [InputDataComponentComponent]
})

export class InputDataComponentModule {}  