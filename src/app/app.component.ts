import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        let _kc = event.keyCode;
        if(_kc == 27){ //Esc 
            this.lact = !this.lact;
        }
        if(!Object.keys(this.smed).length || !this.lact)
            return;
        let da = <HTMLElement>document.querySelector('#container_l'),
            daw = da.offsetWidth || 0,
            dah = da.offsetHeight || 0,
            _vl =  Number(this.smed['ls']['left'].slice(0, -2)),
            _vt =  Number(this.smed['ls']['top'].slice(0, -2)),
            _vw =  Number(this.smed['ls']['width'].slice(0, -2)),
            _vh =  Number(this.smed['ls']['height'].slice(0, -2));
        if(_kc == 37 || _kc == 65){ //ArrowLeft or 'A'
            _vl = _vl - 1;
            if(_vl>=0){
                this.smed['ls']['left'] = _vl+'px';
                this.sls['left'] = _vl+'px';
            }  
        }else if(_kc == 38 || _kc == 87){ //ArrowUp or 'W'
            _vt = _vt - 1;
            if(_vt>=0){
                this.smed['ls']['top'] = _vt+'px';
                this.sls['top'] = _vt+'px';
            }
        }else if(_kc == 39 || _kc == 68){ //ArrowRight or 'D'
            _vl = _vl + 1;
            if((_vl+_vw)<=daw){
                this.smed['ls']['left'] = _vl+'px';
                this.sls['left'] = _vl+'px';
            }
        }else if(_kc == 40 ||_kc == 83){ //ArrowDown or 'S'
            _vt = _vt + 1;
            if((_vt+_vh)<=dah){
                this.smed['ls']['top'] = _vt+'px';
                this.sls['top'] = _vt+'px';
            }
        }else if(_kc == 46){ //Delete
            if(this.smed['id'] in this.med){
                let _idx = this.med[this.smed['id']];
                this.mel.splice(_idx, 1);
                this.sls = {};
                this.smed = {};
                this.med= {};
                this.mel.forEach((r,idx)=>{
                    this.med[r['id']] = idx;
                });
            }
        }
    }
    el:any[]; 
    ec: number = 0;
    mel:any[] = []; 
    smed:{} = {};
    sls:{} = {};
    med:{} = {};
    lact:boolean = true;

    constructor(){
        this.el = [{'n': 'Box', 'k': 'box'}]
    }
     
    ef = (l:{}) => {
        let nl = Object.assign({}, l),
            ls = {'height': '80px', 'width': '80px'};
        nl['id'] = this.ec;
        ls['left'] = [(this.ec*5), 'px'].join('');
        ls['top'] = [(this.ec*5), 'px'].join('');
        nl['ls'] = ls;
        this.mel.push(nl); 
        this.ec += 1;
        this.med= {};
        this.mel.forEach((r,idx)=>{
            this.med[r['id']] = idx;
        });
    }

    mef =(e, l:{})=>{
        this.smed = l;
        let d = e.currentTarget,
            tw = d.offsetWidth,
            th = d.offsetHeight,
            tt = d.offsetTop,
            tl = d.offsetLeft,
            s = {'display': 'block', 'width': tw+'px', 'height': th+'px', 'top': tt+'px', 'left': tl+'px'};
        this.sls = s;
    } 
     
}
