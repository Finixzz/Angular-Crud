import { NgModule } from "@angular/core";
import { EmployeeFilterPipe } from "../employees/employee-filter.pipe";

@NgModule({
    declarations: [EmployeeFilterPipe],
    exports: [EmployeeFilterPipe]
  })
  export class PipesModule {}