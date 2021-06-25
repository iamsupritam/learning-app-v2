import { NgModule } from "@angular/core";
import { CustomSortPipe } from "./app-pipes/custom-sort.pipe";

@NgModule({
    imports: [],
    declarations: [CustomSortPipe],
    exports: [CustomSortPipe]
})

export class AppPipesModule { }