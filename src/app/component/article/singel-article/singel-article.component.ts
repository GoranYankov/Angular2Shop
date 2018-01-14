import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleServices } from '../../../core/service/article.service';
import { SeoServices } from '../../../core/service/seo.service';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-singel-article',
  templateUrl: './singel-article.component.html',
  styleUrls: ['./singel-article.component.css']
})
export class SingelArticleComponent implements OnInit {
  article = {
    img:'',
    title:'',
    url:'',
    paragraph:[0]
  }
  constructor(
        private router: ActivatedRoute, 
        private http:ArticleServices,
        private seo: SeoServices,
        private title: Title,
      
      ) {      
        let url = this.router.snapshot.params['url'];
        this.http.singlArticle({url:url}).subscribe(article=>{
      if(article['success']) {
      this.article = article['article'];
      this.seo.changeTitle(this.article.title);
      this.seo.addMetaKeys(this.article['keywordsString']);
      this.seo.addMetaDescription(this.article['description']);
      this.seo.addFbMeta(article['article']["title"], article['article']['description'], article['article']['img'], window.location.href);
      }

    })
       }

  ngOnInit() {
    window.scrollTo(0, 0) 
  }

}
