import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from '../services/flashcards/flashcards.service';
import { Flashcard, FlashcardSet } from '../models/Flashcards';

@Component({
  selector: 'app-create-flashcard-wizard',
  templateUrl: './create-flashcard-wizard.component.html',
  styleUrls: ['./create-flashcard-wizard.component.scss'],
})
export class CreateFlashcardWizardComponent implements OnInit {
  title = '';
  tags: string[] = [];
  tagName = '';
  cards: Flashcard[] = [];
  question = '';
  answer = '';

  constructor(private cardService: FlashcardsService) {}

  ngOnInit() {}

  onAddTag() {
    this.tags.push(this.tagName);
    this.tagName = '';
  }

  onAddCard() {
    const { answer, question } = this;
    this.cards.push({
      id: new Date().getTime().toString(),
      answer,
      question,
      createdDate: new Date(),
    });
    this.question = '';
    this.answer = '';
  }

  submit() {
    const newSet: FlashcardSet = {
      id: new Date().getTime().toString(),
      flashcard: this.cards,
      createdDate: new Date(),
      title: this.title,
      tags: this.tags,
    };
    this.cardService.addCards(newSet);
    this.title = '';
    this.tags = [];
    this.tagName = '';
    this.cards = [];
  }
}
