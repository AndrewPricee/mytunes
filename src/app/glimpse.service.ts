import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core'

export interface GlimpseArtist{
    artistName: String;
    trackName: String;
    previewUrl: String;
    trackPrice: String;
    releaseDate: String;
    results: any;
}

@Injectable()
export class GlimpseService{
    constructor(private _http: HttpClient){

    }

    getGlimpseData(_searchTerm) : Observable<GlimpseArtist>{
        return this._http.get<GlimpseArtist>
        ("https://itunes.apple.com/search?term="+ _searchTerm + "&limit=3");
    }
}