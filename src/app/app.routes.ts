import { Routes } from '@angular/router';
import { TreeDynamicExampleComponent } from './tree-dynamic-example/tree-dynamic-example.component';

export const routes: Routes = [
    {path: '', redirectTo: '/tree', pathMatch: 'full'},
    { path: 'tree', component: TreeDynamicExampleComponent},
];
