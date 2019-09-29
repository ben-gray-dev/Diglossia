import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import * as s from 'sentiment';

export interface IWord {
  text: string;
  frequency: number;
  sentiment: number;
}

export interface IFrequency {
  infrequentTerm: string;
  frequency: number;
  definition: string;
  pos: string;
  alternatives: [];
}


@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {
  sAn = new s();
  wordList: {};

  constructor(private httpClient: HttpClient) { 
    this.wordList = {};
  }


  addWord(wordToAdd: string, isDoctor: boolean): boolean {
    let found = false;
    Object.values(this.wordList).map((w: IWord) => {
      if (w.text === wordToAdd) {
        w.frequency++;
        found = true;
      }
    });

    if (found) {
      return true;
    }
    
    this.wordList[wordToAdd] = {text: wordToAdd, frequency: 1, sentiment: this.sAn.analyze(wordToAdd).score, isDoctor: isDoctor};
    return false;
  }


  getWordFrequency(phrase: string[], isDoctor: boolean) {
    const requestList = [];
    phrase.map(word => {
      word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()']/g,"")
      if (!this.addWord(word, isDoctor)) {
        requestList.push(this.httpClient.get(`https://api.datamuse.com/words/?sp=${word}&md=fd`));
      }
    });
    return forkJoin(requestList);
  }



  getSimplerWord(word: string) {
    return this.httpClient.get(`https://api.datamuse.com/words/?ml=${word}&md=fd`);
  }
}
