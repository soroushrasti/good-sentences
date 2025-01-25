import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {
  letters: { subject: string, content: string }[] = [
    { subject: 'A letter written by Hazrath to Talha and Zubair and sent to them through Imran-Ibne-Hassen-e-Khuzaee',
      content: 'You may try as much as you like to hide this fact and to draw curtains over it, but both of you know very well that I did not approach the people to get their oath of allegiance, but they came to me with their desire to make me their Amir (Ruler). I did not extend my hands towards them that they may swear the oath of allegiance upon it but they extended their hands towards me. And you two were among those who had flocked round me to swear the oath. You all came to me to take the oath not because you were afraid of any power of mine to oppress or tyrannise you, neither you had expectations of any monetary gain from me. If you two had then taken the oath of allegiance of your own free will without any duress then does not break this oath, come back to it, repent before the Lord for your action of having broken the oath. And if your action of swearing the oath of allegiance was not a sincere act done with pleasure and free-will then your behaviour of pretending obedience and fidelity in the beginning and revolting against me at a later time does not speak well of your character and serves as an argument in my favour and against you.\n' +
        'Upon my life you had no more pressing need than other Mohajireen to hide your real intentions from me and to hypocritically pretend fidelity and allegiance. In fact, there was more justification then for you not to swear the oath of allegiance and not to offer your fidelity than to go back upon your oath and promise now. You two were wealthy people, had your clans to support and back you. Those clans were then as they are now, powerful tribes. You were not forced to come and take the oath. Do you know what made you then behave like a hypocrite and how like a freed-slave? They were your ulterior motives. You are telling people that I am responsible for the murder of Caliph Oosman. To bear witness to the fact that who is responsible for the murder of the Caliph, you two or I, there are people in Madina, who are impartial, they have never sided you or me and have kept themselves aloof from me from the very beginning. Shall we ask their opinion as to who is responsible for this death? Their opinion will settle the question once for all, will lay the responsibility on proper shoulders and will disclose the part each one of us has played of helping the Caliph as much as possible or exciting the people against him and abetting with the murder.\n' +
        'My respected friends! give up your present attitude though I know that by declaring the falsity of your position today you stand the chance of being ridiculed and disgraced, yet by persisting in your wrong and sinful attitude you will tomorrow certainly earn the disgrace and ridicule in this world as well as the punishment in the next.'
    },
    { subject: 'A letter to Moavia',
      content: 'You must know and understand that God has made this world a place where one is to stay only to provide for a happy life for his hereafter by his good deeds. People are tested here so that they may be rewarded there according to their merits. Our existence does not end here and we are not created only for this world, neither we are ordered to concentrate our energies only to acquire pleasures, power and pomp here. We are brought here simply to test our knowledge, intentions and activities. You are being tested through me and I am being tested through you. Each one of us is to be an evidence or a demonstration of the intentions and deeds of other-whether they have been godly or sinful. You began by mis-interpreting the Holy Quran and on the basis of these mis-interpretations and with their help you started grasping power and wealth and began oppressing and tyrannising the people. Your next ungodly action was to call me responsible for an action of which my tongue and my hands were both innocent (murder of Caliph Oosman). You and Syrians tried your best to bring this deed to my door. They learned from your side, persuaded the ignorant and influential people, impelled and drove the commoners to rise against me.\n'
    + 'Fear God and do not let Satan drive you wherever it wants; think of death and the life after death because that is only resting-place for you and me and for every human being. Be afraid that Wrath of the Almighty Lord may throw you into such a calamity that it will not only be an end of you but an end of your dynasty. I swear, and my oath is such that I have no intention of breaking it that if fate so arranges as to bring us face to face against each other then I shall not leave the battle-field unless the Lord decides combat one way or the other and He is the best judge.'},

    { subject: 'When Hazrath appointed Shoreh-lbne-Haane as Commanding Officer of the Vanguard of his Army, which was marching towards Syria, he gave Shoreh the following instructions',
      content: 'Day and night keep the fear of God in your mind. Be afraid of this alluring and vicious world, never trust it. If you do not check yourself from the desire of acquiring ungoldy and inordinate cravings, then your mind will surely drive you towards losses. Therefore, have a complete watch and command over yourself and at the time of anger and annoyance see that you do not lose control over your temper.' },
    {subject: 'While leaving Madina for Basra, Hazrath wrote the following letter to Kufiyites. It is a wonderful epistle. It invites people to check the godliness of his intentions and actions.',
    content:'After praise of the Lord and homage to the Holy Prophet (A.S.) let it be known to you that I am leaving this city either as a tyrant and an oppressor or I am being tyrannised and oppressed; either I am revolting against the people or some of them have intrigued to revolt against me.\n'+
    'Whatever the case may be I invite in the name of God those to whom this letter reaches to come and see for themselves whether I am in the right or on the wrong. If they find me on the path of truth and justice, they may help me and if they find that I am on the wrong then they can reason me out of it.'},
    {subject: 'A letter sent by Hazrath to the people of various provinces, giving them the reasons of the battle of Siffeen.',
      content:'The thing began in this way: We and Syrians were facing each other while we had common faith in one God, in the same Prophet and on the same principles and canons of the religion. So far as the faith in God and the Holy Prophet (A.S.) was concerned we never wanted them (the Syrian) to believe anything over and above or other than what they were believing and they did not want us to change our faith. Both of us were united on these principles. The point of contention between us was the question of murder of Oosman. It had created the split. They wanted to lay the murder at my door and I am actually innocent of it.\n'+
    'I advised them that this problem cannot be solved by excitement, let the excitement subside, let us cool down, let us do away with sedition and revolt, let the country settle down into peaceful atmosphere and when once a stable Government is formed and right authority is accepted then let this question be dealt with on principles of equity and justice, because only then the authority will have power enough to find the criminals and to bring them to justice. They refused to accept my advice and said that they wanted to decide the issue on the point of sword.\n'+
        'When they thus rejected my proposal of peace and kept on sabre-rattling then naturally the battle began, which was furious and bloody. When they saw defeat facing them across the battle-field, when many of them were killed and many more wounded then they fell upon their knees and proposed the same thing which I had proposed before the blood-shed had began. I accepted their proposal so that their desire may be fulfilled, my intentions of accepting the principle of truth and justice and acting according to these principles may become clear, and they shall have no cause to complain against me.\n'+
    'Now whoever adheres firmly to the promises made will be the one, whose salvation will be saved by the Lord, and one who will try to go back upon the promises made will go deeper and deeper into heresy, error and loss. His eyes will be closed to realities and truth in this world and he will be punished in the next world.\n'},
    {subject: 'A letter to Aswad-Ibne-Kathiba, the Governor of Hulwan:',
      content:'After praise of God and homage to the Holy Prophet (A.S.) let it be known to you that if a ruler develops different inclinations and favours about different people over whom he rules then his treatment with them will not be on the basis of equity and impartiality. And this will not allow him to be just and fair to all and every. But so far as equity and justice are concerned your treatment of all should be fair and unprejudiced. Remember that nothing can compensate tyranny and oppression. Keep yourself justly away from what you consider bad and evil in others. Try your best to fulfil the obligations laid down by God upon you. Keep on hoping for his Reward and Favours and fearing his Displeasure and Wrath.\n'
    +'Because this world is a place for trials and tests and whoever wastes his time here will repent this waste on the Day of Judgment. Remember that nothing will ever make you independent of the Favours, Mercy and Blessing of God, and He has made it incumbent upon you that you have complete control over your ownself, that you, to the best of your ability, protect and guard the people over whom you rule. In this way you will be benefitted more than you benefit others.'},
    {subject: 'The following is the circular letter Hazrath had sent to those Governors and State Officers through whose territory the Armies of Hazrath were to pass.',
      content:'From the creature of God, Ali-Ibne-Abu Talib to the Governors and the Collectors of those provinces through which his Armies are to pass:\n'
    +'After praise of God and homage to the Holy Prophet (may the peace of God be upon him and his descendants) be it known to you that I am sending some detachments of Army which will, God willing, shortly pass through your cities and provinces. I have issued them the orders which God wants them to obey; The orders are: that they should not molest anybody and not harm any person or anything. I want to inform you and your subject that if the soldiers misbehave themselves or if they take anything, their action is against my orders. Except for the condition that they accidentally fall short of the ration and can find no way to appease their appetite if they take anything from anybody they are to be punished. You may punish them. But take care and do not allow the foolish and insolent people of your place to quarrel or insult them and interfere or obstruct in things that I have permitted them.\n'+
    'I shall also be following the army. You may report to me of any excess or violence committed within your jurisdiction or of any awkward and difficult position in which you find yourself or any harshness or atrocity which was perpetrated in your province and which you cannot redeem without the help of God and your Imam; if you report all such affairs to me, God willing I shall attend to them and settle them to the satisfaction of all.'},
  ];
  currentLetterIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  previousLetter(): void {
    if (this.currentLetterIndex > 0) {
      this.currentLetterIndex--;
    }
  }

  nextLetter(): void {
    if (this.currentLetterIndex < this.letters.length - 1) {
      this.currentLetterIndex++;
    }
  }

  selectLetterBySubject(subject: string): void {
    const index = this.letters.findIndex(letter => letter.subject === subject);
    if (index !== -1) {
      this.currentLetterIndex = index;
    }
  }

  formatContent(content: string): string {
    return content.replace(/\n/g, '<br><br>');
  }
}
