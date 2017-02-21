import { Component, OnInit, AfterViewChecked, Inject, Injectable, HostListener, ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
// HostListener, EventEmitter, Injectable 

@Component({
  selector: 'app-rsp-shrinkonscroll',
  templateUrl: './rsp-shrinkonscroll.component.html',
  styleUrls: ['./rsp-shrinkonscroll.component.css']
})

@Injectable()
export class RspShrinkonscrollComponent implements OnInit, AfterViewChecked {

  private makeSmaller: boolean;
  private currentPos: number;
  private heightElem: number;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    this.currentPos = number;

    if (number > 100) {
      this.makeSmaller = true;
    } else {
      this.makeSmaller = false;
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document, private elementRef: ElementRef) {
      this.heightElem = this.elementRef.nativeElement.offsetHeight;
    // private document: Document
   //  console.log("constructor");
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
     this.heightElem = this.elementRef.nativeElement.offsetHeight;
  }
  /*
  track($event) {
      console.log('Scroll Event', $event);
  }
  */
}
