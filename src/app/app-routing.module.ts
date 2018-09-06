import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransaksiComponent } from "./components/main-content/transaksi/transaksi.component";
import { SaldoComponent } from "./components/main-content/saldo/saldo.component";

const routes: Routes = [
  {
    path: "transaksi",
    component: TransaksiComponent
  },
  {
    path: "saldo",
    component: SaldoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
