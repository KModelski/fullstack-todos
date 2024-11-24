import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly #http = inject(HttpClient);

  constructor() {
    this.#http.post('/api/todos', { id: 1, title: 'Aaaaaa' }).subscribe();
  }
}
