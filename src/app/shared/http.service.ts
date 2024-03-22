import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map, tap } from "rxjs";

@Injectable()

export class HttpService{
  refreshNeed: any;
    constructor(private http : HttpClient){}

    private _refreshNeed$ = new Subject<void>();

    get _refreshNeed(){
        return this._refreshNeed$;
    }

postData( post : any){
    this.http.post('https://task-1-9a3ab-default-rtdb.europe-west1.firebasedatabase.app/product.json',post).pipe(
        tap(()=>{
            this._refreshNeed.next()
        })
    ).subscribe((param : any)=>{
        console.log(param)
    })
}

getData(){
   return this.http.get('https://task-1-9a3ab-default-rtdb.europe-west1.firebasedatabase.app/product.json').pipe(map((resp : any)=>{
        const myStdArr = [];
        for(let stdIn in resp){
            myStdArr.push({...resp[stdIn],id : stdIn})
        }
        console.log(myStdArr);
        return myStdArr
    }))
}

deleteData(){
    this.http.delete('https://task-1-9a3ab-default-rtdb.europe-west1.firebasedatabase.app/product.json').subscribe({
        next : (param : any)=>{console.log('param delete',param)}
})
}

putData(){
    var payload: any[] = []
    this.http.put('https://task-1-9a3ab-default-rtdb.europe-west1.firebasedatabase.app/product.json',payload).subscribe((param : any)=>{
        console.log(param)
    })
}
}