import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';
//使用rxjs
import {Observable} from 'rxjs';
import 'rxjs/Rx';


@Component({
    selector: 'app-rxjs-demo',
    templateUrl: './rxjs-demo.component.html',
    styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

    // 实例化Headers
    private headers = new Headers({ 'Content-Type': 'application/json' });
    protected get_data: any[];
    protected jsonp_data: any[];
    // 构造函数内申明
    constructor(private http: Http, private jsonp: Jsonp) {
        this.get_data = [];
        this.jsonp_data = [];
    }

    ngOnInit() {
    }

    getData() {
        let _this = this;
        // 因为跨域问题，所以用第三方接口
        // http.get 方法中返回一个Observable对象，我们之后调用RxJS的map操作符对返回的数据做处理。
        this.http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
            .map(res => res.json()).subscribe(function (data) {
                console.log(data);
                _this.get_data = data.result;
            }, function (err) {
                console.log(err);
            });
    }

    jsonpData() {
        let _this = this;
        this.jsonp
            .get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK')
            .map(res => res.json()).subscribe(function (data) {
                console.log(data);
                _this.jsonp_data = data.result;
            }, function (err) {
                console.log(err);
            })
    }

    postData() {
        // 1. 引入Headers 、Http模块
        // 2. 实例化Headers
        // 3. post提交数据
        // 因为跨域问题无法做演示
        this.http
            .post('http://localhost:8008/api/test', JSON.stringify({ username: 'admin' }), { headers: this.headers })
            .subscribe(function (res) {
                console.log(res.json());
            }, function (err) {
                console.log(err);
            });
    }

}
