import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: string[] = [
    'During civil disturbance adopt such an attitude that people do not attach any importance to you – they neither burden you with complicated affairs, nor try to derive any advantage out of you.',
    'He who is greedy is disgraced; he who discloses his hardship will always be humiliated; he who has no control over his tongue will often have to face discomfort.',
    'Avarice is disgrace; cowardice is a defect; poverty often disables an intelligent man from arguing his case; a poor man is a stranger in his own town; misfortune and helplessness are calamities; patience is a kind of bravery; to sever attachments with the wicked world is the greatest wealth; piety is the best weapon of defense.',
    'Submission to Allah’s Will is the best companion; wisdom is the noblest heritage; theoretical and practical knowledge are the best signs of distinction; deep thinking will present the clearest picture of every problem.',
    'The mind of a wise man is the safest custody of secrets; cheerfulness is the key to friendship; patience and forbearance will conceal many defects.',
    'A conceited and self-admiring person is disliked by others; charity and alms are the best remedy for ailments and calamities; one has to account in the next world for the deeds that he has done in this world.',
    'Man is a wonderful creature; he sees through the layers of fat (eyes), hears through a bone (ears) and speaks through a lump of flesh (tongue).',
    'When this world favors somebody, it lends him the attributes, and surpassing merits of others and when it turns its face away from him it snatches away even his own excellences and fame.',
    'Live amongst people in such a manner that if you die they weep over you and if you are alive they crave for your company'
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
