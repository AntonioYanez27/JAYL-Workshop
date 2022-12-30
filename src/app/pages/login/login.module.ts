import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRouteModule } from "./login.route";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";

@NgModule({
    imports: [LoginRouteModule, FormsModule, MaterialModule],
    declarations: [LoginComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginModule {}