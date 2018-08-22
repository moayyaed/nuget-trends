import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IPackageDownloadHistory} from './shared/common/package-models';

@Injectable({
  providedIn: 'root'
})
export class PackageInteractionService {

  private packageSelectedSource = new Subject<IPackageDownloadHistory>();
  private packagePlottedSource = new Subject<IPackageDownloadHistory>();
  private packageRemovedSource = new Subject<string>();

  packageSelected$ = this.packageSelectedSource.asObservable();
  packagePlotted$ = this.packagePlottedSource.asObservable();
  packageRemoved$ = this.packageRemovedSource.asObservable();

  /**
   * Fires the event that adds a package to the package list component
   * @param packageHistory
   */
  selectPackage(packageHistory: IPackageDownloadHistory): void {
    this.packageSelectedSource.next(packageHistory);
  }

  /**
   * Fires the event that plots the package on the chart
   * @param packageHistory
   */
  plotPackage(packageHistory: IPackageDownloadHistory): void {
    this.packagePlottedSource.next(packageHistory);
  }

  /**
   * Fires the event that removes a package from the chart
   * @param packageId
   */
  removePackage(packageId: string) {
    this.packageRemovedSource.next(packageId);
  }
}