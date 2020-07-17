import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ProductQuery } from '../shared/state/product.query';
import { ProductService } from '../shared/state/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  searchForm: FormGroup;

  products$ = this.productQuery.selectAll();

  constructor(
    private fb: FormBuilder,
    private productQuery: ProductQuery,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      keyword: null,
    });

    this.keyword.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.productService.get({ params: { name: value } }).subscribe();
    });

    this.productService.get().subscribe();
  }

  get keyword() {
    return this.searchForm.get('keyword');
  }
}
