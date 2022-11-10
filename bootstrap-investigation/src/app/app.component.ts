import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <button 
      *ngFor="let style of styles"
      [ngClass]="['btn', 'btn-' + style]"
      [ngbTooltip]="style"
    >
      {{ style }}
    </button><br>

    <button class="btn btn-rounded btn-success" (click)="onPause()">
      <i [ngClass]="['fa', paused ? 'fa-play' : 'fa-pause']"></i>  
    </button>

    <ngb-carousel
	#carousel
	[interval]="1000"
	[pauseOnHover]="true"
>
	<ng-template ngbSlide *ngFor="let img of images; index as i">
		<div class="carousel-caption">
			<h3>My slide {{i + 1}} title</h3>
		</div>
		<a href="https://www.google.fr/?q=Number+{{i+1}}" target="_blank" rel="nofollow noopener noreferrer">
			<div class="picsum-img-wrapper">
				<img [src]="img" alt="My image {{i + 1}} description" />
			</div>
		</a>
	</ng-template>
</ngb-carousel>


    <hr>
    <ngb-accordion [closeOthers]="true" [activeIds]="'' + info[2].id">
      <ngb-panel 
        *ngFor="let item of info"
        [id]="'' + item.id"
        [title]="item.title">
        <ng-template ngbPanelContent>
          {{ item.text }}
        </ng-template>
      </ngb-panel>
    </ngb-accordion>



  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap investigation';

  styles = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

  info = [
    {id:1, title:"Item 1", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt ducimus esse commodi provident obcaecati? Eligendi nulla esse est quia blanditiis perspiciatis voluptas iusto. Omnis sed eligendi illo reiciendis dolores!"}, 
    {id:2, title:"Item 2", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt ducimus esse commodi provident obcaecati? Eligendi nulla esse est quia blanditiis perspiciatis voluptas iusto. Omnis sed eligendi illo reiciendis dolores!"}, 
    {id:3, title:"Item 3", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt ducimus esse commodi provident obcaecati? Eligendi nulla esse est quia blanditiis perspiciatis voluptas iusto. Omnis sed eligendi illo reiciendis dolores!"}, 
    {id:4, title:"Item 4", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt ducimus esse commodi provident obcaecati? Eligendi nulla esse est quia blanditiis perspiciatis voluptas iusto. Omnis sed eligendi illo reiciendis dolores!"}, 
  ];

  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;

  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;

  onPause() {

    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;

  }
}
