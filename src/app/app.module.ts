import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';
import { CreateFlashcardWizardComponent } from './create-flashcard-wizard/create-flashcard-wizard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashcardSetsListComponent } from './flashcard-sets-list/flashcard-sets-list.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FlashcardStackViewComponent } from './flashcard-stack-view/flashcard-stack-view.component';
import { WriteNoteComponent } from './write-note/write-note.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFlashcardWizardComponent,
    FlashcardSetsListComponent,
    MainpageComponent,
    FlashcardStackViewComponent,
    WriteNoteComponent,
    NotesViewComponent,
    NotesListComponent,
  ],
  imports: [
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
