import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

interface Filtro {
	nombre: string;
	value: string;
	opciones: opcion[];
}

interface opcion {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-prueba-selector',
	templateUrl: './prueba-selector.component.html',
	styleUrls: ['./prueba-selector.component.css']
})
export class PruebaSelectorComponent {

	filtros: Filtro[] = [
		{ nombre: "Genero", value: "genero", opciones: [{ value: "hombre", viewValue: "Hombre" }, { value: "mujer", viewValue: "Mujer" }] },
		{ nombre: "Ciudadano o turista", value: "ciudadano", opciones: [{ value: "ciudadano", viewValue: "Ciudadano" }, { value: "turista", viewValue: "Turista" }] }
	]

	private _mobileQueryListener: () => void;
	mobileQuery: MediaQueryList;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	shouldRun = true;

}
