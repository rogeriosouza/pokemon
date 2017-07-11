import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Injectable()
export class DatabaseProvider {


  private storage: SQLite;
  private isOpen: boolean;

  public constructor(private platform: Platform) {
    if(!this.isOpen) {
      this.platform.ready().then((readySource) => {
        this.storage = new SQLite();
        this.storage.openDatabase({name: "data.db", location: "default"}).then(() => {
          this.storage.executeSql("CREATE TABLE IF NOT EXISTS pokemon (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, url TEXT)", {});
          this.isOpen = true;
        });
      });
    }
  }

  public getPokemon(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.platform.ready().then((readySource) => {
        this.storage.executeSql("SELECT * FROM pokemon", []).then((data) => {
          let pokemon = [];
          if(data.rows.length > 0) {
            for(let i = 0; i < data.rows.length; i++) {
              pokemon.push({
                id: data.rows.item(i).id,
                name: data.rows.item(i).name,
                url: data.rows.item(i).url
              });
            }
          }
          resolve(pokemon);
        }, (error) => {
          reject(error);
        });
      });
    });
  }

  public createPokemon(name: string, url: string) {
    return new Promise((resolve, reject) => {
      this.platform.ready().then((readySource) => {
        this.storage.executeSql("INSERT INTO pokemon (name, url) VALUES (?, ?)", [name, url]).then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
      });
    });
  }

}
